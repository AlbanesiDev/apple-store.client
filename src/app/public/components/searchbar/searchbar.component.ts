import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SearchbarComponent {
  constructor(public headerService: HeaderService) {}

  public closeSearch() {
    this.headerService.closeSearch();
  }
}
