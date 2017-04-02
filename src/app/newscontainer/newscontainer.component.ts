import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from "angularfire2";
import {NewsService} from "../services/news.service";
import {Observable} from "rxjs";
import {News} from "../models/news.model";

@Component({
  selector: 'app-newscontainer',
  templateUrl: './newscontainer.component.html',
  styleUrls: ['./newscontainer.component.css'],
  providers: [NewsService]
})
export class NewscontainerComponent implements OnInit {

  private newsList: Observable<News[]>;
  protected end: string;
  protected start: string;


  constructor(private newsService: NewsService) {
  }


  ngOnInit() {
    this.newsList = this.newsService.getLast();
    this.newsList.subscribe((newsList: News[]) => {
      this.start = newsList[0].createdDate.toJSON().slice(0, 10);
      this.end = newsList[newsList.length - 1].createdDate.toJSON().slice(0, 10);
    });
  }

  next() {
    this.newsList = this.newsService.getEndAt(this.end);
    this.newsList.subscribe((newsList: News[]) => {
      this.start = newsList[0].createdDate.toJSON().slice(0, 10);
      this.end = newsList[newsList.length - 1].createdDate.toJSON().slice(0, 10);
    });
  }

  prev() {
    this.newsList = this.newsService.getStartAt(this.start);
    this.newsList.subscribe((newsList: News[]) => {
      this.start = newsList[0].createdDate.toJSON().slice(0, 10);
      this.end = newsList[newsList.length - 1].createdDate.toJSON().slice(0, 10);
    });
  }


}
