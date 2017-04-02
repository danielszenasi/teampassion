import {Component, OnInit, Inject, ViewChild, ElementRef} from '@angular/core';
import {FormGroup, FormBuilder, FormArray, Validators} from '@angular/forms';
import {TeamService} from '../services/team.service';
import {FirebaseApp, AngularFire} from 'angularfire2';
import {Member} from '../models/member.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-upload-member',
  templateUrl: './upload-member.component.html',
  styleUrls: ['./upload-member.component.css'],
  providers: [TeamService]
})
export class UploadMemberComponent implements OnInit {

  public memberForm: FormGroup;
  private previewImg: File;
  private firebaseApp: any;
  private isAuth = false;

  @ViewChild('previewImg') previewImgEl: ElementRef;


  constructor(private _fb: FormBuilder,
              private teamService: TeamService,
              @Inject(FirebaseApp) firebaseApp: firebase.app.App,
              public af: AngularFire) {
    this.firebaseApp = firebaseApp;
  }

  ngOnInit() {
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.isAuth = true;
      }

    });
    this.memberForm = this._fb.group({
      name: ['', [Validators.required]],
      role: ['', []],
      birthDay: ['', [Validators.required]],
      birthPlace: ['', [Validators.required]],
      joinPassion: ['', [Validators.required]],
      past: ['', [Validators.required]],
      startSkate: ['', [Validators.required]],
      questions: this._fb.array([
        this.initQuestion(),
      ])
    });
  }

  initQuestion() {
    return this._fb.group({
      question: ['', Validators.required],
      answer: ['', Validators.required]
    });
  }

  addQuestion() {
    const control = <FormArray>this.memberForm.controls['questions'];
    control.push(this.initQuestion());
  }

  removeQuestion(i: number) {
    const control = <FormArray>this.memberForm.controls['questions'];
    control.removeAt(i);
  }

  save(form: FormGroup) {
    if (this.previewImg) {
      this.upload(form);
    } else {
      alert('Előnézeti és borító kép megadása kötelező');
    }
  }

  upload(form) {
    const model = form.value;
    const member = new Member(model.name,
      model.birthDay,
      model.birthPlace,
      this.previewImg.name,
      model.joinPassion,
      model.startSkate,
      model.past,
      model.questions,
      model.role);
    const storageRef = this.firebaseApp.storage().ref();
    const previewImg = storageRef.child(`team/${this.previewImg.name}`);
    previewImg.put(this.previewImg).then(values => {
      const cleanObject: Member = <Member> _.omitBy(member, _.isNil);
      const date = new Date(member.birthDay);
      this.teamService.createMember(cleanObject);
      this.reset();
    });
  }

  onPreviewImg(event) {
    this.previewImg = event.srcElement.files[0];
  }

  reset() {
    this.memberForm.reset();
    this.previewImg = null;
    this.previewImgEl.nativeElement.value = '';
  }

}
