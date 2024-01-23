import { BagService } from './../../../services/bag.service';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { ProductComparisonComponent } from '../product-comparison/product-comparison.component';
import { ProductDetailsService } from '../../../services/product-details.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, ProductComparisonComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent {
  public product: [] = [];
  public productColors: [] = [];
  public inStock: boolean = true;

  public sizes: [] = [];
  public colors: [] = [];
  public storageSize: [] = [];

  public productImages: [] = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private productDetailsService: ProductDetailsService,
    private bagService: BagService
  ) {}



  addToBag() {
    if (!this.inStock) {
      console.error('No hay stock');
    } else if (this.product.length === 0) {
      console.error('No hay producto');
    } else {
      this.bagService.addToBag(this.product);
    }
  }
}
