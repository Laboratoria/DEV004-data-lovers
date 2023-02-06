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


// funcionalidad sort para el nombre
document.getElementById("headerName").addEventListener("click", sortName)

let sortOrder = false

function sortName() {
  dataFunctions.sortData(pokemonDB, "name", sortOrder)   
  sortOrder = !sortOrder
  console.log(sortOrder)
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

// carga la tabla
window.onload = () => {
  loadTable(pokemonDB)
}   



//la tabla
function loadTable(pokemonDB) {
  const htmlTablefull = document.getElementById("htmlTable")
  let datatoHTML = ""
  for ( let i=0 ; i<pokemonDB.length ; i++) {
    const pokename = pokemonDB[i].name.charAt(0).toUpperCase() + pokemonDB[i].name.slice(1)
   
    //const pokevolution = pokemonDB[i].evolution['next-evolution'][0]['candy-cost']
    //console.log(pokevolution
    if ( typeof pokemonDB[i].evolution['next-evolution'] === 'object') {
      nextEvolution = true
    } else {
      nextEvolution = false
    }
    //console.log("typeof pokemonDB[i].evolution['next-evolution'] = "+typeof pokemonDB[i].evolution['next-evolution'])
    //console.log("nextEvolution = "+nextEvolution)
    determinePokevolution(i)
    //console.log("pokevolution = "+pokevolution)
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
         
  }
 
  
  //console.log(datatoHTML)
  //console.log(pokemonDB[0].evolution['next-evolution'][0]['candy-cost'])
  htmlTablefull.innerHTML = datatoHTML
}

let nextEvolution = false
let pokevolution = ''
function determinePokevolution(iteration) {
  if (nextEvolution === true) {
    pokevolution = pokemonDB[iteration].evolution['next-evolution'][0]['candy-cost']
  } else {
    pokevolution ='N/A'
  }
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



