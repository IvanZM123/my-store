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
    autoplay: true,
    loop: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 4
      },
      740: {
        items: 6
      },
      940: {
        items: 8
      },
      1024: {
        items: 10
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
