const apiUrl = "https://pokeapi.co/api/v2/ability/";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const nameElement = document.querySelector(".name h1");
const spriteElement = document.querySelector(".sprite");

async function findPokemon(name){
    const response = await fetch(apiUrl + name);
    var data = await response.json();

    console.log(data)
    nameElement.textContent = data.name;
    spriteElement.src = data.sprites.front_default;
    
}
searchBtn.addEventListener("click", () => {
    findPokemon(searchBox.value);
})
findPokemon(name);
