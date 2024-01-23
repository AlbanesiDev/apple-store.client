import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormField } from '../auth-form/auth-form.interface';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from '../auth-form/auth-form.component';
import { LoginModalService } from '../../services/login-modal.service';

@Component({
  standalone: true,
  imports: [CommonModule, AuthFormComponent],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  public errorContainer: boolean = true;
  public errorContainerMessage: boolean = true;
  public errorInput: boolean = true;
  public loading: boolean = false;

  loginFormFields: FormField[] = [
    {
      type: 'email',
      name: 'email',
      placeholder: 'User@example.com',
      control: new FormControl(''),
      validators: [Validators.required, Validators.email],
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'Password',
      control: new FormControl(''),
      validators: [Validators.required, Validators.minLength(8)],
    },
  ];

  constructor(
    private loginModalService: LoginModalService // private authGoogleService: AuthGoogleService,
  ) // private authEmailService: AuthEmailService
  {}

  ngOnInit(): void {}

  loginWithEmail() {}

  loginWithGoogle() {
    // this.authGoogleService.login();
  }

  goToRegisterContainer() {
    this.loginModalService.goToRegisterContainer(true);
  }
  goToForgetContainer() {
    this.loginModalService.goToforgotContainer(true);
  }

  goToUserContainer() {
    this.loginModalService.goToUserContainer(true);
  }
}
