import data from "./data/pokemon/pokemon.js";


const mostrarPoke = document.getElementById("mostrarPoke");

ObtenerPokemon();

function ObtenerPokemon() {
  data.pokemon.forEach((pokemon) => {
    
    mostrarPoke.innerHTML += `<div class="container">
                          
                          <div class="card">
                              <img src="${pokemon.img}" class= "cardImg" alt="${pokemon.name}" ></img>
                              <h4>${pokemon.name} </h4>
                              <p>${pokemon.about} </p>
                          </div>
    </div>`
     
  });
}

