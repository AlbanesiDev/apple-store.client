import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, of, tap } from "rxjs";
import { ProductsInterface } from "../interfaces/products.interface";
import { environment } from "../../../environments/environment.prod";
import { LocalStorageService } from "./local-storage.service";

/**
 * Service for CRUD operations on products.
 *  Utilizes HTTP client for server communication and session storage for caching
 */
@Injectable({
  providedIn: "root",
})
export class ProductsCrudService {
  // Dependency injection
  private http = inject(HttpClient);
  /**
    WARNING: The use of cache in local storage for requests is simply for persistence in the demo mode of the application.
    The use of local storage breaks the synchronization of data such as stock and backend price.
  */
  private localStorageService = inject(LocalStorageService);
  // API key
  private apiBaseUrl: string = environment.PRODUCTS_API;
  // Key for session storage
  private productsKeyStorage = "productsStorage";

  /**
   * Retrieves the names of all product collections from the server.
   * @returns An Observable emitting an array of collection names.
   */
  getCollections(): Observable<string[]> {
    const apiUrl = `${this.apiBaseUrl}/collection-names`;
    return this.http.get<string[]>(apiUrl);
  }

  /**
   * Fetches all products from the server or cache.
   * @returns An Observable emitting an array of ProductsInterface objects.
   */
  getAllProducts(): Observable<ProductsInterface[]> {
    const cached = this.localStorageService.getItem(this.productsKeyStorage);

    if (cached) {
      return of(cached);
    }

    return this.http
      .get<ProductsInterface[]>(this.apiBaseUrl)
      .pipe(tap((products) => this.localStorageService.setItem(this.productsKeyStorage, products)));
  }

  /**
   * Retrieves products by their collection name.
   * @param collection The name of the product collection.
   * @returns An Observable emitting an array of ProductsInterface objects.
   */
  getProductByCollection(collection: string): Observable<ProductsInterface[]> {
    const apiUrl = `${this.apiBaseUrl}/${collection}`;
    const cached: ProductsInterface[] = this.localStorageService.getItem(this.productsKeyStorage);

    if (cached) {
      return of(cached);
    }

    return this.http
      .get<ProductsInterface[]>(apiUrl)
      .pipe(
        tap((products: ProductsInterface[]) => this.localStorageService.setItem(this.productsKeyStorage, products)),
      );
  }

  /**
   * Fetches a single product by its collection and ID.
   * @param id The unique identifier of the product.
   * @returns An Observable emitting the requested ProductsInterface object.
   */
  getProductByCollectionAndId(id: number): Observable<ProductsInterface> {
    return this.http.get<ProductsInterface>(`${this.apiBaseUrl}/${id}`);
  }

  /**
   * Submits a new product to a specified collection.
   * @param collection The name of the product collection.
   * @param product The product to be added.
   * @returns An Observable emitting the newly created ProductsInterface object.
   */
  postProduct(collection: string, product: ProductsInterface): Observable<ProductsInterface> {
    return this.http.post<ProductsInterface>(this.apiBaseUrl, product);
  }

  /**
   * Updates an existing product in a specified collection.
   * @param collection The name of the product collection.
   * @param product The product with updated information.
   * @returns An Observable emitting the updated ProductsInterface object.
   */
  putProduct(collection: string, product: ProductsInterface): Observable<ProductsInterface> {
    return this.http.put<ProductsInterface>(`${this.apiBaseUrl}/${product.id}`, product);
  }

  /**
   * Deletes a product from a specified collection by its ID.
   * @param collection The name of the product collection.
   * @param id The unique identifier of the product to be deleted.
   * @returns An Observable emitting the deleted ProductsInterface object.
   */
  deleteProduct(collection: string, id: number): Observable<ProductsInterface> {
    return this.http.delete<ProductsInterface>(`${this.apiBaseUrl}/${id}`);
  }
}
