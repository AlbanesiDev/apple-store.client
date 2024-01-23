import { NgModule } from '@angular/core';
import { BagComponent } from './bag/bag.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';

@NgModule({
  declarations: [BagComponent, SearchbarComponent, UserComponent],
  imports: [CommonModule, LoginComponent, RegisterComponent, ForgotComponent],
  exports: [BagComponent, SearchbarComponent, UserComponent],
})
export class ComponentModule {}
