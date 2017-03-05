import {Component, OnInit, Inject} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {News} from "../models/news.model";
import {NewsService} from "../services/news.service";
import {FirebaseApp} from "angularfire2";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css'],
  providers: [NewsService]
})
export class NewsDetailComponent implements OnInit {

  private news: News;
  private firebaseApp: any;
  private imgSrcList: Array<string> = [];
  private mainImgSrc: string;

  constructor(private route: ActivatedRoute,
              private newsService: NewsService,
              @Inject(FirebaseApp) firebaseApp: firebase.app.App) {
    this.firebaseApp = firebaseApp;
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.newsService.getNewsById(params['id']).map((news: News) => {
        if (news.createdDate) {
          news.createdDate = new Date(news.createdDate);
        }
        return news;
      }).subscribe((news: News) => {
        const storageRef = this.firebaseApp.storage().ref().child(`news/${news.key}/${news.mainImage}`);
        storageRef.getDownloadURL().then(url => this.mainImgSrc = url);
        var promises: Array<string> = [];
        if (news.images) {
          news.images.forEach((image: string) => {
            const storageRef = this.firebaseApp.storage().ref().child(`news/${news.key}/${image}`);
            promises.push(storageRef.getDownloadURL());
          });
          Promise.all(promises).then(values => {
            this.imgSrcList = values;
            this.news = news
          });
        } else {
          this.news = news
        }
      })
    });
  }

  hasImage(i: number) {
    if (this.imgSrcList) {
      return this.imgSrcList.length > i;
    }
    return false;
  }

}
