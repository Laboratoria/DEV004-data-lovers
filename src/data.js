

export const campeonesMage =(lol, rol) =>{
  const campeonesFiltrados = [];
  for (const i in lol) {
    if (Object.hasOwnProperty.call(lol, i)) {
      const element = lol[i];
      // console.log(element);
      if(element.tags.includes(rol)){
        campeonesFiltrados.push(element)   
      }
    }
  }
  console.log(campeonesFiltrados);
  return campeonesFiltrados
}


