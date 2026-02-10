import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI, Pokemon } from "./pokeapi.js";
import { Cache } from "./pokecache.js";
export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
}

export type State = {
    readline: Interface;
    commands: Record<string, CLICommand>;
    pokeAPI: PokeAPI;
    nextLocationPage: string | null;
    prevLocationPage: string | null;
    pokeDex: Record<string, Pokemon>;
}

export function initState(): State {
    console.log("Welcome to the Pokedex!");
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });
    rl.prompt();
    const cache = new Cache(5000);
    const pokeAPI = new PokeAPI(cache);
    let nextLocationPage = null;
    let prevLocationPage = null;
    let pokeDex: Record<string, Pokemon> = {};
    return {
        readline: rl,
        commands: getCommands(),
        pokeAPI,
        nextLocationPage,
        prevLocationPage,
        pokeDex
    }
}