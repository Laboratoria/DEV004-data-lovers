
import ghibli from './data/ghibli/ghibli.js';
import {ordenarMasNueva, ordenarMasVieja, ordenarPuntuacionMayor, ordenarPuntuacionMenor} from './data.js';

function showTitleImage() {
  const principal = document.getElementById('container');
  if (principal) {
    //este for es para recorrer el array films 
    //parte en 0 , hasta que se recorra todo el arreglo, el i++ es que recorra uno tras otro
    for (let i = 0; i < ghibli.films.length; i++) {
      const divColumna = document.createElement('div');
      const creaDiv = document.createElement('div');
      const creaimg = document.createElement('img');

      divColumna.setAttribute('class', 'columna');

      creaDiv.innerHTML = ghibli.films[i].title;
      creaDiv.classList.add("posterTitle");
      // console.log(ghib
      // console.log(ghibli.films)
      // console.log(ghibli.films[i])
      // console.log(ghibli.films[i].title)
      creaimg.setAttribute('src', ghibli.films[i].poster)
      creaimg.classList.add("posterStyle");
      divColumna.appendChild(creaDiv);
      divColumna.appendChild(creaimg);
      principal.appendChild(divColumna);
    }
  }
}
showTitleImage()

const ordenar = document.querySelector('#ordenar');

ordenar.addEventListener('change', (event) => {
if (event.target.value === "masReciente"){
  ordenarMasNueva();
  console.log(ordenarMasNueva())
}
if (event.target.value === "menosReciente"){
  ordenarMasVieja();
  console.log(ordenarMasVieja())
}
if (event.target.value === "mayorRt"){
  ordenarPuntuacionMayor();
  console.log(ordenarPuntuacionMayor())
}
if (event.target.value === "menorRt"){
  ordenarPuntuacionMenor();
  console.log(ordenarPuntuacionMenor())
}

});
