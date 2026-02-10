import { Pokemon } from "./pokeapi.js";
import { State } from "./state.js";

export async function commandCatch(state: State, pokemonName: string) {
    if (state.pokeDex[pokemonName]) {
        console.log(`You already have ${pokemonName} in your Pokedex!`);
        return;
    }
    console.log(`Throwing a Pokeball at ${pokemonName}...`);
    const pokemon = await state.pokeAPI.fetchPokemon(pokemonName) as Pokemon;
    const base_experience = pokemon.base_experience;
    const randomValue = Math.random() * base_experience;
    if (randomValue > base_experience / 2) {
        console.log(`${pokemon.name} was caught!`);
        state.pokeDex[pokemon.name] = pokemon;
    }
    else {
        console.log(`${pokemon.name} escaped!`);
    }

}