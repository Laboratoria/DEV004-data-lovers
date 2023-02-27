import data from "./data/pokemon/pokemon.js";

console.log(data);
const mostrarPoke = document.getElementById("mostrarPoke");

ObtenerPokemon();
//funcion para mostrar pokemon desde la data. nombre e imagen, que los divide en grupo
function ObtenerPokemon() {
  data.pokemon.forEach((pokemon) => {
    mostrarPoke.innerHTML += `<div class="container">
                          
    <div class="card">
    <div class="numpkm">${pokemon.num} </div>
        <img src="${pokemon.img}" class= "cardImg" alt="${pokemon.name}" ></img>
        <h4>${pokemon.name} </h4>
        <h5>${pokemon.type} </h5>
        <p>${pokemon.about} </p>
    </div>
</div>`;
    console.log(pokemon);
  });
}
