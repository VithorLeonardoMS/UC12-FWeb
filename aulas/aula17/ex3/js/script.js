fetch("./json/data.json")

    .then(response => response.json())

    .then(data =>{
            const objectList = document.getElementById("Alunos");
            Object.keys(data).forEach(materia => {
                const listItem = document.createElement("li");
                let materiaObj = data[materia];
                let texto = materia + ": "
                materiaObj.forEach((pessoa,index) => {
                    if(index == materiaObj.length - 1){
                        texto += " e " + pessoa;
                    } else{
                        texto += index != 0? ", " + pessoa : pessoa;
                    }
                    
                });
                listItem.innerHTML = texto
                objectList.appendChild(listItem);
            })

            
        
    })
    .catch(error => console.error("Erro ao carregar o arquivo JSON"), error)


