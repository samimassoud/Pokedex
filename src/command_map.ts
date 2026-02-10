import { State } from "./state.js";
export async function commandMap(state: State) {
    const locations = await state.pokeAPI.fetchLocations(state.nextLocationPage ?? undefined);
    state.nextLocationPage = locations.next;
    state.prevLocationPage = locations.previous;
    for (const location of locations.results) {
        console.log(location.name);
    }
}

export async function commandMapB(state: State) {
    if (state.prevLocationPage === null) {
        console.log("you're on the first page");
        return;
    }
    const locations = await state.pokeAPI.fetchLocations(state.prevLocationPage);
    state.nextLocationPage = locations.next;
    state.prevLocationPage = locations.previous;
    for (const location of locations.results) {
        console.log(location.name);
    }
}