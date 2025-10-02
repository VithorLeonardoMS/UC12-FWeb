let arrayValue = [];
let input = document.querySelector("#inputText");

function updateText(){
    input.value = arrayValue.join("");
    console.warn(arrayValue)
}

/**
 * Pega valores auxiliares relacionados a arrayValue
 */
function catchLastInfos(){
    const lastIndex = arrayValue ? arrayValue.length -1 : false
    const lastValue = lastIndex > -1 ? arrayValue[lastIndex] : false
    const lastChar = lastValue && lastValue[lastValue.length -1]
    return {lastIndex, lastValue, lastChar}
}

function catchOperator(){
    const { lastChar } = catchLastInfos()
    const operadores = ["+","-","*","/","√", "^"]

    if(operadores.includes(lastChar)){
        return lastChar
    }
    return false
    
}

function addChar(char){
    const { lastIndex, lastValue } = catchLastInfos()
    if(lastValue){
        arrayValue[lastIndex] = lastValue.concat(char)

    }
}

function previousVerification(value = false){
    let validate = true
    let lastChar = catchOperator()
    if(lastChar == "%" ){
        addOperator("*")
    }
    const operadores = ["+","-","*","/","√", "^"]

    if(operadores.includes(lastChar)){
        validate = false
    }

    if(value && value == "π" && validate){
        addOperator("*")
    }
    validate = lastChar? lastChar : catchLastInfos().lastChar
    return validate
}

function addNumber(number){
    let test = previousVerification(number)
    console.log(`test: ` + test)
    console.error(test)
    number = number.toString()
    if(number == "π"){
        number = "3.14159"
    } else {
        test = false
    }
    if(test == "."){
        deleteCaractere()
        addChar("*")
    }
    
    if(catchOperator() || arrayValue.length == 0){
        arrayValue.push(number)
    } else{
        addChar(number)
    }
    updateText();
    
}

function addOperator(operator){
    const test = previousVerification()
    if(test != "."){
        arrayValue[arrayValue.length -1] = arrayValue[arrayValue.length -1] + operator;
        updateText();
    }
    
}

function addDecimal(){
    if(previousVerification()){
        const { lastValue } = catchLastInfos()
        if(!lastValue.includes(".")){
            addChar(".")
        }
        updateText();
    }
    
}

function clearText(){
    arrayValue = [];
    updateText();
}

function deleteCaractere(){
    const { lastIndex, lastValue } = catchLastInfos()
    console.warn(arrayValue)
    arrayValue[lastIndex] = lastValue.slice(0,-1);
    if(lastValue == ""){
        arrayValue.pop()
    }
    updateText();
}

function validarCalculo(){
    arrayValue.forEach((value, i) => {
        arrayValue[i] = value.replace("%", "/100")
    })
    return true; //Ampliando possibilidades
}

function calculate(){
    if(validarCalculo()){
        const strValue = arrayValue.join("")
        const result = [eval(strValue)];//Transforma texto em operação, retornando o resultado
        arrayValue = [result.toString()]
        updateText();
    } else{
        arrayValue = "Erro em validarCalculo()";
        updateText()
    }
    
}

