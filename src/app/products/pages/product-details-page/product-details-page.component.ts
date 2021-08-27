import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { Product } from 'src/app/core/services/products/product.service';
import { Id } from 'src/app/core/services/BasicServiceCRUD';

import { Store as NgrxStore } from "@ngrx/store";
import { Store } from "src/app/core/store/index";

import { StartProductList } from 'src/app/core/store/products/product.actions';
import { selectProductByCategoryId, selectProductById } from 'src/app/core/store/products/product.selectors';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})
export class ProductDetailsPageComponent implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription> = [];
  product$!: Observable<Product | undefined>;
  products$!: Observable<Array<Product>>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: NgrxStore<Store>
  ) {}

  ngOnInit(): void {
    const { params } = this.activatedRoute;

    const paramsSubscription = params.subscribe(({ productId }) => {
      this.product$ = this.store.select(
        selectProductById(productId)
      );

      const productSubscription = this.product$.subscribe(product => {
        const selector = selectProductByCategoryId(product?.categoriesId as Id)
        this.products$ = this.store.select(selector)
      });
      this.subscriptions.push(productSubscription);

      this.store.dispatch(StartProductList({
        params: { _expand: "categories" }
      }));
    });

    this.subscriptions.push(paramsSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(
      item => item?.unsubscribe()
    );
  }
}
