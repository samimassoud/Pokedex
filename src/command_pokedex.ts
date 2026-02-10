import { State } from "./state.js";

export async function commandPokedex(state: State) {
    const pokedex = state.pokeDex;
    if (Object.keys(pokedex).length === 0) {
        console.log("Your Pokedex is empty.");
        return;
    }
    console.log("Your Pokedex:");
    for (const pokemonName in pokedex) {
        console.log(`- ${pokemonName}`);
    }
}