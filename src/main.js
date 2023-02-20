import { filterDataType, filterDataGeneration, sortData, buscar } from "./data.js";
let arr;
fetch("./data/pokemon/pokemon.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    arr = data.pokemon;
    mostrar(arr);
  });
/////


function obtenerBackCard(x) {
  return `
  <div class="pokemon-info" id="superposicion">
    <div id="modal-info">
    <div class="${x.type[0]} type cuadro-derecho"></div>
    <div class="${x.type[0]} type cuadro-izquierdo"></div>
    <img class="img-ball" src="./images/Pokeball.png" alt=""></img> 
    
    <img class="img-p" src="${x.img} " alt="${x.name}" >
    
      <h1> #${x.num} ${x.name} </h1>
      <div class="contenedor">
        
          <div class="box-data-iz">
              <h3>About</h3>
              <p>${x.about}</p>
          </div>

        <div class="box-data-d">
          <h3>Size</h3>
          <div class="size">
          <div class="height">
          <h4>height</h4>
            <p>${x.size.height}</p>
          </div>
          <div class="weight">
          <h4>weight</h4>
            <p>${x.size.weight}</p>
          </div>
            
            
          </div>
          
        </div>
        <div class="box-data-iz">
          <h3>Resistant</h3>
          <div class="type-info">
            ${x.resistant.map((type) => `<p class="${type} type">${type}</p>`).join("")}
          </div>
        </div>
        <div class="box-data-dd">
          <h3>Statistics</h3>
          <table>
                    <tr class='cardback__box3__table--data'>
                        <th>attack</th>
                        <td>${x.stats["base-attack"]}</td>
                    </tr>
                    <tr class='cardback__box3__table--data'>
                        <th>defense</th>
                        <td>${x.stats["base-defense"]}</td>
                    </tr>
                    <tr class='cardback__box3__table--data'>
                        <th>stamina</th>
                        <td>${x.stats["base-stamina"]}</td>
                    </tr>
                    <tr class='cardback__box3__table--data'>
                        <th>cp</th>
                        <td>${x.stats["max-cp"]}</td>
                    </tr>
                    <tr class='cardback__box3__table--data'>
                        <th>hp</th>
                        <td>${x.stats["max-hp"]}</td>
                    </tr>
          </table>
        </div>
        <div class="box-data-iz">
          <h3>Weaknesses</h3>
          <div class="type-info">
            ${x.weaknesses.map((type) => `<p class="${type} type">${type}</p>`).join("")}
          </div>
        </div>
        
        
      
      </div>
    </div>
  </div>

  `
}

function obtnerFrontCard(element) {
  return `<div class="pokemon">
            <div class="name-container">
              <p class="num">#${element.num}</p>
              <p class="name">${element.name}</p>
            </div>
            <div class="img-container">
              <img src='${element.img}' alt="${element.name}"/>
            </div>
            <div class="type-container">
              ${element.type.map((type) => `<p class="${type} type">${type}</p>`).join("")}
            </div>
          </div>`
}

const mostrar = (arr) => {
  let templateListPoke = "";
  // recorremos nuestro array con forEach
  arr.forEach((pokemon) => {
    // creamos un template(string) por cada elemento del array
    const card = `<div class="pokeball front">
                    ${obtnerFrontCard(pokemon)}
                    ${obtenerBackCard(pokemon)}
                  </div>`;
    templateListPoke += card;
  });
  document.getElementById("listaPokemon").innerHTML = templateListPoke;
  rotarPokeball();
};
function rotarPokeball() {
  const pokeball = document.querySelectorAll(".pokeball")
  pokeball.forEach((element) => {
    element.addEventListener('click', function (e) {
      
      //element.classList.toggle('is-flipped');
      if (element.classList.contains("front")) {
        element.classList.remove("front")
        element.classList.add("back")
        element.querySelector(".pokemon").style.display = "none"
        element.querySelector(".pokemon-info").style.display = "flex"
      } else {
        element.classList.remove("back")
        element.classList.add("front")
        element.querySelector(".pokemon").style.display = "flex"
        element.querySelector(".pokemon-info").style.display = "none"
      }
      e.preventDefault;
    })
  })
}

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

const listOrder = document.getElementById("order");
listOrder.addEventListener("change", () => {
  const sortOrder = listOrder.value;
  mostrar(sortData(arr, sortOrder));
});

const pokeSearch = document.getElementById("pokeSearch");
pokeSearch.addEventListener("input", () => {
  const condicion = pokeSearch.value.toLowerCase();
  mostrar(buscar(arr, condicion));
});
////
const menu_toggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector('.sidebar');

menu_toggle.addEventListener('click', () => {
  menu_toggle.classList.toggle('is-active');
  sidebar.classList.toggle('is-active');
});
/* abrir modal */
// Show Modal superposiciónModal
const modal = document.getElementById("btnModal");
const res = document.getElementById("res");
const superposicionModal = document.getElementById("superposicion");

const mostrarModal = () => {
  superposicionModal.style.display = 'flex';
  const talla = document.getElementById("idTalla").value;
  if (talla > 0.41) {

    const tall = `<h1>Congrats! You are taller than pikachu!</h1>
    <img class="pikachu"  src="./images/exito.gif" alt=""/>`
    res.innerHTML = tall;
  } else {
    const short = `<h1>You are shorter than pikachu!</h1> 
    <img class="pikachu" src="./images/pikachu-sad.gif" alt=""/>`
    res.innerHTML = short;
  }
}
modal.addEventListener("click", mostrarModal);

// Hide On Blur ocultarModal
const ocultarModal = (e) => {
  if (e.target === e.currentTarget) {
    superposicionModal.style.display = 'none';
  }
}
superposicionModal.addEventListener("click", ocultarModal)
/* fin modal */

