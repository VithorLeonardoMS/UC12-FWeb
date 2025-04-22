let textValue = [];
let input = document.querySelector("#inputText");

function updateText(){
    input.value = textValue.join;
}

function addNumber(number){
    textValue.push(number);
    updateText();
}

function addOperator(operator){
    textValue[textValue.length -1] = textValue[textValue.length -1] + operator;
    updateText();
}

function addDecimal(){
    textValue[textValue.length -1] = textValue[textValue.length -1] + ",";
    updateText();
}

function clearText(){
    textValue = [];
    updateText();
}

function deleteCaractere(){
    textValue[textValue.length -1] = textValue[textValue.length -1].slice(0,-1);
    updateText();
}

function validarCalculo(text){
    text
}

function calculate(){
    if(validarCalculo()){
        textValue = eval(textValue);//Transforma texto em operação, retornando o resultado
        updateText();
    } else{
        textValue = "Erro em validarCalculo()";
        updateText()
    }
    
}

