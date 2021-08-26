import { Component, OnInit } from '@angular/core';
import { OwlOptions } from "ngx-owl-carousel-o";

import { Category, CategoryService } from 'src/app/core/services/products/category.service';
import { Product, ProductService } from 'src/app/core/services/products/product.service';

@Component({
  selector: 'app-list-products-page',
  templateUrl: './list-products-page.component.html',
  styleUrls: ['./list-products-page.component.css']
})
export class ListProductsPageComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 12
      }
    },
  }
  categories: Array<Category> = [];
  products: Array<Product> = [];

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.categoryService.list().subscribe(
      categories => this.categories = categories
    );

    this.productService.list().subscribe(
      products => this.products = products
    );
  }
}
