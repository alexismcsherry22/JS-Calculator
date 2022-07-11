# JS-Calculator

The purpose of this project is to re-create the visuals of a calculator using HTML and SCSS and the functions by using JavaScript.

Outline of function goals:

1. Display inputs on the calculator screen.
2. All operations present on the calculator functions.
3. All operations output correctly.
4. Must include decimals

Optional: 5. Create a memory save / add. 6. Create a memory retrieve. 7. Create a memory clear. 8. Create an array that allows the user to save and find memory previously saved 9. Optional turn on and off

Syntax:

1. For input type buttons (0-9 and .(decimal))
   buttonName.addEventListener("click", () => {
   get id of element and += into the text
   do console log to check the current characters in the string
   }

2. AC/On buton to turn on and clear the calculator
   // uses a boolean to determine the state of the calculator
   buttonName.addEventListener("click", () => {
   if the calculator is "off"
   set the calculator state to "on"
   empty the string
   change the colours of the screen:
   background,
   border,
   and text colour
   else // if the calculator is already "on"
   just empty the string
   }

3. Off button
   buttonName.addEventListener("click", () => {
   set the calculator state to "off"
   fill the string with 0 to replicate irl screen of turned off calculators
   change the colours of the screen:
   background,
   border,
   text colour
   }

4. Converting and Storing string to numbers
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

5. arthimetic operations
   export functionName = (operandOne, operandTwo) =>
   {
   return operandOne (arthmimetic operation) operandTwo
   }

6. Calculation / Equals
   export functionName = arthimeticOperation =>
   {
   return get the id of the string element and insert the arthimeticOperation as its value
   }
