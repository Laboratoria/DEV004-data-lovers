

import pokemon from "./data/pokemon/pokemon.js";
import { ObtenerPokemon } from "./main.js"


export const filtrarPokemon = (tipo) => {
 
  if ( tipo != "all"){
    const pokemonTipos = pokemon.pokemon.filter(poke => poke.type== tipo);
    return pokemonTipos;
  } else {
    ObtenerPokemon(pokemon.pokemon);
  }
};

export const ordenarPoke = (ordenar) =>{

  const pokeOrden = pokemon.sort( (a,b) => {
    if(a.name > b.name){
      return -1;
    }
    if (a.name < b.name){
      return 1;
    }
    return 0;

  })
 return 

}