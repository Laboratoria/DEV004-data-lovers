import data from "./data/pokemon/pokemon.js";

console.log(data);
const mostrarPoke = document.getElementById("mostrarPoke");
const btn = document.getElementById("btn");

ObtenerPokemon();
//funcion para mostrar pokemon desde la data. nombre e imagen, que los divide en grupo
function ObtenerPokemon() {
  data.pokemon.forEach((pokemon) => {
    mostrarPoke.innerHTML += `<div class="card">`+ 
                                  `<div class="imgcard">`+ 
                                    `<img src="${pokemon.img}"></img>`+ 
                                  `</div>`+ 
                                  `<h6>${pokemon.name}</h6>`+
                              `</div>`;
    console.log(pokemon);
  });
}

