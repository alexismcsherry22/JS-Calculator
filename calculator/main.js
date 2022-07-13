import {calAdd, calSub, calMul, calDiv} from "./math.js";

let calculatorState = false; //default to off

let operandOne = 0;
let operandTwo = 0;
let lastMath = 0;
let answer;

const acButton = document.querySelector("#acButton");
const offButton = document.querySelector("#offButton");

//Turn on or clear
acButton.addEventListener("click", () =>
{
  if(calculatorState === false)
  {
    calculatorState === true;
    document.getElementById("calculationPara").innerHTML = "";
    
    document.getElementById("displayBox").style.backgroundColor = "greenyellow";
    
    document.getElementById("displayBox").style.borderColor = "greenyellow";

    document.getElementById("calculationPara").style.color = "black";
  } else //calculator is already on
  {
    document.getElementById("calculationPara").value = "";
  }
  operandOne = 0;
  operandTwo = 0;
  answer = 0;
  lastMath = 0;
});

//turn off
offButton.addEventListener("click", () =>
{
  calculatorState === false; //turned off
  operandOne = 0;
  operandTwo = 0;
  answer = 0;
  lastMath = 0;
  
  document.getElementById("calculationPara").innerHTML = "0000000000";
    
  document.getElementById("displayBox").style.backgroundColor = "rgb(115, 170. 32)";
    
  document.getElementById("displayBox").style.borderColor = "rgb(137, 196. 50)";

  document.getElementById("calculationPara").style.color = "rgb(77, 76, 76)";
});

//All numbers (and decimal) for operands
const numButtons = document.querySelectorAll(".number-button");

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (document.getElementById("calculationPara").innerText.length > 10) {
      return;
    } else {
      document.getElementById("calculationPara").innerText += button.innerText;
    }
    console.log(document.getElementById("calculationPara").innerText);
  })
})

//All symbols for calculation
const unique = document.querySelectorAll(".uniqueSymbol");

const squareRoot = document.querySelector("#sqrButton");
const divide = document.querySelector("#divideButton");
const multiply = document.querySelector("#timesButton");
const percent = document.querySelector("#percentButton");
const subtract = document.querySelector("#minusButton");
const plusMinus = document.querySelector("#plusminusButton");
const addition = document.querySelector("#plusButton");
const equals = document.querySelector("#equalsButton");



const combineNumbers = ((str, math) => {
  let num = parseInt(str);
  if (operandOne > 0 && operandTwo === 0) {
    operandTwo = num;
    switch (math) {
      case math === squareRoot:
        answer = Math.sqrt(operandOne);
        break; 
      case math === percent:
        operandOne *= .100;
        break;
      case math === plusMinus: 
       // don't understand
        break;
      case math === divide:
        lastMath = divide;
        break;
      case math === multiply:
        lastMath = multiply;
        break;
      case math === subtract:
        lastMath = subtract;
        break;
      case math === addition:
        lastMath = addition;
        break;
    }
  } else if (operandOne > 0 && operandTwo > 0){
    switch (math) {
      case math === divide:
        operandOne = calDiv(operandOne, operandTwo);
        lastMath = divide;
        break;
      case math === multiply:
        operandOne = calMul(operandOne, operandTwo);
        lastMath = multiply;
        break;
      case math === subtract:
        operandOne = calSub(operandOne, operandTwo);
        lastMath = subtract;
        break;
      case math === addition:
        operandOne = calAdd(operandOne, operandTwo);
        lastMath = addition;
        console.log(lastMath);
        break;
    }
    operandTwo = 0;
  }
  else {
    operandOne = num;
  }
  if (math === equals) {
    console.log(lastMath);
    if (lastMath === divide) {
      answer = calDiv(operandOne, operandTwo);
    } 
    if (lastMath === multiply) {
      answer = calMul(operandOne, operandTwo);
    } 
    if (lastMath === subtract) {
      answer = calSub(operandOne, operandTwo);
    } 
    if (lastMath === addition) {
      answer = calAdd(operandOne, operandTwo);
    } 
    if (lastMath === 0) {
      answer = "INPUT ERROR";
    }
  }
  if (answer === "INPUT ERROR"){
    document.getElementById("calculationPara").innerText = answer;
  }
  if (answer > 0) {
    document.getElementById("calculationPara").innerText = answer;
  } else {
    document.getElementById("calculationPara").innerText = "";
  }
  console.log(operandOne);
  console.log(operandTwo);
  console.log(answer);
})


unique.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button);
    let str = document.getElementById("calculationPara").innerText;
    let math = button;
    if (lastMath === 0) {
      lastMath = button;
    }
    combineNumbers(str, math);
  })
})

// create functions for switch
// set lastMath when addeventlistener