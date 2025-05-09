const emAula = document.querySelectorAll("section.painel.aulas ol li")

emAula.forEach(aula =>{
    const a = aula.querySelector("a")
    aula.addEventListener("click", function(){
        window.location.assign(a.href);
    })
})