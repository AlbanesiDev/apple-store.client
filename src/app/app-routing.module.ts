import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'shop',
    loadChildren: () =>
      import('./pages/shop/shop.module').then((m) => m.ShopModule),
  },
  {
    path: 'shop-checkout',
    loadChildren: () =>
      import('./pages/shop-checkout/shop-checkout.module').then(
        (m) => m.ShopCheckoutModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
