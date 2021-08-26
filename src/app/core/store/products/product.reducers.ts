import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on, Action } from "@ngrx/store";

import * as actions from "./product.actions";

import { Product } from "../../services/products/product.service";

export interface StateProduct extends EntityState<Product> {
    error: any;
}

export const productAdapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialProductState = productAdapter.getInitialState({
    error: null
});

export const _productReducer = createReducer(initialProductState,
    on(actions.SuccessProductList, (state, { products }) =>
        productAdapter.addMany(products, { ...state, error: null })
    ),

    on(actions.SuccessProductCreate, (state, { product }) =>
        productAdapter.addOne(product, { ...state, error: null })
    ),

    on(actions.ProductError, (state, { error }) => ({ ...state, error }))
);

export function productReducer(
    state: StateProduct | undefined,
    action: Action
): StateProduct {
    return _productReducer(state, action);
}
