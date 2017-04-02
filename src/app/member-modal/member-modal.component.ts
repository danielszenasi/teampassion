import {Component, OnInit, ViewChild, SimpleChanges, OnChanges} from '@angular/core';
import {ModalComponent} from 'ng2-bs3-modal/ng2-bs3-modal';
import {Member} from "../models/member.model";

@Component({
  selector: 'app-member-modal',
  templateUrl: './member-modal.component.html',
  styleUrls: ['./member-modal.component.css']
})
export class MemberModalComponent implements OnChanges {

  @ViewChild('modal') modal: ModalComponent;
  private member: Member;

  constructor() {
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['modal'].currentValue) {
      this.member.birthDay = new Date(this.member.birthDay)
    }
  }

  open(member) {
    this.member = member;
    this.modal.open();
  }

}
