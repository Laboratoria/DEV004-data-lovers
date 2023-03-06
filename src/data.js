// estas funciones son de ejemplo

import pokemon from "./data/pokemon/pokemon.js";
import { ObtenerPokemon } from "./main.js";
export const filtrarPokemon = (tipo) => {
  //IF != all else ObtenerPokemon
  if (tipo !== "all") {
    const pokemonTipos = pokemon.pokemon.filter((poke) => poke.type === tipo);
    return pokemonTipos;
  } else {
    ObtenerPokemon(pokemon.pokemon);
  }
};

export function ordenarpoke(order) {
  if (order === "asc") {
    pokemon.pokemon.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  } else {
    pokemon.pokemon.sort((a, b) => {
      if (a.name > b.name) return -1;
      if (a.name < b.name) return 1;
      return 0;
    });
  }
  ObtenerPokemon(pokemon.pokemon);
}
