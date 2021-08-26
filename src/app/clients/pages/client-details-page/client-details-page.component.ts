import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Client, ClientService } from 'src/app/core/services/clients/clients.service';

@Component({
  selector: 'app-client-details-page',
  templateUrl: './client-details-page.component.html',
  styleUrls: ['./client-details-page.component.css']
})
export class ClientDetailsPageComponent implements OnInit {
  client: Client | null=  null;

  constructor(
    private clientService: ClientService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ clientId }) => {
      this.clientService.get(clientId).subscribe(
        client => this.client = client,
        error => console.error(error)
      )
    });
  }
}
