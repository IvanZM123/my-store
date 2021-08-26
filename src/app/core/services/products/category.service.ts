import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

export interface Category {
  id: string;
  name: string;
  logo: string;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url: string = `${ environment.url }/categories`;

  constructor(private http: HttpClient) {}

  list(): Observable<Array<Category>> {
    return this.http.get<Array<Category>>(this.url);
  }
}
