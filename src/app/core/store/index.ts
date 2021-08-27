import { ActionReducerMap } from "@ngrx/store";

import { ClientEffects } from "./clients/client.effects";
import { ProductEffects } from "./products/product.effects";
import { OrderEffects } from "./orders/order.effects";

import { clientReducer, initialClientState, StateClient } from "./clients/client.reducers";
import { initialProductState, productReducer, StateProduct } from "./products/product.reducers";
import { initialOrderState, orderReducer, StateOrder } from "./orders/order.reducers";

export enum KeyStore {
    Product = "productStore",
    Client  = "clientStore",
    Order   = "orderStore"
}

export interface Store {
    [KeyStore.Product] : StateProduct,
    [KeyStore.Client]  : StateClient,
    [KeyStore.Order]   : StateOrder
}

export const initialStateStore: Store = {
    [KeyStore.Product] : initialProductState,
    [KeyStore.Client]  : initialClientState,
    [KeyStore.Order]   : initialOrderState
}

export const reducers: ActionReducerMap<Store> = {
    [KeyStore.Product] : productReducer,
    [KeyStore.Client]  : clientReducer,
    [KeyStore.Order]   : orderReducer
}

export const effects = [
    ProductEffects,
    ClientEffects,
    OrderEffects
];
