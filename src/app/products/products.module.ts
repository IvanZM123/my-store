import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from "ngx-owl-carousel-o";
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';

import { ListProductsPageComponent } from './pages/list-products-page/list-products-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { AddProductPageComponent } from './pages/add-product-page/add-product-page.component';

import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    ListProductsPageComponent,
    ProductDetailsPageComponent,
    AddProductPageComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    CarouselModule
  ]
})
export class ProductsModule {}
