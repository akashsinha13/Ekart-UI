import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductCard } from './catalog.model';

const productUrl = `${environment.apiUrl}/products`;

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductCard[]> {
    //return this.http.get<ProductCard[]>(productUrl);

    // dummy data
    return of([

      { id: 0, name: 'Item 000', thumbnailImage: 'assets/02.jpg', price: 10.5, discount: 5, rating: 3 },
      { id: 1, name: 'Item 001', thumbnailImage: 'assets/02.jpg', price: 10.5, discount: 0, rating: 3 },
      { id: 2, name: 'Item 000', thumbnailImage: 'assets/02.jpg', price: 10.5, discount: 5, rating: 3 },
      { id: 3, name: 'Item 001', thumbnailImage: 'assets/02.jpg', price: 10.5, discount: 5, rating: 3 },
      { id: 4, name: 'Item 000', thumbnailImage: 'assets/02.jpg', price: 10.5, discount: 5, rating: 3 },
      { id: 5, name: 'Item 001', thumbnailImage: 'assets/02.jpg', price: 10.5, discount: 5, rating: 3 },
      { id: 6, name: 'Item 000', thumbnailImage: 'assets/02.jpg', price: 10.5, discount: 5, rating: 3 },
      { id: 7, name: 'Item 001', thumbnailImage: 'assets/02.jpg', price: 10.5, discount: 5, rating: 3 },

    ]);
  }
}
