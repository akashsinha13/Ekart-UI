import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Category } from './footer.model';

const categoryUrl = `${environment.apiUrl}/category`;

@Injectable({
    providedIn: 'root'
})
export class FooterService {

    constructor(private httpClient: HttpClient) {}

    getCategories(): Observable<Category[]>{
        return this.httpClient.get<Category[]>(categoryUrl);
    }
}
