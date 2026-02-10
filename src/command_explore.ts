import { State } from "./state.js";
export async function commandExplore(state: State, locationName: string) {
    const location = await state.pokeAPI.fetchLocation(locationName);
    for (const encounter of location.pokemon_encounters) {
        console.log(`- ${encounter.pokemon.name}`);
    }
}