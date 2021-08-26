import { createAction, props } from "@ngrx/store";
import { Product } from "../../services/products/product.service";

export const StartProductCreate = createAction(
    "[Products] Start Product Create",
    props<{ payload: Omit<Product, "id"> }>()
);

export const SuccessProductCreate = createAction(
    "[Products] Success Product Create",
    props<{ product: Product }>()
);

export const StartProductList = createAction(
    "[Products] Start Product List"
);

export const SuccessProductList = createAction(
    "[Products] Success Product List",
    props<{ products: Array<Product> }>()
);

export const ProductError = createAction(
    "[Products] Error",
    props<{ error: any }>()
);
