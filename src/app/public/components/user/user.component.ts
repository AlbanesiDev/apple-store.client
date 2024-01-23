import { Component, OnInit } from '@angular/core';
import { LoginModalService } from '../../services/login-modal.service';
import { HeaderService } from '../../services/header.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})

export class UserComponent implements OnInit {
  public isOpenUser: boolean = false;
  public profileContainer: boolean = false;
  //=================================================
  public forgotContainer: boolean = false;
  public loginContainer: boolean = true;
  public registerContainer: boolean = false;
  //=================================================
  public profilePic!: string;
  constructor(
    public headerService: HeaderService,
    private loginModalService: LoginModalService,
  ) {

    this.loginModalService.userContainer$.subscribe((value) => {
      if (value) {
        this.profileContainer = true;
      }
    });

    // this.headerService.isOpenUser$.subscribe((isOpen) => {
    //   this.isOpenUser = isOpen;
    //   if (isOpen) {
    //     setTimeout(() => {
    //       this.forgotContainer = false;
    //       this.loginContainer = true;
    //       this.registerContainer = false;
    //     }, 250);
    //   }
    // });

  }
  ngOnInit() {
    this.loginModalService.forgotContainer$.subscribe((value) => {
      this.forgotContainer = value;
      this.loginContainer = false;
      this.registerContainer = false;
    });
    this.loginModalService.loginContainer$.subscribe((value) => {
      this.forgotContainer = false;
      this.loginContainer = value;
      this.registerContainer = false;
    });
    this.loginModalService.registerContainer$.subscribe((value) => {
      this.forgotContainer = false;
      this.loginContainer = false;
      this.registerContainer = value;
    });
  }
}
