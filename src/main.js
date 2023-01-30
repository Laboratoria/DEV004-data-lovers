import { anotherExample } from './data.js';
// npm start import data from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(anotherExample)

const pokemonDB = data.pokemon

console.log("pokemonDB =")
console.log(pokemonDB)
console.log("pokemonDB[0] =")
console.log(pokemonDB[0])
console.log("pokemonDB[0].generation =")
console.log(pokemonDB[0].generation.name)
console.log("pokemonDB[0].generation.name =")
console.log(pokemonDB[0].generation.name)
