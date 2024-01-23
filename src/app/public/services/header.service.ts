import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  public isOpenSearch = signal<boolean>(false);
  public isOpenBag = signal<boolean>(false);
  public isOpenUser = signal<boolean>(false);

  toggleSearch() {
    this.isOpenSearch.set(!this.isOpenSearch());
    if (this.isOpenBag) {
      this.isOpenBag.set(false);
    }
    if (this.isOpenUser) {
      this.isOpenUser.set(false);
    }
  }

  closeSearch() {
    this.isOpenSearch.set(false);
  }

  isSearchOpen() {
    return this.isOpenSearch;
  }
  //====================================================
  toggleBag() {
    this.isOpenBag.set(!this.isOpenBag());
    if (this.isOpenSearch) {
      this.isOpenSearch.set(false);
    }
    if (this.isOpenUser) {
      this.isOpenUser.set(false);
    }
  }
  closeBag() {
    this.isOpenBag.set(false);
  }
  isBagOpen() {
    return this.isOpenBag;
  }
  //====================================================
  toggleUser() {
    this.isOpenUser.set(!this.isOpenUser());
    if (this.isOpenSearch) {
      this.isOpenSearch.set(false);
    }
    if (this.isOpenBag) {
      this.isOpenBag.set(false);
    }
  }
  closeUser() {
    this.isOpenUser.set(false);
  }
  isUserOpen() {
    return this.isOpenUser;
  }
}
