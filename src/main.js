/*La primera línea importa un objeto 
llamado data desde un archivo llamado lol.js en un directorio llamado data/lol.*/
import data from "./data/lol/lol.js";
/*La segunda línea importa varias funciones 
llamadas sortData, filterData, averageData, y averageName desde un archivo llamado data.js.*/
//import { } from "./data.js";

//from "./data/lol/lol.js";

const lol = data.data;
//console.log(lol);

function printChampion(lol) {
  const root = document.getElementById("root");
  console.log(root);
  for (const element in lol) {
    console.log(lol[element]);
    // template string
    // buscar que va en data-id="" para que funcione codigo
    root.innerHTML += `<section data-id ="container" class="container">
      <h3>${lol[element].name}</h3>
      <img src="${lol[element].splash}" alt="" class = 'lolChampion'>
    </section>`;
  }
}

// Invocar funcion


printChampion(lol);

const myModal = document.getElementById("myModal");

root.addEventListener("click", (event) => {
  const championSection = event.target.closest('.container');
  console.log(championSection)
  if (championSection)
  {
     const id = championSection.getAttribute("data-container");
    console.log(id)
    const objSelectedChampio = lol[id];
    console.log(objSelectedChampio);
    const myModal = document.getElementById("myModal");
    myModal.classList.remove("hide");
    myModal.querySelector("#modalInfo").innerHTML = `
     <p class="modalName">${objSelectedChampio.name}</p>
     <p class="modalTitle">${objSelectedChampio.title}</p>
     <img src="${objSelectedChampio.splash}" alt="" class="imgSplash">
     <p class="modalTags">Rol: ${objSelectedChampio.tags}</p>
     <div class="info">
       <p>Defense: ${objSelectedChampio.info.defense}</p>
       <p>attack: ${objSelectedChampio.info.attack}</p>
       <p>magic: ${objSelectedChampio.info.magic}</p>
       <p>difficulty: ${objSelectedChampio.info.difficulty}</p>
     </div>
     <div class="stats">
       <p>life: ${objSelectedChampio.stats.hp}</p>
       <p>Manna: ${objSelectedChampio.stats.mp}</p>
       <p>speed: ${objSelectedChampio.stats.movespeed}</p>
       <p>attack: ${objSelectedChampio.stats.attackrange}</p>
     </div>
   `;
  }
});

//cerrar modal 

//ORDENA DATA DE A a LA Z

  const dataLol = {
  Aatrox: { },
  Zed: { },
  // más campeones
};

 const sortedData = Object.keys(dataLol).sort((a, b) => a.localeCompare(b))
  .reduce((acc, key) => {
    acc[key] = dataLol[key];
    return acc;
  }, {});

console.log(sortedData); 

// FILTRAR  DATA Y CALCULAR PROMEDIO 

