import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ProductCard } from './catalog.model';

const productUrl = `${environment.apiUrl}/products`;

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<ProductCard[]> {
    return this.http.get<ProductCard[]>(productUrl);
  }
}
