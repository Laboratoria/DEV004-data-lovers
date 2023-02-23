import {ordenarMasVieja,ordenarPuntuacionMayor,filtrarProductor,} from '../src/data.js';
//solo importamos las funciones puras que utilizamos (las que NO ESTAN comentadas)

describe('filtrarProductor', () => {
  it ('deberia ser una funcion', () => {
    expect (typeof filtrarProductor ).toBe('function'); //toBe busca igualdad
  });  
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


