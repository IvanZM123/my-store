import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Client } from '../clients/clients.service';
import { Product } from '../products/product.service';

export interface Order {
  id: string;
  quantity: number;
  productsId: number | string;
  clientsId: number | string;
  products?: Product;
  clients?: Client;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly url: string = `${ environment.url }/orders`;

  constructor(private http: HttpClient) {}

  list(params?: object): Observable<Array<Order>> {
    const query: string = this.parseParams(params);
    const url: string = `${ this.url }?${ query }&_expand=clients&_expand=products`;
    console.log(url)
    return this.http.get<Array<Order>>(url);
  }

  create(data: Partial<Order>): Observable<Omit<Order, "categories" | "products">> {
    return this.http.post<
      Omit<Order, "products" | "clients">
    >(this.url, data);
  }

  private parseParams(params?: object): string {
    if (!params) return "";

    const values = Object.entries(params);
    return values.map((item, i) => {
      const query: string = `${ item[0] }=${ item[1] }`;
      return (values.length !== i + 1) ? `${ query }&` : query;
    }).join("");
  }
}
