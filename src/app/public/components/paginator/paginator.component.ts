import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent {
  @Input() public totalPages: number[] = [];
  @Input() public currentPage: number = 1;
  @Input() public visiblePages?: number;
  @Input() public pageUrlTemplate?: string;
  @Output() public pageNavigated: EventEmitter<string> = new EventEmitter<string>();


  public faAngleLeft: IconProp = faAngleLeft;
  public faAngleRight: IconProp = faAngleRight;

  constructor(private cdr: ChangeDetectorRef) { }

  public calculatePageRange(): number[] {
    const maxVisiblePages = this.visiblePages || 12;
    const start = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
    const end = Math.min(
      this.totalPages[this.totalPages.length - 1],
      start + maxVisiblePages - 1
    );

    const diff = maxVisiblePages - (end - start + 1);
    const newStart = Math.max(1, start - diff);

    return Array.from({ length: end - newStart + 1 }, (_, index) => newStart + index);
  }


  public setPage(page: number): void {
    if (page < 1 || page > this.totalPages.length || page === this.currentPage) {
      return;
    }

    this.currentPage = page;
    window.scrollTo(0, 0);
    this.cdr.detectChanges();
  }
}
