import {
  filterDataType,
  filterDataGeneration,
  buscar,
  sortData,
} from "../src/data.js";

describe("filter TYPE POKEMON", () => {
  it("is a function", () => {
    expect(typeof filterDataType).toBe("function");
  });

  it("return todos lo pokemones de tipo grass", () => {
    const ejemplo = [
      {
        num: "001",
        name: "bulbasaur",
        generation: {
          num: "generation i",
          name: "kanto",
        },
        about:
          "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
        img: "https://www.serebii.net/pokemongo/pokemon/001.png",
        size: {
          height: "0.71 m",
          weight: "6.9 kg",
        },
        "pokemon-rarity": "normal",
        type: ["grass", "poison"],
        encounter: {
          "base-flee-rate": "0.1",
          "base-capture-rate": "0.2",
        },
        "spawn-chance": "0.69",
        stats: {
          "base-attack": "118",
          "base-defense": "111",
          "base-stamina": "128",
          "max-cp": "1115",
          "max-hp": "113",
        },
        resistant: ["water", "electric", "grass", "fighting", "fairy"],
        weaknesses: ["fire", "ice", "flying", "psychic"],
        "quick-move": [
          {
            name: "vine whip",
            type: "grass",
            "base-damage": "7",
            energy: "6",
            "move-duration-seg": "0.6",
          },
          {
            name: "tackle",
            type: "normal",
            "base-damage": "5",
            energy: "5",
            "move-duration-seg": "0.5",
          },
        ],
        "special-attack": [
          {
            name: "sludge bomb",
            type: "poison",
            "base-damage": "80",
            energy: "-50",
            "move-duration-seg": "2.3",
          },
          {
            name: "seed bomb",
            type: "grass",
            "base-damage": "55",
            energy: "-33",
            "move-duration-seg": "2.1",
          },
          {
            name: "power whip",
            type: "grass",
            "base-damage": "90",
            energy: "-50",
            "move-duration-seg": "2.6",
          },
        ],
        egg: "2 km",
        "buddy-distance-km": "3",
        evolution: {
          candy: "bulbasaur candy",
          "next-evolution": [
            {
              num: "002",
              name: "ivysaur",
              "candy-cost": "25",
              "next-evolution": [
                {
                  num: "003",
                  name: "venusaur",
                  "candy-cost": "100",
                },
              ],
            },
          ],
        },
      },
      {
        num: "005",
        name: "charmeleon",
        generation: {
          num: "generation i",
          name: "kanto",
        },
        about:
          "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
        img: "https://www.serebii.net/pokemongo/pokemon/005.png",
        size: {
          height: "1.09 m",
          weight: "19.0 kg",
        },
        "pokemon-rarity": "normal",
        type: ["fire"],
        encounter: {
          "base-flee-rate": "0.07",
          "base-capture-rate": "0.1",
        },
        "spawn-chance": "0.012",
        stats: {
          "base-attack": "158",
          "base-defense": "126",
          "base-stamina": "151",
          "max-cp": "1653",
          "max-hp": "131",
        },
        resistant: ["fire", "grass", "ice", "bug", "steel"],
        weaknesses: ["water", "ground", "rock"],
        "quick-move": [
          {
            name: "ember",
            type: "fire",
            "base-damage": "10",
            energy: "10",
            "move-duration-seg": "1",
          },
          {
            name: "fire fang",
            type: "fire",
            "base-damage": "11",
            energy: "8",
            "move-duration-seg": "0.9",
          },
          {
            name: "scratch",
            type: "normal",
            "base-damage": "6",
            energy: "4",
            "move-duration-seg": "0.5",
          },
        ],
        "special-attack": [
          {
            name: "fire punch",
            type: "fire",
            "base-damage": "55",
            energy: "-33",
            "move-duration-seg": "2.2",
          },
          {
            name: "flame burst",
            type: "fire",
            "base-damage": "70",
            energy: "-50",
            "move-duration-seg": "2.6",
          },
          {
            name: "flamethrower",
            type: "fire",
            "base-damage": "70",
            energy: "-50",
            "move-duration-seg": "2.2",
          },
        ],
        egg: "not in eggs",
        "buddy-distance-km": "3",
        evolution: {
          candy: "charmander candy",
          "next-evolution": [
            {
              num: "006",
              name: "charizard",
              "candy-cost": "100",
            },
          ],
          "prev-evolution": [
            {
              num: "004",
              name: "charmander",
              "candy-cost": "25",
            },
          ],
        },
      },
    ];
    expect(filterDataType(ejemplo, "grass")).toEqual([
      {
        num: "001",
        name: "bulbasaur",
        generation: {
          num: "generation i",
          name: "kanto",
        },
        about:
          "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
        img: "https://www.serebii.net/pokemongo/pokemon/001.png",
        size: {
          height: "0.71 m",
          weight: "6.9 kg",
        },
        "pokemon-rarity": "normal",
        type: ["grass", "poison"],
        encounter: {
          "base-flee-rate": "0.1",
          "base-capture-rate": "0.2",
        },
        "spawn-chance": "0.69",
        stats: {
          "base-attack": "118",
          "base-defense": "111",
          "base-stamina": "128",
          "max-cp": "1115",
          "max-hp": "113",
        },
        resistant: ["water", "electric", "grass", "fighting", "fairy"],
        weaknesses: ["fire", "ice", "flying", "psychic"],
        "quick-move": [
          {
            name: "vine whip",
            type: "grass",
            "base-damage": "7",
            energy: "6",
            "move-duration-seg": "0.6",
          },
          {
            name: "tackle",
            type: "normal",
            "base-damage": "5",
            energy: "5",
            "move-duration-seg": "0.5",
          },
        ],
        "special-attack": [
          {
            name: "sludge bomb",
            type: "poison",
            "base-damage": "80",
            energy: "-50",
            "move-duration-seg": "2.3",
          },
          {
            name: "seed bomb",
            type: "grass",
            "base-damage": "55",
            energy: "-33",
            "move-duration-seg": "2.1",
          },
          {
            name: "power whip",
            type: "grass",
            "base-damage": "90",
            energy: "-50",
            "move-duration-seg": "2.6",
          },
        ],
        egg: "2 km",
        "buddy-distance-km": "3",
        evolution: {
          candy: "bulbasaur candy",
          "next-evolution": [
            {
              num: "002",
              name: "ivysaur",
              "candy-cost": "25",
              "next-evolution": [
                {
                  num: "003",
                  name: "venusaur",
                  "candy-cost": "100",
                },
              ],
            },
          ],
        },
      },
    ]);
  });
});

