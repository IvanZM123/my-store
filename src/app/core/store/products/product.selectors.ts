import {
    createFeatureSelector,
    createSelector,
    DefaultProjectorFn,
    MemoizedSelector
} from "@ngrx/store";
import { KeyStore } from "..";
import { Id } from "../../services/BasicServiceCRUD";

import { productAdapter, StateProduct } from "./product.reducers";

export const getStateProduct: MemoizedSelector<
    object,
    StateProduct,
    DefaultProjectorFn<StateProduct>
> = createFeatureSelector(KeyStore.Product);

export const { selectAll } = productAdapter.getSelectors(getStateProduct);

export const selectAllProducts = selectAll;

export const selectProductById = (productId: Id) =>
    createSelector(getStateProduct,
        ({ entities }) => entities[productId]
    )
