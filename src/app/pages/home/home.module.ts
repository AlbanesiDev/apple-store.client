import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    HomeComponent,
    TranslateModule
  ],
})
export class HomeModule {}
