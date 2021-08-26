import { Component, OnInit } from '@angular/core';

import { Client, ClientService } from 'src/app/core/services/clients/clients.service';

@Component({
  selector: 'app-client-list-page',
  templateUrl: './client-list-page.component.html',
  styleUrls: ['./client-list-page.component.css']
})
export class ClientListPageComponent implements OnInit {
  clients: Array<Client> = [];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.list().subscribe(
      clients => this.clients = clients
    );
  }
}
