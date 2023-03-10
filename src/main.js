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