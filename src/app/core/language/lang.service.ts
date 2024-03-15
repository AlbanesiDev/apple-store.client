import { Inject, Injectable, PLATFORM_ID, inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { TranslateService } from "@ngx-translate/core";
import { CountryDataService } from "../services/country-data.service";

@Injectable({ providedIn: "root" })
export class ServiceNameService {
  private translateService = inject(TranslateService);
  private countryDataService = inject(CountryDataService);
  private effectiveLang: string | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  public initializeLanguage(): void {
    const browserLang = this.translateService.getBrowserLang();
    const lang = this.countryDataService.currentLenguageSig();
    this.effectiveLang = browserLang?.match(/en|fr|ar/) ? browserLang : "en";
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem("userLanguage");
      this.effectiveLang = savedLang || (browserLang?.match(/en|es|fr/) ? browserLang : "en");
    }
    this.translateService.use(this.effectiveLang);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("userLanguage", lang);
    }
  }
}
