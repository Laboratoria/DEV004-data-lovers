

// funcionalidad de sort para ordenar columnas
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
    } else { 
      if (sortOrder === false) {
        data.sort((a, b) => {
          if (a.num < b.num) return -1;
        })
      }
      if (sortOrder === true) {
        data.sort((a, b) => {
          if (a.num > b.num) return -1;
        })
      }       
    }
    return data
  },

  // funcionalidad de filtrado por tipo para los botones
  filterData(data,condition)  {
    data = data.filter(value=>value.type.includes(condition))
    return data
  }
  
}



export default dataFunctions