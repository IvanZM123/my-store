import { createFeatureSelector, DefaultProjectorFn, MemoizedSelector } from "@ngrx/store";
import { KeyStore } from "..";

import { clientAdapter, StateClient } from "./client.reducers";

const getStateClient: MemoizedSelector<
    object,
    StateClient,
    DefaultProjectorFn<StateClient>
> = createFeatureSelector(KeyStore.Client);

export const { selectAll } = clientAdapter.getSelectors(getStateClient);

export const selectAllClients = selectAll;
