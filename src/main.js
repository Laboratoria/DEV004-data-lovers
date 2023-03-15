/*La primera línea importa un objeto 
llamado data desde un archivo llamado lol.js en un directorio llamado data/lol.*/
import data from "./data/lol/lol.js";
/*La segunda línea importa varias funciones 
llamadas sortData, filterData, averageData, y averageName desde un archivo llamado data.js.*/
//import { } from "./data.js";

//from "./data/lol/lol.js";

const lol = data.data;

//  console.log(lol)

function printChampion(lol) {
  const root = document.getElementById("root");
  console.log(root);
  for (const element in lol) {
    console.log(lol[element]);
    // template string
    root.innerHTML += `<section>
    <h3>${lol[element].name}</h3>
    <img src="${lol[element].splash}" alt="" class = 'lolChampion'>
  </section>`;
  }
}

// Invocar funcion
printChampion(lol);



