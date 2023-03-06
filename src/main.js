// eslint-disable-next-line no-unused-vars
import pokemon from "./data/pokemon/pokemon.js";
// DIFERENCIA ENTRE EXPORT Y EXPORT DEFAULT
import data from "./data/pokemon/pokemon.js";
import { filtrarPokemon } from "./data.js";


//console.log(data);//
const mostrarPoke = document.getElementById("mostrarPoke");

//funcion para mostrar pokemon desde la data. nombre e imagen, que los divide en grupo
export function ObtenerPokemon(data) {
  data.forEach((pokemon) => {
    mostrarPoke.innerHTML += `<div class="container">
                          
    <div class="card">
    <div class="numpkm">${pokemon.num} </div>
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
  const pokFiltrado = filtrarPokemon(tipo, data.pokemon); // invocación
  ObtenerPokemon(pokFiltrado);
});

// Ordenar Alfabeticamente 

const selectOrdenar = document.getElementById("ordenar");
selectOrdenar.addEventListener ("change", function (){

  const ordenarPoke = selectOrdenar.value
  console.log(selectOrdenar);

})