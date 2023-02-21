// import ghibli from './data/ghibli/ghibli.js';

export const ordenarMasNueva = (arrayFilms) => { // recibe parametro
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
export const ordenarPuntuacionMayor = (arrayFilms) => {
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
// console.log(ordenarPuntuacionMayor());
export const ordenarPuntuacionMenor= (arrayFilms) => {
  const copiaGhibli = [...arrayFilms]
  copiaGhibli.sort((a,b) => {
    if (parseInt(a.rt_score) > parseInt(b.rt_score)) {
      return 1;
    }
    if (a.rt_score < b.rt_score) {
      return -1;
    }
    return 0;
  });
  return copiaGhibli
}

// export const nombredelafuncion = (declaracion valida) (recibe data) => {lo que necesitas}
//devuelve un array vacio
// export const personajes = ghibliMadre.filter (personaje => personaje.human);
// console.log(personajes);
// no devuelve nada 
// export const personajes = (ghibliMadre, human) => {
//   const especiePersonaje =ghibliMadre.filter (ghibliMadre.people.includes(human));
//   console.log(especiePersonaje);
// }
//Devuelve error, filter not defined.
// export const ghibliMadre = ghibli.films.people
// export const personajes = ghibliMadre.filter (people => people.human);
// console.log(personajes);
// devuelve un array vacío.
// const nombrePersonajes = ghibliMadre.filter(nombre => nombre.name);
// console.log(nombrePersonajes)
//Devuelve array vacio 
// const personajes = function(ghibliMadre) {
//   return ghibliMadre.specie === "Human"; //use the argument here.
// }
// var filter = ghibliMadre.filter(personajes);
// console.log(filter);





// var cand = [{name: 'Kevin',alter: 19,},{name: 'Walter',alter: 22,},{name: 'Herbert',alter: 28,},{    name: 'Kristin',alter: 31,},{name: 'Obergine',alter: 39,},{name: 'Hailey',alter: 44,}];

// // add argument to the filter function | element
// var alter = function(element) {
//   return element.alter < 30; //use the argument here.
// }

// var filter = cand.filter(alter);

// console.log(filter);




// export const filterEpisode = (data, value) => {
//   const kindEpisode = data.filter(data => data.episode.includes(value));
//   //console.log(filterSpecies);
//   return kindEpisode;
// };