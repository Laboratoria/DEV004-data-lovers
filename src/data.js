// estas funciones son de ejemplo
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};


// funcionalidad de sort para ordenar columnas (sin terminar)
const dataFunctions = {

  sortData(data , sortType, sortOrder) {
    if (sortType === "name") {
      if (sortOrder === false) {
        data.sort((a, b) => {
          if (a.name < b.name) return -1;
        })
      }
      if (sortOrder === true) {
        data.sort((a, b) => {
          if (a.name > b.name) return -1;
        })
      }          
    }
    return data
  }
  
}
console.log("el tipo de dataFunctions es = "+typeof dataFunctions)


//(function () {
// var bsa_optimize = document.createElement('script');
//bsa_optimize.defer = true;
//bsa_optimize.src = 'https://cdn4.buysellads.net/pub/pokemondb.js?' + (new Date() - new Date() % 600000);
//(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(bsa_optimize);
//})();



export default dataFunctions