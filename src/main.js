import { Imagenes,tarjetas} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
const pokemonDB = data.pokemon

// demostracion de datos de pokemon.js a main.js
console.log("pokemonDB =")
console.log(pokemonDB)
console.log(Imagenes)
console.log(data);
let btn = document.getElementById("btn");
let dataContainer = document.getElementById("dataContainer");
const bloqueTarjetas = document.getElementById("bloqueTarjetas");
bloqueTarjetas.innerHTML = tarjetas(data)
const tipos=document.querySelector(".tipos");

btn.addEventListener("click", function() {
    // Mostrar o ocultar el contenedor de datos
    dataContainer.style.display = (dataContainer.style.display === "none") ? "block" : "none";
   tipos.classList.toggle("tipos");
    // Si el contenedor de datos está visible, 
    if (dataContainer.style.display === "block") {
        this.style.backgroundColor = "pink";
       
    }
    for (const tipo of tipoPokemon) {
        tipo.addEventListener("click", () => {
          //el console seria sustituido por el llamado a funcion que realice el filtrado his1
          console.log(data.pokemon)
          console.log(tipo.name.toString())
          menuTipos.style.display = 'none'
          const pokemonesTipo = filtrarTipos(data, tipo.name)
          bloqueTarjetas.innerHTML = tipos(pokemonesTipo)
        })
      }
});
