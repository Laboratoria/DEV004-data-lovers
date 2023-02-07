
import data from './data/pokemon/pokemon.js';




const pokemonDB = data.pokemon

// funcionalidad sort para el nombre
document.getElementById("headerName").addEventListener("click", sortName)

let sortOrder = false

function sortName() {
  dataFunctions.sortData(pokemonDB, "name", sortOrder)   
  sortOrder = !sortOrder
  console.log(sortOrder)
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



