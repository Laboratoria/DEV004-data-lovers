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
   
    it('Ascending name sorting executed', () => {
      expect(dataFunctions.sortData([{"name":"a"},{"name":"c"},{"name":"b"}], "name", false)).toStrictEqual([{"name":"a"},{"name":"b"},{"name":"c"}]);
    });

    it('Descending name sorting executed', () => {
      expect(dataFunctions.sortData([{"name":"a"},{"name":"c"},{"name":"b"}], "name", true)).toStrictEqual([{"name":"c"},{"name":"b"},{"name":"a"}]);
    });
       
    it('Ascending number sorting executed', () => {
      expect(dataFunctions.sortData([{"num":"1"},{"num":"3"},{"num":"2"}], "num", false)).toStrictEqual([{"num":"1"},{"num":"2"},{"num":"3"}]);
    });

    it('Descending number sorting executed', () => {
      expect(dataFunctions.sortData([{"num":"1"},{"num":"3"},{"num":"2"}], "num", true)).toStrictEqual([{"num":"3"},{"num":"2"},{"num":"1"}]);
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