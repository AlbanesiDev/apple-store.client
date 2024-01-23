import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product-comparison',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './product-comparison.component.html',
  styleUrl: './product-comparison.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComparisonComponent { }
