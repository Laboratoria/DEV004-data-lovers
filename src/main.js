
import ghibli from './data/ghibli/ghibli.js';

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

function ordenarReleaseDate() {
  const copiaGhibli = [...ghibli.films]
  
  copiaGhibli.sort(function (a, b) {
    if (a.release_date > b.release_date) {
      return -1;
    }
    if (a.release_date < b.release_date) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });
  return copiaGhibli
}

console.log(ordenarReleaseDate())



function ordenarPuntuacionMayor() {
  const copiaGhibli = [...ghibli.films]
  
  copiaGhibli.sort(function (a, b) {
    if (a.rt_score > b.rt_score) {
      return -1;
    }
    if (a.rt_score < b.rt_score) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });
  return copiaGhibli
}

console.log(ordenarPuntuacionMayor())

// function ordenarPuntuacionMenor() {
 
//   const copiaGhibli = [...ghibli.films]
  
//   copiaGhibli.sort(function (comparacion)a, b {

    
//     if (a.rt_score > b.rt_score) {
//       return 1;
//     }
//     if (a.rt_score < b.rt_score) {
//       return -1;
//     }
//     // a must be equal to b
//     return 0;
//   });
// return copiaGhibli
// console.log(ordenarPuntuacionMenor())

// function comparacion(a, b){
//   return a - b
// }
// }


