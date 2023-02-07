
import data from './data/pokemon/pokemon.js';




// demostracion de datos de pokemon.js a main.js
console.log("pokemonDB =")
console.log(pokemonDB)

const pokemonDB = data.pokemon

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

//funcionalidad de busqueda
let searchInput = ''
document.querySelector(".button").addEventListener("click", search)

function search() {
  searchInput = document.getElementById("search").value.toLowerCase();
  loadTable(pokemonDB)
}

// carga la tabla
window.onload = () => {
document.getElementById("pokedex").style.display = "grid";
document.getElementById("detailedView").style.display = "none";

loadTable(pokemonDB);
LoadCards();
}   


document.getElementById("detailedViewbButton").addEventListener("click", () => {
  let pokedex = document.getElementById("pokedex");
  let table = document.getElementById("detailedView");

  if (pokedex.style.display == "none" || pokedex.style.display == "") {
    pokedex.style.dislpay = "grid";
    table.style.display = "none";
  } else {
    pokedex.style.display = "none";
    table.style.display = "block";

  }

});

//determina texto para la columna de caramelos
let nextEvolution = false
let pokevolution = ''

function determinePokevolution(i) {
  if (nextEvolution === true) {
    pokevolution = pokemonDB[i].evolution['next-evolution'][0]['candy-cost']
  } else {
    pokevolution ='N/A'

function LoadCards(){
  let pokedex = document.getElementById("pokedex");

  for (let i = 0; i < data.pokemon.length; i++) {
    pokedex.innerHTML += `
    <li class = "card">
      <img class = "card-image" src ="${data.pokemon[i].img}"/>
      <h2 class = "card-title">${data.pokemon[i].num}.${data.pokemon[i].name}</h2>
     <p class = "card-subtitle">Type: ${data.pokemon[i].type}</p>
    </li>
    `;
  }
}

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
        <td> ${pokemonDB[i].type} </td> 
        <td> ${pokemonDB[i].weaknesses} </td> 
        <td> ${pokemonDB[i].resistant} </td> 
        <td> ${pokemonDB[i].egg} </td> 
        <td> ${pokevolution} </td>
      </tr>` 

    } else {continue}
  }


         
  }


  htmlTablefull.innerHTML = datatoHTML

}
