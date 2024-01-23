import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginModalService {
  private forgotContainer = new BehaviorSubject<boolean>(false);
  private loginContainer = new BehaviorSubject<boolean>(false);
  private registerContainer = new BehaviorSubject<boolean>(false);
  private userContainer = new BehaviorSubject<boolean>(false);

  forgotContainer$ = this.forgotContainer.asObservable();
  loginContainer$ = this.loginContainer.asObservable();
  registerContainer$ = this.registerContainer.asObservable();
  userContainer$ = this.userContainer.asObservable();

  goToforgotContainer(value: boolean) {
    this.forgotContainer.next(value);
  }
  goToLoginContainer(value: boolean) {
    this.loginContainer.next(value);
  }
  goToRegisterContainer(value: boolean) {
    this.registerContainer.next(value);
  }
  goToUserContainer(value: boolean) {
    this.userContainer.next(value);
  }
}
