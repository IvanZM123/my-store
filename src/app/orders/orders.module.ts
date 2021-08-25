import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';

import { OrderlistPageComponent } from './pages/orderlist-page/orderlist-page.component';
import { OrderCreatePageComponent } from './pages/order-create-page/order-create-page.component';

@NgModule({
  declarations: [
    OrderlistPageComponent,
    OrderCreatePageComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
