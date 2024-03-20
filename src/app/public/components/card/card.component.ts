import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from "@angular/core";
import { NavigationExtras, Router, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { Variation } from "../../../core/interfaces/products.interface";
import { TranslateModule } from "@ngx-translate/core";

/**
 * @class
 * Repppresents a product card as a standalone component.
 * This component displays product information and allows navigation to the product details.
 */
@Component({
  selector: "app-card",
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule, RouterModule],
  template: `
    <div class="wrapper__card">
      <div class="card__img">
        <button title="{{ 'card.image' | translate }}" (click)="goToProductClick()">
          <img [src]="imgCover" [alt]="model" loading="lazy" />
        </button>
      </div>
      <div class="card__body">
        <h2>
          {{ model }} <br />
          {{ colorName }} {{ colorStrape }} <br />
        </h2>
        @if (variations[0].space.length > 0) {
        <select
          class="p-select"
          title="{{ 'card.select' | translate }}"
          [(ngModel)]="selectedSpace"
          (change)="updatePrice()"
        >
          @for (variation of variations; track $index) {
          <option [value]="variation.space">{{ variation.space }}</option>
          }
        </select>
        }
        <div>
          <p>{{ selectedPrice | currency : "USD" : "symbol" }}</p>
        </div>
      </div>
      <button class="btn__card" (click)="goToProductClick()">{{ "card.buy" | translate }}</button>
    </div>
  `,
  styleUrl: "./card.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  // Dependency injection
  private router = inject(Router);
  /**
   * The unique identifier for the product.
   */
  @Input() public id!: number;

  /**
   * Indicates if the product information is being loaded.
   */
  @Input() public loading!: boolean;

  /**
   * The model name of the product.
   */
  @Input() public model!: string;

  /**
   * The cover image URL for the product.
   */
  @Input() public imgCover!: string;

  /**
   * The image URL for the product.
   */
  @Input() public imgModel!: string;

  /**
   * The name of the product color variant.
   */
  @Input() public colorName?: string;

  /**
   * The color of the product strap, if applicable.
   */
  @Input() public colorStrape?: string;

  /**
   * An array of variations for the product.
   */
  @Input() public variations: Variation[] = [];

  /**
   * The category to which the product belongs.
   */
  @Input() public category!: string;

  /**
   * The selected storage option for the product.
   */
  public selectedSpace!: string;

  /**
   * The selected price based on the chosen variation.
   */
  public selectedPrice!: number;

  /**
   * ngOnInit lifecycle hook.
   * Initializes the component by setting the default selected variation based on the provided variations.
   */
  ngOnInit() {
    if (this.variations && this.variations.length > 0) {
      this.selectedSpace = this.variations[0].space;
      this.selectedPrice = this.variations[0].price;
    }
  }

  /**
   * Updates the selected price when a different variation is chosen.
   */
  public updatePrice(): void {
    const selectedVariation = this.variations.find((variation) => variation.space === this.selectedSpace);
    if (selectedVariation) {
      this.selectedPrice = selectedVariation.price;
    }
  }

  /**
   * Navigates to the product detail page when the product card is clicked.
   * Constructs the route based on the product model and color, and passes the product details as state.
   */
  goToProductClick(): void {
    const normalizedModel = this.model.split(" ").join("-").toLowerCase();
    let route = `en/shop/${this.category}/${normalizedModel}`;

    if (this.colorName !== undefined) {
      const normalizedColor = this.colorName.split(" ").join("-").toLowerCase();
      route += `-${normalizedColor}`;
    } else if (this.colorStrape !== undefined) {
      const normalizedStrapeColor = this.colorStrape.split(" ").join("-").toLowerCase();
      route += `-${normalizedStrapeColor}`;
    }

    const navigationExtras: NavigationExtras = {
      state: {
        product: {
          id: this.id,
          collection: this.category,
          model: this.model,
          color: this.colorName,
          strap_color: this.colorStrape,
          space: this.selectedSpace,
          price: this.selectedPrice,
        },
      },
    };

    this.router.navigate([route], navigationExtras);
  }
}
