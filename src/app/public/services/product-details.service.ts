import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  private selectedProducts: any[] = [];

  constructor() {
    const savedProducts = localStorage.getItem('selectedProducts');
    if (savedProducts) {
      this.selectedProducts = JSON.parse(savedProducts);
    }
  }

  setSelectedProduct(product: any) {
    this.selectedProducts.push(product);
    localStorage.setItem('selectedProducts', JSON.stringify(this.selectedProducts));
  }

  getSelectedProducts(): any[] {
    return this.selectedProducts;
  }
}
