let firstNum = "";
let secondNum = "";
let operator = "";

const add  = function(a,b){
    return a + b;
}

const subtract = function(a,b) {
    return a - b;
}

const multiply = function(a,b) {
    return a * b;
}

const divide = function(a,b) {
    return a / b;
}

const remainder = function(a,b) {
    return a % b;
}

const operate = function(operation, first, second){
    if(operation == "+"){
        return add(first,second)
    }
    if(operation == "-"){
        return subtract(first,second)
    }
    if(operation == "*"){
        return multiply(first,second)
    }
    if(operation == "/"){
        return divide(first,second)
    }
    if(operation == "%"){
        return remainder(first,second)
    }
}


