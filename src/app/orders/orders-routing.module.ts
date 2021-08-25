import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderCreatePageComponent } from './pages/order-create-page/order-create-page.component';
import { OrderlistPageComponent } from './pages/orderlist-page/orderlist-page.component';

const routes: Routes = [
  {
    path: "",
    component: OrderlistPageComponent
  },
  {
    path: "create",
    component: OrderCreatePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {}
