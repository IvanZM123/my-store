import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on, Action } from "@ngrx/store";

import { OrderError, SuccessOrderList } from "./order.actions";

import { Order } from "src/app/core/services/orders/order.service";

export interface StateOrder extends EntityState<Order> {
    error: any;
}

export const orderAdapter: EntityAdapter<Order> = createEntityAdapter();

export const initialOrderState = orderAdapter.getInitialState({
    error: null
});

export const _orderReducer = createReducer(initialOrderState,
    on(SuccessOrderList, (state, { orders }) =>
        orderAdapter.addMany(orders, { ...state, error: null })
    ),

    on(OrderError, (state, { error }) => ({ ...state, error }))
);

export function orderReducer(
    state: StateOrder | undefined,
    action: Action
): StateOrder {
    return _orderReducer(state, action);
}
