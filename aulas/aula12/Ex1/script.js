alert("Bem vindo");

let titulo = document.querySelector("#titulo");
titulo.textContent = "Novo texto";
titulo.style.color = "red";

function mostraAlerta(){
    alert("Funciona!");
}

function mostraTexto(texto){
    alert(texto);
}

titulo.onclick = mostraAlerta();
mostraTexto(text);
