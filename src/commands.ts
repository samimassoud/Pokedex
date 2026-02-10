import { commandHelp } from "./command_help.js";
import { CLICommand } from "./state.js";
import { commandExit } from "./command_exit.js";
import { commandMap, commandMapB } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";

export function getCommands(): Record<string, CLICommand> {
    return {
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },

        exit: {
            name: "exit",
            description: "Exit the pokedex",
            callback: commandExit,
        },

        map: {
            name: "map",
            description: "List location areas",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "List previous location areas",
            callback: commandMapB,
        },
        explore: {
            name: "explore",
            description: "List pokemon encounters in a location",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "Catch a pokemon",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect",
            description: "Inspect a pokemon in your pokedex",
            callback: commandInspect,
        },
        pokedex: {
            name: "pokedex",
            description: "List all pokemon in your pokedex",
            callback: commandPokedex
        }
    }
}