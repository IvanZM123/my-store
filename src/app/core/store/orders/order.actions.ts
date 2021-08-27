import { createAction, props } from "@ngrx/store";

import { Order } from "../../services/orders/order.service";

export const StartOrderCreate = createAction(
    "[Orders] Start Order Create",
    props<{ payload: Partial<Order> }>()
);

export const SuccessOrderCreate = createAction(
    "[Orders] Success Order Create",
    props<{ order: Order }>()
);

export const StartOrderList = createAction(
    "[Orders] Start Order List",
    props<{ params?: object }>()
);

export const SuccessOrderList = createAction(
    "[Orders] Success Order List",
    props<{ orders: Array<Order> }>()
);

export const OrderError = createAction(
    "[Orders] Order Error",
    props<{ error: any }>()
);
