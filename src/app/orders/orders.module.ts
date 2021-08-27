import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';

import { AngularMaterial } from '../core/material/angular-material';

import { OrderlistPageComponent } from './pages/orderlist-page/orderlist-page.component';
import { OrderCreatePageComponent } from './pages/order-create-page/order-create-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OrderlistPageComponent,
    OrderCreatePageComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    AngularMaterial,
    ReactiveFormsModule
  ]
})
export class OrdersModule {}
