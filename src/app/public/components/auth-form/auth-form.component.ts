import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  faEye,
  faTriangleExclamation,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { FormField } from './auth-form.interface';
import { SharedModule } from '../../../shared/shared.module';
import { LoginModalService } from '../../services/login-modal.service';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, FontAwesomeModule],
})
export class AuthFormComponent implements OnInit {
  public faEye = faEye;
  public faEyeSlash = faEyeSlash;
  public faTriangleExclamation = faTriangleExclamation;
  public faGoogle = '/assets/icons/google.svg';

  @Input() form: FormGroup = new FormGroup({});
  @Input() title: string = '';
  @Input() buttonLabel: string = '';
  @Input() switchMessage: string = '';
  @Input() switchButtonLabel: string = '';
  @Input() formFields: FormField[] = [];
  @Output() switchFormEvent: EventEmitter<void> = new EventEmitter<void>();

  public showPasswordInput: boolean = false;
  public showPasswordToggle: boolean = false;
  public showPasswordStrength: boolean = false;

  constructor(
    // private authGoogleService: AuthGoogleService,
    private loginModalService: LoginModalService,
    // private authEmailService: AuthEmailService
  ) {}

  ngOnInit() {
    this.formFields.forEach((field) => {
      const initialValue = field.initialValue || '';
      const validators = field.validators || [];
      field.control = new FormControl(initialValue, validators);
      this.form.addControl(field.name, field.control);
    });
  }

  switchForm() {
    this.switchFormEvent.emit();
  }

  submit() {}

  toggleShowPassword() {
    this.showPasswordInput = !this.showPasswordInput;
  }

  isStrongPassword(password: string): boolean {
    // Your logic to determine password strength
    // For example, you could check for minimum length, uppercase, lowercase, numbers, etc.
    return password.length >= 8;
  }

  getPasswordStrengthMessage(password: string): string {
    if (this.isStrongPassword(password)) {
      return 'Strong password!';
    } else {
      return 'Password could be stronger.';
    }
  }

  googleAuth() {
    // this.authGoogleService.login();
  }
}
