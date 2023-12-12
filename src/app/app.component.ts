import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  constructor(
    private translateService: TranslateService
  ) {
    const userLang = navigator.language || 'en';
    const leguageCode = userLang.split('-')[0];
    this.translateService.setDefaultLang(leguageCode);
    this.translateService.use(leguageCode);
  }
}
