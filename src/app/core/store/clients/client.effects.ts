import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";

import * as actions from "./client.actions";

import { ClientService } from "../../services/clients/clients.service";

@Injectable()
export class ClientEffects {
    list$ = createEffect(() => this.actions$.pipe(
        ofType(actions.StartClientList),
        mergeMap(() => this.clientService.list().pipe(
            map(clients => actions.SuccessClientAction({ clients })),
            catchError(error => of(actions.ClientError({ error })))
        ))
    ));

    constructor(
        private actions$: Actions,
        private clientService: ClientService
    ) {}
}
