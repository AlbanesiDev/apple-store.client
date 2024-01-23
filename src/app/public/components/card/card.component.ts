import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Variation } from '../../../core/models/products.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() public loading!: boolean;
  @Input() public model!: string;
  @Input() public imgCover!: string;
  @Input() public imgModel!: string;
  @Input() public colorName?: string;
  @Input() public colorStrape?: string;
  @Input() public variations: Variation[] = [];
  @Input() public category!: string;
  public selectedSpace!: string;
  public selectedPrice!: number;

  ngOnInit(){
    if (this.variations && this.variations.length > 0) {
      this.selectedSpace = this.variations[0].space;
      this.selectedPrice = this.variations[0].price;
    }
  }

  public updatePrice() {
    const selectedVariation = this.variations.find(variation => variation.space === this.selectedSpace);
    if (selectedVariation) {
      this.selectedPrice = selectedVariation.price;
    }
  }


  // Method to build the url of the product
  goToProduct(): string {
    const normalizedModel = this.model.split(' ').join('-').toLowerCase();
    if (this.colorName !== undefined) {
      // Case: Only colorName is present
      const normalizedColor = this.colorName.split(' ').join('-').toLowerCase();
      return `/shop/${this.category}/${normalizedModel}-${normalizedColor}`;
    } else if (this.colorStrape !== undefined) {
      // Case: Only colorStrape is present
      const normalizedStrapeColor = this.colorStrape.split(' ').join('-').toLowerCase();
      return `/shop/${this.category}/${normalizedModel}-${normalizedStrapeColor}`;
    } else {
      // Case: Neither of the two is present
      return `/shop/${this.category}/${normalizedModel}`;
    }
  }
}
