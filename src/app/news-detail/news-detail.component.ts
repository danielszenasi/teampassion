import {Component, OnInit, Inject, OnDestroy} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {News} from "../models/news.model";
import {NewsService} from "../services/news.service";
import {FirebaseApp} from "angularfire2";
import {NavbarService} from "../services/navbar.service";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css'],
  providers: [NewsService]
})
export class NewsDetailComponent implements OnInit, OnDestroy {

  private news: News;
  private firebaseApp: any;
  private imgSrcList: Array<string> = [];
  private mainImgSrc: string;

  constructor(private route: ActivatedRoute,
              private newsService: NewsService,
              protected navbarService: NavbarService,
              @Inject(FirebaseApp) firebaseApp: firebase.app.App) {
    this.firebaseApp = firebaseApp;
  }

  ngOnInit() {
    this.navbarService.hideNavBar(true);
    this.route.params.subscribe((params: Params) => {
      this.newsService.getNewsById(params['id']).map((news: News) => {
        if (news.createdDate) {
          news.createdDate = new Date(news.createdDate);
        }
        return news;
      }).subscribe((news: News) => {
        const storageRef = this.firebaseApp.storage().ref().child(`news/${news.key}/${news.mainImage}`);
        storageRef.getDownloadURL().then(url => this.mainImgSrc = url);
        const promises: Array<string> = [];
        if (news.images) {
          news.images.forEach((image: string) => {
            const imageStorageRef = this.firebaseApp.storage().ref().child(`news/${news.key}/${image}`);
            promises.push(imageStorageRef.getDownloadURL());
          });
          Promise.all(promises).then(values => {
            this.imgSrcList = values;
            this.news = news;
          });
        } else {
          this.news = news;
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.navbarService.hideNavBar(false);
  }

  hasImage(i: number) {
    if (this.imgSrcList) {
      return this.imgSrcList.length > i;
    }
    return false;
  }

}
