import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShopComponent } from './shop.component';
import { CardComponent } from '../../components/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginatorComponent } from '../../components/paginator/paginator.component';

@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CardComponent,
    PaginatorComponent
  ],
  exports: [
    ShopComponent
  ],
})
export class ShopModule {}
