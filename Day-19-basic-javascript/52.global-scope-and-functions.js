/*
Global Scope and Functions
In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are declared without the let or const keywords are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const.

Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.

Tests
Waiting:myGlobal should be defined
Waiting:myGlobal should have a value of 10
Waiting:myGlobal should be declared using the let or const keywords
Waiting:oopsGlobal should be a global variable and have a value of 5
*/


//// answer


/* Hints
Hint 1
The scope of a variable is its visibility; where in the code is the function available? Here is a list of the different scopes a variable can have.

Global scope: The variable is available throughout the code
Local scope: Available in only a certain area (like only within function)
Block scope: Available within an even more certain area (like an if-statement)
Your task is to understand how adding var (and not adding) before a variable name, can change the variable’s scope.

When you add var before the variable name, its scope is determined by where it is placed. Like so:

var num1 = 18; // Global scope
function fun() {
  var num2 = 20; // Local (Function) Scope
  if (true) {
    var num3 = 22; // Block Scope (within an if-statement)
  }
}
When you don’t, this is the result:

num1 = 18; // Global scope
function fun() {
  num2 = 20; // Global Scope
  if (true) {
    num3 = 22; // Global Scope
  }
}
*/

// Declare the myGlobal variable below this line

let myGlobal = 10;
let oopsGlobal;
//oopsGlobal = 5;
function fun1() {
  // Assign 5 to oopsGlobal here
   oopsGlobal = 5;
}
  
// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}