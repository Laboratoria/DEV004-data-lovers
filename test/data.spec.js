import { filtrarPokemon } from "../src/data.js";

describe("filtrarPokemon", () => {
  // validar que la funcion existe
  it("es una funcion", () => {
    expect(typeof filtrarPokemon).toBe("function");
  });

  // vefificar el comportamiento deseado
  const data = {
    pokemon: [
      {
        num: "001",
        name: "bulbasaur",
        type: ["grass", "poison"],
      },
      {
        num: "029",
        name: "nidoran ♀ (female)",
        type: ["poison"],
      },
      {
        num: "010",
        name: "caterpie",
        type: ["bug"],
      },
      {
        num: "004",
        name: "charmander",
        type: ["fire"],
      },
    ],
  };
  it("filtra por tipo", () => {
    
    expect(filtrarPokemon("fire", data)).toStrictEqual([ { num: '004', name: 'charmander', type: [ 'fire' ] } ])
  });
  // estresar la funcion
  it('retorna false cuando falta parametro', ()=>{
    // expect(filtrarPokemon('', data)).toBe(false)
    expect(filtrarPokemon('', data)).toBeFalsy()
  })
});

// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
