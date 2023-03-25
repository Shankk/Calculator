let firstNum = "";
let secondNum = "";
let operator = "";
let feedback = document.querySelector("#feedback");
let getKeys = Array.from(document.querySelectorAll("button"));

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function createKeyListeners(){
    getKeys.forEach(key => {
        if(key.className == "number")
        {
            key.addEventListener('click', () =>{
                feedback.textContent += key.textContent;
                if(firstNum != "" && operator != "") {
                    secondNum += key.textContent;
                }
                else if(operator == ""){
                    firstNum += key.textContent;
                }
            })
        }
        if(key.className == "sign")
        {
            if(key.id == "equal")
            {
                key.addEventListener('click', () =>{
                    if(secondNum != "")
                    {
                        feedback.textContent = firstNum = operate(operator, +firstNum, +secondNum);
                        secondNum = "";
                        operator = "";
                    }
                })
            }
            else if(key.id == "switch")
            {
                key.addEventListener('click', () =>{
                    if(secondNum != "")
                    {
                        if(Array.from(feedback.textContent)[firstNum.length+2] != "-"){
                            feedback.textContent = feedback.textContent.replaceAt(firstNum.length+2,"-")
                            secondNum = "-" + secondNum;
                        }
                        else{
                            feedback.textContent = feedback.textContent.replaceAt(firstNum.length+2," ");
                            secondNum = secondNum.slice(1);
                        }
                    }
                    else{
                        if(Array.from(feedback.textContent)[0] != "-"){
                            feedback.textContent = "-" + feedback.textContent
                            firstNum = "-" + firstNum;
                        }
                        else{
                            feedback.textContent = feedback.textContent.slice(1);
                            firstNum = firstNum.slice(1);
                        }
                    }
                    
                    //Array.from('some string')[0];
                })
            }
            else
            {
                key.addEventListener('click', () =>{
                    if(firstNum != ""){
                        if(secondNum != "") {
                        feedback.textContent = firstNum = operate(operator, +firstNum, +secondNum)
                        secondNum = "";
                        operator = "";
                        }
                        if(operator != ""){
                            feedback.textContent = feedback.textContent.slice(0,-1)
                        }
                        feedback.textContent += " " + key.textContent + " ";
                        operator = key.textContent;
                    }
                })
            }
            
        }

        if(key.className == "special")
        {
            key.addEventListener('click', () =>{
                feedback.textContent = "";
                firstNum = "";
                secondNum = "";
                operator = "";
            })
        }
    });
}

const add  = function(a,b){return a + b;}
const subtract = function(a,b) {return a - b;}
const multiply = function(a,b) {return a * b;}
const divide = function(a,b) {return a / b;}
const remainder = function(a,b) {return a % b;}
const operate = function(operation, first, second){
    if(operation === "+"){ return add(first,second)}
    if(operation === "-"){ return subtract(first,second) }
    if(operation === "*"){ return multiply(first,second) }
    if(operation === "/"){ return divide(first,second) }
    if(operation === "%"){ return remainder(first,second) }

    
}

createKeyListeners();


