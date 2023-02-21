import data from "./data/pokemon/pokemon.js";

console.log(data);
const mostrarPoke = document.getElementById("mostrarPoke");

ObtenerPokemon();

function ObtenerPokemon() {
  data.pokemon.forEach((pokemon) => {
    mostrarPoke.innerHTML += `<div class="card">`+ 
                                `<h6>${pokemon.name}</h6>`+
                                  `<div class="imgcard">`+ 
                                    `<img src="${pokemon.img}"></img>`+ 
                                  `</div>`+ 
                              `</div>`;
    console.log(pokemon);
  });
}
