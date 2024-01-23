import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TitleProviderService } from './../../../core/services/title-provider.service';
import { ProductsCrudService } from '../../../core/services/products-crud.service';
import { ProductsInterface, Variation } from '../../../core/models/products.interface';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopComponent implements OnInit, OnDestroy {
  // Title
  public title!: string;
  private titleSubscription!: Subscription;
  // Products
  public loading!: boolean;
  public pagedProducts: ProductsInterface[] = [];
  // Paginator
  public totalPages: number[] = [];
  public currentPage: number = 1;
  public visiblePages: number = 5;
  private itemsPerPage: number = 12;
  // Router
  private category: string | null = null;
  private routeSubscription: Subscription;

  constructor(
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    private titleProviderService: TitleProviderService,
    private productsCrudService: ProductsCrudService,
  ) {
    this.routeSubscription = this.route.params.subscribe((params) => {
      this.category = params['category'];
      if (params['category'] && this.category !== null) {
        this.getProductsByCollection(this.category);
      } else {
        this.getAllProducts();
      }
    });
  }

  ngOnInit(): void {
    this.titleProvider();
    this.calculatePagedProducts();
  }

  ngOnDestroy(): void {
    if (this.titleSubscription) {
      this.titleSubscription.unsubscribe();
    }
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  private titleProvider(): void {
    this.titleSubscription = this.titleProviderService.getTitle().subscribe((title) => {
      this.title = title;
      this.cdr.detectChanges();
    });
  }

  private getAllProducts() {
    this.productsCrudService.getAllProducts().subscribe((data: ProductsInterface[]) => {
      this.pagedProducts = data;
      this.pagedProducts.reverse();
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  private getProductsByCollection(collection: string) {
    this.productsCrudService.getProductByCollection(collection).subscribe((data: ProductsInterface[]) => {
      this.pagedProducts = data;
      this.pagedProducts.reverse();
      this.cdr.detectChanges();
    });
  }

  private calculatePagedProducts(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedProducts = this.pagedProducts.slice(startIndex, endIndex);
    this.cdr.detectChanges();
  }

  onPageNavigated(page: string): void {
    this.currentPage = parseInt(page);
    this.calculatePagedProducts();
  }

}

// public getProductsSpace(variations: Variation[]): Variation[] {
//   const spaces: Variation[] = [];
//   for (const variation of variations) {
//     const existingVariation = spaces.find((v) => v.space === variation.space);
//     if (!existingVariation) {
//       spaces.push({ space: variation.space, price: variation.price });
//     } else {
//       existingVariation.price += variation.price;
//     }
//   }
//   return spaces;
// }
