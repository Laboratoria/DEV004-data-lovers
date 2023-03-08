import { filtrarPokemon, filtrarTipo, filtrarResistencia, filtrarDebilidad, ordenar, ordenarCp, calculando } from '../src/data.js';
import data from "../src/data/pokemon/pokemon.js";

describe('filtrarPokemon', () => {
  it('is a function', () => {
    expect(typeof filtrarPokemon).toBe('function');
  });

  it('returns `filtrarPokemon`', () => {
    const filtrados = filtrarPokemon(data.pokemon,'bulbasaur')
    expect(filtrados[0].name).toBe('bulbasaur');
    expect(filtrados.length).toBe(1);
  });
});


describe('filtrarTipo', () => {
  it('is a function', () => {
    expect(typeof filtrarTipo).toBe('function');
  });

  it('returns `filtrarTipo`', () => {
    const filtradosTipo = filtrarTipo(data.pokemon,'grass')
    expect(filtradosTipo[0].type).toStrictEqual(['grass','poison']);
    expect(filtradosTipo.length).toBe(24);
  });
});


describe('filtrarResistencia', () => {
  it('is a function', () => {
    expect(typeof filtrarResistencia).toBe('function');
  });

  it('returns `filtrarResistencia`', () => {
    const filtradosResistencia = filtrarResistencia(data.pokemon,'water')
    expect(filtradosResistencia[0].resistant).toStrictEqual(["water","electric","grass","fighting","fairy"]);
    expect(filtrarResistencia.length).toStrictEqual(2);
  });
});


describe('filtrarDebilidad', () => {
  it('is a function', () => {
    expect(typeof filtrarDebilidad).toBe('function');
  });

  it('returns `filtrarDebilidad`', () => {
    const filtradosDebilidad = filtrarDebilidad(data.pokemon,'fire')
    expect(filtradosDebilidad[0].weaknesses).toStrictEqual(["fire","ice","flying","psychic"]);
    expect(filtradosDebilidad.length).toBe(54);
  });
});


describe('ordenar', () => {
  it('is a function', () => {
    expect(typeof ordenar).toBe('function');
  });

  it('returns `ordenar`', () => {
    const filtradosOrdenar = ordenar(data.pokemon,'0.71 m')
    expect(filtradosOrdenar[0].size.height).toBe('0.71 m');
  });
});


describe('ordenarCp', () => {
  it('is a function', () => {
    expect(typeof ordenarCp).toBe('function');
  });

  it('returns `ordenarCp`', () => {
    const filtradosOrdenarCP= ordenarCp(data.pokemon,'1115')
    expect(filtradosOrdenarCP[0].stats.max-cp).toBe('1115');
  });
});


describe('calculando', () => {
  it('is a function', () => {
    expect(typeof calculando).toBe('function');
  });

  it('returns `calculando`', () => {
    const filtradosCalculando= calculando(data.pokemon,'33.33%')
    expect(filtradosCalculando[0].grass).toBe('33.33%');
  });
});