import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeAll, mergeMap, tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { of } from "rxjs";

import * as actions from "./client.actions";

import { Notifier } from "../../helpers/notifier";

import { ClientService } from "../../services/clients/clients.service";

@Injectable()
export class ClientEffects {
    create$ = createEffect(() => this.actions$.pipe(
        ofType(actions.StartClientCreate),
        mergeMap(({ payload }) => this.clientService.create(payload).pipe(
            map(client => actions.SuccessClientCreate({ client })),
            tap(({ client }) => this.notifier.showNotification({
                icon: "check-circle",
                message: `${ client.firstName } se agrego a la lista de clientes`,
                color: "success"
            })),
            tap(() => this.router.navigate(["clients"])),
            catchError(error => of(actions.ClientError({ error })))
        ))
    ));

    get$ = createEffect(() => this.actions$.pipe(
        ofType(actions.StartClientGet),
        mergeMap(({ clientId }) => this.clientService.get(clientId).pipe(
            map(client => actions.SuccessClientGet({ client })),
            catchError(error => of(actions.ClientError({ error })))
        ))
    ));

    list$ = createEffect(() => this.actions$.pipe(
        ofType(actions.StartClientList),
        mergeMap(() => this.clientService.list().pipe(
            map(clients => actions.SuccessClientList({ clients })),
            catchError(error => of(actions.ClientError({ error })))
        ))
    ));

    constructor(
        private actions$: Actions,
        private clientService: ClientService,
        private notifier: Notifier,
        private router: Router
    ) {}
}
