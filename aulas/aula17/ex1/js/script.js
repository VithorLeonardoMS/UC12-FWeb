const lista = document.querySelectorAll("#nomes li")
let objeto = {}



//Função para carregar o arquivo JSON e exibir os objetos.
fetch("./json/objects.json")//Realiza uma requisição para buscar o arquivo 'objects.json'.

.then(response => response.json())//Qunado a resposta chegar, converte o corpo da resposta (JSON) para um objeto js.

.then(data => {
    //Após a conversão, os dados são passados para a função.
    const objectlist = document.getElementById("nomes")// Encontra o elemento html com id 'nomes' onde vamos exibir a lista. Itera sobre o array 'nomes' executa o código abaixo.
    data.objects.forEach(obj => {
        const listItem = document.createElement("li")
        listItem.textContent = obj
        objectlist.appendChild(listItem)
    });
    //Define o texto do item de lista como o nome do objeto

})

.catch(error => console.error("Erro ao carregar o arquivo JSON", error));


/**
 * Randomiza os valores de cada li de #nomes;
 * @param {string[]} nomesDaLista -> listas que deseja acessar do json
 */
function randomizar(nomesDaLista){
    const listaDeLi = document.querySelectorAll("#nomes li")
    fetch("./json/objects.json")//Realiza uma requisição para buscar o arquivo 'objects.json'.

    .then(response => response.json())//Qunado a resposta chegar, converte o corpo da resposta (JSON) para um objeto js.
    .then(data => {
        listaDeLi.forEach(li => {
            let randomN = Math.floor(Math.random() * (nomesDaLista.length));
            const listaEscolhida = data[nomesDaLista[randomN]]//pegar a lista de dentro do objeto
            randomN = Math.floor(Math.random() * (listaEscolhida.length));
            const item = listaEscolhida[randomN] //Pegar um item dentro da lista
            li.textContent = item;
        })
    })
    
}

const botao = document.getElementById("trocar")
botao.onclick = () => randomizar(["objects", "pessoas","automoveis","animais","verbos"]);



