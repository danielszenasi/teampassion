import {Component, OnInit, HostListener, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {NavbarService} from "../services/navbar.service";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  private navIsFixed = true;
  public showNav = true;
  public hide = true;

  constructor(@Inject(DOCUMENT) private document: Document,
              protected navbarService: NavbarService) {
  }

  ngOnInit() {
    this.navbarService.toggleNav.subscribe((isClose: boolean) => {
      this.showNav = !isClose;
    });
    this.navbarService.hideNav.subscribe((hide: boolean) => {
      this.hide = !hide;
    });
  }

  @HostListener('window:scroll', [])
  private onScroll() {
    const number = this.document.body.scrollTop;
    if (number >= 200) {
      this.navIsFixed = false;
    }
    else {
      this.navIsFixed = true;
    }

  };

  setNavbarFixed(isFixes: boolean) {
    this.navIsFixed = isFixes;
  }

}
