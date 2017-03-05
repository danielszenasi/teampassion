import {Component, OnInit, Input, Inject, Output, EventEmitter} from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';
import {Member} from "../models/member.model";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  @Input() member:Member;
  @Output('member-clicked') memberClicked = new EventEmitter();

  private imgSrc:string;
  private firebaseApp:any;

  constructor(@Inject(FirebaseApp) firebaseApp: firebase.app.App) {
    this.firebaseApp = firebaseApp;
  }

  ngOnInit() {
    const storageRef = this.firebaseApp.storage().ref().child(`team/${this.member.previewImage}`);
    storageRef.getDownloadURL().then(url => this.imgSrc = url);
  }

  openModal(){
    this.memberClicked.emit(this.member);
  }

}

