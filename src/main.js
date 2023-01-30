import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data.pokemon);
for(let i= 0; i< data.pokemon.length;i++){
    console.log(data.pokemon[i].name)
}