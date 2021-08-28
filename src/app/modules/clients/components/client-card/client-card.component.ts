import { Component, Input } from '@angular/core';

import { Client } from 'src/app/core/services/clients/clients.service';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css']
})
export class ClientCardComponent {
  @Input() client!: Client | null;
}
