import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleProviderService {
  private titleSubject: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
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
}
