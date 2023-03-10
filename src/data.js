// import pokemon from "./data/pokemon/pokemon.js";
// import { ObtenerPokemon } from "./main.js";
export const filtrarPokemon = (tipo, data) => {
  if(tipo === '') {return false}
  //IF != all else ObtenerPokemon
  if (tipo !== "all") {
    // eslint-disable-next-line eqeqeq
    const pokemonTipos = data.pokemon.filter((poke) => poke.type == tipo);
    return pokemonTipos;
  } else {
    return data.pokemon
  }
};

export function ordenarpoke(order, data) {
  if(order === ''){return false}
  if (order === "asc") {
    return data.pokemon.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  } else {
    return data.pokemon.sort((a, b) => {
      if (a.name > b.name) return -1;
      if (a.name < b.name) return 1;
      return 0;
    });
  }
  
}
