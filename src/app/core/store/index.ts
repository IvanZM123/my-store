import { ActionReducerMap } from "@ngrx/store";
import { ProductEffects } from "./products/product.effects";
import {
    initialProductState,
    productReducer,
    StateProduct
} from "./products/product.reducers";

export enum KeyStore {
    Product = "productStore"
}

export interface Store {
    [KeyStore.Product]: StateProduct
}

export const initialStateStore: Store = {
    [KeyStore.Product]: initialProductState
}

export const reducers: ActionReducerMap<Store> = {
    [KeyStore.Product]: productReducer
}

export const effects = [
    ProductEffects
]
