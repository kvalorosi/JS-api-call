//.fetch() 

const res = fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => {return res.json()}).then((data) => {console.log(data)});

const clearData = () => {
    document.getElementById('pokeBody').innerHTML = '';
}


let formSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    let pname = event.target[0].value;
    console.log(pname);

    event.target.reset();

    let newElement = document.createElement('h3');
    newElement.innerHTML= pname + " ";
    form.after(newElement);

}
let form = document.getElementById('poke-form');
console.log(form);
form.addEventListener('submit', formSubmit)


const getData = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
   
    //const spriteUrl = pokeData.sprites.front_default;
    console.log('Async/await AXIOS-', response.data);
    return response.data
}

async function loadData() {
    const name = document.getElementById("poke-name").value;
    const data = await getData(name);
    console.log(data);
    data.results.forEach((pokemon, index) => {
        let newRow = `<tr><th scope="row">${index + 1}</th><td>${pokemon.name}</td></tr>`;
        document.getElementById('pokeBody').insertAdjacentHTML('beforeend', newRow);
        let pokeImg = document.getElementById('poke-img'); pokeImg.src = data.sprImg_url;
        console.log(pokeImg)
    });
}
