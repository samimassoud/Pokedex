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
npm install```

---

## Usage
Run the project in development mode:

```bash
npm run dev```

Build and run:

```bash
npm run build
npm start```

Run tests:

```bash
npm test```

---

## Example

```bash
> npm run dev
Enter a Pokemon name: charmander
Result:
{ "id": 4, "name": "charmander", "types": ["fire"], "stats": { "hp": 39, "attack": 52, "defense": 43 } }```

---

## Learning Outcomes

- Practiced backend fundamentals with TypeScript
- Strengthened understanding of API consumption and data handling
- Applied test-driven development principles
- Built confidence in modular design and type safety

---

## References


---

## Acknowledgments
This project was built as part of the Boot.dev backend roadmap, serving as a milestone in learning TypeScript, API integration, and clean backend design.
