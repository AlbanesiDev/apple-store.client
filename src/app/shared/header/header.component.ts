import { TranslateService } from '@ngx-translate/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';

import { HeaderService } from '../../public/services/header.service';
import { BagService } from '../../public/services/bag.service';
import { Header } from '../../public/models/lang.interface';

import {
  faMagnifyingGlass,
  faBagShopping,
  faCircleUser,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { IconSet } from '../../public/models/icons.type';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public itemsCount: number = 0;
  public links: Header[] = [];

  public icons: IconSet = {
    faApple,
    faMagnifyingGlass,
    faBagShopping,
    faCircleUser,
    faBars,
  };

  constructor(
    private elementRef: ElementRef,
    public headerService: HeaderService,
    private bagService: BagService,
    private translateService: TranslateService,
    private cdr: ChangeDetectorRef
  ) {
    this.translateService.get('header').subscribe((res: Header[]) => {
      this.links = res;
      this.cdr.markForCheck();
    });
    this.bagService.bagItemsCount$.subscribe((count) => {
      this.itemsCount = count;
    });
  }

  public getIcon(iconName: string): IconProp {
    return this.icons[iconName];
  }

  public closeAll() {
    this.headerService.closeSearch();
    this.headerService.closeBag();
    this.headerService.closeUser();
  }

  public closeNavbar() {
    const navbarNav =
      this.elementRef.nativeElement.querySelector('.navbar-collapse');
    if (navbarNav) {
      navbarNav.classList.remove('show');
    }
  }
}
