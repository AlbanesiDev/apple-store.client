import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-abm-users',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './abm-users.component.html',
  styleUrl: './abm-users.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbmUsersComponent { }
