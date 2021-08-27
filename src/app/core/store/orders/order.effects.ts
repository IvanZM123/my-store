import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { of } from "rxjs";

import * as actions from "./order.actions";

import { OrderService } from "../../services/orders/order.service";
import { Notifier } from "../../helpers/notifier";

@Injectable()
export class OrderEffects {
    create$ = createEffect(() => this.actions$.pipe(
        ofType(actions.StartOrderCreate),
        mergeMap(({ payload }) => this.orderService.create(payload).pipe(
            tap(() => this.notifier.showNotification({
                color: "success",
                message: "La orden fue creada con exito",
                icon: "check-circle"
            }))
        ))
    ), { dispatch: false });

    list$ = createEffect(() => this.actions$.pipe(
        ofType(actions.StartOrderList),
        mergeMap(() => this.orderService.list().pipe(
            map(orders => actions.SuccessOrderList({ orders })),
            catchError(error => of(actions.OrderError({ error })))
        ))
    ));

    constructor(
        private actions$: Actions,
        private orderService: OrderService,
        private notifier: Notifier
    ) {}
}
