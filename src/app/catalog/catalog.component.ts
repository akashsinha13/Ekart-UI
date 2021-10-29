import { Component, OnInit } from '@angular/core';
import { CatalogService } from './catalog.service';
import { ProductCard } from './catalog.model';
import { Observable } from 'rxjs';

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
