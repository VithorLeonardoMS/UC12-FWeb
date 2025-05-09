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

let btn1 = document.querySelector("#btn1");

let btn2 = document.querySelector("#btn2");

let btnQ = document.querySelector("#btnQ");

let btnE = document.querySelector("#btnE");

let btnBack = document.querySelector("#btnBack");

let btnNext = document.querySelector("#btnNext");

let somFundo = document.querySelector("#audioFundo")
somFundo.volume = 0.1;

/*----------------Váriaveis auxiliares*/

let numeroPokedex = 1;


/*----------------Funções auxiliares------------------ */

/**
 * Função que define a imagem do pokemon, e que em caso de erro, 
 * define uma segunda ou até terceira url.
 * @param {string} url1 
 * @param {string} url2 
 * @param {string} url3 //Opcional
 */
function defineImagemPokemon(url1, url2, url3 = false){
    imgPokemon.src = url1;
    imgPokemon.onerror = function () {
        if(url3){
            this.onerror = () => {
                this.src = url3
            }
        }else{
            this.onerror = null; // Evita loop
        }
        
        this.src = url2;
    };
}

function tocarSom(som){
    som = new Audio(som);
    som.volume = 0.3
    som.play();
}

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

/**
 * Toca som **legacy** do pokemon.
 * @param {number} pokemon 
 */
const tocarSom1 = async(pokemon) => {
    const dataPokemon = await fetchPokemon(pokemon);
    tocarSom(dataPokemon.cries.latest)
};


/**
 * Toca som **legacy** do pokemon.
 * @param {number} pokemon 
 */
const tocarSom2 = async(pokemon) => {
    const dataPokemon = await fetchPokemon(pokemon);
    tocarSom(dataPokemon.cries.legacy);
};

/**
 * Transforma a imagem do pokemon para o tipo **shine**.
 * @param {number} pokemon 
 */
const shine = async(pokemon) => {
    const dataPokemon = await fetchPokemon(pokemon);
    defineImagemPokemon(dataPokemon.sprites.other.showdown.front_shiny,dataPokemon.sprites.front_shiny)
};

/**
 * Retorna a imgame do pokemon para a forma basica
 * @param {number} pokemon 
 */
const formaBasica = async(pokemon) => {
    const dataPokemon = await fetchPokemon(pokemon);
    defineImagemPokemon(dataPokemon.sprites.other.showdown.front_default,dataPokemon.sprites.front_default);
};

/* ----------------Botões-----------------*/

back.addEventListener("click", (event) => {
    reduzirNumPokedex()
});

next.addEventListener("click", (event) => {
    aumentarNumPokedex();
});

btn1.addEventListener("click", (event) => {
    tocarSom1(numeroPokedex);
});

btn2.addEventListener("click", (event) => {
    tocarSom2(numeroPokedex);
});

btnQ.addEventListener("click", (event) => {
    shine(numeroPokedex)
});

btnE.addEventListener("click", (event) => {
    formaBasica(numeroPokedex)
});

btnBack.addEventListener("click", (event) => {
    reduzirNumPokedex()
});

btnNext.addEventListener("click", (event) => {
    aumentarNumPokedex()
});

/*-------------------Teclas------------------ */

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
            formaBasica(numeroPokedex)
            break;
    }
})

/* ------------------Vizualização--------------- */

const fetchPokemon = async(pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await APIresponse.json();
    return data;
};

const showPokemon = async(pokemon) => {
    const dataPokemon = await fetchPokemon(pokemon);
    defineImagemPokemon(dataPokemon.sprites.other.showdown.front_default,dataPokemon.sprites.front_default);
    nomePoke.innerHTML = dataPokemon.name;
    inputF.value = dataPokemon.id;
    tipo1Poke.innerHTML = dataPokemon.types[0].type.name + " | ";
    tipo2Poke.innerHTML = dataPokemon.types[1].type.name;
    habilidade.innerHTML = dataPokemon.abilities[0].ability.name;
    pesoPoke.innerHTML = (dataPokemon.weight / 10).toFixed(2) + " kg";
    altura.innerHTML = (dataPokemon.height / 10).toFixed(2) + " cm";
    //tocarSom(dataPokemon.cries.latest);
};

formPoke.addEventListener("submit", (event) => {
    event.preventDefault();
    numeroPokedex = parseInt(inputF.value)
    showPokemon(inputF.value.toLowerCase());
});

ImageBitmapRenderingContext;

showPokemon(numeroPokedex);