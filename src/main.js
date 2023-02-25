import data from "./data/pokemon/pokemon.js";

console.log(data);
const mostrarPoke = document.getElementById("mostrarPoke");

ObtenerPokemon();
//funcion para mostrar pokemon desde la data. nombre e imagen, que los divide en grupo
function ObtenerPokemon() {
  data.pokemon.forEach((pokemon) => {
    mostrarPoke.innerHTML += `<div class="container">
                          
    <div class="card">
        <img src="${pokemon.img}" class= "cardImg" alt="${pokemon.name}" ></img>
        <h4>${pokemon.name} </h4>
        <p>${pokemon.about} </p>
    </div>
</div>`;
    console.log(pokemon);
  });
}
