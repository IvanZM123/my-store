import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { parseParams } from "../helpers/merge.helpers";

export interface Params {
    [key: string]: any
}

export abstract class BasicServiceCRUD<T> {
    protected readonly url!: string;

    constructor(protected http: HttpClient) {}

    list(params?: Params): Observable<Array<T>> {
        const query: string = parseParams(params);
        return this.http.get<Array<T>>(`${ this.url }?${ query }`);
    }

    create(data: Partial<T>): Observable<T> {
        const payload: Partial<T> = {
            ...data,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }

        return this.http.post<T>(this.url, payload);
    }
}
