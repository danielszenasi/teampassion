import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Member} from "../models/member.model";

@Injectable()
export class TeamService {

  private team$: FirebaseListObservable<any[]>;
  private coaches$: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.team$ = af.database.list('/team', {
      query: {
        orderByChild: 'name',
      }
    });
    this.coaches$ = af.database.list('/coaches');
  }

  getTeam() {
    return this.team$;
  }

  getCoaches() {
    return this.coaches$;
  }

  createMember(member: Member): firebase.database.ThenableReference {
    return this.team$.push(member);
  }

}
