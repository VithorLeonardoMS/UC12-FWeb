

function validarBusca(){
    if(document.querySelector("#inputlupa").value==""){
        alert("Não pode estar vazio!");
        return false;
    }
}

document.querySelector("#form-busca").onsubmit = validarBusca;