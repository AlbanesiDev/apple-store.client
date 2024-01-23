import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormField } from '../auth-form/auth-form.interface';
import { AuthFormComponent } from '../auth-form/auth-form.component';
import { LoginModalService } from '../../services/login-modal.service';

@Component({
  standalone: true,
  imports: [CommonModule, AuthFormComponent],
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registrationFormFields: FormField[] = [
    {
      type: 'text',
      name: 'userName',
      placeholder: 'Username',
      control: new FormControl(''),
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ],
    },
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
      validators: [
        Validators.required,
        Validators.minLength(8),
      ],
    },
  ];

  constructor(
    private loginModalService: LoginModalService,
    // private authGoogleService: AuthGoogleService
  ) {}

  registerWithEmail() {
    // if (this.registerForm.invalid) {
    //   this.registerForm.markAllAsTouched;
    // } else {
    //   const token = this.generateToken();
    //   const user: any = {
    //     name: this.userControl.value,
    //     email: this.emailControl.value,
    //     password: this.passwordControl.value,
    //     token: token,
    //   };
    //   this.loginService.createUser(user).subscribe((response) => {
    //     console.log('Usuario registrado con éxito', response);
    //   });
    // }
  }
  generateToken(): string {
    let length = '';
    const caracteres =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 40; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      length += caracteres.charAt(indice);
    }
    return length;
  }

  goToLoginContainer() {
    this.loginModalService.goToLoginContainer(true);
  }
  registerWithGoogle() {
    // this.authGoogleService.login();
  }
}
