import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductCard } from './catalog.model';
import { CatalogService } from './catalog.service';

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  productCards: Observable<ProductCard[]>;

  constructor(private catalogService: CatalogService) {
    this.productCards = this.catalogService.getAllProducts();
  }

  ngOnInit(): void {
  }
}
