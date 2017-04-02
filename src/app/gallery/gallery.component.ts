import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NavbarService} from "../services/navbar.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {


  constructor(protected navbarService: NavbarService) {
  }

  ngOnInit() {
  }

  yourNotificationFunction(data) {
    this.navbarService.toggleNavBar(data);
  }

}
