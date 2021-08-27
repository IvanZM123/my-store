import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { of } from "rxjs";

import * as actions from "./product.actions";

import { ProductService } from "../../services/products/product.service";

import { Notifier } from "../../helpers/notifier";

@Injectable()
export class ProductEffects {
    create$ = createEffect(() => this.actions$.pipe(
        ofType(actions.StartProductCreate),
        mergeMap(({ payload }) => this.productService.create(payload).pipe(
            map(product => actions.SuccessProductCreate({ product })),
            tap(({ product }) => this.notifier.showNotification({
                icon: "check-circle",
                message: `${ product.name } fue agregado con exito`,
                color: "success"
            })),
            tap(() => this.router.navigate(["products"])),
            catchError(error => of(actions.ProductError({ error })))
        ))
    ));

    list$ = createEffect(() => this.actions$.pipe(
        ofType(actions.StartProductList),
        mergeMap(({ params }) => this.productService.list(params).pipe(
            map(products => actions.SuccessProductList({ products })),
            catchError(error => of(actions.ProductError({ error })))
        ))
    ));

    constructor(
        private actions$: Actions,
        private notifier: Notifier,
        private productService: ProductService,
        private router: Router
    ) {}
}
