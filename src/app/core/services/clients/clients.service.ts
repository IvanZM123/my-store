import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { BasicServiceCRUD } from '../BasicServiceCRUD';

export interface Client {
  id: number;
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  NIT: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientService extends BasicServiceCRUD<Client> {
  protected readonly url: string = `${ environment.url }/clients`;

  constructor(http: HttpClient) {
    super(http);
  }
}
