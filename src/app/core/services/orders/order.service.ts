import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Client } from '../clients/clients.service';
import { Product } from '../products/product.service';

export interface Order {
  id: string;
  quantity: number;
  productsId: number;
  clientsId: number;
  products?: Product;
  clients?: Client;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly url: string = `${ environment.url }/orders`;

  constructor(private http: HttpClient) {}

  list(): Observable<Array<Order>> {
    const url: string = `${ this.url }?_expand=clients&_expand=products`;
    return this.http.get<Array<Order>>(url);
  }

  create(
    data: Omit<Order, "id" | "categories" | "products">
  ): Observable<Omit<Order, "categories" | "products">> {
    return this.http.post<
      Omit<Order, "categories" | "products">
    >(this.url, data);
  }
}
