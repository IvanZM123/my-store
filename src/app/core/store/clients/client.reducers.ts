import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on, Action } from "@ngrx/store";

import { ClientError, SuccessClientAction } from "./client.actions";

import { Client } from "../../../core/services/clients/clients.service";

export interface StateClient extends EntityState<Client> {
    error: any;
}

export const clientAdapter: EntityAdapter<Client> = createEntityAdapter();

export const initialClientState = clientAdapter.getInitialState({
    error: null
});

const _clientReducer = createReducer(initialClientState,
    on(SuccessClientAction, (state, { clients }) =>
        clientAdapter.addMany(clients, { ...state, error: null })
    ),

    on(ClientError, (state, { error }) => ({ ...state, error }))
);

export function clientReducer(
    state: StateClient | undefined,
    action: Action
): StateClient {
    return _clientReducer(state, action);
}
