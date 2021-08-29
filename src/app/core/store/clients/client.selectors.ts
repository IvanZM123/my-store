import { createFeatureSelector, createSelector, DefaultProjectorFn, MemoizedSelector } from "@ngrx/store";
import { KeyStore } from "..";
import { Client } from "../../services/clients/clients.service";

import { clientAdapter, StateClient } from "./client.reducers";

const getStateClient: MemoizedSelector<
    object,
    StateClient,
    DefaultProjectorFn<StateClient>
> = createFeatureSelector(KeyStore.Client);

export const { selectAll } = clientAdapter.getSelectors(getStateClient);

export const selectAllClients = selectAll;

export const selectClientsLimit = (limit: number = 10) =>
    createSelector(getStateClient,
        ({ entities }) => Object.keys(entities)
        .filter((_, i) => (i + 1) <= limit)
        .map(key => entities[key]) as Array<Client>
    );

export const selectClientById = (clientId: string | number) =>
    createSelector(getStateClient,
        ({ entities }) => entities[clientId]
    );
