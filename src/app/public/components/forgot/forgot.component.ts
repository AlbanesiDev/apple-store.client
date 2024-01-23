import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalService } from '../../services/login-modal.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent implements OnDestroy {
  public forgotStep: boolean = true;
  public verifyStep: boolean = false;
  public createStep: boolean = false;
  public resendCode: boolean = false;
  public email: string = '';
  public buttonDisabled: boolean = true;
  public emailVerify: string = 'user@example.com';
  public timecount: number = 0;
  private countdownInterval: any;

  constructor(private loginModalService: LoginModalService) {}
  goToLoginContainer() {
    this.verifyStep = false;
    this.createStep = false;
    this.loginModalService.goToLoginContainer(true);
  }
  goToVerifyCode() {
    this.verifyStep = true;
  }
  goToChangePassword() {
    this.createStep = true;
  }
  resendCodeButton() {
    this.resendCode = !this.resendCode;
    this.startCountdown();
  }

  returnBack(){
    this.forgotStep = true;
    this.verifyStep = false;
    this.createStep = false;
  }

  onEmailChange() {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    this.buttonDisabled = emailRegex.test(this.email);
  }

  private startCountdown() {
    this.timecount = 300;
    this.countdownInterval = setInterval(() => {
      if (this.timecount > 0) {
        this.timecount--;
      } else {
        this.stopCountdown();
      }
    }, 1000);
  }

  private stopCountdown() {
    clearInterval(this.countdownInterval);
    this.resendCode = false;
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  }

  ngOnDestroy() {
    this.stopCountdown();
  }
}
