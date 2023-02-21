
import ghibli from './data/ghibli/ghibli.js';
import {filtrarProductor, ordenarMasNueva, ordenarMasVieja, ordenarPuntuacionMayor, ordenarPuntuacionMenor} from './data.js';

function showTitleImage(arrayGhibli) { // la fn recibe arreglo como parametro
  const principal = document.getElementById('container');
  principal.innerHTML = '';
  if (principal) {
    for (let i = 0; i <  arrayGhibli.length; i++) {
      const divColumna = document.createElement('div');
      const creaDiv = document.createElement('div');
      const creaimg = document.createElement('img');
      divColumna.setAttribute('class', 'columna');
      creaDiv.innerHTML = arrayGhibli[i].title;
      creaDiv.classList.add("posterTitle");
      creaimg.setAttribute('src', arrayGhibli[i].poster)
      creaimg.classList.add("posterStyle");
      divColumna.appendChild(creaDiv);
      divColumna.appendChild(creaimg);
      principal.appendChild(divColumna);
     
    }
  }
}
showTitleImage(ghibli.films); // enviamos arreglo como argumento

const ordenar = document.querySelector('#ordenar');
ordenar.addEventListener('change', (event) => {
  if (event.target.value === "menosReciente"){
    document.getElementById("container").innerHTML = "";
    const filmsOrdenadas = ordenarMasVieja(ghibli.films) //
    showTitleImage(filmsOrdenadas);
    //console.log(filmsOrdenadas)
  }
  if (event.target.value === "masReciente"){
    showTitleImage(ordenarMasNueva(ghibli.films))
    console.log(ordenarMasNueva(ghibli.films))
  }
  if (event.target.value === "mayorRt"){
    document.getElementById("container").innerHTML = "";
    showTitleImage(ordenarPuntuacionMayor(ghibli.films))
    console.log(ordenarPuntuacionMayor(ghibli.films))
  }
  if (event.target.value === "menorRt"){
    document.getElementById("container").innerHTML = "";
    console.log(ghibli.films)
    showTitleImage(ordenarPuntuacionMenor(ghibli.films)) // envias argumento 
    console.log(ordenarPuntuacionMenor(ghibli.films))
  }
});


const filtrar = document.querySelector('#filtrar');
filtrar.addEventListener('change', (event) => {
  if (event.target.value === 'Isao Takahata') {
    document.getElementById("container").innerHTML = "";
    const filmsFiltradas = filtrarProductor(ghibli.films, 'Isao Takahata') 
    showTitleImage(filmsFiltradas);
  }
  if (event.target.value === 'Toshio Suzuki') {
    document.getElementById("container").innerHTML = "";
    const filmsFiltradas = filtrarProductor(ghibli.films, 'Toshio Suzuki') 
    showTitleImage(filmsFiltradas);
  }
  if (event.target.value === 'Hayao Miyazaki') {
    document.getElementById("container").innerHTML = "";
    const filmsFiltradas = filtrarProductor(ghibli.films, 'Hayao Miyazaki') 
    showTitleImage(filmsFiltradas);
  }
  if (event.target.value === 'Toru Hara') {
    document.getElementById("container").innerHTML = "";
    const filmsFiltradas = filtrarProductor(ghibli.films, 'Toru Hara') 
    showTitleImage(filmsFiltradas);
  }
  if (event.target.value === 'Yoshiaki Nishimura') {
    document.getElementById("container").innerHTML = "";
    const filmsFiltradas = filtrarProductor(ghibli.films, 'Yoshiaki Nishimura') 
    showTitleImage(filmsFiltradas);
  }
  if (event.target.value === 'todas') {
    document.getElementById("container").innerHTML = "";
    showTitleImage(ghibli.films);
  }
});