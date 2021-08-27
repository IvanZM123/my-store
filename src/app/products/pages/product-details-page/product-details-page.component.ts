import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Product } from 'src/app/core/services/products/product.service';

import { Store as NgrxStore } from "@ngrx/store";
import { Store } from "src/app/core/store/index";

import { StartProductGet, StartProductList } from 'src/app/core/store/products/product.actions';
import { selectAllProducts, selectProductById } from 'src/app/core/store/products/product.selectors';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})
export class ProductDetailsPageComponent implements OnInit {
  products$!: Observable<Array<Product>>;
  product$!: Observable<Product | undefined>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: NgrxStore<Store>
  ) {}

  ngOnInit(): void {
    const { params } = this.activatedRoute;

    params.subscribe(({ productId }) => {
      this.product$ = this.store.select(
        selectProductById(productId)
      );

      this.products$ = this.store.select(selectAllProducts);
      
      const action = StartProductList({
        params: { _expand: "categories" }
      });
      this.store.dispatch(action);
    });
  }
}
