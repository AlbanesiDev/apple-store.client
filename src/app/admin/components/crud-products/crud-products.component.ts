import { ProductsCrudService } from './../../../core/services/products-crud.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-crud-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './crud-products.component.html',
  styleUrl: './crud-products.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrudProductsComponent implements OnInit {
  public listCollections: string[] = [];

  constructor(
    private productsCrudService: ProductsCrudService
  ) {}

  ngOnInit() {
  }


}
