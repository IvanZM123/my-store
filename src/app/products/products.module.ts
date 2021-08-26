import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from "ngx-owl-carousel-o";

import { ProductsRoutingModule } from './products-routing.module';

import { ListProductsPageComponent } from './pages/list-products-page/list-products-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { AddProductPageComponent } from './pages/add-product-page/add-product-page.component';

@NgModule({
  declarations: [
    ListProductsPageComponent,
    ProductDetailsPageComponent,
    AddProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CarouselModule
  ]
})
export class ProductsModule {}
