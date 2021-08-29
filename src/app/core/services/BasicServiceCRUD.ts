import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { parseParams } from "../helpers/merge.helpers";

export interface Params {
    [key: string]: any
}

export type Id = string | number;

export abstract class BasicServiceCRUD<T> {
    protected readonly url!: string;

    constructor(protected http: HttpClient) {}

    /**
     * Create a new resource.
     * @param data 
     * @returns 
     */
    create(data: Partial<T>): Observable<T> {
        const payload: Partial<T> = {
            ...data,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }

        return this.http.post<T>(this.url, payload);
    }

    /**
     * Get a list of resources.
     * @param params 
     * @returns 
     */
    list(params?: Params): Observable<Array<T>> {
        const query: string = parseParams(params);
        return this.http.get<Array<T>>(`${ this.url }?${ query }`);
    }

    /**
     * Get a resource by Id.
     * @param id 
     * @param params 
     * @returns 
     */
    get(id: Id, params?: Params): Observable<T> {
        const query: string = parseParams(params);
        const url: string = `${ this.url }/${ id }?${ query }`;
        return this.http.get<T>(url)
    }
}
