import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Color } from '../../catalog/catalog.model';
import { AdminService } from './../admin.service';
import { Category } from './../product.model';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss', './../../catalog/filter/filter.component.scss']
})
export class ProductFormComponent implements OnInit {
  categoryList: Observable<Category[]>;
  colors: Color;

  constructor(private adminService: AdminService) {
    this.categoryList = this.adminService.getCategories();
  }

  ngOnInit(): void {
  }
  onAdd(data: object) {
    console.log(data);
  }
  // tslint:disable-next-line
  trackById(index: number, data: any) {
    return data.id;
  }
  getColors(): string[] {
    return [ 'BLACK', 'BLUE', 'GREEN', 'PINK', 'RED', 'WHITE', 'YELLOW'];
  }
}
