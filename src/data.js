//en este archivo unicamente se colocan funciones "puras" que sean testeables.

//primera función ordenar con método sort:
export const ordenarMasVieja = (arrayFilms)=> {
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


// funcion deshabilitada porque utilizamos ordenarPuntuacionMayor.reverse ().

// export function ordenarMasNueva(arrayFilms) { // recibe parametro
//   const copiaGhibli = [...arrayFilms]
//   copiaGhibli.sort(function (a, b) {
//     if (parseInt(a.release_date) > parseInt(b.release_date)) {
//       return -1;
//     }
//     if (parseInt(a.release_date) < parseInt(b.release_date)) {
//       return 1;
//     }
//     return 0;
//   });
//   return copiaGhibli
// }
// //console.log(ordenarMasNueva())


//segunda fución ordenar con método sort.
export const ordenarPuntuacionMayor = (arrayFilms) =>{
  const copiaGhibli = [...arrayFilms]
  copiaGhibli.sort((a, b) => { 
    //propuesta para optimizarla mediante el valor cuaternario.
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


// funcion deshabilitada porque utilizamos ordenarPuntuacionMayor.reverse ().
// export function ordenarPuntuacionMenor(arrayFilms) {
//   const copiaGhibli = [...arrayFilms]
  
//   copiaGhibli.sort((a,b) => {
//     if (parseInt(a.rt_score) > parseInt(b.rt_score)) {
//       return 1;
//     }
//     if (a.rt_score < b.rt_score) {
//       return -1;
//     }
//     return 0;
//   });
//   return copiaGhibli
// }


//función de filtrado con método filter:
export const filtrarProductor = (arrayFilms, nombreProducer) =>{
  const filtrado = arrayFilms.filter((film)=> film.producer === nombreProducer)
  return filtrado
}
