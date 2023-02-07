// import { anotherExample } from './data.js';
// npm start import data from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
import dataFunctions from './data.js';

/*
// funciones de ejemplo
console.log(dataFunctions)
console.log(anotherExample)
*/

const pokemonDB = data.pokemon

// demostracion de datos de pokemon.js a main.js
console.log("pokemonDB =")
console.log(pokemonDB)
//console.log(pokemonDB[0].evolution['next-evolution'][0]['next-evolution'])
// console.log("pokemonDB[0].evolution[1] = "+typeof pokemonDB[0].evolution[1])

/*
console.log("pokemonDB[0].evolution =")
console.log(pokemonDB[0].evolution)
console.log("pokemonDB[0].evolution['next-evolution'] =")
console.log(pokemonDB[0].evolution['next-evolution'])
console.log("pokemonDB[0].evolution['next-evolution'][0] =")
console.log(pokemonDB[0].evolution['next-evolution'][0])
console.log("pokemonDB[0].evolution['next-evolution'][0]['candy-cost'] =")
console.log(pokemonDB[0].evolution['next-evolution'][0]['candy-cost'])
console.log("pokemonDB[0] =")
console.log(pokemonDB[0])
console.log("pokemonDB[0].generation =")
console.log(pokemonDB[0].generation)
console.log("pokemonDB[0].generation.name =")
console.log(pokemonDB[0].generation.name)
*/

// carga la tabla
window.onload = () => {
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

//funcionalidad de busqueda
let searchInput = ''
document.querySelector(".button").addEventListener("click", search)

function search() {
  searchInput = document.getElementById("search").value.toLowerCase();
  loadTable(pokemonDB)
}


/*
function sortName(sortData) {
    sortData(pokemonDB , name, sortOrder)
    if (sortOrder == false) {
        pokemonDB = pokemonDB.sort(function (a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        })

    }
    if (sortOrder == true) {
        pokemonDB = pokemonDB.sort(function (a, b) {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            return 0;
        })
    }
    
    sortOrder = !sortOrder
    console.log(sortOrder)
    return loadTable(pokemonDB)
}
*/

/*
// intento de tabla de datos
let uniqueObjectArray = [   
    ...new Map(pokemonDB.map((item) => [item["name"],item])).keys() 
]

console.log(uniqueObjectArray)

document.getElementById("root").innerHTML = uniqueObjectArray
*/


/*
//funcionalidad de busqueda (intento)
document.querySelector(".input").addEventListener("keyup", pokeSearch)
let pokeSearchInput = ''
function pokeSearch() {
  pokeSearchInput = document.getElementById("pokesearch").value.toLowerCase();
  
}
*/

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



//la tabla
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
        <td> <img src="${pokemonDB[i].img}"></img> </td>
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

  htmlTablefull.innerHTML = datatoHTML

}




/*
function loadTable(pokemonDB) {
  const htmlTablefull = document.getElementById("htmlTable")
  let datatoHTML = ""
  for (const element of pokemonDB) {
    const pokename = element.name.charAt(0).toUpperCase() + element.name.slice(1)
    const pokevolution = pokemonDB[0].evolution['next-evolution'][0]['candy-cost']
    console.log(pokevolution)
    datatoHTML +=
        `<tr>
            <td> <img src="${element.img}"></img> </td>
            <td class = num >  ${element.num} </td>             
            <td> ${pokename} </td>
            <td> ${element.type} </td> 
            <td> ${element.weaknesses} </td> 
            <td> ${element.resistant} </td> 
            <td> ${element.egg} </td> 
            <td> ${pokevolution} </td> 
        </tr>`        
  }
  // console.log(pokemonDB[0].evolution['next-evolution'][0]['candy-cost'])
  htmlTablefull.innerHTML = datatoHTML
}
*/

//funcionalidad para mostrar vista detallada
const table = document.getElementById("detailedView");

document.getElementById("detailedViewbButton").addEventListener("click", toggleView);
     
function toggleView() {
  table.classList.toggle('table')
}

/*
// intento ordenar archivos por numbero (sin terminar)
document.getElementById("headerNumber").addEventListener("click",sortColumn)

let sortDirection = false

function sortColumn(columnName) {
    const dataType = typeof pokemonDB[0][columnName];
    sortDirection = !sortDirection;

    console.log(dataType) // no detecta datatype como number sino como undefined

    switch(dataType) {
        case 'number':
        sortNumberColumn(sortDirection, columnName);
        break
        case 'string':
        sortTextColumn(sortDirection, columnName);
        break
    }
    loadTable(pokemonDB);
}

function sortNumberColumn(sort, columnName) {
    pokemonDB = pokemonDB.sort((p1,p2)  => {
    return sort ? p1[columnName] - p2[columnName] : p2[columnName] - p1[columnName]
    });
}

function sortTextColumn(sort, columnName) {
    pokemonDB = pokemonDB.sort((p1, p2) => {
    return sort ? (p1[columnName] > p2[columnName]) - (p1[columnName] < p2[columnName]) : (p2[columnName] > p1[columnName]) - (p2[columnName] < p1[columnName])
    });
}
*/
/*
//funcionalidad de busqueda (intento)

let filteredData = [];

document.querySelector(".input").addEventListener("keyup", pokeSearch);

function pokeSearch() {

  let search = this.value.toLowerCase();
  

  filteredData = pokemonDB.filter(function(val) {
    let nextEvolutionFilter = false
    let prevEvolutionFilter = false
    if ( typeof val.evolution['next-evolution'] === 'object') {
      nextEvolutionFilter = true
    } else {
      nextEvolutionFilter = false
    }
    if ( typeof val.evolution['prev-evolution'] === 'object') {
      prevEvolutionFilter = true
    } else {
      prevEvolutionFilter = false
    }
   determineNextEvolutionFilter()
   determinePrevEvolutionFilter()

function determineNextEvolutionFilter() {
  if (nextEvolutionFilter === true) {
    nextEvolutionFilter = val.evolution['next-evolution'][0].name.includes(search)
  } else {
    nextEvolutionFilter = val.name.includes(search)
  }
}
function determinePrevEvolutionFilter() {
  if (prevEvolutionFilter === true) {
    prevEvolutionFilter = val.evolution['prev-evolution'][0].name.includes(search)
  } else {
    prevEvolutionFilter = val.name.includes(search)
  }
}
    if(val.num.includes(search) || val.name.includes(search) || nextEvolutionFilter || prevEvolutionFilter ) {
      let newPokemonDB = { 
        num : val.num , name : val.name
      }
      return newPokemonDB
    }
  })
  loadTable(filteredData) 
}
*/
