
import { State, initState } from "./state.js";
export function startREPL(state: State) {
    // rl.prompt();
    state.readline.on("line", async (line) => {
        const input = cleanInput(line);
        if (input.length === 0) {
            state.readline.prompt();
            return;
        }

        const commandName = input[0];
        const command = state.commands[commandName];
        if (!command) {
            throw new Error("Unknown command");
            state.readline.prompt();
            return;
        }
        try {
            await command.callback(state);
        }
        catch (err) {
            console.log(`Something went wrong: ${(err as Error).message}`);
        }
        state.readline.prompt();
    });
}

export function cleanInput(input: string): string[] {
    if (input.trim() === "") {
        return [];
    }
    const words = input.trim().toLowerCase().split(/\s+/);

    return words;
}


