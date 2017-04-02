import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class NavbarService {

  @Output() toggleNav = new EventEmitter();

  @Output() hideNav = new EventEmitter();

  toggleNavBar(isClose: boolean) {
    this.toggleNav.emit(isClose);
  }

  hideNavBar(hide: boolean) {
    this.hideNav.emit(hide);
  }
}
