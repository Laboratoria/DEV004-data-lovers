
import data from './data/pokemon/pokemon.js';
import dataFunctions from './data.js';

// establece base de datos para su modificicacion
let pokemonDB = data.pokemon


// demostracion de datos de pokemon.js a main.js
console.log("pokemonDB =")
console.log(pokemonDB)



// carga la tabla y tarjetas
window.onload = () => {
  loadTable(pokemonDB);
  LoadCards(pokemonDB);
}   

//funcionalidad para mostrar vista detallada
const pokedex = document.getElementById("pokedex");
const table = document.getElementById("detailedView");
const searchDiv = document.getElementById("searchID")
document.getElementById("detailedViewbButton").addEventListener("click", () => {
  searchDiv.classList.toggle('searchBTNclass')
  table.classList.toggle('table')
  if (pokedex.style.display === "none") {
    pokedex.style.display = "grid";
  } else {
    pokedex.style.display = "none";
  }
});

//funcionalidad de busqueda
let searchInput = ''
document.getElementById("searchButton").addEventListener("click", search)

function search() {
  searchInput = document.getElementById("search").value.toLowerCase();
  loadTable(pokemonDB)
}


// funcionalidad sort para el nombre
let sortOrder = false
document.getElementById("headerName").addEventListener("click", sortName)

function sortName() {
  dataFunctions.sortData(pokemonDB, "name", sortOrder)   
  sortOrder = !sortOrder
  console.log(sortOrder)
  loadTable(pokemonDB)
}

// funcionalidad sort para el numero
document.getElementById("headerNumber").addEventListener("click", sortNumber)

function sortNumber() {
  dataFunctions.sortData(pokemonDB, "num", sortOrder)   
  sortOrder = !sortOrder
  console.log(sortOrder)
  loadTable(pokemonDB)
}

//determina texto para la columna de caramelos
let nextEvolution = false
let pokevolution = ''

function determinePokevolution(i) {
  if (nextEvolution === true) {
    pokevolution = pokemonDB[i].evolution['next-evolution'][0]['candy-cost']
  } else {
    pokevolution ='N/A'

  }
}


//funcion para generar las tarjetas
function LoadCards(pokemonDB) {
  const pokedexFull = document.getElementById("pokedex");
  let pokedexDataHTML = ''
  for (let i = 0; i < pokemonDB.length; i++) {  
    pokedexDataHTML += `
    <li class = "${pokemonDB[i].type[0]}">
      <img class = "card-image" src ="${pokemonDB[i].img}"/>
      <h2 class = "card-title">${pokemonDB[i].num}
      <br>${pokemonDB[i].name}</h2>
        <p class = "card-subtitle">
          <div class="${pokemonDB[i].type[0]}Text">${pokemonDB[i].type[0]}</div>
          <div class="${pokemonDB[i].type[1]}Text">${pokemonDB[i].type[1]}</div>
        </p>
    </li>
    `;
  }
  
  pokedexFull.innerHTML = pokedexDataHTML

}

