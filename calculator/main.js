import {calAdd, calSub, calMul, calDiv} from "./math.js";

let calculatorState = false; //default to off

const buttons = document.querySelectorAll(".calculator__buttons");

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
});

//turn off
offButton.addEventListener("click", () =>
{
  calculatorState === false; //turned off
  
  document.getElementById("calculationPara").innerHTML = "0000000000";
    
  document.getElementById("displayBox").style.backgroundColor = "rgb(115, 170. 32)";
    
  document.getElementById("displayBox").style.borderColor = "rgb(137, 196. 50)";

  document.getElementById("calculationPara").style.color = "rgb(77, 76, 76)";
});

//might need to make multiple unless switch statement / array loop

const zero = document.querySelector("#zeroButton");
const one = document.querySelector("#oneButton");
const two = document.querySelector("#twoButton");
const three = document.querySelector("#threeButton");
const four = document.querySelector("#fourButton");
const five = document.querySelector("#fiveButton");
const six = document.querySelector("#sixButton");
const seven = document.querySelector("#sevenButton");
const eight = document.querySelector("#eightButton");
const nine = document.querySelector("#nineButton");
const decimal = document.querySelector("#decimalButton");

zero.addEventListener("click", () => {
  document.getElementById("calculationPara").innerHTML += 0;
  console.log(document.getElementById("calculationPara").innerHTML);
});

one.addEventListener("click", () => {
  document.getElementById("calculationPara").innerHTML += 1;
  console.log(document.getElementById("calculationPara").innerHTML);
});

two.addEventListener("click", () => {
  document.getElementById("calculationPara").innerHTML += 2;
  console.log(document.getElementById("calculationPara").innerHTML);
});

three.addEventListener("click", () => {
  document.getElementById("calculationPara").innerHTML += 3;
  console.log(document.getElementById("calculationPara").innerHTML);
});

four.addEventListener("click", () => {
  document.getElementById("calculationPara").innerHTML += 4;
  console.log(document.getElementById("calculationPara").innerHTML);
});

five.addEventListener("click", () => {
  document.getElementById("calculationPara").innerHTML += 5;
  console.log(document.getElementById("calculationPara").innerHTML);
});

six.addEventListener("click", () => {
  document.getElementById("calculationPara").innerHTML += 6;
  console.log(document.getElementById("calculationPara").innerHTML);
});

seven.addEventListener("click", () => {
  document.getElementById("calculationPara").innerHTML += 7;
  console.log(document.getElementById("calculationPara").innerHTML);
});

eight.addEventListener("click", () => {
  document.getElementById("calculationPara").innerHTML += 8;
  console.log(document.getElementById("calculationPara").innerHTML);
});

nine.addEventListener("click", () => {
  document.getElementById("calculationPara").innerHTML += 9;
  console.log(document.getElementById("calculationPara").innerHTML);
});

decimal.addEventListener("click", () => {
  document.getElementById("calculationPara").innerHTML += ".";
  console.log(document.getElementById("calculationPara").innerHTML);
});

//All symbols for calculation
unique = document.querySelectorAll(".uniqueSymbol");

squareRoot = document.querySelector("#sqrButton");
divide = document.querySelector("#divideButton");
multiply = document.querySelector("#timesButton");
percent = document.querySelector("#percentButton");
subtract = document.querySelector("#minusButton");
plusMinus = document.querySelector("#plusminusButton");
addition = document.querySelector("#plusButton");
equals = document.querySelector("#equalsButton");


let operandOne = 0;
let operandTwo = 0;

const convertStrToNum = ((str, math) => {
  
  let num = Number(str);
  console.log(num);
  if (operandOne > 0)
  {
    operandTwo = num;
    console.log(operandTwo);
  }
  else if (operandOne > 0 && operandTwo > 0)
  {

  }
  else 
  {
    operandOne = num;
    console.log(operandOne);
  }
})


unique.forEach(button => {
  button.addEventListener("click", () => {
    let str = document.getElementById("calculationPara").value;
    let math = document.querySelector(button);
    convertStrToNum(str, math);
  })
})

