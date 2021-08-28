import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { OrdersRoutingModule } from './orders-routing.module';

import { GeneralComponentModule } from '../../core/shared/general-component.module';

import { OrderlistPageComponent } from './pages/orderlist-page/orderlist-page.component';
import { OrderCreatePageComponent } from './pages/order-create-page/order-create-page.component';

@NgModule({
  declarations: [
    OrderlistPageComponent,
    OrderCreatePageComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ReactiveFormsModule,
    GeneralComponentModule
  ]
})
export class OrdersModule {}
