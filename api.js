//const apiUrl = "https://pokeapi.co/api/v2/ability/";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const nameElement = document.querySelector(".name h1");
const spriteElement = document.querySelector(".sprite");

async function findPoke(name){
    const response = await fetch("https://pokeapi.co/api/v2/ability/");
    var data = await response.json();

    console.log(data)
    
}
searchBtn.addEventListener("click", ()=>{
    findPoke(searchBox.value);
})
findPoke("ability-name");
