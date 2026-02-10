import { commandHelp } from "./command_help.js";
import { CLICommand } from "./state.js";
import { commandExit } from "./command_exit.js";
import { commandMap, commandMapB } from "./command_map.js";

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
        }
    }
}