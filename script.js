const π = Math.PI.toFixed(4);
const euler = Math.E.toFixed(4);
const invalidExpression = "Syntax Error";

const numButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const delButton = document.querySelector(".delete");
const clearButton = document.querySelector(".clear");
const supScreen = document.querySelector(".previousLine");
const lowScreen = document.querySelector(".nextLine");

const result = [];
const expression = [];

equalButton.addEventListener("click", function(){
    //calculate(array, operatorArray);
});

delButton.addEventListener("click", function(){
    if(expression){
        expression.pop();
        updateScreen(expression,supScreen);
    } 
});

clearButton.addEventListener("click", function(){
    while(expression.length){
        expression.pop();
    } 
   while(result.length){
        result.pop();
        updateScreen(result,lowScreen);
    }
    
    //Update Screen
    updateScreen(expression,supScreen);
    updateScreen(expression,lowScreen);
});

numButton.forEach(button => button.addEventListener("click", function(){
    //console.log(button.innerHTML);
    const number = Array.from(parseInt(button.innerHTML));
    
    //Checks if the element is a defined constant, else pushes the number to the array
    
    
    //Update Screen
    expression.push(number);
    updateScreen(expression, supScreen);
}));


function updateScreen(expression, screen){
    screen.innerHTML = expression.join("");
}