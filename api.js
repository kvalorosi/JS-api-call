const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const nameElement = document.querySelector(".name h1");
const spriteElement = document.querySelector(".sprite");

async function findPokemon(name){
    const response = await fetch(apiUrl + name);
    var data = await response.json();

    console.log(data)
    const infoDiv = document.getElementById("info");
    infoDiv.innerHTML = `<div class="card mb-3">
    <h5 class="card-header" id="name"> ${data.name}</h5>
    <div class="card-body">
      <img class="card-img-top" src="${data["sprites"]['versions']['generation-v']['black-white']['animated']['front_shiny']}" alt="${data.name}"/>
      </ul>
    </div>
  </div>`

}
searchBtn.addEventListener("click", () => {
    findPokemon(searchBox.value);
})
findPokemon(name);
