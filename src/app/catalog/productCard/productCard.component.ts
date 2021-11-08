import { Component, Input, OnInit } from '@angular/core';

import { ProductCard } from '../catalog.model';

@Component({
  selector: 'productCard',
  templateUrl: './productCard.component.html',
  styleUrls: ['./productCard.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() dataSource: ProductCard | undefined;
  image: string;
  ngOnInit(): void {
    this.image = 'data:image/png;base64,' + this.dataSource.thumbnailImage;
  }
}
