import { ChangeDetectionStrategy, Component, inject, OnDestroy } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription, filter } from 'rxjs';
import { HeaderService } from './public/services/header.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { BagComponent } from './public/components/bag/bag.component';
import { UserComponent } from './public/components/user/user.component';
import { SearchbarComponent } from './public/components/searchbar/searchbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, FontAwesomeModule, HeaderComponent, BagComponent, UserComponent, SearchbarComponent, FooterComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnDestroy {
  private routerSubscription: Subscription;
  public isDashboardVisible = true;

  // private translateService = inject(TranslateService);
  private headerService = inject(HeaderService);
  private router = inject(Router);

  constructor() {
    // const userLang = navigator.language || 'en';
    // const leguageCode = userLang.split('-')[0];
    // this.translateService.setDefaultLang(leguageCode);
    // this.translateService.use(leguageCode);
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.isDashboardVisible = this.router.url.startsWith("/dashboard");
    });
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.headerService.closeBag();
        this.headerService.closeUser();
        this.headerService.closeSearch();
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}
