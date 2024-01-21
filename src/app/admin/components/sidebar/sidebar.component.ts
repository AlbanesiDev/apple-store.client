import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';
import {
  faBorderAll,
  faChartSimple,
  faCubes,
  faRightFromBracket,
  faTruckFast,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { sidebarButtons } from '../../models/icon-sidebar.interface';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'admin-sidebar',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(150)),
    ]),
    trigger('fadeOutIn', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(250)),
    ])
  ],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  public buttons: sidebarButtons[] = [
    {
      route: '/dashboard',
      title: 'Dashboard',
      icon: faBorderAll,
      color: '#03A9F4',
    },
    {
      route: '/dashboard/analytics',
      title: 'Analytics',
      icon: faChartSimple,
      color: '#C2185B',
    },
    {
      route: '/dashboard/orders',
      title: 'Orders',
      icon: faTruckFast,
      color: '#FDD835',
    },
    {
      route: '/dashboard/products',
      title: 'Products',
      icon: faCubes,
      color: '#FB8E03',
    },
    {
      route: '/dashboard/users',
      title: 'Users',
      icon: faUsers,
      color: '#00897B',
    },
  ];

  public logoutButton = {
    route: '/auth/logout',
    title: 'Logout',
    icon: faRightFromBracket,
    color: '#EF5350',
  };

  constructor(public sidebarService: SidebarService) { }
}
