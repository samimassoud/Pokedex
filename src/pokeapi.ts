import { Cache } from "./pokecache.js";
export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";
    private cache: Cache;
    constructor(cache: Cache) {
        this.cache = cache;
    }

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        // "https://pokeapi.co/api/v2/location-area/"
        const url = pageURL ?? `${PokeAPI.baseURL}/location-area`;
        const cached = this.cache.get<ShallowLocations>(url);
        if (cached) {
            return cached;
        }
        const resp = await fetch(url);
        if (resp.status === 200) {
            const data = (await resp.json()) as ShallowLocations;
            this.cache.add(url, data);
            return data;
        }
        throw new Error(`Failed to fetch locations: ${resp.statusText}`);

    }

    async fetchLocation(locationName: string): Promise<Location> {
        const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
        const cached = this.cache.get<Location>(url);
        if (cached) {
            return cached;
        }
        const resp = await fetch(url);
        if (resp.status === 200) {
            const data = (await resp.json()) as Location;
            this.cache.add(url, data);
            return data;
        }
        throw new Error(`Failed to fetch location: ${resp.statusText}`);
    }

    async fetchPokemon(pokemonName: string) {
        const url = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;
        const cached = this.cache.get(url);
        if (cached) {
            return cached;
        }
        const resp = await fetch(url);
        if (resp.status === 200) {
            const data = (await resp.json()) as Pokemon;
            this.cache.add(url, data);
            return data;
        }
        throw new Error(`Failed to fetch pokemon: ${resp.statusText}`);
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
    pokemon_encounters: {
        pokemon: {
            name: string;
        };
    }[];
};

export type Pokemon = {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    stats: {
        base_stat: number;
        stat: {
            name: string;
        };
    }[];
    types: {
        type: {
            name: string;
        };
    }[];
}