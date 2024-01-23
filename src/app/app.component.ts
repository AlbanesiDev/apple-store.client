import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { Subscription, filter } from 'rxjs';
import { HeaderService } from './public/services/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnDestroy {
  private routerSubscription: Subscription;
  public isDashboardVisible = true;

  constructor(
    private translateService: TranslateService,
    private activatedRoute: ActivatedRoute,
    private headerService: HeaderService,
    private titleService: Title,
    private router: Router
  ) {
    const userLang = navigator.language || 'en';
    const leguageCode = userLang.split('-')[0];
    this.translateService.setDefaultLang(leguageCode);
    this.translateService.use(leguageCode);

    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.headerService.closeBag();
        this.headerService.closeUser();
        this.headerService.closeSearch();
      }
    });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const pageTitle = this.getPageTitle(this.activatedRoute);
        this.titleService.setTitle(pageTitle);
        this.isDashboardVisible = this.router.url.startsWith('/dashboard');
      });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  private getPageTitle(route: ActivatedRoute): string {
    const routeData = route.snapshot.data;
    if (route.firstChild) {
      return this.getPageTitle(route.firstChild);
    }
    if (routeData && routeData['title']) {
      return routeData['title'];
    }
    return 'Apple Store';
  }
}
