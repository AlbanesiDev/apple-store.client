import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsInterface } from '../models/products.interface';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductsCrudService {
  private productsCollections = [
    'buy-airpods',
    'buy-ipad',
    'buy-iphone',
    'buy-mac',
    'buy-watch',
  ];
  private apiBaseUrl: string = 'http://localhost:5088/api/products';

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  getCollections(): Observable<string[]> {
    const apiUrl = `${this.apiBaseUrl}/collection-names`;
    return this.http.get<string[]>(apiUrl);
  }

  getAllProducts(): Observable<ProductsInterface[]> {
    return this.http.get<ProductsInterface[]>(this.apiBaseUrl);
  }

  getProductByCollection(collection: string): Observable<ProductsInterface[]> {
    const apiUrl = `${this.apiBaseUrl}/${collection}`;
    return this.http.get<ProductsInterface[]>(apiUrl);
  }

  getProductByCollectionAndId(id: number): Observable<ProductsInterface> {
    return this.http.get<ProductsInterface>(`${this.apiBaseUrl}/${id}`);
  }

  postProduct(
    collection: string,
    product: ProductsInterface
  ): Observable<ProductsInterface> {
    return this.http.post<ProductsInterface>(this.apiBaseUrl, product);
  }

  putProduct(
    collection: string,
    product: ProductsInterface
  ): Observable<ProductsInterface> {
    return this.http.put<ProductsInterface>(
      `${this.apiBaseUrl}/${product.id}`,
      product
    );
  }

  deleteProduct(collection: string, id: number): Observable<ProductsInterface> {
    return this.http.delete<ProductsInterface>(`${this.apiBaseUrl}/${id}`);
  }
}
