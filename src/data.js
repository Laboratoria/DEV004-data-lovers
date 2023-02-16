import ghibli from './data/ghibli/ghibli.js';

function ordenarMasNueva() {
  const copiaGhibli = [...ghibli.films]
  copiaGhibli.sort(function (a, b) {
    if (parseInt(a.release_date) > parseInt(b.release_date)) {
      return -1;
    }
    if (parseInt(a.release_date) < parseInt(b.release_date)) {
      return 1;
    }
    return 0;
  });
  return copiaGhibli
}
console.log(ordenarMasNueva())

function ordenarMasVieja() {
  const copiaGhibli = [...ghibli.films]
  copiaGhibli.sort(function (a, b) {
    if (parseInt(a.release_date) > parseInt(b.release_date)) {
      return 1;
    }
    if (parseInt(a.release_date) < parseInt(b.release_date)) {
      return -1;
    }
    return 0;
  });
  return copiaGhibli
}
console.log(ordenarMasVieja())


function ordenarPuntuacionMayor() {
  const copiaGhibli = [...ghibli.films]
  copiaGhibli.sort((a, b) => { 
    // parseInt(a.rt_score) - parseInt(b.rt_score)
    // a.rt_score > b.rt_score ? 1 : a.rt_score < b.rt_score ? -1 : 0
    /*
    if (a === b) {
      return 0;
    }
    */
    if (parseInt(a.rt_score) > parseInt(b.rt_score)) {
      return -1;
    }
    if (parseInt(a.rt_score) < parseInt(b.rt_score)) {
      return 1;
    }
    return 0;
  });
  return copiaGhibli
}
console.log(ordenarPuntuacionMayor());

function ordenarPuntuacionMenor() {
  const copiaGhibli = [...ghibli.films]
  
  copiaGhibli.sort((a,b) => {
    if (parseInt(a.rt_score) > parseInt(b.rt_score)) {
      return 1;
    }
    if (a.rt_score < b.rt_score) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  return copiaGhibli
  
}
console.log(ordenarPuntuacionMenor())

const ordenar = document.querySelector('#ordenar');

ordenar.addEventListener('change', (event) => {
  if (event.target.value === "masReciente"){
    const desplegadoMasReciente = document.getElementById("container");
    const 
    
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
export default function() {}
