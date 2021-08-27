import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store as NgrxStore } from "@ngrx/store";
import { Store } from "src/app/core/store/index";

import { StartClientList } from 'src/app/core/store/clients/client.actions';
import { selectAllClients } from 'src/app/core/store/clients/client.selectors';

import { Client } from 'src/app/core/services/clients/clients.service';

@Component({
  selector: 'app-client-list-page',
  templateUrl: './client-list-page.component.html',
  styleUrls: ['./client-list-page.component.css']
})
export class ClientListPageComponent implements OnInit {
  clients$!: Observable<Array<Client>>;

  constructor(private store: NgrxStore<Store>) {}

  ngOnInit(): void {
    this.clients$ = this.store.select(selectAllClients);
    this.store.dispatch(StartClientList({}));
  }
}
