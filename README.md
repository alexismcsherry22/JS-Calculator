# JS-Calculator

## Project Outline

The purpose of this project is to re-create the visuals of a calculator using HTML and SCSS and the functions by using JavaScript.

## How to use the Project

This project uses HTML, CSS, SCSS, and JavaScript. Does not require any extensions to run.

## Extensions

The Extensions used to build this project are:

-   Live Server by Ritwick Dey
-   SASS package (built in)

## Main Functionality Goals

-   Display inputs on the calculator screen.
-   All operations present on the calculator functions.
-   All operations output correctly.
-   Must include decimals

## Optional Goals

Add functionality to other buttons such as:

-   Memory save / add button.
-   Memory retrieve.
-   Clear memory.
-   Create an array that allows the user to save and find memory previously saved
-   Turn the calculator "on" and "off"

## Project Outcome

The main functionality goals were met, all the numbers and operators worked (except for plus equals) and display correctly on the screen.

The calculator that was used as reference also looks very close to almost identical to a 2D form of the calculator.

## Struggles

Trying to figure out a way that would take a value, then assign an operator and then another value was easy handled using a variable called lastMath however, it was difficult to identify a place that lastMath could be used. As it turned out, I actually correctly used that variable in these functions, it was in fact discovering that I needed just one more use of that variable for it all to work.

## Calculator Screenshot

![calculator screenshot] [screenshot]
[screenshot]: JS-Calculator\CalculatorScreenshot.png "screenshot"

## Syntax

### For input type buttons (0-9 and .(decimal))

buttonName.addEventListener("click", () => {

get id of element and += into the text

do console log to check the current characters in the string

}

### AC/ON button to turn on and clear the calculator

// uses a boolean to determine the state of the calculator

buttonName.addEventListener("click", () => {

if the calculator is "off"
set the calculator state to "on"
empty the string

change the colours of the screen:

-   background,
-   border,
-   and text colour

else, the calculator is already "on"
just empty the string

}

### OFF button

buttonName.addEventListener("click", () => {

set the calculator state to "off"

fill the string with 0 to replicate irl screen of turned off calculators

change the colours of the screen:

-   background,
-   border,
-   text colour

}

### Converting and Storing string to numbers

function funtionName ((number) =>
{

convert number "string" to number "number"

if operandOne !== 0 (default number)

then operandTwo = number

else if operandOne > 0 && operandTwo > 0

then operandOne (arthmetic e.g. += \*=) operandOne

and operandTwo = number

else
operandOne = number

})

### Arthimetic operations

export functionName = (operandOne, operandTwo) =>
{

return operandOne (arthmimetic operation) operandTwo

}

### Calculation / Equals

export functionName = arthimeticOperation =>
{

return get the id of the string element and insert the arthimeticOperation as its value

}
