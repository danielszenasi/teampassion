import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {AngularFireModule, AuthMethods} from 'angularfire2';
import {Ng2Bs3ModalModule} from 'ng2-bs3-modal/ng2-bs3-modal';
import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {HeaderComponent} from './header/header.component';
import {NewscontainerComponent} from './newscontainer/newscontainer.component';
import {NewsComponent} from './news/news.component';
import {AboutComponent} from './about/about.component';
import {TeamComponent} from './team/team.component';
import {MemberComponent} from './member/member.component';
import {CoachesComponent} from './coaches/coaches.component';
import {ResultsComponent} from './results/results.component';
import {GalleryComponent} from './gallery/gallery.component';
import {VideosComponent} from './videos/videos.component';
import {FooterComponent} from './footer/footer.component';
import {MemberModalComponent} from './member-modal/member-modal.component';
import {MainComponent} from './main/main.component';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './login/login.component';
import {UploadNewsComponent} from './upload-news/upload-news.component';
import {NewsDetailComponent} from './news-detail/news-detail.component';
import {UploadMemberComponent} from './upload-member/upload-member.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Angular2ImageGalleryModule} from "angular2-image-gallery";
import { CoachModalComponent } from './coach-modal/coach-modal.component';
import {NavbarService} from "./services/navbar.service";

export const firebaseConfig = {
  apiKey: 'AIzaSyDDpgBnpgImPACTvvG4OYDXxNJlqVSQgQ8',
  authDomain: 'teampassion-7764a.firebaseapp.com',
  databaseURL: 'https://teampassion-7764a.firebaseio.com',
  storageBucket: 'teampassion-7764a.appspot.com',
  messagingSenderId: '700592075437'
};

const appRoutes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'news/:id', component: NewsDetailComponent},
  {path: '', component: MainComponent}

];


// { path: '**', component: PageNotFoundComponent }

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    NewscontainerComponent,
    NewsComponent,
    AboutComponent,
    TeamComponent,
    MemberComponent,
    CoachesComponent,
    ResultsComponent,
    GalleryComponent,
    VideosComponent,
    FooterComponent,
    MemberModalComponent,
    MainComponent,
    AdminComponent,
    LoginComponent,
    UploadNewsComponent,
    NewsDetailComponent,
    UploadMemberComponent,
    CoachModalComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    Angular2ImageGalleryModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    Ng2Bs3ModalModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
