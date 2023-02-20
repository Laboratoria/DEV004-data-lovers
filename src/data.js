export const filterDataType = (data, condition) => {
  const filtroType = data.filter((data) => data.type.includes(condition));
  return filtroType;
};
export const filterDataGeneration = (data, condition) => {
  const filtroGeneration = data.filter((data) => data.generation.name.includes(condition)
  );
  return filtroGeneration;
};

export const sortData = (data, sortOrder) => {
  let respuesta;
  switch (sortOrder) {
  case 'a-z': respuesta = data.sort((a, b) => a.name.localeCompare(b.name)); break;
  case 'z-a': respuesta = data.sort((a, b) => b.name.localeCompare(a.name)); break;
  case 'ascending': respuesta = data.sort((a, b) => a.num.localeCompare(b.num)); break;
  case 'descending': respuesta = data.sort((a, b) => b.num.localeCompare(a.num)); break;
  } 
  return respuesta
};



// export const sortData = (data,sortBy1,sortBy2,sortBy3,sortBy4, sortOrder) => {
//   let respuesta;
//   switch (sortOrder) {
//   case sortBy1: respuesta = data.sort((a, b) => a.name.localeCompare(b.name)); break;
//   case sortBy2: respuesta = data.sort((a, b) => b.name.localeCompare(a.name)); break;
//   case sortBy3: respuesta = data.sort((a, b) => a.num.localeCompare(b.num)); break;
//   case sortBy4: respuesta = data.sort((a, b) => b.num.localeCompare(a.num)); break;
//   }
//   return respuesta
// };

export const buscar = (data,condicion) => {
  const buscarName = data.filter((data) => data.name.startsWith(condicion));
  const buscarNum = data.filter((data) => data.num.startsWith(condicion));
  return [...buscarName,...buscarNum ] ;
};

/* calcular, nos permitirá hacer cálculos estadísticos básicos
 para ser mostrados de acuerdo a la data proporcionada. */
/* export const computeStats = (data) => {
  return "OMG";
}; */

