import { TitleProviderService } from './../../../core/services/title-provider.service';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'admin-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminHeaderComponent implements OnInit, OnDestroy {
  private titleSubscription!: Subscription;
  public faBars = faBars;
  public title!: string;

  constructor(
    private cdr: ChangeDetectorRef,
    private sidebarService: SidebarService,
    private titleProviderService: TitleProviderService
  ) {}

  ngOnInit(): void {
    this.titleSubscription = this.titleProviderService.getTitle().subscribe(title => {
      this.title = title;
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    if (this.titleSubscription) {
      this.titleSubscription.unsubscribe();
    }
  }

  public toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
}
