import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { Client } from '../clients/clients.service';
import { Product } from '../products/product.service';

import { BasicServiceCRUD } from '../BasicServiceCRUD';

export interface Order {
  id: string;
  quantity: number;
  productsId: number | string;
  clientsId: number | string;
  products?: Product;
  clients?: Client;
  createdAt: string;
  updatedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BasicServiceCRUD<Order> {
  protected readonly url: string = `${ environment.url }/orders`;

  constructor(protected http: HttpClient) {
    super(http);
  }
}
