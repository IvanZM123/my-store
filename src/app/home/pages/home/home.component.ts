import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Client } from 'src/app/core/services/clients/clients.service';

import { Store as NgrxStore } from "@ngrx/store";
import { Store } from "src/app/core/store/index";

import { StartClientList } from 'src/app/core/store/clients/client.actions';
import { selectAllClients } from 'src/app/core/store/clients/client.selectors';
import { StartOrderList } from 'src/app/core/store/orders/order.actions';
import { Order } from 'src/app/core/services/orders/order.service';
import { selectAllOrders } from 'src/app/core/store/orders/order.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items = [
    {
      title: "Lista de productos",
      subtitle: "Encuentra nuestros productos",
      image: "https://image.flaticon.com/icons/png/512/2250/2250295.png",
      color: "brown",
      route: "products"
    },
    {
      title: "Lista de clientes",
      subtitle: "Nuestros clientes mas fieles",
      image: "https://image.flaticon.com/icons/png/512/4149/4149883.png",
      color: "green",
      route: "clients"
    },
    {
      title: "Lista de ordenes",
      subtitle: "Todas las ordenes",
      image: "https://image.flaticon.com/icons/png/512/5439/5439012.png",
      color: "yellow",
      route: "orders"
    }
  ];
  clients$!: Observable<Array<Client>>;
  orders$!: Observable<Array<Order>>;

  constructor(private store: NgrxStore<Store>) {}

  ngOnInit(): void {
    this.clients$ = this.store.select(selectAllClients);
    this.store.dispatch(StartClientList({ params: { _limit: 5 } }));

    this.orders$ = this.store.select(selectAllOrders);
    this.store.dispatch(StartOrderList({ params: {
      _limit: 5,
      _expand: ["products", "clients"]
    } }));
  }
}
