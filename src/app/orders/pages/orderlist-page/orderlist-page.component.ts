import { Component, OnInit } from '@angular/core';

import { Order, OrderService } from 'src/app/core/services/orders/order.service';

@Component({
  selector: 'app-orderlist-page',
  templateUrl: './orderlist-page.component.html',
  styleUrls: ['./orderlist-page.component.css']
})
export class OrderlistPageComponent implements OnInit {
  orders: Array<Order> = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.list().subscribe(
      orders => this.orders = orders
    );
  }
}
