let imgPokemon = document.querySelector("#fotoPoke");

let idPoke = document.querySelector("#idPokemon")

let nomePoke = document.querySelector("#nomePokemon")

let formPoke = document.querySelector("#formPoke");

let inputPoke = document.querySelector("#inputPoke")

let inputF = document.querySelector("#inputForm");

let tipo1Poke = document.querySelector("#tipo1")

let tipo2Poke = document.querySelector("#tipo2")

let habilidade = document.querySelector("#habilidade")

let pesoPoke = document.querySelector("#peso")

let altura = document.querySelector("#altura")

let back = document.querySelector("#btnVoltar")

let next = document.querySelector("#btnProximo")

let numeroPokedex = 1;

function pesoKG(peso){
    return peso / 2.205
}

function alturaM(altura){
    return altura * 30.48
}

function tocarSom(som){
    som = new Audio(som);
    som.play();
}

const fetchPokemon = async(pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await APIresponse.json();
    return data;
};

const showPokemon = async(pokemon) => {
    const dataPokemon = await fetchPokemon(pokemon);
    imgPokemon.src = dataPokemon.sprites.other.showdown.front_default;

    nomePoke.innerHTML = dataPokemon.name;
    idPoke.innerHTML = dataPokemon.id + " | ";
    tipo1Poke.innerHTML = dataPokemon.types[0].type.name + " | ";
    tipo2Poke.innerHTML = dataPokemon.types[1].type.name;
    habilidade.innerHTML = dataPokemon.abilities[0].ability.name;
    pesoPoke.innerHTML = pesoKG(dataPokemon.weight).toFixed(2) + " kg";
    altura.innerHTML = alturaM(dataPokemon.height).toFixed(2) + " cm";
    tocarSom(dataPokemon.cries.latest)
};

formPoke.addEventListener("submit", (event) => {
    event.preventDefault();
    numeroPokedex = parseInt(inputF.value)
    showPokemon(inputF.value.toLowerCase());
});

back.addEventListener("click", (event) => {
    if(numeroPokedex > 1){
        numeroPokedex = numeroPokedex -1
    }
    showPokemon(numeroPokedex);
});

next.addEventListener("click", (event) => {
    if(numeroPokedex < 1024){
        numeroPokedex = numeroPokedex + 1
    }
    showPokemon(numeroPokedex);
});

ImageBitmapRenderingContext;

showPokemon(numeroPokedex);

