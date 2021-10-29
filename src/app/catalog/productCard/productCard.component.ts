import { Component, Input, OnInit } from '@angular/core';
import { ProductCard } from '../catalog.model';

@Component({
  selector: 'productCard',
  templateUrl: './productCard.component.html',
  styleUrls: ['./productCard.component.scss'],
  providers: []
})
export class ProductCardComponent implements OnInit {

  @Input() dataSource: ProductCard | undefined;

  constructor() {
  }
  ngOnInit(): void {
  }
}
