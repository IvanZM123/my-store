import { Component, Input } from '@angular/core';

import { Order } from '../../services/orders/order.service';

@Component({
  selector: 'order-sticker',
  templateUrl: './order-sticker.component.html',
  styleUrls: ['./order-sticker.component.css']
})
export class OrderStickerComponent {
  @Input() order!: Order;

  total(order: Order): number {
    return order.quantity * (order.products?.price || 0);
  }
}
