import pokemon from "./data/pokemon/pokemon.js";
// DIFERENCIA ENTRE EXPORT Y EXPORT DEFAULT
import data from "./data/pokemon/pokemon.js";
import { filtrarPokemon } from "./data.js";

//console.log(data);//
const mostrarPoke = document.getElementById("mostrarPoke");

//funcion para mostrar pokemon desde la data. nombre e imagen, que los divide en grupo
function ObtenerPokemon(data) {
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
  console.log(selectTipos.value);
  const tipo = selectTipos.value;
  filtrarPokemon(tipo, data.pokemon); // invocación
  // detonar filtro
});