//funcion para generar la tabla
function loadTable(pokemonDB) {
  const htmlTablefull = document.getElementById("htmlTable")
  let datatoHTML = ""
  for ( let i=0 ; i<pokemonDB.length ; i++) {
    //determina la columna de nombres
    const pokename = pokemonDB[i].name.charAt(0).toUpperCase() + pokemonDB[i].name.slice(1)

    //determina la columna de caramelos
    if ( typeof pokemonDB[i].evolution['next-evolution'] === 'object') {
      nextEvolution = true
    } else {
      nextEvolution = false
    }
    determinePokevolution(i)
    
    //determina la busqueda incluyendo evoluciones
    let nextEvolutionFilter = null
    let prevEvolutionFilter = null
    let nextNextEvolutionFilter = null
    let prevPrevEvolutionFilter = null

    if ( typeof pokemonDB[i].evolution['next-evolution'] === 'object') {
      nextEvolutionFilter = pokemonDB[i].evolution['next-evolution'][0].name.includes(searchInput)
      if ( typeof pokemonDB[i].evolution['next-evolution'][0]['next-evolution'] === 'object') {
        nextNextEvolutionFilter = pokemonDB[i].evolution['next-evolution'][0]['next-evolution'][0].name.includes(searchInput)
      } else {
        nextNextEvolutionFilter = null
      }
    } else {
      nextEvolutionFilter = null
    }
    if ( typeof pokemonDB[i].evolution['prev-evolution'] === 'object') {
      prevEvolutionFilter = pokemonDB[i].evolution['prev-evolution'][0].name.includes(searchInput)
      if ( typeof pokemonDB[i].evolution['prev-evolution'][0]['prev-evolution'] === 'object') {
        prevPrevEvolutionFilter = pokemonDB[i].evolution['prev-evolution'][0]['prev-evolution'][0].name.includes(searchInput)
      } else {
        prevPrevEvolutionFilter = null
      }
    } else {
      prevEvolutionFilter = null
    }

    //generacion de la tabla
    if (pokemonDB[i].name.includes(searchInput)||pokemonDB[i].num.includes(searchInput)||nextEvolutionFilter||nextNextEvolutionFilter||prevEvolutionFilter||prevPrevEvolutionFilter) {
      datatoHTML +=
      `<tr>
        <td> <img class="prod_img" src="${pokemonDB[i].img}"></img> </td>
        <td class = num >  ${pokemonDB[i].num} </td>             
        <td> ${pokename} </td> 
        <td>
          <div class="${pokemonDB[i].type[0]}Text">${pokemonDB[i].type[0]}</div>
          <div class="${pokemonDB[i].type[1]}Text">${pokemonDB[i].type[1]}</div>
        </td> 
        <td> 
          <div class="${pokemonDB[i].weaknesses[0]}Text">${pokemonDB[i].weaknesses[0]}</div>
          <div class="${pokemonDB[i].weaknesses[1]}Text">${pokemonDB[i].weaknesses[1]}</div>
          <div class="${pokemonDB[i].weaknesses[2]}Text">${pokemonDB[i].weaknesses[2]}</div>
          <div class="${pokemonDB[i].weaknesses[3]}Text">${pokemonDB[i].weaknesses[3]}</div>
          <div class="${pokemonDB[i].weaknesses[4]}Text">${pokemonDB[i].weaknesses[4]}</div>
          <div class="${pokemonDB[i].weaknesses[5]}Text">${pokemonDB[i].weaknesses[5]}</div>
        </td> 
        <td>
          <div class="${pokemonDB[i].resistant[0]}Text">${pokemonDB[i].resistant[0]}</div>
          <div class="${pokemonDB[i].resistant[1]}Text">${pokemonDB[i].resistant[1]}</div>
          <div class="${pokemonDB[i].resistant[2]}Text">${pokemonDB[i].resistant[2]}</div>
          <div class="${pokemonDB[i].resistant[3]}Text">${pokemonDB[i].resistant[3]}</div>
          <div class="${pokemonDB[i].resistant[4]}Text">${pokemonDB[i].resistant[4]}</div>
          <div class="${pokemonDB[i].resistant[5]}Text">${pokemonDB[i].resistant[5]}</div>
        </td> 
        <td> ${pokemonDB[i].egg} </td> 
        <td> ${pokevolution}c</td>
      </tr>` 

    } else {continue}
  }

  htmlTablefull.innerHTML = datatoHTML

}

//funcion de filtrado por tipo
document.getElementById("resetButton").addEventListener("click", resetFilters)
document.getElementById("grassButton").addEventListener("click", grassFilter)
document.getElementById("fireButton").addEventListener("click", fireFilter)
document.getElementById("waterButton").addEventListener("click", waterFilter)
document.getElementById("bugButton").addEventListener("click", bugFilter)
document.getElementById("normalButton").addEventListener("click", normalFilter)
document.getElementById("flyingButton").addEventListener("click", flyingFilter)
document.getElementById("poisonButton").addEventListener("click", poisonFilter)
document.getElementById("electricButton").addEventListener("click", electricFilter)
document.getElementById("groundButton").addEventListener("click", groundFilter)
document.getElementById("fightButton").addEventListener("click", fightFilter)
document.getElementById("psychicButton").addEventListener("click", psychicFilter)
document.getElementById("rockButton").addEventListener("click", rockFilter)
document.getElementById("ghostButton").addEventListener("click", ghostFilter)
document.getElementById("iceButton").addEventListener("click", iceFilter)
document.getElementById("dragonButton").addEventListener("click", dragonFilter)
document.getElementById("darkButton").addEventListener("click", darkFilter)
document.getElementById("steelButton").addEventListener("click", steelFilter)
document.getElementById("fairyButton").addEventListener("click", fairyFilter)

