import {Component, OnInit, HostListener, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  private navIsFixed: boolean = true;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  private onScroll() {
    let number = this.document.body.scrollTop;
    if (number >= 200) {
      this.navIsFixed = false;
    }
    else {
      this.navIsFixed = true;
    }

  };

}
