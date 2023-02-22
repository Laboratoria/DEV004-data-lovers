import {ordenarMasVieja,ordenarPuntuacionMayor,filtrarProductor,} from '../src/data.js';
//solo importamos las funciones puras que utilizamos (las que NO ESTAN comentada)

describe('filtrarProductor', () => {
  it ('deberia ser una funcion', () => {
    expect (typeof filtrarProductor ).toBe('function'); //toBe busca igualdad
  });
  // it ('filtrar la data por productor', () => {
  //   const filtrado = filtrarProductor(ghibli.films, "producer",)
  //   expect ("Hayao Miyasaki").toBe('"My Neighbor Totoro" '); 
  // });
});

describe('funcion Sort', () => {
  it ('deberia ser una funcion', () => {
    expect (typeof ordenarMasVieja ).toBe('function');
  });
});

describe('funcion Sort', () => {
  it ('deberia ser una funcion', () => {
    expect (typeof ordenarPuntuacionMayor ).toBe('function');
  });
});


