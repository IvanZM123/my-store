import { Component, OnInit } from '@angular/core';
import { OwlOptions } from "ngx-owl-carousel-o";
import { Observable } from 'rxjs';

import { Store as NgrxStore } from "@ngrx/store";
import { Store } from "src/app/core/store/index";

import { StartProductList } from 'src/app/core/store/products/product.actions';

import { selectAllProducts } from 'src/app/core/store/products/product.selectors';

import { Category, CategoryService } from 'src/app/core/services/products/category.service';
import { Product } from 'src/app/core/services/products/product.service';

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
  products$!: Observable<Array<Product>>;

  constructor(
    private categoryService: CategoryService,
    private store: NgrxStore<Store>
  ) {}

  ngOnInit(): void {
    this.categoryService.list().subscribe(
      categories => this.categories = categories
    );

    this.products$ = this.store.select(selectAllProducts);
    this.store.dispatch(StartProductList());
  }
}
