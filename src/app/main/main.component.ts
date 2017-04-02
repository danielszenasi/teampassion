import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MemberModalComponent} from "../member-modal/member-modal.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('memberModal') modal: MemberModalComponent;
  @ViewChild('coachModal') coachModal: MemberModalComponent;

  openTeamModal(member) {
    this.modal.open(member);
  }

  openCoachModal(coach) {
    this.coachModal.open(coach);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
