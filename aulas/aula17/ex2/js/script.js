
fetch("./json/data.json")

    .then(response => response.json())

    .then(data =>{
            const objectList = document.getElementById("Demo")
            data.pessoas.forEach(pessoa => {
                const listItem = document.createElement("li")
                listItem.innerHTML = "Primeiro registro do array contém dados do <b>\""+ pessoa.nome + "\"</b> de <b>" + pessoa.local.cidade + "</b>"
                objectList.appendChild(listItem)
            });
        
    })
    .catch(error => console.error("Erro ao carregar o arquivo JSON"), error)


