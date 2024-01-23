import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BagInterface } from '../models/bag.interface';

@Injectable({
  providedIn: 'root',
})
export class BagService {
  public bag: BagInterface[] = [];
  public bagItemsCount = signal<number>(0);

  private bagItemsCountSubject = new BehaviorSubject<number>(0);
  bagItemsCount$ = this.bagItemsCountSubject.asObservable();

  constructor() {
    const storedBag = localStorage.getItem('bag');
    if (storedBag) {
      this.bag = JSON.parse(storedBag);
      this.updateItemCount();
    }
  }

  getBag(): BagInterface[] {
    return this.bag;
  }

  addToBag(product: any): void {
    this.bag.push(product);
    localStorage.setItem('bag', JSON.stringify(this.bag));
    this.updateItemCount();
  }

  removeToBag(idProduct: number, modelProduct: string): void {
    const index = this.bag.findIndex(item => item.id === idProduct && item.model === modelProduct);
    if (index !== -1) {
      this.bag.splice(index, 1);
      localStorage.setItem('bag', JSON.stringify(this.bag));
      this.updateItemCount();
    }
  }

  private updateItemCount() {
    this.bagItemsCountSubject.next(this.bag.length);
  }
}
