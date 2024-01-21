import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { FooterSection } from '../../public/models/footer.interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  public list: FooterSection[] = [];
  public links: string[] = [];
  public copyright!: string;
  public text!: string;

  // Temporary region (awaiting  backend)
  public region: string = 'United States';

  constructor(
    private translateService: TranslateService,
    private cdr: ChangeDetectorRef
  ) {
    this.translateService.get('footer').subscribe((res: FooterSection[]) => {
      this.list = res;
      this.links = res[5].links;
      this.copyright = res[5].copyright;
      this.text = res[5].text;
      this.cdr.markForCheck();
    });
  }
}
