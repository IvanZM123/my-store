import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { Order } from 'src/app/core/services/orders/order.service';
import { Client } from 'src/app/core/services/clients/clients.service';

import { Store as NgrxStore } from "@ngrx/store";
import { Store } from "src/app/core/store/index";

import { StartOrderList } from 'src/app/core/store/orders/order.actions';
import { StartClientGet } from 'src/app/core/store/clients/client.actions';

import { getOrdersByClientId } from 'src/app/core/store/orders/order.selectors';
import { selectClientById } from 'src/app/core/store/clients/client.selectors';

@Component({
  selector: 'app-client-details-page',
  templateUrl: './client-details-page.component.html',
  styleUrls: ['./client-details-page.component.css']
})
export class ClientDetailsPageComponent implements OnInit, OnDestroy {
  private subscriptions$: Array<Subscription>=[]
  orders$!: Observable<Array<Order>>;
  client$!: Observable<Client>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: NgrxStore<Store>
  ) {}

  ngOnInit(): void {
    const { params } = this.activatedRoute;
    const subscription: Subscription = params.subscribe(({ clientId }) => {
      if (!clientId) throw new Error("The parameter has not been provided");

      this.client$ = this.store.select(
        selectClientById(clientId)
      ) as Observable<Client>;

      this.orders$ = this.store.select(
        getOrdersByClientId(clientId)
      );
        
      this.store.dispatch(StartClientGet({ clientId }));
      
      this.store.dispatch(StartOrderList({
        params: {
          clientsId: clientId,
          _expand: ["products", "clients"]
        }
      }));
    });

    this.subscriptions$.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach(
      item => item?.unsubscribe()
    );
  }
}