describe("filter de generacion", () => {
  it("is a function", () => {
    expect(typeof filterDataGeneration).toBe("function");
  });

  it("return todos lo pokemones por generacion", () => {
    const ejemplo1 = [
      {
        num: "001",
        name: "bulbasaur",
        generation: {
          num: "generation i",
          name: "kanto",
        },
        about:
          "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
        img: "https://www.serebii.net/pokemongo/pokemon/001.png",
        size: {
          height: "0.71 m",
          weight: "6.9 kg",
        },
        "pokemon-rarity": "normal",
        type: ["grass", "poison"],
        encounter: {
          "base-flee-rate": "0.1",
          "base-capture-rate": "0.2",
        },
        "spawn-chance": "0.69",
        stats: {
          "base-attack": "118",
          "base-defense": "111",
          "base-stamina": "128",
          "max-cp": "1115",
          "max-hp": "113",
        },
        resistant: ["water", "electric", "grass", "fighting", "fairy"],
        weaknesses: ["fire", "ice", "flying", "psychic"],
        "quick-move": [
          {
            name: "vine whip",
            type: "grass",
            "base-damage": "7",
            energy: "6",
            "move-duration-seg": "0.6",
          },
          {
            name: "tackle",
            type: "normal",
            "base-damage": "5",
            energy: "5",
            "move-duration-seg": "0.5",
          },
        ],
        "special-attack": [
          {
            name: "sludge bomb",
            type: "poison",
            "base-damage": "80",
            energy: "-50",
            "move-duration-seg": "2.3",
          },
          {
            name: "seed bomb",
            type: "grass",
            "base-damage": "55",
            energy: "-33",
            "move-duration-seg": "2.1",
          },
          {
            name: "power whip",
            type: "grass",
            "base-damage": "90",
            energy: "-50",
            "move-duration-seg": "2.6",
          },
        ],
        egg: "2 km",
        "buddy-distance-km": "3",
        evolution: {
          candy: "bulbasaur candy",
          "next-evolution": [
            {
              num: "002",
              name: "ivysaur",
              "candy-cost": "25",
              "next-evolution": [
                {
                  num: "003",
                  name: "venusaur",
                  "candy-cost": "100",
                },
              ],
            },
          ],
        },
      },
      {
        num: "152",
        name: "chikorita",
        generation: {
          num: "generation ii",
          name: "johto",
        },
        about:
          "In battle, Chikorita waves its leaf around to keep the foe at bay. However, a sweet fragrance also wafts from the leaf, becalming the battling Pokémon and creating a cozy, friendly atmosphere all around.",
        img: "https://www.serebii.net/pokemongo/pokemon/152.png",
        size: {
          height: "0.89 m",
          weight: "6.4 kg",
        },
        "pokemon-rarity": "normal",
        type: ["grass"],
        encounter: {
          "base-flee-rate": "0.1",
          "base-capture-rate": "0.2",
        },
        "spawn-chance": null,
        stats: {
          "base-attack": "92",
          "base-defense": "122",
          "base-stamina": "128",
          "max-cp": "935",
          "max-hp": "113",
        },
        resistant: ["water", "electric", "grass", "ground"],
        weaknesses: ["fire", "ice", "poison", "flying"],
        "quick-move": [
          {
            name: "vine whip",
            type: "grass",
            "base-damage": "7",
            energy: "6",
            "move-duration-seg": "0.6",
          },
          {
            name: "tackle",
            type: "normal",
            "base-damage": "5",
            energy: "5",
            "move-duration-seg": "0.5",
          },
        ],
        "special-attack": [
          {
            name: "energy ball",
            type: "grass",
            "base-damage": "90",
            energy: "-50",
            "move-duration-seg": "3.9",
          },
          {
            name: "grass knot",
            type: "grass",
            "base-damage": "90",
            energy: "-50",
            "move-duration-seg": "2.6",
          },
          {
            name: "body slam",
            type: "normal",
            "base-damage": "50",
            energy: "-33",
            "move-duration-seg": "1.9",
          },
        ],
        egg: "2 km",
        "buddy-distance-km": "3",
        evolution: {
          candy: "chikorita candy",
          "next-evolution": [
            {
              num: "153",
              name: "bayleef",
              "candy-cost": "25",
              "next-evolution": [
                {
                  num: "154",
                  name: "meganium",
                  "candy-cost": "100",
                },
              ],
            },
          ],
        },
      },
    ];
    expect(filterDataGeneration(ejemplo1, "kanto")).toEqual([
      {
        num: "001",
        name: "bulbasaur",
        generation: {
          num: "generation i",
          name: "kanto",
        },
        about:
          "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
        img: "https://www.serebii.net/pokemongo/pokemon/001.png",
        size: {
          height: "0.71 m",
          weight: "6.9 kg",
        },
        "pokemon-rarity": "normal",
        type: ["grass", "poison"],
        encounter: {
          "base-flee-rate": "0.1",
          "base-capture-rate": "0.2",
        },
        "spawn-chance": "0.69",
        stats: {
          "base-attack": "118",
          "base-defense": "111",
          "base-stamina": "128",
          "max-cp": "1115",
          "max-hp": "113",
        },
        resistant: ["water", "electric", "grass", "fighting", "fairy"],
        weaknesses: ["fire", "ice", "flying", "psychic"],
        "quick-move": [
          {
            name: "vine whip",
            type: "grass",
            "base-damage": "7",
            energy: "6",
            "move-duration-seg": "0.6",
          },
          {
            name: "tackle",
            type: "normal",
            "base-damage": "5",
            energy: "5",
            "move-duration-seg": "0.5",
          },
        ],
        "special-attack": [
          {
            name: "sludge bomb",
            type: "poison",
            "base-damage": "80",
            energy: "-50",
            "move-duration-seg": "2.3",
          },
          {
            name: "seed bomb",
            type: "grass",
            "base-damage": "55",
            energy: "-33",
            "move-duration-seg": "2.1",
          },
          {
            name: "power whip",
            type: "grass",
            "base-damage": "90",
            energy: "-50",
            "move-duration-seg": "2.6",
          },
        ],
        egg: "2 km",
        "buddy-distance-km": "3",
        evolution: {
          candy: "bulbasaur candy",
          "next-evolution": [
            {
              num: "002",
              name: "ivysaur",
              "candy-cost": "25",
              "next-evolution": [
                {
                  num: "003",
                  name: "venusaur",
                  "candy-cost": "100",
                },
              ],
            },
          ],
        },
      },
    ]);
  });
});

