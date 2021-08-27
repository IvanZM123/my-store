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

  create(payload: Omit<Client, "id">): Observable<Client> {
    return this.http.post<Client>(this.url, payload);
  }

  list(): Observable<Array<Client>> {
    return this.http.get<Array<Client>>(this.url);
  }

  get(id: string | number): Observable<Client> {
    return this.http.get<Client>(`${ this.url }/${ id }`);
  }
}
