import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { ProductComparisonComponent } from "../product-comparison/product-comparison.component";
import { ProductsCrudService } from "../../../../core/services/products-crud.service";
import { ProductsInterface } from "../../../../core/interfaces/products.interface";
import { BagService } from "./../../../services/bag.service";

/**
 * @class ProductDetailsComponent
 * @description This component handles the display and functionality of product details.
 * It allows users to view products, select different size, colors or spaces, and manage their shopping bag.
 */
@Component({
  selector: "app-product-details",
  standalone: true,
  imports: [CommonModule, TranslateModule, ProductComparisonComponent],
  templateUrl: "./product-details.component.html",
  styleUrl: "./product-details.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent {
  // Dependency injection
  private route = inject(ActivatedRoute);
  private cdr = inject(ChangeDetectorRef);
  private productsCrudService = inject(ProductsCrudService);
  private bagService = inject(BagService);
  /**
   * Flags to manage UI states based on product availability and data fetching status.
   */
  public notFoundMessage: boolean = false;
  public errorFetch: boolean = false;
  public errorFetchMessage: string | undefined;
  public inStock: boolean = true;

  /**
   * Arrays to store products of the same model and available colors.
   */
  public productsSameModel: ProductsInterface[] = [];
  public productsColors: ProductsInterface[] = [];

  /**
   * Form group to handle product order details such as size, color, and space.
   */
  public orderForm = new FormGroup({
    size: new FormControl(""),
    color: new FormControl(""),
    space: new FormControl(""),
  });

  constructor() {
    // Check if the user navigated from a previous selection or entered the URL manually.
    const product = history.state.product;
    if (product) {
      // If navigated from a previous selection, save and display the product.
      const productSelected = product;
      this.getProducts(productSelected.collection, productSelected.model, productSelected.color);
    } else {
      // If the URL was entered manually, use the URL parameters to fetch the product.
      this.route.paramMap.subscribe((params) => {
        const category = params.get("category")!;
        const product = params.get("product")!.replaceAll("-", " ").toLowerCase();
        const color = params.get("color")!.replaceAll("-", " ").toLowerCase();
        this.getProducts(category, product, color);
      });
    }
  }

  /**
   * Fetches products dynamically based on the collection, model, and color.
   * Ensures the selected or searched product is always first in the array.
   * @param collection - The product collection category.
   * @param model - The specific model of the product.
   * @param color - The selected color of the product.
   */
  private getProducts(collection: string, model: string, color: string): void {
    this.productsCrudService.getProductByCollection(collection).subscribe(
      (response: ProductsInterface[]) => {
        const allModels = response.filter(
          (product: ProductsInterface) => product.model.toLowerCase() === model.toLowerCase(),
        );
        this.productsColors = allModels; // Used by buttons to render dynamically.
        this.orderSelected(color, allModels); // Sorts the array to display the selected color first.
      },
      (error) => {
        this.errorFetchMessage = `error: ${error}`;
        this.errorFetch = true;
      },
    );
  }

  /**
   * @method selectColorClick
   * @description Allows the user to change the color of the product being viewed.
   * @param {string} color - The color selected by the user.
   */
  public selectColorClick(color: string): void {
    this.orderSelected(color, this.productsSameModel);
  }

  /**
   * @method orderSelected
   * @description Sorts the product models array to prioritize the selected color without modifying the original array.
   * @param {string} startColor - The color to prioritize in the product array.
   * @param {ProductsInterface[]} allModels - The array of all product models.
   */
  private orderSelected(startColor: string, allModels: ProductsInterface[]): void {
    let sortedModels = [...allModels];
    sortedModels.sort((a, b) => {
      if (a.color?.name.toLowerCase() === startColor.toLowerCase()) {
        return -1;
      } else if (b.color?.name.toLowerCase() === startColor.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
    this.productsSameModel = sortedModels;
  }

  /**
   * @method addToBagClick
   * @description Adds the selected product to the shopping bag. This method is still under development.
   */
  public addToBagClick(): void {
    const value = this.orderForm.value;
    if (!this.inStock) {
      console.error("No hay stock");
    } else if (!value) {
      console.error("No hay producto");
    } else {
      this.bagService.addToBag(value);
    }
  }
}
