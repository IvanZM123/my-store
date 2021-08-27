import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Order } from 'src/app/core/services/orders/order.service';

import { Store as NgrxStore } from "@ngrx/store";
import { Store } from "src/app/core/store/index";

import { StartOrderList } from 'src/app/core/store/orders/order.actions';
import { getOrdersByClientId } from 'src/app/core/store/orders/order.selectors';

import { Client, ClientService } from 'src/app/core/services/clients/clients.service';

@Component({
  selector: 'app-client-details-page',
  templateUrl: './client-details-page.component.html',
  styleUrls: ['./client-details-page.component.css']
})
export class ClientDetailsPageComponent implements OnInit {
  orders$!: Observable<Array<Order>>;
  client: Client | null=  null;

  constructor(
    private clientService: ClientService,
    private activatedRoute: ActivatedRoute,
    private store: NgrxStore<Store>
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ clientId }) => {
      if (!clientId) throw new Error("Dont params provide");

      this.clientService.get(clientId).subscribe(
        client => this.client = client,
        error => console.error(error)
      );

      this.orders$ = this.store.select(
        getOrdersByClientId(clientId)
      );

      this.store.dispatch(StartOrderList({
        params: { clientsId: clientId }
      }));
    });
  }
}
