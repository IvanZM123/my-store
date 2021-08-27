import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Order } from 'src/app/core/services/orders/order.service';

import { Store as NgrxStore } from "@ngrx/store";
import { Store } from "src/app/core/store/index";

import { StartOrderList } from 'src/app/core/store/orders/order.actions';
import { selectAllOrders } from 'src/app/core/store/orders/order.selectors';

@Component({
  selector: 'app-orderlist-page',
  templateUrl: './orderlist-page.component.html',
  styleUrls: ['./orderlist-page.component.css']
})
export class OrderlistPageComponent implements OnInit {
  orders$!: Observable<Array<Order>>;

  constructor(private store: NgrxStore<Store>) {}

  ngOnInit(): void {
    this.orders$ = this.store.select(selectAllOrders);
    this.store.dispatch(StartOrderList({}));
  }
}
