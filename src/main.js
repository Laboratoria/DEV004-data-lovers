//se importa la dat de la corresponiente ruta
import dataPokemon from "./data/pokemon/pokemon.js";
//const cortarData = dataPokemon.pokemon.slice(0,10);
const divTarjeta = document.getElementById("data");

const mostrarData = (pokemones) => {
  divTarjeta.innerHTML = "";
  pokemones.forEach((pokemon) => {
    const card = document.createElement("div");
    const name = document.createElement("name");
    name.innerHTML= pokemon.name;
    const numbers = document.createElement("h1");
    numbers.innerHTML= pokemon.num;
    const type = document.createElement("type");
    type.innerHTML= pokemon.type;
    const image = document.createElement("img"); //<img>
    image.setAttribute("src", pokemon.img); //image.src = pokemon.img
    image.setAttribute("class","imagenPokemones");
    type.setAttribute("class","typePokemon")
    divTarjeta.appendChild(card);
    card.appendChild(image);
    card.appendChild(numbers);
    card.appendChild(name);
    card.appendChild(type);
  });
}
mostrarData(dataPokemon.pokemon);



