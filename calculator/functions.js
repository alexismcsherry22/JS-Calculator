let calculatorState = false; //default to off

function turnOnAndClearScreen(bgColor, brColor, pColor)
{
  if(calculatorState === false)
  {
    calculatorState === true;
    document.getElementById("calculationPara").innerHTML = "";
    
    document.getElementById("displayBox").style.backgroundColor = bgColor;
    
    document.getElementById("displayBox").style.borderColor = brColor;

    document.getElementById("calculationPara").style.color = pColor;
  } else //calculator is already on
  {
    document.getElementById("calculationPara").value = "";
  }
}

function turnOffScreen(bgColor, brColor, pColor)
{
  calculatorState === false; //turned off
  
  document.getElementById("calculationPara").innerHTML = "0000000000";
    
  document.getElementById("displayBox").style.backgroundColor = bgColor;
    
  document.getElementById("displayBox").style.borderColor = brColor;

  document.getElementById("calculationPara").style.color = pColor;
}

function displayInput(value)
{
  if(calculatorState === true) 
  {
    document.getElementById("calculationPara").innerHTML += value;
    console.log(document.getElementById("calculationPara").innerHTML);
  }
}