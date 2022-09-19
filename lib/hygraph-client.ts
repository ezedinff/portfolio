import { HYGRAPH_URL } from './constants';

export const hygraphClient = async (query: string, variables?: Record<string, any>) => {
    const requestBody = {
        query,
        variables
    };
    const headers = {
        'Content-Type': 'application/json'
    };
    const res = await fetch(HYGRAPH_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify(requestBody),
    })
    const json = await res.json();

    if (json.errors) {
        console.error(json.errors);
        throw new Error(json.errors[0].message);
    }

    return json.data;
};