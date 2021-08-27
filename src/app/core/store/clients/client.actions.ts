import { createAction, props } from "@ngrx/store";

import { Client } from "../../services/clients/clients.service";

export const StartClientList = createAction(
    "[Clients] Start Client List"
);

export const SuccessClientAction = createAction(
    "[Clients] Success Client List",
    props<{ clients: Array<Client> }>()
);

export const ClientError = createAction(
    "[Clients] Error",
    props<{ error: any }>()
);
