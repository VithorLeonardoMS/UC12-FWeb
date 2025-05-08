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

let somFundo = document.querySelector("#audioFundo")
somFundo.volume = 0.1;

function defineImagemPokemon(url1, url2){
    imgPokemon.src = url1;
  
    imgPokemon.onerror = function () {
      this.onerror = null; // Evita loop
      this.src = url2;
    };

    return;
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
    defineImagemPokemon(dataPokemon.sprites.other.showdown.front_default,dataPokemon.sprites.front_default);

    nomePoke.innerHTML = dataPokemon.name;
    idPoke.innerHTML = dataPokemon.id + " | ";
    tipo1Poke.innerHTML = dataPokemon.types[0].type.name + " | ";
    tipo2Poke.innerHTML = dataPokemon.types[1].type.name;
    habilidade.innerHTML = dataPokemon.abilities[0].ability.name;
    pesoPoke.innerHTML = (dataPokemon.weight / 10).toFixed(2) + " kg";
    altura.innerHTML = (dataPokemon.height / 10).toFixed(2) + " cm";
    tocarSom(dataPokemon.cries.latest);
};

formPoke.addEventListener("submit", (event) => {
    event.preventDefault();
    numeroPokedex = parseInt(inputF.value)
    showPokemon(inputF.value.toLowerCase());
});

function reduzirNumPokedex(){
    if(numeroPokedex > 1){
        numeroPokedex = numeroPokedex -1
    }
    showPokemon(numeroPokedex);
}

function aumentarNumPokedex(){
    if(numeroPokedex < 1024){
        numeroPokedex = numeroPokedex + 1
    }
    showPokemon(numeroPokedex);
}

back.addEventListener("click", (event) => {
    reduzirNumPokedex()
});

next.addEventListener("click", (event) => {
    aumentarNumPokedex();
});

ImageBitmapRenderingContext;

showPokemon(numeroPokedex);

const tocarSom1 = async(pokemon) => {
    const dataPokemon = await fetchPokemon(pokemon);
    tocarSom(dataPokemon.cries.latest)
};

const tocarSom2 = async(pokemon) => {
    const dataPokemon = await fetchPokemon(pokemon);
    tocarSom(dataPokemon.cries.legacy);
};

const shine = async(pokemon) => {
    const dataPokemon = await fetchPokemon(pokemon);
    defineImagemPokemon(dataPokemon.sprites.other.showdown.front_shiny,dataPokemon.sprites.front_shiny)
};

const formaBase = async(pokemon) => {
    const dataPokemon = await fetchPokemon(pokemon);
    defineImagemPokemon(dataPokemon.sprites.other.showdown.front_default,dataPokemon.sprites.front_default);
};

document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case '1':
            tocarSom1(numeroPokedex);
            break;
        case '2':
            tocarSom2(numeroPokedex);
            break;
        case "ArrowLeft":
            reduzirNumPokedex()
            break;
        case "ArrowRight":
            aumentarNumPokedex()
            break;
        case "q":
            shine(numeroPokedex)
            break;
        case "e":
            formaBase(numeroPokedex)
            break;
    }
})

