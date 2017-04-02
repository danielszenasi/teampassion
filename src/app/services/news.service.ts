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

  getLast(): Observable<News[]> {
    return this.getWithQuery({
      orderByChild: 'createdDate',
      limitToLast: 3
    });
  }

  getStartAt(startAt: string): Observable<News[]> {
    return this.getWithQuery({
      orderByChild: 'createdDate',
      limitToLast: 3,
      startAt: startAt
    });
  }

  getEndAt(endAt: string): Observable<News[]> {
    return this.getWithQuery({
      orderByChild: 'createdDate',
      limitToLast: 3,
      endAt: endAt
    });
  }

  getWithQuery(query: any): Observable<News[]> {
    return this.af.database.list('/news', {
      query: query
    }).map(data => {
      if (data.length === 3) {
        const temp = data[0];
        data[0] = data[2];
        data[2] = temp;
        return data;
      }
      if (data.length === 2) {
        const temp = data[0];
        data[0] = data[1];
        data[1] = temp;
        return data;
      }
      return data;

    }).map((news: News[]) => {
      news.forEach((el: News) => {
        el.createdDate = new Date(el.createdDate);
      });
      return news;
    });
  }

  // getSize():Observable<number>{
  //   let items = this.af.database.list('/news', { preserveSnapshot: true });
  //   return items.map(snapshots => {
  //         return snapshots.length;
  //     });
  // }

  getNewsById(id: string) {
    return this.af.database.object('/news/' + id);
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
