# Pokedex Backend

A backend project from Boot.dev’s roadmap, built in **TypeScript** with the [PokéAPI](https://pokeapi.co).  
This application fetches and serves Pokémon data, practicing **API integration**, **type safety**, and **modular design**.  
The project emphasizes **clean code**, **test-driven development**, and strengthening backend fundamentals.

---

## Features
- Query Pokémon details via the PokéAPI
- Strong TypeScript typing for safer development
- Modular, maintainable code structure
- Test-driven development with [Vitest](https://vitest.dev)
- CLI interaction using Node.js `readline`

---

## Tech Stack
- **Language:** TypeScript  
- **Runtime:** Node.js  
- **Testing:** Vitest  
- **API:** PokéAPI  
- **Utilities:** [pokenode-ts](https://github.com/Gabb-c/pokenode-ts) wrapper for built-in types

---

## Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/samimassoud/Pokedex.git
cd Pokedex
npm install
```

---

## Usage
Run the project in development mode:

```bash
npm run dev
```

Build and run:

```bash
npm run build
npm start
```

Run tests:

```bash
npm test
```

---

## Example

```bash
> npm run dev
Pokedex > help
Welcome to the Pokedex!
Usage:
help: Displays a help message
exit: Exit the pokedex
map: List location areas
mapb: List previous location areas
explore: List pokemon encounters in a location
catch: Catch a pokemon
inspect: Inspect a pokemon in your pokedex
pokedex: List all pokemon in your pokedex
```

---

## Learning Outcomes

- Practiced backend fundamentals with TypeScript
- Strengthened understanding of API consumption and data handling
- Applied test-driven development principles
- Built confidence in modular design and type safety

---

## References

- [PokéAPI](https://pokeapi.co)
- [PokéAPI Documentation](https://pokeapi.co/docs/v2)
- [pokenode-ts Wrapper](https://github.com/Gabb-c/pokenode-ts)
- [Vitest Testing Framework](https://vitest.dev/api)
- [Node.js Readline Documentation](https://nodejs.org/api/readline.html)
- [Boot.dev Backend Roadmap](https://www.boot.dev/lessons/a634e1eb-5c90-4463-8164-484def656040)
- [Test-driven Development (Wikipedia)](https://en.wikipedia.org/wiki/Test-driven_development)
- [TypeScript Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [RFC 3986: URI Generic Syntax](https://www.rfc-editor.org/rfc/rfc3986)
- [Math.random() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

---

## Acknowledgments
This project was built as part of the Boot.dev backend roadmap, serving as a milestone in learning TypeScript, API integration, and clean backend design.
