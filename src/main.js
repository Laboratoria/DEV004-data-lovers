
import ghibli from './data/ghibli/ghibli.js';
import {filtrarProductor, ordenarMasVieja, ordenarPuntuacionMayor } from './data.js';
//En el import se borraron las funciones que al final no utilizamos (ordenarMasNueva y ordenarPuntuacionMenor)

const showTitleImage = (arrayGhibli) => { // la fn recibe arreglo como parametro
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
    const filmsOrdenadas = ordenarMasVieja(ghibli.films) // [5,4,3].reverser() === [3,4,5]
    showTitleImage(filmsOrdenadas);
    //console.log(filmsOrdenadas)
  }
  if (event.target.value === "masReciente"){
    const filmsOrdenadasReverse = ordenarMasVieja(ghibli.films).reverse()
    showTitleImage(filmsOrdenadasReverse )
    // console.log(ordenarMasNueva(ghibli.films),filmsOrdenadasReverse )
  }
  if (event.target.value === "mayorRt"){
    document.getElementById("container").innerHTML = "";
    showTitleImage(ordenarPuntuacionMayor(ghibli.films))
    // console.log(ordenarPuntuacionMayor(ghibli.films))
  }
  if (event.target.value === "menorRt"){
    document.getElementById("container").innerHTML = "";
    const filmsMejorPuntuadasReverse = ordenarPuntuacionMayor(ghibli.films).reverse()
    showTitleImage(filmsMejorPuntuadasReverse) // envias argumento 
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