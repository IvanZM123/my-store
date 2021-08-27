import { Component, Input } from '@angular/core';

import { Client } from '../../services/clients/clients.service';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})
export class ClientTableComponent {
  @Input() clients!: Array<Client> | null;
}
