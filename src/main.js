import data from "./data/pokemon/pokemon.js";
import { filtrarPokemon, ordenarpoke, calcularCP } from "./data.js"; //se agrega la funcion ordenarpoke
// import pokemon from "./data/pokemon/pokemon.js";

const mostrarPoke = document.getElementById("mostrarPoke");

//funcion para mostrar pokemon desde la data. nombre e imagen, que los divide en grupo
export function ObtenerPokemon(data) {
  data.forEach((pokemon) => {
    mostrarPoke.innerHTML += `<div class="container">
    <div class="card">
      <div class="cardSuperior">
      <div class="puntosComb"> CP: ${pokemon.stats["max-cp"]} </div>
      <div class="numpkm">${pokemon.num} </div>
      </div>
          <img src="${pokemon.img}" class= "cardImg" alt="${pokemon.name}" ></img>
          <h4>${pokemon.name} </h4>
          <h5>${pokemon.type} </h5>
          <p>${pokemon.about} </p>
      </div>
    </div>`;
  });
}

ObtenerPokemon(data.pokemon); //argumento de tipo array

const selectTipos = document.getElementById("tipos");

selectTipos.addEventListener("change", function () {
  
  const verPokemones = document.getElementById("mostrarPoke");
  verPokemones.innerHTML = "";

  const tipo = selectTipos.value;

  const pokFiltrado = filtrarPokemon(tipo, data);
  ObtenerPokemon(pokFiltrado);
});

// Ordenar Alfabeticamente 

const selectOrdenar = document.getElementById("ordenar");
selectOrdenar.addEventListener ("change", function (){
  mostrarPoke.innerHTML = "";
  const order = selectOrdenar.value ;
  const pokOrdenado = ordenarpoke(order, data);
  ObtenerPokemon(pokOrdenado);


})


// maximo y minimo cp

const selectCalcular = document.getElementById("calcular");
selectCalcular.addEventListener ("change", function(){
  mostrarPoke.innerHTML = "";

  const calcular = selectCalcular.value ;
  const calcularPokeCP = calcularCP(calcular,data);
  ObtenerPokemon(calcularPokeCP);



})