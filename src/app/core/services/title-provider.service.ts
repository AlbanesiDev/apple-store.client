import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleProviderService {
  private titleSubject: BehaviorSubject<string> = new BehaviorSubject('');
  public isDashboardVisible = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private titleService: Title,
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter(route => route.outlet === 'primary')
    ).subscribe(route => {
      let title = route.snapshot.data['title'];
      if (title) {
        this.titleSubject.next(title);
      }
    });
  }

  getTitle() {
    return this.titleSubject.asObservable();
  }

  initialize() {
    this.router.events
    .pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe(() => {
      const pageTitle = this.getPageTitle(this.activatedRoute);
      this.titleService.setTitle(pageTitle);
      this.isDashboardVisible = this.router.url.startsWith('/dashboard');
    });
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
