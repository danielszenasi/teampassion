import {Component, OnInit, ViewChild} from '@angular/core';
import {MemberModalComponent} from "../member-modal/member-modal.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('memberModal') modal: MemberModalComponent;

  openTeamModal(member){
    console.log(this.modal);
    this.modal.open(member);
  }
  constructor() { }

  ngOnInit() {
  }


}
