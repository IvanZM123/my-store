import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListProductsPageComponent } from './pages/list-products-page/list-products-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { AddProductPageComponent } from './pages/add-product-page/add-product-page.component';

const routes: Routes = [
  {
    path: "",
    component: ListProductsPageComponent
  },
  {
    path: "show/:productId",
    component: ProductDetailsPageComponent
  },
  {
    path: "add",
    component: AddProductPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
