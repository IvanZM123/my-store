import { ActionReducerMap } from "@ngrx/store";

import { ClientEffects } from "./clients/client.effects";
import { ProductEffects } from "./products/product.effects";

import { clientReducer, initialClientState, StateClient } from "./clients/client.reducers";
import { initialProductState, productReducer, StateProduct } from "./products/product.reducers";

export enum KeyStore {
    Product = "productStore",
    Client  = "clientStore"
}

export interface Store {
    [KeyStore.Product] : StateProduct,
    [KeyStore.Client]  : StateClient
}

export const initialStateStore: Store = {
    [KeyStore.Product] : initialProductState,
    [KeyStore.Client]  : initialClientState
}

export const reducers: ActionReducerMap<Store> = {
    [KeyStore.Product] : productReducer,
    [KeyStore.Client]  : clientReducer
}

export const effects = [
    ProductEffects,
    ClientEffects
];
