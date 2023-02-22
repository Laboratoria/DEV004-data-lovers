import {ordenarMasNueva,ordenarMasVieja,ordenarPuntuacionMayor,ordenarPuntuacionMenor,filtrarProductor,} from '../src/data.js';


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
    expect (typeof ordenarMasNueva ).toBe('function');
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
describe('funcion Sort', () => {
  it ('deberia ser una funcion', () => {
    expect (typeof ordenarPuntuacionMenor ).toBe('function');
  });
});

