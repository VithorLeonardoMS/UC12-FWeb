let textValue = "";
let input = document.querySelector("#inputText");

function updateText(){
    input.value = textValue;
}

function addNumber(number){
    textValue += number;
    updateText();
}

function addOperator(operator){
    textValue += operator;
    updateText();
}

function addDecimal(){
    textValue += ','
    updateText();
}

function clearText(){
    textValue = "";
    updateText();
}

function calculate(){
    textValue = eval(textValue);//Transforma texto em operação, retornando o resultado
    updateText();
}
