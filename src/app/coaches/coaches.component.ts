import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2';
import {TeamService} from '../services/team.service';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.css'],
  providers: [TeamService]
})
export class CoachesComponent implements OnInit {

  @Output('coach-clicked') coachesClicked = new EventEmitter();

  private coaches: FirebaseListObservable<any[]>;

  constructor(private teamService: TeamService) {
  }

  ngOnInit() {
    this.coaches = this.teamService.getCoaches();
  }

  memberClicked(coach) {
    this.coachesClicked.emit(coach);
  }

}
