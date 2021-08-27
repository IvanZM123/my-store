import { Params } from "../services/BasicServiceCRUD"

export function parseParams(params?: Params): string {
    if (!params) return "";

    const items = Object.entries(params);
    
    const entities: Array<string> = items.map(item => {
        const [key, value] = item;
        let query: string = "";

        if (Array.isArray(value)) {
            value.forEach(content => query += `${ key }=${ content }&`)
        } else {
            query += `${ key }=${ value }&`;
        }

        return query;
    });

    return entities.join("");
}
