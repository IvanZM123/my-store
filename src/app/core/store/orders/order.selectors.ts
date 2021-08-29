import { createFeatureSelector, createSelector, DefaultProjectorFn, MemoizedSelector } from "@ngrx/store";
import { KeyStore } from "..";

import { Order } from "../../services/orders/order.service";

import { orderAdapter, StateOrder } from "./order.reducers";

export const getStateOrder: MemoizedSelector<
    object,
    StateOrder,
    DefaultProjectorFn<StateOrder>
> = createFeatureSelector(KeyStore.Order);

const { selectAll } = orderAdapter.getSelectors(getStateOrder);

export const selectAllOrders = selectAll;

export const selectOrderLimit = (limit: number = 10) => createSelector(
    getStateOrder,
    ({ entities }) => Object.keys(entities)
    .filter((_, i) => (i + 1) <= limit)
    .map(key => entities[key]) as Array<Order>
);

export const getOrdersByClientId = (clientId: string | number) =>
    createSelector(getStateOrder,
        ({ entities }) => Object.keys(entities)
            .filter(key => entities[key]?.clientsId === Number(clientId))
            .map(key => entities[key] as Order)
    );
