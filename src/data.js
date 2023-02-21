


export function ordenarMasNueva(arrayFilms) { // recibe parametro
  const copiaGhibli = [...arrayFilms]
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
//console.log(ordenarMasNueva())

export function ordenarMasVieja(arrayFilms) {
  //console.log(arrayFilms);
  const copiaGhibli = [...arrayFilms]
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

//console.log(ordenarMasVieja())


export function ordenarPuntuacionMayor(arrayFilms) {
  const copiaGhibli = [...arrayFilms]
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
// console.log(ordenarPuntuacionMayor(arrayFilms));

export function ordenarPuntuacionMenor(arrayFilms) {
  const copiaGhibli = [...arrayFilms]
  
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

export const filtrarProductor = (arrayFilms, nombreProducer) =>{
  const filtrado = arrayFilms.filter((film)=> film.producer === nombreProducer)
  return filtrado
}


