import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { ShopModule } from './pages/shop/shop.module';
import { ShopCheckoutModule } from './pages/shop-checkout/shop-checkout.module';
import { SharedModule } from './shared/shared.module';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent
  ],
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
        deps: [HttpClient]
      }
    }),
    HomeModule,
    ShopModule,
    ShopCheckoutModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
