import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// tslint:disable-next-line
import { AdminService } from './../admin.service';
import { Category } from './../product.model';


@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  categoryList: Observable<Category[]>;
  colors: string[] = [];

  constructor(private adminService: AdminService) {
    this.categoryList = this.adminService.getCategories();
  }

  ngOnInit(): void {
    this.colors = ['black', 'blue', 'green', 'pink', 'red', 'white', 'yellow'];
  }
   // tslint:disable-next-line
  onAdd(data: any) {
    console.log(data);
  }
  // tslint:disable-next-line
  trackById(index: number, data: any) {
    return data.id;
  }
}
