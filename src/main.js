import { anotherExample } from './data.js';
// npm start import data from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(anotherExample)

const pokemonDB = data.pokemon

// demostracion de datos de pokemon.js a main.js
console.log("pokemonDB =")
console.log(pokemonDB)
console.log("pokemonDB[0] =")
console.log(pokemonDB[0])
console.log("pokemonDB[0].generation =")
console.log(pokemonDB[0].generation)
console.log("pokemonDB[0].generation.name =")
console.log(pokemonDB[0].generation.name)

// intento de tabla de datos
/*
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
    const contentTable = document.getElementById("pokemonTable") 
    let dataHTML = ""
    for ( let pokemon of pokemonDB) {
        dataHTML += `
            <tr>
                <td>${pokemon.num}</td>
                <td>${pokemon.img}</td>                 
                <td>${pokemon.name}</td>
            </tr>
        `
    }
    contentTable.innerHTML= dataHTML
}

// ordenar archivos por numbero (sin terminar)
let sortDirection = false

document.getElementById("headerNumber").addEventListener("click",sortColumn)

function sortColumn(columnName) {
    const dataType = typeof pokemonDB[0][columnName];
    sortDirection = !sortDirection;

    console.log(dataType) // no detecta datatype como number sino como undefined

    switch(dataType) {
        case "number" :
        sortNumberColumn(sortDirection,columnName);
        break
    }
    loadTable(pokemonDB);
}

function sortNumberColumn(sort, columnName) {
    pokemonDB = pokemonDB.sort((p1,p2)  => {
        return sort ? p1[columnName] - p2[columnName] : p2[columnName] - p1[columnName]
    })
}

