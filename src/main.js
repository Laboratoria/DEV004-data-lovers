import { anotherExample } from './data.js';
// npm start import data from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
import dataFunctions from './data.js';

console.log(dataFunctions)
console.log(anotherExample)

let pokemonDB = data.pokemon


// demostracion de datos de pokemon.js a main.js
console.log("pokemonDB =")
console.log(pokemonDB)
console.log("pokemonDB[0] =")
console.log(pokemonDB[0])
console.log("pokemonDB[0].generation =")
console.log(pokemonDB[0].generation)
console.log("pokemonDB[0].generation.name =")
console.log(pokemonDB[0].generation.name)

// funcionalidad sort para el nombre
document.getElementById("headerName").addEventListener("click", sortName)

let sortOrder = false

function sortName() {
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
    loadTable(pokemonDB)
    sortOrder = !sortOrder
    console.log(sortOrder)
}

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

// la tabla
function loadTable(pokemonDB) {
    const htmlTablefull = document.getElementById("htmlTable")
    let datatoHTML = ""
    for (let pokemon of pokemonDB) {
      const pokename = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
        datatoHTML += `
            <tr>
            <td> <img src="${pokemon.img}"></img> </td>
            <td class = num >  ${pokemon.num} </td>             
            <td> ${pokename} </td>               
            </tr>
        `
        
    }
    htmlTablefull.innerHTML = datatoHTML
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