function resetFilters() {
  pokemonDB = data.pokemon
  loadTable(pokemonDB)
  LoadCards(pokemonDB)
}

function grassFilter() {
  pokemonDB = dataFunctions.filterData(pokemonDB,"grass")
  loadTable(pokemonDB)
  LoadCards(pokemonDB)
}

function fireFilter() {
  pokemonDB = dataFunctions.filterData(pokemonDB,"fire")
  loadTable(pokemonDB)
  LoadCards(pokemonDB)
}

function waterFilter() {
  pokemonDB = dataFunctions. filterData(pokemonDB,"water")
  loadTable(pokemonDB)
  LoadCards(pokemonDB)
}

function bugFilter() {
  pokemonDB = dataFunctions.filterData(pokemonDB,"bug")
  loadTable(pokemonDB)
  LoadCards(pokemonDB)
}

function normalFilter() {
  pokemonDB = dataFunctions.filterData(pokemonDB,"normal")
  loadTable(pokemonDB)
  LoadCards(pokemonDB)
}

function flyingFilter() {
  pokemonDB = dataFunctions.filterData(pokemonDB,"flying")
  loadTable(pokemonDB)
  LoadCards(pokemonDB)
}

function poisonFilter() {
  pokemonDB = dataFunctions.filterData(pokemonDB,"poison")
  loadTable(pokemonDB)
  LoadCards(pokemonDB)
}

function electricFilter() {
  pokemonDB = dataFunctions.filterData(pokemonDB,"electric")
  loadTable(pokemonDB)
  LoadCards(pokemonDB)
}

function groundFilter() {
  pokemonDB = dataFunctions.filterData(pokemonDB,"ground")
  loadTable(pokemonDB)
  LoadCards(pokemonDB)
  
}

function fightFilter() {
  pokemonDB = dataFunctions.filterData(pokemonDB,"fighting")
  loadTable(pokemonDB)
  LoadCards(pokemonDB)
}

function psychicFilter() {
  pokemonDB = dataFunctions.filterData(pokemonDB,"psychic")
  loadTable(pokemonDB)
  LoadCards(pokemonDB)
}

function rockFilter() {
  pokemonDB = dataFunctions.filterData(pokemonDB,"rock")
  loadTable(pokemonDB)
  LoadCards(pokemonDB)
}

function ghostFilter() {
  pokemonDB = dataFunctions.filterData(pokemonDB,"ghost")
  loadTable(pokemonDB)
  LoadCards(pokemonDB)
}

function iceFilter() {
  pokemonDB = dataFunctions.filterData(pokemonDB,"ice")
  loadTable(pokemonDB)
  LoadCards(pokemonDB)
}

function dragonFilter() {
  pokemonDB = dataFunctions.filterData(pokemonDB,"dragon")
  loadTable(pokemonDB)
  LoadCards(pokemonDB)
}

function darkFilter() {
  pokemonDB = dataFunctions.filterData(pokemonDB,"dark")
  loadTable(pokemonDB)
  LoadCards(pokemonDB)
}

function steelFilter() {
  pokemonDB = dataFunctions.filterData(pokemonDB,"steel")
  loadTable(pokemonDB)
  LoadCards(pokemonDB)
}

function fairyFilter() {
  pokemonDB = dataFunctions.filterData(pokemonDB,"fairy")
  loadTable(pokemonDB)
  LoadCards(pokemonDB)
}

// kanto [0,151]
// Johto [152,251]
//for  (let i = 0; i < 151 ; i++);



document.getElementById("kantodex").addEventListener("click", function() {
  pokemonDB = data.pokemon.filter(pokemon => pokemon.num <= 251)
  pokemonDB = pokemonDB.filter(pokemon => pokemon.num <= 151);
  loadTable(pokemonDB)
  LoadCards(pokemonDB)
  // Render the filtered kantoPokemon on the page
});


document.getElementById("nationaldex").addEventListener("click", function() {
  pokemonDB = data.pokemon.filter(pokemon => pokemon.num <= 251);
  loadTable(pokemonDB)
  LoadCards(pokemonDB)
  // Render the reseted database
}); 

document.getElementById("johto").addEventListener("click", function() {
  pokemonDB = data.pokemon.filter(pokemon => pokemon.num <= 251)
  pokemonDB = pokemonDB.filter(pokemon => pokemon.num > 151);
  loadTable(pokemonDB)
  LoadCards(pokemonDB)
  // Render the filtered johtoPokemon on the page
});