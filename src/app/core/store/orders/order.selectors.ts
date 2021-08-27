import { createFeatureSelector, DefaultProjectorFn, MemoizedSelector } from "@ngrx/store";
import { KeyStore } from "..";

import { orderAdapter, StateOrder } from "./order.reducers";

export const getStateOrder: MemoizedSelector<
    object,
    StateOrder,
    DefaultProjectorFn<StateOrder>
> = createFeatureSelector(KeyStore.Order);

const { selectAll } = orderAdapter.getSelectors(getStateOrder);

export const selectAllOrders = selectAll;
