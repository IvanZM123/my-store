import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on, Action } from "@ngrx/store";

import {
    SuccessProductCreate,
    SuccessProductGet,
    SuccessProductList,
    ProductError
} from "./product.actions";

import { Product } from "../../services/products/product.service";

export interface StateProduct extends EntityState<Product> {
    error: any;
}

export const productAdapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialProductState = productAdapter.getInitialState({
    error: null
});

export const _productReducer = createReducer(initialProductState,
    on(SuccessProductList, (state, { products }) =>
        productAdapter.addMany(products, { ...state, error: null })
    ),

    on(SuccessProductCreate, (state, { product }) =>
        productAdapter.addOne(product, { ...state, error: null })
    ),

    on(SuccessProductGet, (state, { product }) =>
        productAdapter.addOne(product, { ...state, error: null })
    ),

    on(ProductError, (state, { error }) => ({ ...state, error }))
);

export function productReducer(
    state: StateProduct | undefined,
    action: Action
): StateProduct {
    return _productReducer(state, action);
}
