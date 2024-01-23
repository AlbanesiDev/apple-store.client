import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-country-region',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-region.component.html',
  styleUrl: './country-region.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryRegionComponent implements OnInit {
  public regions: any[] = [
    'Africa, Middle East, and India',
      { country: 'Bahrain' },
      { country: 'البحرين' },
      { country: 'Botswana' },
      { country: 'Cameroun' },
      { country: 'République Centrafricaine' },
      { country: "Côte d'Ivoire" },
      { country: 'Egypt' },
      { country: 'مصر' },
      { country: 'Guinea-Bissau' },
      { country: 'Guinée' },
      { country: 'Guinée Equatoriale' },
      { country: 'India' },
      { country: 'Israel' },
      { country: 'Jordan' },
      { country: 'الأردن' },
      { country: 'Kenya' },
      { country: 'Kuwait' },
      { country: 'الكويت' },
      { country: 'Madagascar' },
      { country: 'Mali' },
      { country: 'Maroc' },
      { country: 'Maurice' },
      { country: 'Mozambique' },
      { country: 'Niger' },
      { country: 'Nigeria' },
      { country: 'Oman' },
      { country: 'عُمان' },
      { country: 'Qatar' },
      { country: 'قطر' },
      { country: 'Saudi Arabia' },
      { country: 'المملكة العربية السعودية' },
      { country: 'Sénégal' },
      { country: 'South Africa' },
      { country: 'Tunisie' },
      { country: 'Uganda' },
      { country: 'United Arab Emirates' },
      { country: 'الإمارات العربية المتحدة' },

    'Asia Pacific',
    'Europe',
    'Latin America and the Caribbean',
    'The United States, Canada, and Puerto Rico',
  ];
  public countrys: any[] = [];

  constructor(
    private translateService: TranslateService,
    private cdr: ChangeDetectorRef
  ) {
    this.translateService.get('countrys').subscribe((res: any[]) => {
      this.countrys = res;
      this.cdr.markForCheck();
    });
  }

  ngOnInit(): void {
    this.a();
  }

  public a() {
    console.log(this.translateService.getLangs());
  }

  public setCountry(country: string, id: number) {
    this.translateService.setTranslation(country, this.countrys[id], true);
    this.cdr.markForCheck();
  }
}
