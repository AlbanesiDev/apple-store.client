import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShopCheckoutComponent } from './shop-checkout.component';

@NgModule({
  declarations: [
    ShopCheckoutComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ShopCheckoutComponent
  ],
})

export class ShopCheckoutModule { }
