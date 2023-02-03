import { example, anotherExample } from '../src/data.js';
import dataFunctions from '../src/data.js';


describe('dataFunctions', () => {

  it('is an object', () => {
    expect(typeof dataFunctions).toBe('object');
  });

  describe('dataFunctions.sortData', () => {

    it('is a function', () => {
      expect(typeof dataFunctions.sortData).toBe('function');
    });
   
    it('Ascending sorting executed', () => {
      expect(dataFunctions.sortData([{"name":"a"},{"name":"c"},{"name":"b"}], "name", false)).toStrictEqual([{"name":"a"},{"name":"b"},{"name":"c"}]);
    });

    it('Descending sorting executed', () => {
      expect(dataFunctions.sortData([{"name":"a"},{"name":"c"},{"name":"b"}], "name", true)).toStrictEqual([{"name":"c"},{"name":"b"},{"name":"a"}]);
    });

  });

});



describe('example', () => {
  it('is a function', () => {
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