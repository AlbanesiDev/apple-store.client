import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { adminGuard } from './core/guards/admin.guard';
import { HomeComponent } from './public/pages/home/home.component';
import { ProductDetailsComponent } from './public/pages/shop/product-details/product-details.component';
import { ShopComponent } from './public/pages/shop/shop.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'shop',
    component: ShopComponent,
    data: { title: 'Apple Store | Shop' },
  },
  {
    path: 'shop/:category',
    component: ShopComponent,
    title: (params: ActivatedRouteSnapshot) => {
      const category = params.params['category'];
      const claneadCategory = category.replace('buy-', '');
      return `Apple Store | ${claneadCategory}`;
    }
  },
  {
    path: 'shop/:category/:product-:color',
    component: ProductDetailsComponent,
    data: { title: 'Apple Store | Shop' },
  },
  {
    path: 'bag-checkout',
    loadChildren: () =>
      import('./public/pages/shop-checkout/shop-checkout.module').then(
        (m) => m.ShopCheckoutModule
      ),
    data: { title: 'Apple Store | Checkout' },
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./public/pages/login/login.module').then((m) => m.LoginModule),
    data: { title: 'Apple Store | Login' },
  },
  {
    path: 'choose-country-region',
    loadComponent: () =>
      import('./public/pages/country-region/country-region.component').then(
        (m) => m.CountryRegionComponent
      ),
    data: { title: 'Choose Your Country or Region' },
  },
  {
    path: 'dashboard',
    canLoad: [adminGuard],
    loadComponent: () =>
      import('./admin/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    data: { title: 'Dashboard | Panel' },
    children: [
      {
        path: 'analytics',
        loadComponent: () => import('./admin/components/analytics/analytics.component').then((m) => m.AnalyticsComponent),
        data: { title: 'Dashboard | Analytics' },
      },
      {
        path: 'orders',
        loadComponent: () => import('./admin/components/orders/orders.component').then((m) => m.OrdersComponent),
        data: { title: 'Dashboard | Orders' },
      },
      {
        path: 'products',
        loadComponent: () => import('./admin/components/crud-products/crud-products.component').then((m) => m.CrudProductsComponent),
        data: { title: 'Dashboard | Products' },
        children: [
          {
            path: ':collection',
            loadComponent: () => import('./admin/components/crud-products/crud/crud.component').then((m) => m.CrudComponent),
            data: { title: 'Dashboard | Products | Collection' },
          },
        ]
      },
      {
        path: 'users',
        loadComponent: () => import('./admin/components/abm-users/abm-users.component').then((m) => m.AbmUsersComponent),
        data: { title: 'Dashboard | Users' },
      },
    ],
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
