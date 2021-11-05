import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Product } from './product.model';

const productUrl = `${environment.apiUrl}/products`;

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  addProduct(product: Product) {
    return this.http.post(productUrl, product);
  }
}
