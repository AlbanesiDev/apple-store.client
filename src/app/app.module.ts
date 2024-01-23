import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HeaderService } from './public/services/header.service';
import { BagService } from './public/services/bag.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentModule } from './public/components/component.module';
import { HomeModule } from './public/pages/home/home.module';
import { ShopCheckoutModule } from './public/pages/shop-checkout/shop-checkout.module';
import { ShopModule } from './public/pages/shop/shop.module';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http, './assets/i18n/', '.json');
        },
        deps: [HttpClient],
      },
    }),
    HomeModule,
    ShopModule,
    ShopCheckoutModule,
    SharedModule,
    ComponentModule,
    FontAwesomeModule,
    DashboardComponent,
    BrowserAnimationsModule
  ],
  providers: [HeaderService, BagService],
  bootstrap: [AppComponent],
})
export class AppModule {}
