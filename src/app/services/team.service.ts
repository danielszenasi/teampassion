import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Member} from "../models/member.model";

@Injectable()
export class TeamService {

  private team$: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.team$ = af.database.list('/team');
  }

  getTeam(){
    return this.team$;
  }

  createMember(member: Member): firebase.database.ThenableReference {
    return this.team$.push(member);
  }

}
