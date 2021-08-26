import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

export interface Client {
  id: number;
  firstName: string;
  lastName: string;
  phone: number;
  NIT: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private readonly url: string = `${ environment.url }/clients`;

  constructor(private http: HttpClient) {}

  list(): Observable<Array<Client>> {
    return this.http.get<Array<Client>>(this.url);
  }
}
