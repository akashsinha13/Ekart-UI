import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Brand, Category, ProductCard, Size } from './catalog.model';

const productUrl = `${environment.apiUrl}/products`;
const categoryUrl = `${environment.apiUrl}/category`;
const brandsUrl = `${environment.apiUrl}/brands`;
const sizesUrl = `${environment.apiUrl}/sizes`;

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<ProductCard[]> {
    return this.http.get<ProductCard[]>(productUrl);
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(categoryUrl);
  }

  getAllBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(brandsUrl);
  }

  getAllSizes(): Observable<Size[]> {
    return this.http.get<Size[]>(sizesUrl);
  }
}
