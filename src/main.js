/*La primera línea importa un objeto 
llamado data desde un archivo llamado lol.js en un directorio llamado data/lol.*/
import data from "./data/lol/lol.js";
import { campeonesMage } from "./data.js";
/*La segunda línea importa varias funciones 
llamadas sortData, filterData, averageData, y averageName desde un archivo llamado data.js.*/
//import { } from "./data.js";

//from "./data/lol/lol.js";

const lol = data.data;

//  console.log(lol)

function printChampion(lol) {
  const root = document.getElementById("root");
  // console.log(root);
  for (const element in lol) {
  // console.log(lol[element]);
    // template string
    root.innerHTML += `<section class="container">
    <h3>${lol[element].name}</h3>
    <img src="${lol[element].splash}" alt="" class = 'lolChampion'>
  </section>`;
  }
}


// Invocar funcion
printChampion(lol);



// Filtrar solo los campeones de tipo "mage"
const roles =  document.getElementsByClassName("rol"); // devuelve todos los elementos que coinciden con la clase en un ARREGLO
// console.log(roles);

for (let index = 0; index < roles.length; index++) {
  // console.log(roles[index]);
  roles[index].addEventListener('click', (e)=>{
    const rol = e.target.id
    campeonesMage(lol, rol)
  })
  
}

