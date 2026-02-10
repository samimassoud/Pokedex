import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => Promise<void>;
}

export type State = {
    readline: Interface;
    commands: Record<string, CLICommand>;
    pokeAPI: PokeAPI;
    nextLocationPage: string | null;
    prevLocationPage: string | null;
}

export function initState(): State {
    console.log("Welcome to the Pokedex!");
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });
    rl.prompt();
    const pokeAPI = new PokeAPI();
    let nextLocationPage = null;
    let prevLocationPage = null;
    return {
        readline: rl,
        commands: getCommands(),
        pokeAPI,
        nextLocationPage,
        prevLocationPage
    }
}