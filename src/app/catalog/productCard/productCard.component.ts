import { Component, Input, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductCard } from '../catalog.model';

@Component({
  selector: 'productCard',
  templateUrl: './productCard.component.html',
  styleUrls: ['./productCard.component.scss'],
  providers: [NgbRatingConfig]
})
export class ProductCardComponent implements OnInit {

  @Input() dataSource: ProductCard = { id: 0, name: '', price: 0, discount: 0, thumbnailImage: '', rating: 0 };

  constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;
  }
  ngOnInit(): void {
  }
}
