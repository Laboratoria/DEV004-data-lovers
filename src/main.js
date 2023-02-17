
import ghibli from './data/ghibli/ghibli.js';
import {ordenarMasNueva, ordenarMasVieja, ordenarPuntuacionMayor, ordenarPuntuacionMenor} from './data.js';

function showTitleImage() {
  const principal = document.getElementById('container');
  if (principal) {
    for (let i = 0; i < ghibli.films.length; i++) {
      const divColumna = document.createElement('div');
      const creaDiv = document.createElement('div');
      const creaimg = document.createElement('img');
      divColumna.setAttribute('class', 'columna');
      creaDiv.innerHTML = ghibli.films[i].title;
      creaDiv.classList.add("posterTitle");
      creaimg.setAttribute('src', ghibli.films[i].poster)
      creaimg.classList.add("posterStyle");
      divColumna.appendChild(creaDiv);
      divColumna.appendChild(creaimg);
      principal.appendChild(divColumna);
     
    }
  }
}
showTitleImage();

const ordenar = document.querySelector('#ordenar');
ordenar.addEventListener('change', (event) => {
  if (event.target.value === "menosReciente"){
    document.getElementById("container").innerHTML = "";
    showTitleImage();
    console.log(ordenarMasVieja())
  }
  if (event.target.value === "masReciente"){
    document.getElementById("container").innerHTML = "";
    showTitleImage();
    console.log(ordenarMasNueva())
  }
  if (event.target.value === "mayorRt"){
    document.getElementById("container").innerHTML = "";
    console.log(ordenarPuntuacionMayor())
  }
  if (event.target.value === "menorRt"){
    document.getElementById("container").innerHTML = "";
    ordenarPuntuacionMenor();
    console.log(ordenarPuntuacionMenor())
  }
});
