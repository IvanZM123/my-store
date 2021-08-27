import { createAction, props } from "@ngrx/store";

import { Client } from "../../services/clients/clients.service";

export const StartClientCreate = createAction(
    "[Clients] Start Client Create",
    props<{ payload: Omit<Client, "id"> }>()
);

export const SuccessClientCreate = createAction(
    "[Clients] Success Client Create",
    props<{ client: Client }>()
);

export const StartClientList = createAction(
    "[Clients] Start Client List"
);

export const SuccessClientList = createAction(
    "[Clients] Success Client List",
    props<{ clients: Array<Client> }>()
);

export const ClientError = createAction(
    "[Clients] Error",
    props<{ error: any }>()
);