describe("buscar pokemon", () => {
  it("is a function", () => {
    expect(typeof buscar).toBe("function");
  });

  it("return el pokemon que busca", () => {
    const ejemplo2 = [
      {
        num: "001",
        name: "bulbasaur",
        generation: {
          num: "generation i",
          name: "kanto",
        },
        about:
          "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
        img: "https://www.serebii.net/pokemongo/pokemon/001.png",
        size: {
          height: "0.71 m",
          weight: "6.9 kg",
        },
        "pokemon-rarity": "normal",
        type: ["grass", "poison"],
        encounter: {
          "base-flee-rate": "0.1",
          "base-capture-rate": "0.2",
        },
        "spawn-chance": "0.69",
        stats: {
          "base-attack": "118",
          "base-defense": "111",
          "base-stamina": "128",
          "max-cp": "1115",
          "max-hp": "113",
        },
        resistant: ["water", "electric", "grass", "fighting", "fairy"],
        weaknesses: ["fire", "ice", "flying", "psychic"],
        "quick-move": [
          {
            name: "vine whip",
            type: "grass",
            "base-damage": "7",
            energy: "6",
            "move-duration-seg": "0.6",
          },
          {
            name: "tackle",
            type: "normal",
            "base-damage": "5",
            energy: "5",
            "move-duration-seg": "0.5",
          },
        ],
        "special-attack": [
          {
            name: "sludge bomb",
            type: "poison",
            "base-damage": "80",
            energy: "-50",
            "move-duration-seg": "2.3",
          },
          {
            name: "seed bomb",
            type: "grass",
            "base-damage": "55",
            energy: "-33",
            "move-duration-seg": "2.1",
          },
          {
            name: "power whip",
            type: "grass",
            "base-damage": "90",
            energy: "-50",
            "move-duration-seg": "2.6",
          },
        ],
        egg: "2 km",
        "buddy-distance-km": "3",
        evolution: {
          candy: "bulbasaur candy",
          "next-evolution": [
            {
              num: "002",
              name: "ivysaur",
              "candy-cost": "25",
              "next-evolution": [
                {
                  num: "003",
                  name: "venusaur",
                  "candy-cost": "100",
                },
              ],
            },
          ],
        },
      },
      {
        num: "152",
        name: "chikorita",
        generation: {
          num: "generation ii",
          name: "johto",
        },
        about:
          "In battle, Chikorita waves its leaf around to keep the foe at bay. However, a sweet fragrance also wafts from the leaf, becalming the battling Pokémon and creating a cozy, friendly atmosphere all around.",
        img: "https://www.serebii.net/pokemongo/pokemon/152.png",
        size: {
          height: "0.89 m",
          weight: "6.4 kg",
        },
        "pokemon-rarity": "normal",
        type: ["grass"],
        encounter: {
          "base-flee-rate": "0.1",
          "base-capture-rate": "0.2",
        },
        "spawn-chance": null,
        stats: {
          "base-attack": "92",
          "base-defense": "122",
          "base-stamina": "128",
          "max-cp": "935",
          "max-hp": "113",
        },
        resistant: ["water", "electric", "grass", "ground"],
        weaknesses: ["fire", "ice", "poison", "flying"],
        "quick-move": [
          {
            name: "vine whip",
            type: "grass",
            "base-damage": "7",
            energy: "6",
            "move-duration-seg": "0.6",
          },
          {
            name: "tackle",
            type: "normal",
            "base-damage": "5",
            energy: "5",
            "move-duration-seg": "0.5",
          },
        ],
        "special-attack": [
          {
            name: "energy ball",
            type: "grass",
            "base-damage": "90",
            energy: "-50",
            "move-duration-seg": "3.9",
          },
          {
            name: "grass knot",
            type: "grass",
            "base-damage": "90",
            energy: "-50",
            "move-duration-seg": "2.6",
          },
          {
            name: "body slam",
            type: "normal",
            "base-damage": "50",
            energy: "-33",
            "move-duration-seg": "1.9",
          },
        ],
        egg: "2 km",
        "buddy-distance-km": "3",
        evolution: {
          candy: "chikorita candy",
          "next-evolution": [
            {
              num: "153",
              name: "bayleef",
              "candy-cost": "25",
              "next-evolution": [
                {
                  num: "154",
                  name: "meganium",
                  "candy-cost": "100",
                },
              ],
            },
          ],
        },
      },
    ];
    expect(buscar(ejemplo2, "bulbasaur")).toEqual([
      {
        num: "001",
        name: "bulbasaur",
        generation: {
          num: "generation i",
          name: "kanto",
        },
        about:
          "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
        img: "https://www.serebii.net/pokemongo/pokemon/001.png",
        size: {
          height: "0.71 m",
          weight: "6.9 kg",
        },
        "pokemon-rarity": "normal",
        type: ["grass", "poison"],
        encounter: {
          "base-flee-rate": "0.1",
          "base-capture-rate": "0.2",
        },
        "spawn-chance": "0.69",
        stats: {
          "base-attack": "118",
          "base-defense": "111",
          "base-stamina": "128",
          "max-cp": "1115",
          "max-hp": "113",
        },
        resistant: ["water", "electric", "grass", "fighting", "fairy"],
        weaknesses: ["fire", "ice", "flying", "psychic"],
        "quick-move": [
          {
            name: "vine whip",
            type: "grass",
            "base-damage": "7",
            energy: "6",
            "move-duration-seg": "0.6",
          },
          {
            name: "tackle",
            type: "normal",
            "base-damage": "5",
            energy: "5",
            "move-duration-seg": "0.5",
          },
        ],
        "special-attack": [
          {
            name: "sludge bomb",
            type: "poison",
            "base-damage": "80",
            energy: "-50",
            "move-duration-seg": "2.3",
          },
          {
            name: "seed bomb",
            type: "grass",
            "base-damage": "55",
            energy: "-33",
            "move-duration-seg": "2.1",
          },
          {
            name: "power whip",
            type: "grass",
            "base-damage": "90",
            energy: "-50",
            "move-duration-seg": "2.6",
          },
        ],
        egg: "2 km",
        "buddy-distance-km": "3",
        evolution: {
          candy: "bulbasaur candy",
          "next-evolution": [
            {
              num: "002",
              name: "ivysaur",
              "candy-cost": "25",
              "next-evolution": [
                {
                  num: "003",
                  name: "venusaur",
                  "candy-cost": "100",
                },
              ],
            },
          ],
        },
      },
    ]);
  });
});

describe("que ordene pokemones", () => {
  it("is a function", () => {
    expect(typeof sortData).toBe("function");
  });

  it.only("return en orden alfabetico acendente", () => {
    const ejemplo2 = [
      {
        name: "chikorita",
      },
      {
        name: "bulbasaur",
      },
    ];
    expect(sortData(ejemplo2, "a-z")).toEqual([
      {
        name: "bulbasaur",
      },
      {
        name: "chikorita",
      },
    ]);
  });
});
