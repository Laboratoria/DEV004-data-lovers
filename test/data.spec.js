import { filter, ordenar } from '../src/data.js';

/*
describe('example', () => {
  it('is a function', () => {
    const example = function (){
      return null
    }
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
*/


function filter(option, data) {
  return {
    toBe(data.filter((poke) => poke.type.includes(option))) {
      if(result !== expected) {
        throw new Error(`${result} is not equal a ${expected} 😕`)
      }
    }
  }
}