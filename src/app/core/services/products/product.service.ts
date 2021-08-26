import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Category } from './category.service';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  picture: string;
  categoryId: number;
  categories: Category;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly url: string = `${ environment.url }/products`;

  constructor(private http: HttpClient) {}

  create(payload: Omit<Product, "id">): Observable<Product> {
    return this.http.post<Product>(this.url, payload);
  }

  list(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`${ this.url }?_expand=categories`);
  }
}
