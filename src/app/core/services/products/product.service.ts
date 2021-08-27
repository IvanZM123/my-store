import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from 'src/environments/environment';

import { Category } from './category.service';
import { BasicServiceCRUD, Id } from '../BasicServiceCRUD';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  picture: string;
  categoriesId: Id;
  categories: Category;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BasicServiceCRUD<Product> {
  protected readonly url: string = `${ environment.url }/products`;

  constructor(http: HttpClient) {
    super(http);
  }
}
