import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {News} from "../models/news.model";
import {Observable} from "rxjs";

@Injectable()
export class NewsService {

  private news$: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.news$ = af.database.list('/news');
  }

  getNews() {
    return this.news$;
  }

  getThree(end:number) {
    return this.af.database.list('/news', {
      query: {
        orderByPriority: true,
        limitToLast: 3,
        endAt: end
      }
    }).map(data=> {
     if(data.length === 3){
       let temp = data[0];
       data[0] = data[2];
       data[2] = temp;
       return data;
     }
      if(data.length === 2){
        let temp = data[0];
        data[0] = data[1];
        data[1] = temp;
        return data;
      }
      return data;

    });
  }

  getSize():Observable<number>{
    let items = this.af.database.list('/news', { preserveSnapshot: true });
    return items.map(snapshots => {
          return snapshots.length;
      });
  }

  getNewsById(id: string) {
    return this.af.database.object('/news/'+id);
  }

  createNews(news: News): firebase.database.ThenableReference {
    return this.news$.push(news);
  }

  removeNews(task: News): firebase.Promise<any> {
    return this.news$.remove(task.title);
  }

  updateNews(news: News, changes: any): firebase.Promise<any> {
    return this.news$.update(news.title, changes);
  }

}
