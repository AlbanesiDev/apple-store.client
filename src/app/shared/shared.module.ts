import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ControlErrorsPipe } from './pipes/control-error.pipe';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ControlErrorsPipe],
  imports: [CommonModule, RouterModule, TranslateModule, FontAwesomeModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    TranslateModule,
    ControlErrorsPipe,
  ],
})
export class SharedModule {}
