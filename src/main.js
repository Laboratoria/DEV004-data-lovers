import {filterDataType,filterDataGeneration,sortData,computeStats, buscar} from "./data.js";
fetch("./data/pokemon/pokemon.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const arr = data.pokemon;
    const mostrar = (arr) => {
      let templateListPoke = "";
      // recorremos nuestro array con forEach
      arr.forEach((element) => {
        const listTypes = element.type.map(
          (type) => `<p class="${type} type">${type}</p>`
        );
        // creamos un template(string) por cada elemento del array
        const card = `
                <div class="pokeball">
                    <div class="pokemon">
                        <div class="name-container">
                            <p class="num">#${element.num}</p>
                            <p class="name">${element.name}</p>
                        </div>
                        <div class="img-container">
                            <img src='${element.img}' alt="${element.name}"/>
                        </div>
                        <div class="type-container">
                            ${listTypes.join("")}
                        </div>
                    </div>
                </div>
          `;
        templateListPoke += card;
      });
      document.getElementById("listaPokemon").innerHTML = templateListPoke;
    };
    mostrar(arr);

    const listType = document.getElementById("filterListType");
    listType.addEventListener("change", () => {
      const condicion = listType.value;
      mostrar(filterDataType(arr, condicion));
    });

    const listGeneration = document.getElementById("filterListGeneration");
    listGeneration.addEventListener("change", () => {
      const condicion = listGeneration.value;
      mostrar(filterDataGeneration(arr, condicion));
    });

    //sortOrder: ascendente , descendente
    //sortBy: numero, nombre
    const listOrder = document.getElementById("order");
    listOrder.addEventListener("change", () => {
      const sortOrder = listOrder.value;
      const sortBy1 = 'a-z'
      const sortBy2 = 'z-a'
      const sortBy3 = 'ascending'
      const sortBy4 = 'descending'
      mostrar(sortData(arr,sortBy1,sortBy2,sortBy3,sortBy4, sortOrder));
    });


    const pokeSearch = document.getElementById("pokeSearch");
    pokeSearch.addEventListener("input", () => {
      const condicion = pokeSearch.value;
      mostrar(buscar(arr,condicion));
    });
    

  }); //termina el then

const btn = document.getElementById("btn");
const res = document.getElementById("res");
btn.addEventListener("click", (e) => {
  const talla = document.getElementById("idTalla").value;
  if (talla >0.41) {
    res.innerHTML = "Congrats! You are taller than pikachu";
  } else {
    res.innerHTML = "You are shorter than pikachu";
  }
  e.preventDefault();
});
