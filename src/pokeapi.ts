export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    constructor() { }

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        // "https://pokeapi.co/api/v2/location-area/"
        const url = pageURL ?? `${PokeAPI.baseURL}/location-area`;
        const res = await fetch(url);
        const data = (await res.json()) as ShallowLocations;
        return data;
    }

    async fetchLocation(locationName: string): Promise<Location> {
        const locations = await fetch(`${PokeAPI.baseURL}/location-area/${locationName}`);
        const data = await locations.json();
        return data;
    }
}

export type ShallowLocations = {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
        name: string;
        url: string;
    }[];
};


export type Location = {
    id: number;
    name: string;
};