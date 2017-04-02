import {Component, OnInit, Input, Inject, Output, EventEmitter} from '@angular/core';
import {TeamService} from "../services/team.service";
import { FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  providers: [TeamService],
})
export class TeamComponent implements OnInit {

  @Output('team-clicked') teamClicked = new EventEmitter();

  private team: FirebaseListObservable<any[]>;

  constructor(private teamService: TeamService) {
  }



  ngOnInit() {
    this.team = this.teamService.getTeam();
  }

  memberClicked(member){
    this.teamClicked.emit(member);
  }

}
