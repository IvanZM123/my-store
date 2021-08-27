import { createAction, props } from "@ngrx/store";

import { Order } from "../../services/orders/order.service";

export const StartOrderList = createAction(
    "[Orders] Start Order List"
);

export const SuccessOrderList = createAction(
    "[Orders] Success Order List",
    props<{ orders: Array<Order> }>()
);

export const OrderError = createAction(
    "[Orders] Order Error",
    props<{ error: any }>()
);
