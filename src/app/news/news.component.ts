import {Component, OnInit, Input, Inject} from '@angular/core';
import {News} from "../models/news.model";
import {FirebaseApp} from "angularfire2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input() news: any;
  private imgSrc: string;
  private firebaseApp: any;

  constructor(@Inject(FirebaseApp) firebaseApp: firebase.app.App,
              private router: Router) {
    this.firebaseApp = firebaseApp;
  }

  ngOnInit() {
    const storageRef = this.firebaseApp.storage().ref().child(`news/${this.news.key}/${this.news.previewImage}`);
    storageRef.getDownloadURL().then(url => this.imgSrc = url);
  }

  navigate() {
    this.router.navigate(['/news', this.news.$key]);
  }

}
