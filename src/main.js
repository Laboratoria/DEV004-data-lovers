/*La primera línea importa un objeto 
llamado data desde un archivo llamado lol.js en un directorio llamado data/lol.*/
import data from './data/lol/lol.js'; 
/*La segunda línea importa varias funciones 
llamadas sortData, filterData, averageData, y averageName desde un archivo llamado data.js.*/
import{
    sortData, filterData, averageData, averageName,
} from './data.js';


import copyLol from './data/lol/lol.js';

const allChampion = data.data;
const arrObject = Object.values(allChampion);
// console.log(allChampion);
// console.log(arrObject);

// MOSTRAR DATA
const container = document.getElementById('container');

const createTemplate = (arr) => {
  arr.forEach((champion) => {
    const newElement = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    newElement.classList.add('class-div');
    img.classList.add('class-img');
    p.classList.add('class-name');
    img.src = `${champion.splash}`;
    p.innerHTML = `${champion.name}`;
    newElement.appendChild(img);
    newElement.appendChild(p);
    container.appendChild(newElement);
  });
};

reateTemplate(arrObject);

const dataLol = (copyLol.data);
const myModal = document.getElementById('myModal');

container.addEventListener('click', (event) => {
  const nombreSeleccionado = event.target.dataset.id;
  const objCampeonSeleccionado = (dataLol[nombreSeleccionado]);
  myModal.classList.remove('hide');
  myModal.querySelector('#modalInfo').innerHTML = `
    <p class= "modalName">${objCampeonSeleccionado.name} </p>
   <p class="modalTitle">${objCampeonSeleccionado.title} </p>
   <img src=${objCampeonSeleccionado.splash} class="imgSplash"/>
   <p class="modalTags"> Rol: ${objCampeonSeleccionado.tags} </p>
   <div class="info">
   <p> Defensa:${objCampeonSeleccionado.info.defense} </p>
   <p> Ataque:${objCampeonSeleccionado.info.attack} </p>
   <p> Magia:${objCampeonSeleccionado.info.magic} </p>
   <p> Dificultad:${objCampeonSeleccionado.info.difficulty} </p>
   </div>
   <div class="stats">
   <p> Vida: ${objCampeonSeleccionado.stats.hp} </p>
   <p> Mana: ${objCampeonSeleccionado.stats.mp} </p>
   <p> Velocidad: ${objCampeonSeleccionado.stats.movespeed} </p>
   <p> Ataque: ${objCampeonSeleccionado.stats.attackrange} </p>
   </div>
   `;
});