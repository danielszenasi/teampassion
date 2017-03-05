import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from "angularfire2";
import {NewsService} from "../services/news.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-newscontainer',
  templateUrl: './newscontainer.component.html',
  styleUrls: ['./newscontainer.component.css'],
  providers: [NewsService]
})
export class NewscontainerComponent implements OnInit {

  private newsList: Observable<any[]>;
  private numOfElements: number = 0;
  private end: number;
  private hasNext: boolean = false;
  private hasPrev: boolean = false;

  constructor(private newsService: NewsService) {
  }


  ngOnInit() {

    this.newsService.getSize().subscribe(size => {
      this.numOfElements = size;
      this.end = this.numOfElements;
      this.hasNext = this.end >= 3;
      this.hasPrev = this.numOfElements > this.end;
    });
    this.newsList = this.newsService.getThree(this.end);

  }

  next() {
    if (this.end >= 3) {
      this.end = this.end - 3;
      this.hasNext = this.end >= 3;
      this.hasPrev = this.numOfElements > this.end;
      this.newsList = this.newsService.getThree(this.end);
    }
  }

  prev() {
    if (this.numOfElements > this.end) {
      this.end = this.end + 3;
      this.hasNext = this.end >= 3;
      this.hasPrev = this.numOfElements > this.end;
      this.newsList = this.newsService.getThree(this.end);
    }
  }


}
