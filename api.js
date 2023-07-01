//const res = fetch(`https://pokeapi.co/api/v2/pokemon/name`)
//.then((res) => {return res.json()}).then((data) => {console.log(data)});

const getPokeApiFetch = async (name) => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await resp.json();
    console.log('Async await fetch-', data);
    return data;
};

getPokeApiFetch();

let getData = async (name) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    console.log('Async/await AXIOS-', response.data);
    return response.data
}

let loadData = async (name) => {
    let data = await getData(name);
    console.log(data);
    let newRow = `<tr><th scope="row"></th><td>${data.name}</td></tr>`;
    document.getElementById('pokeBody').insertAdjacentHTML('beforeend', newRow);

}
let clearData = () => {
    document.getElementById('pokeBody').innerHTML = '';
}

