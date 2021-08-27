import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";

import * as actions from "./order.actions";

import { OrderService } from "../../services/orders/order.service";

@Injectable()
export class OrderEffects {
    list$ = createEffect(() => this.actions$.pipe(
        ofType(actions.StartOrderList),
        mergeMap(() => this.orderService.list().pipe(
            map(orders => actions.SuccessOrderList({ orders })),
            catchError(error => of(actions.OrderError({ error })))
        ))
    ));

    constructor(
        private actions$: Actions,
        private orderService: OrderService
    ) {}
}
