import data from "./data/pokemon/pokemon.js";

const mostrarPoke = document.getElementById("mostrarPoke");

ObtenerPokemon();

function ObtenerPokemon() {
  data.pokemon.forEach((pokemon) => {
    mostrarPoke.innerHTML += `<span> ${pokemon.name} - <img src="${pokemon.img}"></img> </span>`
    console.log(pokemon);
  });
}
