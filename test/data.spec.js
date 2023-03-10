import { filtrarPokemon, ordenarpoke } from "../src/data.js";

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


// Test funcion ORDENAR:

describe("ordenarPoke", () =>{

  //validar
  it("Es una funcion", () => {
    expect(typeof filtrarPokemon).toBe("function");
  })

  //Verificar:
  const data = {
    pokemon: [
      {
        name: "bulbasaur",
      },
      {
        name: "diglett",
      },
      {
        name: "abra",
      },
      {
        name: "charmander",
      },
    ],
  }

  const dataAZ = {
    pokemon: [
      {
        name: "abra",
      },
      {
        name: "bulbasaur",
      },
      {
        name: "charmander",
      },
      {
        name: "diglett"
      },
    ],
  }
  const dataZA = {
    pokemon: [
      {
        name: "diglett",
      },
      {
        name: "charmander",
      },
      {
        name: "bulbasaur",
      },
      {
        name: "abra"
      },
    ],
  }


  it("Ordenar", ()=>{
    expect(ordenarpoke(data,"asc")).toStrictEqual(dataAZ);
    expect(ordenarpoke(data,"des")).toStrictEqual(dataZA);
  })
  
  //Estresar:
  it("retorna falsa cuando", ()=> {
    expect(ordenarpoke(data, "")).toBeFalsy();
    //  expect(ordenarPokemon(aOrdenar, "")).toBeFalsy()

  })

}

)

