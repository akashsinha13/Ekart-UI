import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Category, Product } from './product.model';

const productUrl = `${environment.apiUrl}/products`;
const category = `${environment.apiUrl}/category`;

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  addProduct(product: Product) {
    return this.http.post(productUrl, product);
  }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(category);
  }
}
