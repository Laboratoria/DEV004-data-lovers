import { filtrarPokemon, ordenarpoke, calcularCP } from "../src/data.js";

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
    expect(filtrarPokemon("fire", data)).toStrictEqual([
      { num: "004", name: "charmander", type: ["fire"] },
    ]);
  });
  // estresar la funcion
  it("retorna false cuando falta parametro", () => {
    // expect(filtrarPokemon('', data)).toBe(false)
    expect(filtrarPokemon("", data)).toBeFalsy();
  });
});

// Test funcion ORDENAR:

describe("ordenarPoke", () => {
  //validar
  it("Es una funcion", () => {
    expect(typeof ordenarpoke).toBe("function");
  });

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
  };

  const dataAZ = [
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
      name: "diglett",
    },
  ];

  const dataZA = [
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
      name: "abra",
    },
  ];

  it("Ordenar", () => {
    expect(ordenarpoke("asc", data)).toStrictEqual(dataAZ);
    expect(ordenarpoke("des", data)).toStrictEqual(dataZA);
  });

  //Estresar:
  it("retorna falsa cuando", () => {
    // expect(ordenarpoke(data, "")).toBeFalsy();
    expect(ordenarpoke("", data)).toBeFalsy();
    //  expect(ordenarPokemon(aOrdenar, "")).toBeFalsy()
  });
});

describe("calcularCP", () => {
  //validar
  it("Es una funcion", () => {
    expect(typeof calcularCP).toBe("function");
  });

  //Verificar:
  const dataCPMAX = {
    "pokemon" : [
      {
        name: "MEWTWO",
        stats: {
          "max-cp": "4178",
        },
      },
      {
        name: "HO-OH",
        stats: {
          "max-cp": "3863",
        },
      },
      {
        name: "TYRANTAR",
        stats: {
          "max-cp": "3834",
        },
      },
      {
        name: "DRAGONITE",
        stats: {
          "max-cp": "3792",
        },
      },
      {
        name: "LUGIA",
        stats: {
          "max-cp": "3703",
        },
      },
      {
        name: "ZAPDOS",
        stats: {
          "max-cp": "3527",
        },
      },
      {
        name: "ENTEI",
        stats: {
          "max-cp": "3473",
        },
      },
    ],
  };

  const cpOtros = [
    { name: "MEWTWO", stats: { "max-cp": "4178" } },
    { name: "HO-OH", stats: { "max-cp": "3863" } },
    { name: "TYRANTAR", stats: { "max-cp": "3834" } },
    { name: "DRAGONITE", stats: { "max-cp": "3792" } },
    { name: "LUGIA", stats: { "max-cp": "3703" } },
    { name: "ZAPDOS", stats: { "max-cp": "3527" } },
    { name: "ENTEI", stats: { "max-cp": "3473" } },
  ];

  it("Calcular", () => {
    expect(calcularCP("max", dataCPMAX)).toStrictEqual(cpOtros);
  });

  //Estresar:
  it("retorna falsa cuando", () => {
    expect(calcularCP("", cpOtros)).toBeFalsy();
  });
});