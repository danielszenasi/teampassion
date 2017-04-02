import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from 'ng2-bs3-modal/ng2-bs3-modal';
import {Coach} from '../models/coach.model';

@Component({
  selector: 'app-coach-modal',
  templateUrl: './coach-modal.component.html',
  styleUrls: ['./coach-modal.component.css']
})
export class CoachModalComponent {

  @ViewChild('modal') modal: ModalComponent;
  private coach: Coach;

  constructor() {
  }

  open(coach) {
    this.coach = coach;
    this.modal.open();
  }

}
