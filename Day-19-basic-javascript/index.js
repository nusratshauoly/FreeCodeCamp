// 57. stand in line
/* In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed. */
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    let removed = arr.shift();
  
    return removed;
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));


// 58. understanding boolean values
/*
Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is on and false is off. These two states are mutually exclusive.

Note: Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.

Modify the welcomeToBooleans function so that it returns true instead of false when the run button is clicked.
*/
function welcomeToBooleans() {
    // Only change code below this line
  
    return true; // Change this line
  
    // Only change code above this line
  }
// 59. use conditional logic with if statements
/*
if statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.

When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

Pseudocode

if (condition is true) {
  statement is executed
}
Example

function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
test(true) returns the string It was true, and test(false) returns the string It was false.

When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not. Since it is true, the function returns It was true. When we call test with a value of false, myCondition is not true and the statement in the curly braces is not executed and the function returns It was false.

Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.
*/
function trueOrFalse(wasThatTrue) {
    // Only change code below this line
  if(wasThatTrue){
    return "Yes, that was true";
  }
  return "No, that was false";
  
  
    // Only change code above this line
  
  }
  trueOrFalse(true);
  trueOrFalse(false);

// 60. comparison with the equality operator
/*
There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.

The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.

function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return Equal. Otherwise, the function will return Not Equal. In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as Type Coercion. Once it does, however, it can compare terms as follows:

1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.
*/
// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);
  testEqual(12);

// 61. comparison with the strict equality operator

/*
Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

Examples

3 ===  3  // true
3 === '3' // false
In the second example, 3 is a Number type and '3' is a String type.

Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7.
*/
// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);
  testStrict("7");
// 62. practice comparing different values

/*
In the last two challenges, we learned about the equality operator (==) and the strict equality operator (===). Let's do a quick review and practice using these operators some more.

If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.

Examples

3 == '3' returns true because JavaScript performs type conversion from string to number. 3 === '3' returns false because the types are different and type conversion is not performed.

Note: In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:

typeof 3
typeof '3'
typeof 3 returns the string number, and typeof '3' returns the string string.

The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equal.
*/
// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");
  compareEquality("20", 10);


// 63. comparison with the inequality operator

/*
The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

Examples

1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false
Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.
*/

// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);

// 64. comparison with the strict inequality operator

/*
The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types.

Examples

3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17
*/
// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);

// 65. comparison with the greater than operator
/*
The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, the greater than operator will convert data types of values while comparing.

Examples

5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false
Add the greater than operator to the indicated lines so that the return statements make sense.
*/
function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  testGreaterThan(0);
  testGreaterThan(10);
  testGreaterThan(11);
  testGreaterThan(99);
  testGreaterThan(100);
  testGreaterThan(101);
  testGreaterThan(150);

// 66. comparison with the greater than or equal to operator

/*
The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, the greater than or equal to operator will convert data types while comparing.

Examples

6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false
Add the greater than or equal to operator to the indicated lines so that the return statements make sense.
*/
function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
      return "20 or Over";
    }
  
    if (val >= 10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);


// 67. comparison with the less than operator

/*
The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, the less than operator converts data types while comparing.

Examples

2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false
Add the less than operator to the indicated lines so that the return statements make sense.
*/
function testLessThan(val) {
    if (val < 25) {  // Change this line
      return "Under 25";
    }
  
    if (val < 55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);

// 68. comparison with the less than or equal to operator
/*
The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, the less than or equal to operator converts data types.

Examples

4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false
Add the less than or equal to operator to the indicated lines so that the return statements make sense.

*/
function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);

// 69. comparisons with the logical and operator

/*
Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

The same effect could be achieved by nesting an if statement inside another if:

if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
will only return Yes if num is greater than 5 and less than 10. The same logic can be written as:

if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.
*/
function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val <= 50 && val >= 25) {
    
        return "Yes";
   
    }
  
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);

// 70. comparisons with the logical or operator
/*
The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.

The pattern below should look familiar from prior waypoints:

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
will return Yes only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.
*/
function testLogicalOr(val) {
    // Only change code below this line
  
    if (val < 10 || val > 20) {
      return "Outside";
    }
  
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);

// 71. introducing else statements
/*
When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
Combine the if statements into a single if/else statement.
*/
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

 else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

// 72. introducing else if statements
/*
If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

if (num > 15) {
return "Bigger than 15";
} else if (num < 5) {
return "Smaller than 5";
} else {
return "Between 5 and 15";
}
Convert the logic to use else if statements.
*/
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }
else{
  return "Between 5 and 10";
}
}

testElseIf(7);

// 73. logical order in if else statements
/*
Order is important in if, else if statements.

The function is executed from top to bottom so you will want to be careful of what statement comes first.

Take these two functions as an example.

Here's the first:

function foo(x) {
if (x < 1) {
  return "Less than one";
} else if (x < 2) {
  return "Less than two";
} else {
  return "Greater than or equal to two";
}
}
And the second just switches the order of the statements:

function bar(x) {
if (x < 2) {
  return "Less than two";
} else if (x < 1) {
  return "Less than one";
} else {
  return "Greater than or equal to two";
}
}
While these two functions look nearly identical if we pass a number to both we get different outputs.

foo(0)
bar(0)
foo(0) will return the string Less than one, and bar(0) will return the string Less than two.

Change the order of logic in the function so that it will return the correct statements in all cases.
*/

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

// 74. chaining if else statements
/*
if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:

if (condition1) {
statement1
} else if (condition2) {
statement2
} else if (condition3) {
statement3
. . .
} else {
statementN
}
Write chained if/else if statements to fulfill the following conditions:

num < 5 - return Tiny
num < 10 - return Small
num < 15 - return Medium
num < 20 - return Large
num >= 20 - return Huge
*/
function testSize(num) {
  // Only change code below this line
if(num < 5){
  return "Tiny";
}
else if(num < 10){
    return "Small";
}
else if(num < 15){
    return "Medium";
}
else if(num < 20){
    return "Large";
}
else if(num >= 20){
    return "Huge";
}
else{
  return "Change Me";
  // Only change code above this line
}
}
testSize(7);
// 75. golf code
/*
In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"
par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.
*/
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
// Only change code below this line
if(strokes == 1){
return names[0];
}
else if(strokes <= par - 2){
return names[1];
}
else if(strokes == par - 1){
return names[2];
}
else if(strokes == par){
return names[3];
}
else if(strokes == par + 1){
return names[4];
}
else if(strokes == par + 2){
return names[5];
}
else if(strokes >= par + 3){
return names[6];
}
else{
return names[7];
}
// Only change code above this line
}
console.log(golfScore(4, 1));
console.log(golfScore(4, 2));
console.log(golfScore(5, 2));
console.log(golfScore(4, 3));
console.log(golfScore(4, 4));
console.log(golfScore(1, 1));
console.log(golfScore(5, 5));
console.log(golfScore(4, 5));
console.log(golfScore(4, 6));
console.log(golfScore(4, 7));
console.log(golfScore(5, 9));

// 76. selecting form many options with switch statements
/*
If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched case value until a break is encountered.

Here is an example of a switch statement:

switch (lowercaseLetter) {
case "a":
  console.log("A");
  break;
case "b":
  console.log("B");
  break;
}
case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.

Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta
*/
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
   switch (val){
     case 1:
     answer = "alpha";
     break;
     case 2:
     answer = "beta";
     break;
     case 3:
     answer = "gamma";
     break;
     case 4:
     answer = "delta";
     break;
   }
  // Only change code above this line
  return answer;
}

console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));

// 77. adding a default option in switch statements
/*
In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.

A default statement should be the last case.

switch (num) {
case value1:
  statement1;
  break;
case value2:
  statement2;
  break;
...
default:
  defaultStatement;
  break;
}
Write a switch statement to set answer for the following conditions:
a - apple
b - bird
c - cat
default - stuff
*/
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
   switch(val){
     case "a":
     answer="apple";
     break;
      case "b":
     answer="bird";
     break;
      case "c":
     answer="cat";
    break;
      
      default:
      answer="stuff";
   }
  // Only change code above this line
  return answer;
}

console.log(switchOfStuff("a"));
console.log(switchOfStuff("b"));
console.log(switchOfStuff("c"));
// 78. multiple identical options in switch statements
/*
If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:

let result = "";
switch (val) {
case 1:
case 2:
case 3:
  result = "1, 2, or 3";
  break;
case 4:
  result = "4 alone";
}
Cases for 1, 2, and 3 will all produce the same result.

Write a switch statement to set answer for the following ranges:
1-3 - Low
4-6 - Mid
7-9 - High

Note: You will need to have a case statement for each number in the range.
*/
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch(val){
    case 1:
    case 2:
    case 3:
      answer="Low";
      break;
    case 4:
    case 5:
    case 6:
      answer="Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer="High";
      break;
  }


  // Only change code above this line
  return answer;
}

console.log(sequentialSizes(1));
console.log(sequentialSizes(2));
console.log(sequentialSizes(3));
console.log(sequentialSizes(4));
console.log(sequentialSizes(5));
console.log(sequentialSizes(6));
console.log(sequentialSizes(7));
console.log(sequentialSizes(8));
console.log(sequentialSizes(9));

// 79. replacing if else chains with switch
/*
If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following:

if (val === 1) {
answer = "a";
} else if (val === 2) {
answer = "b";
} else {
answer = "c";
}
can be replaced with:

switch (val) {
case 1:
  answer = "a";
  break;
case 2:
  answer = "b";
  break;
default:
  answer = "c";
}
Change the chained if/else if statements into a switch statement.
*/

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  switch(val) {
    case 156:
    answer = "";
     break;
    case "John":
    answer = "";
     break;
    case "bob":
    answer = "Marley";
    break;
    case 42: 
    answer = "The Answer";
    break;
    case 1: 
    answer = "There is no #1";
    break;
    case 99: 
    answer = "Missed me by this much!";
    break;
    case 7: 
    answer = "Ate Nine";
    break;
    default:
    answer = "ate nine";
  }

  // Only change code above this line
  return answer;
}

console.log(chainToSwitch("bob"));
console.log(chainToSwitch(42));
console.log(chainToSwitch(1));
console.log(chainToSwitch(99));
console.log(chainToSwitch(7));
console.log(chainToSwitch("John"));
console.log(chainToSwitch(156));
// 80. returning boolean values from functions
/* You may recall from Comparison with the Equality Operator that all comparison operators return a boolean true or false value.

Sometimes people use an if/else statement to do a comparison, like this:

function isEqual(a, b) {
if (a === b) {
  return true;
} else {
  return false;
}
}
But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:

function isEqual(a, b) {
return a === b;
}
Fix the function isLess to remove the if/else statements.
*/
function isLess(a, b) {
  // Only change code below this line
  
    return (a <= b);
  } 
  
  // Only change code above this line

console.log(isLess(10, 15));



// 81. return early pattern for functions

/*
When a return statement is reached, the execution of the current function stops and control returns to the calling location.

Example

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
The above will display the string Hello in the console, and return the string World. The string byebye will never display in the console, because the function exits at the return statement.

Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

Hint
Remember that undefined is a keyword, not a string.
*/
// Setup
function abTest(a, b) {
  // Only change code below this line

    if(a < 0 || b < 0){
      return undefined;
    }
    
    

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2,2));
console.log(abTest(-2,2));
console.log(abTest(2,-2));
console.log(abTest(2,8));
console.log(abTest(3,3));
console.log(abTest(0,0));
// 82. counting cards

/*
In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

Count Change	Cards
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'
You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Outputs: -3 Hold or 5 Bet

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.
*/
let count = 0;

function cc(card) {
// Only change code below this line
switch (card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count++;
    break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
    count--;
    break;
}
if (count > 0) {
  return count + " Bet";
} else {
  return count + " Hold";
}
// Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
// 83. build javascript objects

/*
You may have heard the term object before.

Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

Here's a sample cat object:

const cat = {
"name": "Whiskers",
"legs": 4,
"tails": 1,
"enemies": ["Water", "Dogs"]
};
In this example, all the properties are stored as strings, such as name, legs, and tails. However, you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows:

const anotherObject = {
make: "Ford",
5: "five",
"model": "focus"
};
However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.

Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.

You can set these object properties to whatever values you want, as long as name is a string, legs and tails are numbers, and friends is an array.
*/
const myDog = {
// Only change code below this line
"name": "Ford",
"legs": 4,
"tails": 1,
"friends":["cat","dog"]

// Only change code above this line
};
// 84. accessing object properties with dot notations
/*
There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

Here is a sample of using dot notation (.) to read an object's property:

const myObj = {
prop1: "val1",
prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
prop1val would have a value of the string val1, and prop2val would have a value of the string val2.

Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt.
*/
// Setup
const testObj = {
"hat": "ballcap",
"shirt": "jersey",
"shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

// 85. accessing object properties with bracket notation
/*
The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

However, you can still use bracket notation on object properties without spaces.

Here is a sample of using bracket notation to read an object's property:

const myObj = {
"Space Name": "Kirk",
"More Space": "Spock",
"NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
myObj["Space Name"] would be the string Kirk, myObj['More Space'] would be the string Spock, and myObj["NoSpace"] would be the string USS Enterprise.

Note that property names with spaces in them must be in quotes (single or double).

Read the values of the properties an entree and the drink of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.
*/
// Setup
const testObj = {
"an entree": "hamburger",
"my side": "veggies",
"the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];  // Change this line

// 86. accessing object properties with variables
/*
Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.

Here is an example of using a variable to access a property:

const dogs = {
Fido: "Mutt",
Hunter: "Doberman",
Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
The string Doberman would be displayed in the console.

Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name.

Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.
*/
// Setup
const testObj = {
12: "Namath",
16: "Montana",
19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber]; 
console.log(player); // Change this line

// 87. updating object properties
/*
After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.

For example, let's look at ourDog:

const ourDog = {
"name": "Camper",
"legs": 4,
"tails": 1,
"friends": ["everything!"]
};
Since he's a particularly happy dog, let's change his name to the string Happy Camper. Here's how we update his object's name property: ourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper"; Now when we evaluate ourDog.name, instead of getting Camper, we'll get his new name, Happy Camper.

Update the myDog object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.
*/

// Setup
const myDog = {
"name": "Coder",
"legs": 4,
"tails": 1,
"friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog["name"] = "Happy Coder";


// 88. Add new properties to a javascript object
/*
You can add new properties to existing JavaScript objects the same way you would modify them.

Here's how we would add a bark property to ourDog:

ourDog.bark = "bow-wow";
or

ourDog["bark"] = "bow-wow";
Now when we evaluate ourDog.bark, we'll get his bark, bow-wow.

Example:

const ourDog = {
"name": "Camper",
"legs": 4,
"tails": 1,
"friends": ["everything!"]
};

ourDog.bark = "bow-wow";
Add a bark property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.

*/

const myDog = {
"name": "Happy Coder",
"legs": 4,
"tails": 1,
"friends": ["freeCodeCamp Campers"]
};
myDog["bark"]= "woof";
console.log(myDog);



// 89. Delete properties from a javascript object
/*
We can also delete properties from objects like this:

delete ourDog.bark;
Example:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
After the last line shown above, ourDog looks like:

{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
Delete the tails property from myDog. You may use either dot or bracket notation.

Tests
Waiting:You should delete the property tails from myDog.
Waiting:You should not modify the myDog setup.
*/
// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
delete myDog.tails;




// 90. using objects for lookups
/*
Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.

Here is an example of an article object:

const article = {
"title": "How to create objects in JavaScript",
"link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
"author": "Kaashan Hussain",
"language": "JavaScript",
"tags": "TECHNOLOGY",
"createdAt": "NOVEMBER 28, 2018"
};

const articleAuthor = article["author"];
const articleLink = article["link"];

const value = "title";
const valueLookup = article[value];
articleAuthor is the string Kaashan Hussain, articleLink is the string https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/, and valueLookup is the string How to create objects in JavaScript.

Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

Tests
Waiting:phoneticLookup("alpha") should equal the string Adams
Waiting:phoneticLookup("bravo") should equal the string Boston
Waiting:phoneticLookup("charlie") should equal the string Chicago
Waiting:phoneticLookup("delta") should equal the string Denver
Waiting:phoneticLookup("echo") should equal the string Easy
Waiting:phoneticLookup("foxtrot") should equal the string Frank
Waiting:phoneticLookup("") should equal undefined
Waiting:You should not modify the return statement
Waiting:You should not use case, switch, or if statements
*/
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
   let lookup = {
  "alpha":"Adams",
  
  "bravo": "Boston",
 
"charlie":"Chicago",
 
"delta": "Denver",
  
"echo": "Easy",

 "foxtrot":"Frank",
  };
result = lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("alpha");


// 91. testing objects for properties
/*
Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

Example

const myObj = {
top: "hat",
bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
The first hasOwnProperty returns true, while the second returns false.

Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".

Tests
Waiting:checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift") should return the string pony.
Waiting:checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet") should return the string kitten.
Waiting:checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house") should return the string Not Found.
Waiting:checkObj({city: "Seattle"}, "city") should return the string Seattle.
Waiting:checkObj({city: "Seattle"}, "district") should return the string Not Found.
Waiting:checkObj({pet: "kitten", bed: "sleigh"}, "gift") should return the string Not Found.
*/
function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  }
  else{
  // Only change code below this line
  return "Not Found";
  }
  // Only change code above this line
}


// 92. manipulating complex objects
/*
Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.

Here's an example of a complex data structure:

const ourMusic = [
{
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD", 
    "Cassette", 
    "LP"
  ],
  "gold": true
}
];
This is an array which contains one object inside. The object has various pieces of metadata about an album. It also has a nested formats array. If you want to add more album records, you can do this by adding records to the top level array. Objects hold data in a property, which has a key-value format. In the example above, "artist": "Daft Punk" is a property that has a key of artist and a value of Daft Punk.

Note: You will need to place a comma after every object in the array, unless it is the last object in the array.

Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.


Tests
Waiting:myMusic should be an array
Waiting:myMusic should have at least two elements
Waiting:The elements in the myMusic array should be objects
Waiting:Your object in myMusic should have at least 4 properties
Waiting:Your object in myMusic should contain the property artist which is a string
Waiting:Your object in myMusic should contain the property title which is a string
Waiting:Your object in myMusic should contain the property release_year which is a number
Waiting:Your object in myMusic should contain a formats property which is an array
Waiting:formats should be an array of strings with at least two elements
*/
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
  "artist": "syed saddiq",
  "title": "It comes natuarally",
  "release_year" : 1997,
  "formats" :[
      "CD",
      "8T",
      "LP"
  ]
  }
];


// 93. accessing nested objects
/*
The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

Here is a nested object:

const ourStorage = {
"desk": {
  "drawer": "stapler"
},
"cabinet": {
  "top drawer": { 
    "folder1": "a file",
    "folder2": "secrets"
  },
  "bottom drawer": "soda"
}
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
ourStorage.cabinet["top drawer"].folder2 would be the string secrets, and ourStorage.desk.drawer would be the string stapler.

Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.

Tests
Waiting:gloveBoxContents should equal the string maps.
Waiting:Your code should use dot and bracket notation to access myStorage.
*/

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

// 94. accessing nested arrays
/*
As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, array bracket notation can be chained to access nested arrays.

Here is an example of how to access a nested array:

const ourPets = [
{
  animalType: "cat",
  names: [
    "Meowzer",
    "Fluffy",
    "Kit-Cat"
  ]
},
{
  animalType: "dog",
  names: [
    "Spot",
    "Bowser",
    "Frankie"
  ]
}
];

ourPets[0].names[1];
ourPets[1].names[0];
ourPets[0].names[1] would be the string Fluffy, and ourPets[1].names[0] would be the string Spot.

Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.

Tests
Waiting:secondTree should equal the string pine.
Waiting:Your code should use dot and bracket notation to access myPlants.

*/

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

// 95. record collection
/*
Record Collection
You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire record collection object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.
Note: A copy of the recordCollection object is used for the tests.


Tests
Waiting:After updateRecords(recordCollection, 5439, "artist", "ABBA"), artist should be the string ABBA
Waiting:After updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracks should have the string Take a Chance on Me as the last and only element.
Waiting:After updateRecords(recordCollection, 2548, "artist", ""), artist should not be set
Waiting:After updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracks should have the string Addicted to Love as the last element.
Waiting:After updateRecords(recordCollection, 2468, "tracks", "Free"), tracks should have the string 1999 as the first element.
Waiting:After updateRecords(recordCollection, 2548, "tracks", ""), tracks should not be set
Waiting:After updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), albumTitle should be the string Riptide
*/
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== "" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
console.log(updateRecords(recordCollection, 5439, 'tracks', 'Take a Chance on Me'));



// 96. iterate with javascript while loops
/*
You can run the same code multiple times by using a loop.

The first type of loop we will learn is called a while loop because it runs while a specified condition is true and stops once that condition is no longer true.

const ourArray = [];
let i = 0;

while (i < 5) {
ourArray.push(i);
i++;
}
In the code example above, the while loop will execute 5 times and append the numbers 0 through 4 to ourArray.

Let's try getting a while loop to work by pushing values to an array.

Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.

Tests
Waiting:You should be using a while loop for this.
Waiting:myArray should equal [5, 4, 3, 2, 1, 0].
*/
const myArray = [];

// Only change code below this line
let i = 5;
while(i >= 0){
myArray.push(i);
i--;
}


// 97. iterate with javascript for loops
/*
You can run the same code multiple times by using a loop.

The most common type of JavaScript loop is called a for loop because it runs for a specific number of times.

For loops are declared with three optional expressions separated by semicolons:

for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.

The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.

The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When the condition is false at the start of the iteration, the loop will stop executing. This means if the condition starts as false, your loop will never execute.

The final expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.

In the following example we initialize with i = 0 and iterate while our condition i < 5 is true. We'll increment i by 1 in each loop iteration with i++ as our final expression.

const ourArray = [];

for (let i = 0; i < 5; i++) {
ourArray.push(i);
}
ourArray will now have the value [0, 1, 2, 3, 4].

Use a for loop to push the values 1 through 5 onto myArray.

Tests
Waiting:You should be using a for loop for this.
Waiting:myArray should equal [1, 2, 3, 4, 5].
*/
// Setup
const myArray = [];

// Only change code below this line
for(let i = 1; i<= 5;i++){
myArray.push(i);
}
// 98. iterate odd numbers with a for loop
/*
For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.

We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each loop with i += 2.

const ourArray = [];

for (let i = 0; i < 10; i += 2) {
ourArray.push(i);
}
ourArray will now contain [0, 2, 4, 6, 8]. Let's change our initialization so we can count by odd numbers.

Push the odd numbers from 1 through 9 to myArray using a for loop.

Tests
Waiting:You should be using a for loop for this.
Waiting:myArray should equal [1, 3, 5, 7, 9].
*/
// Setup
const myArray = [];

// Only change code below this line
for(let i = 1; i<=9; i+=2){
myArray.push(i);
}


// 99. count backwards with a for loop
/*
A for loop can also count backwards, so long as we can define the right conditions.

In order to decrement by two each iteration, we'll need to change our initialization, condition, and final expression.

We'll start at i = 10 and loop while i > 0. We'll decrement i by 2 each loop with i -= 2.

const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
ourArray.push(i);
}
ourArray will now contain [10, 8, 6, 4, 2]. Let's change our initialization and final expression so we can count backwards by twos to create an array of descending odd numbers.

Push the odd numbers from 9 through 1 to myArray using a for loop.

Waiting:You should be using a for loop for this.
Waiting:You should be using the array method push.
Waiting:myArray should equal [9, 7, 5, 3, 1].

*/
// Setup
const myArray = [];

// Only change code below this line
for(let i=9; i>= 1; i-=2){
myArray.push(i);
}


// 100. iterate through an array with a for loop
/*  
A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. This code will output each element of the array arr to the console:

const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
 console.log(arr[i]);
}
Remember that arrays have zero-based indexing, which means the last index of the array is length - 1. Our condition for this loop is i < arr.length, which stops the loop when i is equal to length. In this case the last iteration is i === 4 i.e. when i becomes equal to arr.length - 1 and outputs 6 to the console. Then i increases to 5, and the loop terminates because i < arr.length is false.

Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.

Tests
Waiting:total should be declared and initialized to 0.
Waiting:total should equal 20.
Waiting:You should use a for loop to iterate through myArr.
Waiting:You should not attempt to directly assign the value 20 to total.
*/
// Setup
const myArr = [2, 3, 4, 5, 6];
let total = 0;
// Only change code below this line
for(let i = 0; i < myArr.length; i++){
total += myArr[i];
}



// 101. nesting for loops
/*
If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:

const arr = [
[1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
for (let j = 0; j < arr[i].length; j++) {
  console.log(arr[i][j]);
}
}
This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.

Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

Tests
Waiting:multiplyAll([[1], [2], [3]]) should return 6
Waiting:multiplyAll([[1, 2], [3, 4], [5, 6, 7]]) should return 5040
Waiting:multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]) should return 54
*/

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
for(let i =0; i< arr.length; i++){
  for(let j = 0; j<arr[i].length; j++){
    product = product * arr[i][j];
  }
}
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


// 102. iterate with javascript do... while loops
/*
The next type of loop you will learn is called a do...while loop. It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true.

const ourArray = [];
let i = 0;

do {
ourArray.push(i);
i++;
} while (i < 5);
The example above behaves similar to other types of loops, and the resulting array will look like [0, 1, 2, 3, 4]. However, what makes the do...while different from other loops is how it behaves when the condition fails on the first check. Let's see this in action. Here is a regular while loop that will run the code in the loop as long as i < 5:

const ourArray = []; 
let i = 5;

while (i < 5) {
ourArray.push(i);
i++;
}
In this example, we initialize the value of ourArray to an empty array and the value of i to 5. When we execute the while loop, the condition evaluates to false because i is not less than 5, so we do not execute the code inside the loop. The result is that ourArray will end up with no values added to it, and it will still look like [] when all of the code in the example above has completed running. Now, take a look at a do...while loop:

const ourArray = []; 
let i = 5;

do {
ourArray.push(i);
i++;
} while (i < 5);
In this case, we initialize the value of i to 5, just like we did with the while loop. When we get to the next line, there is no condition to evaluate, so we go to the code inside the curly braces and execute it. We will add a single element to the array and then increment i before we get to the condition check. When we finally evaluate the condition i < 5 on the last line, we see that i is now 6, which fails the conditional check, so we exit the loop and are done. At the end of the above example, the value of ourArray is [5]. Essentially, a do...while loop ensures that the code inside the loop will run at least once. Let's try getting a do...while loop to work by pushing values to an array.

Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running.

Tests
Waiting:You should be using a do...while loop for this exercise.
Waiting:myArray should equal [10].
Waiting:i should equal 11
*/
// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
myArray.push(i);
i++;
}while(i <=10 ); 


// 103. replace loops using recursion
/*
Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:

function multiply(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}
However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.

function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}
The recursive version of multiply breaks down like this. In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, but with n - 1. That function call is evaluated in the same way, calling multiply again until n <= 0. At this point, all the functions can return and the original multiply returns the answer.

Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.

Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

Tests
Waiting:sum([1], 0) should equal 0.
Waiting:sum([2, 3, 4], 1) should equal 2.
Waiting:sum([2, 3, 4, 5], 3) should equal 9.
Waiting:Your code should not rely on any kind of loops (for or while or higher order functions such as forEach, map, filter, or reduce.).
Waiting:You should use recursion to solve this problem.
*/
function sum(arr, n) {
  // Only change code below this line
if(n <= 0){
  return 0;
}else
{
  return sum(arr, n - 1) + arr[n -1];
}
  // Only change code above this line
}




// 104. profile lookup
/*
We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.


Tests
Waiting:lookUpProfile("Kristian", "lastName") should return the string Vos
Waiting:lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]
Waiting:lookUpProfile("Harry", "likes") should return an array
Waiting:lookUpProfile("Bob", "number") should return the string No such contact
Waiting:lookUpProfile("Bob", "potato") should return the string No such contact
Waiting:lookUpProfile("Akira", "address") should return the string No such property
*/
// Setup
const contacts = [
{
  firstName: "Akira",
  lastName: "Laine",
  number: "0543236543",
  likes: ["Pizza", "Coding", "Brownie Points"],
},
{
  firstName: "Harry",
  lastName: "Potter",
  number: "0994372684",
  likes: ["Hogwarts", "Magic", "Hagrid"],
},
{|
  
  firstName: "Sherlock",
  lastName: "Holmes",
  number: "0487345643",
  likes: ["Intriguing Cases", "Violin"],
},
{
  firstName: "Kristian",
  lastName: "Vos",
  number: "unknown",
  likes: ["JavaScript", "Gaming", "Foxes"],
},
];

function lookUpProfile(name, prop) {
for (let x = 0; x < contacts.length; x++) {
  if (contacts[x].firstName === name) {
    if (contacts[x].hasOwnProperty(prop)) {
      return contacts[x][prop];
    } else {
      return "No such property";
    }
  }
}
return "No such contact";
}
lookUpProfile("Akira", "likes");




// 105. generate random fractions with javascript
/*
Random numbers are useful for creating random behavior.

JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and 1 (exclusive). Thus Math.random() can return a 0 but never return a 1.

Note: Like Storing Values with the Assignment Operator, all function calls will be resolved before the return executes, so we can return the value of the Math.random() function.

Change randomFraction to return a random number instead of returning 0.

Tests
Waiting:randomFraction should return a random number.
Waiting:The number returned by randomFraction should be a decimal.
Waiting:You should be using Math.random to generate the random decimal number.
*/
function randomFraction() {
  let result = 0;
    // Only change code below this line
  while(result === 0){
       result = Math.random();
  }
    return result;
  
    // Only change code above this line
  }




// 106. generate random whole numbers with javascript
/*
It's great that we can generate random decimal numbers, but it's even more useful if we use it to generate random whole numbers.

Use Math.random() to generate a random decimal.
Multiply that random decimal by 20.
Use another function, Math.floor() to round the number down to its nearest whole number.
Remember that Math.random() can never quite return a 1 and, because we're rounding down, it's impossible to actually get 20. This technique will give us a whole number between 0 and 19.

Putting everything together, this is what our code looks like:

Math.floor(Math.random() * 20);
We are calling Math.random(), multiplying the result by 20, then passing the value to Math.floor() function to round the value down to the nearest whole number.

Use this technique to generate and return a random whole number between 0 and 9.

Tests
Waiting:The result of randomWholeNum should be a whole number.
Waiting:You should use Math.random to generate a random number.
Waiting:You should have multiplied the result of Math.random by 10 to make it a number that is between zero and nine.
Waiting:You should use Math.floor to remove the decimal part of the number.
*/
let randomNumberBetween0To9 = Math.floor(Math.random() * 20);


function randomWholeNum() {

// Only change code below this line

return Math.floor(Math.random() * 10);
}



// 107. generate random whole numbers within a range
/*
Instead of generating a random whole number between zero and a given number like we did before, we can generate a random whole number that falls within a range of two specific numbers.

To do this, we'll define a minimum number min and a maximum number max.

Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:

Math.floor(Math.random() * (max - min + 1)) + min
Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.


Tests
Waiting:The lowest random number that can be generated by randomRange should be equal to your minimum number, myMin.
Waiting:The highest random number that can be generated by randomRange should be equal to your maximum number, myMax.
Waiting:The random number generated by randomRange should be an integer, not a decimal.
Waiting:randomRange should use both myMax and myMin, and return a random number in your range.
*/
function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}
console.log(randomRange(3, 4));


// 108. use the parseInt Function
/*
The parseInt() function parses a string and returns an integer. Here's an example:

const a = parseInt("007");
The above function converts the string 007 to the integer 7. If the first character in the string can't be converted into a number, then it returns NaN.

Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.

Tests
Waiting:convertToInteger should use the parseInt() function
Waiting:convertToInteger("56") should return a number
Waiting:convertToInteger("56") should return 56
Waiting:convertToInteger("77") should return 77
Waiting:convertToInteger("JamesBond") should return NaN
*/
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");
convertToInteger("77");
convertToInteger("JamesBond");



// 109. use the parseInt function with a radix
/*
The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

The function call looks like:

parseInt(string, radix);
And here's an example:

const a = parseInt("11", 2);
The radix variable says that 11 is in the binary system, or base 2. This example converts the string 11 to an integer 3.

Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.

Tests
convertToInteger should use the parseInt() function
Passed:convertToInteger("10011") should return a number
Failed:convertToInteger("10011") should return 19
Failed:convertToInteger("111001") should return 57
Passed:convertToInteger("JamesBond") should return NaN
*/
function convertToInteger(str, redix) {
  return parseInt(str, 2);
}

convertToInteger("10011");



// 110. use the conditional ( ternary) operator
/*
The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.

The following function uses an if/else statement to check a condition:

function findGreater(a, b) {
if(a > b) {
  return "a is greater";
}
else {
  return "b is greater or equal";
}
}
This can be re-written using the conditional operator:

function findGreater(a, b) {
return a > b ? "a is greater" : "b is greater or equal";
}
Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either the string Equal or the string Not Equal.

Tests
Waiting:checkEqual should use the conditional operator
Waiting:checkEqual(1, 2) should return the string Not Equal
Waiting:checkEqual(1, 1) should return the string Equal
Waiting:checkEqual(1, -1) should return the string Not Equal
*/
function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);


// 111. use multiple conditional (ternary) operators
/*
In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions.

The following function uses if, else if, and else statements to check multiple conditions:

function findGreaterOrEqual(a, b) {
if (a === b) {
  return "a and b are equal";
}
else if (a > b) {
  return "a is greater";
}
else {
  return "b is greater";
}
}
The above function can be re-written using multiple conditional operators:

function findGreaterOrEqual(a, b) {
return (a === b) ? "a and b are equal" 
  : (a > b) ? "a is greater" 
  : "b is greater";
}
It is considered best practice to format multiple conditional operators such that each condition is on a separate line, as shown above. Using multiple conditional operators without proper indentation may make your code hard to read. For example:

function findGreaterOrEqual(a, b) {
return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return positive, negative or zero.


Tests
Waiting:checkSign should use multiple conditional operators
Waiting:checkSign(10) should return the string positive. Note that capitalization matters
Waiting:checkSign(-12) should return the string negative. Note that capitalization matters
Waiting:checkSign(0) should return the string zero. Note that capitalization matters
*/

function checkSign(num) {
  return (num > 0) ? "positive" :
  (num < 0) ? "negative" : "zero";
}

console.log(checkSign(10));
console.log(checkSign(-12));
console.log(checkSign(0));


// 112. use recursion to create a countdown

/*
In a previous challenge, you learned how to use recursion to replace a for loop. Now, let's look at a more complex function that returns an array of consecutive integers starting with 1 through the number passed to the function.

As mentioned in the previous challenge, there will be a base case. The base case tells the recursive function when it no longer needs to call itself. It is a simple case where the return value is already known. There will also be a recursive call which executes the original function with different arguments. If the function is written correctly, eventually the base case will be reached.

For example, say you want to write a recursive function that returns an array containing the numbers 1 through n. This function will need to accept an argument, n, representing the final number. Then it will need to call itself with progressively smaller values of n until it reaches 1. You could write the function as follows:

function countup(n) {
if (n < 1) {
  return [];
} else {
  const countArray = countup(n - 1);
  countArray.push(n);
  return countArray;
}
}
console.log(countup(5));
The value [1, 2, 3, 4, 5] will be displayed in the console.

At first, this seems counterintuitive since the value of n decreases, but the values in the final array are increasing. This happens because the push happens last, after the recursive call has returned. At the point where n is pushed into the array, countup(n - 1) has already been evaluated and returned [1, 2, ..., n - 1].

We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.

Tests
Waiting:countdown(-1) should return an empty array.
Waiting:countdown(10) should return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
Waiting:countdown(5) should return [5, 4, 3, 2, 1]
Waiting:Your code should not rely on any kind of loops (for, while or higher order functions such as forEach, map, filter, and reduce).
Waiting:You should use recursion to solve this problem.
Waiting:Global variables should not be used to cache the array.

*/

// Only change code below this line
function countdown(n){
  if(n<1){
    return[];
  }else{
    const arr = countdown(n-1);
    arr.unshift(n);
    return arr;
  }
 }
// Only change code above this line


// 113. use recursion to create a range of numbers

/*
Continuing from the previous challenge, we provide you another opportunity to create a recursive function to solve a problem.
We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.

Tests
Waiting:Your function should return an array.
Waiting:Your code should not use any loop syntax (for or while or higher order functions such as forEach, map, filter, or reduce).
Waiting:rangeOfNumbers should use recursion (call itself) to solve this challenge.
Waiting:rangeOfNumbers(1, 5) should return [1, 2, 3, 4, 5].
Waiting:rangeOfNumbers(6, 9) should return [6, 7, 8, 9].
Waiting:rangeOfNumbers(4, 4) should return [4].
Waiting:Global variables should not be used to cache the array.
*/

function rangeOfNumbers(startNum, endNum) {
  if(endNum < startNum){
  return [];
  }
  else{
    const number = rangeOfNumbers(startNum, (endNum-1));
   number.push(endNum);
   return number;
  } 
};

console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(6, 9));
console.log(rangeOfNumbers(4, 4));



// 89. Delete properties from a javascript object
/*
We can also delete properties from objects like this:

delete ourDog.bark;
Example:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
After the last line shown above, ourDog looks like:

{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
Delete the tails property from myDog. You may use either dot or bracket notation.

Tests
Waiting:You should delete the property tails from myDog.
Waiting:You should not modify the myDog setup.
*/
// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
delete myDog.tails;




// 90. using objects for lookups
/*
Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.

Here is an example of an article object:

const article = {
"title": "How to create objects in JavaScript",
"link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
"author": "Kaashan Hussain",
"language": "JavaScript",
"tags": "TECHNOLOGY",
"createdAt": "NOVEMBER 28, 2018"
};

const articleAuthor = article["author"];
const articleLink = article["link"];

const value = "title";
const valueLookup = article[value];
articleAuthor is the string Kaashan Hussain, articleLink is the string https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/, and valueLookup is the string How to create objects in JavaScript.

Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

Tests
Waiting:phoneticLookup("alpha") should equal the string Adams
Waiting:phoneticLookup("bravo") should equal the string Boston
Waiting:phoneticLookup("charlie") should equal the string Chicago
Waiting:phoneticLookup("delta") should equal the string Denver
Waiting:phoneticLookup("echo") should equal the string Easy
Waiting:phoneticLookup("foxtrot") should equal the string Frank
Waiting:phoneticLookup("") should equal undefined
Waiting:You should not modify the return statement
Waiting:You should not use case, switch, or if statements
*/
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
   let lookup = {
  "alpha":"Adams",
  
  "bravo": "Boston",
 
"charlie":"Chicago",
 
"delta": "Denver",
  
"echo": "Easy",

 "foxtrot":"Frank",
  };
result = lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("alpha");


// 91. testing objects for properties
/*
Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

Example

const myObj = {
top: "hat",
bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
The first hasOwnProperty returns true, while the second returns false.

Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".

Tests
Waiting:checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift") should return the string pony.
Waiting:checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet") should return the string kitten.
Waiting:checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house") should return the string Not Found.
Waiting:checkObj({city: "Seattle"}, "city") should return the string Seattle.
Waiting:checkObj({city: "Seattle"}, "district") should return the string Not Found.
Waiting:checkObj({pet: "kitten", bed: "sleigh"}, "gift") should return the string Not Found.
*/
function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  }
  else{
  // Only change code below this line
  return "Not Found";
  }
  // Only change code above this line
}


// 92. manipulating complex objects
/*
Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.

Here's an example of a complex data structure:

const ourMusic = [
{
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD", 
    "Cassette", 
    "LP"
  ],
  "gold": true
}
];
This is an array which contains one object inside. The object has various pieces of metadata about an album. It also has a nested formats array. If you want to add more album records, you can do this by adding records to the top level array. Objects hold data in a property, which has a key-value format. In the example above, "artist": "Daft Punk" is a property that has a key of artist and a value of Daft Punk.

Note: You will need to place a comma after every object in the array, unless it is the last object in the array.

Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.


Tests
Waiting:myMusic should be an array
Waiting:myMusic should have at least two elements
Waiting:The elements in the myMusic array should be objects
Waiting:Your object in myMusic should have at least 4 properties
Waiting:Your object in myMusic should contain the property artist which is a string
Waiting:Your object in myMusic should contain the property title which is a string
Waiting:Your object in myMusic should contain the property release_year which is a number
Waiting:Your object in myMusic should contain a formats property which is an array
Waiting:formats should be an array of strings with at least two elements
*/
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
  "artist": "syed saddiq",
  "title": "It comes natuarally",
  "release_year" : 1997,
  "formats" :[
      "CD",
      "8T",
      "LP"
  ]
  }
];


// 93. accessing nested objects
/*
The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

Here is a nested object:

const ourStorage = {
"desk": {
  "drawer": "stapler"
},
"cabinet": {
  "top drawer": { 
    "folder1": "a file",
    "folder2": "secrets"
  },
  "bottom drawer": "soda"
}
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
ourStorage.cabinet["top drawer"].folder2 would be the string secrets, and ourStorage.desk.drawer would be the string stapler.

Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.

Tests
Waiting:gloveBoxContents should equal the string maps.
Waiting:Your code should use dot and bracket notation to access myStorage.
*/

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

// 94. accessing nested arrays
/*
As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, array bracket notation can be chained to access nested arrays.

Here is an example of how to access a nested array:

const ourPets = [
{
  animalType: "cat",
  names: [
    "Meowzer",
    "Fluffy",
    "Kit-Cat"
  ]
},
{
  animalType: "dog",
  names: [
    "Spot",
    "Bowser",
    "Frankie"
  ]
}
];

ourPets[0].names[1];
ourPets[1].names[0];
ourPets[0].names[1] would be the string Fluffy, and ourPets[1].names[0] would be the string Spot.

Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.

Tests
Waiting:secondTree should equal the string pine.
Waiting:Your code should use dot and bracket notation to access myPlants.

*/

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

// 95. record collection
/*
Record Collection
You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire record collection object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.
Note: A copy of the recordCollection object is used for the tests.


Tests
Waiting:After updateRecords(recordCollection, 5439, "artist", "ABBA"), artist should be the string ABBA
Waiting:After updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracks should have the string Take a Chance on Me as the last and only element.
Waiting:After updateRecords(recordCollection, 2548, "artist", ""), artist should not be set
Waiting:After updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracks should have the string Addicted to Love as the last element.
Waiting:After updateRecords(recordCollection, 2468, "tracks", "Free"), tracks should have the string 1999 as the first element.
Waiting:After updateRecords(recordCollection, 2548, "tracks", ""), tracks should not be set
Waiting:After updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), albumTitle should be the string Riptide
*/
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== "" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
console.log(updateRecords(recordCollection, 5439, 'tracks', 'Take a Chance on Me'));



// 96. iterate with javascript while loops
/*
You can run the same code multiple times by using a loop.

The first type of loop we will learn is called a while loop because it runs while a specified condition is true and stops once that condition is no longer true.

const ourArray = [];
let i = 0;

while (i < 5) {
ourArray.push(i);
i++;
}
In the code example above, the while loop will execute 5 times and append the numbers 0 through 4 to ourArray.

Let's try getting a while loop to work by pushing values to an array.

Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.

Tests
Waiting:You should be using a while loop for this.
Waiting:myArray should equal [5, 4, 3, 2, 1, 0].
*/
const myArray = [];

// Only change code below this line
let i = 5;
while(i >= 0){
myArray.push(i);
i--;
}


// 97. iterate with javascript for loops
/*
You can run the same code multiple times by using a loop.

The most common type of JavaScript loop is called a for loop because it runs for a specific number of times.

For loops are declared with three optional expressions separated by semicolons:

for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.

The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.

The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When the condition is false at the start of the iteration, the loop will stop executing. This means if the condition starts as false, your loop will never execute.

The final expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.

In the following example we initialize with i = 0 and iterate while our condition i < 5 is true. We'll increment i by 1 in each loop iteration with i++ as our final expression.

const ourArray = [];

for (let i = 0; i < 5; i++) {
ourArray.push(i);
}
ourArray will now have the value [0, 1, 2, 3, 4].

Use a for loop to push the values 1 through 5 onto myArray.

Tests
Waiting:You should be using a for loop for this.
Waiting:myArray should equal [1, 2, 3, 4, 5].
*/
// Setup
const myArray = [];

// Only change code below this line
for(let i = 1; i<= 5;i++){
myArray.push(i);
}
// 98. iterate odd numbers with a for loop
/*
For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.

We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each loop with i += 2.

const ourArray = [];

for (let i = 0; i < 10; i += 2) {
ourArray.push(i);
}
ourArray will now contain [0, 2, 4, 6, 8]. Let's change our initialization so we can count by odd numbers.

Push the odd numbers from 1 through 9 to myArray using a for loop.

Tests
Waiting:You should be using a for loop for this.
Waiting:myArray should equal [1, 3, 5, 7, 9].
*/
// Setup
const myArray = [];

// Only change code below this line
for(let i = 1; i<=9; i+=2){
myArray.push(i);
}


// 99. count backwards with a for loop
/*
A for loop can also count backwards, so long as we can define the right conditions.

In order to decrement by two each iteration, we'll need to change our initialization, condition, and final expression.

We'll start at i = 10 and loop while i > 0. We'll decrement i by 2 each loop with i -= 2.

const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
ourArray.push(i);
}
ourArray will now contain [10, 8, 6, 4, 2]. Let's change our initialization and final expression so we can count backwards by twos to create an array of descending odd numbers.

Push the odd numbers from 9 through 1 to myArray using a for loop.

Waiting:You should be using a for loop for this.
Waiting:You should be using the array method push.
Waiting:myArray should equal [9, 7, 5, 3, 1].

*/
// Setup
const myArray = [];

// Only change code below this line
for(let i=9; i>= 1; i-=2){
myArray.push(i);
}


// 100. iterate through an array with a for loop
/*  
A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. This code will output each element of the array arr to the console:

const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
 console.log(arr[i]);
}
Remember that arrays have zero-based indexing, which means the last index of the array is length - 1. Our condition for this loop is i < arr.length, which stops the loop when i is equal to length. In this case the last iteration is i === 4 i.e. when i becomes equal to arr.length - 1 and outputs 6 to the console. Then i increases to 5, and the loop terminates because i < arr.length is false.

Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.

Tests
Waiting:total should be declared and initialized to 0.
Waiting:total should equal 20.
Waiting:You should use a for loop to iterate through myArr.
Waiting:You should not attempt to directly assign the value 20 to total.
*/
// Setup
const myArr = [2, 3, 4, 5, 6];
let total = 0;
// Only change code below this line
for(let i = 0; i < myArr.length; i++){
total += myArr[i];
}



// 101. nesting for loops
/*
If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:

const arr = [
[1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
for (let j = 0; j < arr[i].length; j++) {
  console.log(arr[i][j]);
}
}
This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.

Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

Tests
Waiting:multiplyAll([[1], [2], [3]]) should return 6
Waiting:multiplyAll([[1, 2], [3, 4], [5, 6, 7]]) should return 5040
Waiting:multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]) should return 54
*/

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
for(let i =0; i< arr.length; i++){
  for(let j = 0; j<arr[i].length; j++){
    product = product * arr[i][j];
  }
}
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


// 102. iterate with javascript do... while loops
/*
The next type of loop you will learn is called a do...while loop. It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true.

const ourArray = [];
let i = 0;

do {
ourArray.push(i);
i++;
} while (i < 5);
The example above behaves similar to other types of loops, and the resulting array will look like [0, 1, 2, 3, 4]. However, what makes the do...while different from other loops is how it behaves when the condition fails on the first check. Let's see this in action. Here is a regular while loop that will run the code in the loop as long as i < 5:

const ourArray = []; 
let i = 5;

while (i < 5) {
ourArray.push(i);
i++;
}
In this example, we initialize the value of ourArray to an empty array and the value of i to 5. When we execute the while loop, the condition evaluates to false because i is not less than 5, so we do not execute the code inside the loop. The result is that ourArray will end up with no values added to it, and it will still look like [] when all of the code in the example above has completed running. Now, take a look at a do...while loop:

const ourArray = []; 
let i = 5;

do {
ourArray.push(i);
i++;
} while (i < 5);
In this case, we initialize the value of i to 5, just like we did with the while loop. When we get to the next line, there is no condition to evaluate, so we go to the code inside the curly braces and execute it. We will add a single element to the array and then increment i before we get to the condition check. When we finally evaluate the condition i < 5 on the last line, we see that i is now 6, which fails the conditional check, so we exit the loop and are done. At the end of the above example, the value of ourArray is [5]. Essentially, a do...while loop ensures that the code inside the loop will run at least once. Let's try getting a do...while loop to work by pushing values to an array.

Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running.

Tests
Waiting:You should be using a do...while loop for this exercise.
Waiting:myArray should equal [10].
Waiting:i should equal 11
*/
// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
myArray.push(i);
i++;
}while(i <=10 ); 


// 103. replace loops using recursion
/*
Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:

function multiply(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}
However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.

function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}
The recursive version of multiply breaks down like this. In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, but with n - 1. That function call is evaluated in the same way, calling multiply again until n <= 0. At this point, all the functions can return and the original multiply returns the answer.

Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.

Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

Tests
Waiting:sum([1], 0) should equal 0.
Waiting:sum([2, 3, 4], 1) should equal 2.
Waiting:sum([2, 3, 4, 5], 3) should equal 9.
Waiting:Your code should not rely on any kind of loops (for or while or higher order functions such as forEach, map, filter, or reduce.).
Waiting:You should use recursion to solve this problem.
*/
function sum(arr, n) {
  // Only change code below this line
if(n <= 0){
  return 0;
}else
{
  return sum(arr, n - 1) + arr[n -1];
}
  // Only change code above this line
}




// 104. profile lookup
/*
We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.


Tests
Waiting:lookUpProfile("Kristian", "lastName") should return the string Vos
Waiting:lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]
Waiting:lookUpProfile("Harry", "likes") should return an array
Waiting:lookUpProfile("Bob", "number") should return the string No such contact
Waiting:lookUpProfile("Bob", "potato") should return the string No such contact
Waiting:lookUpProfile("Akira", "address") should return the string No such property
*/
// Setup
const contacts = [
{
  firstName: "Akira",
  lastName: "Laine",
  number: "0543236543",
  likes: ["Pizza", "Coding", "Brownie Points"],
},
{
  firstName: "Harry",
  lastName: "Potter",
  number: "0994372684",
  likes: ["Hogwarts", "Magic", "Hagrid"],
},
{|
  
  firstName: "Sherlock",
  lastName: "Holmes",
  number: "0487345643",
  likes: ["Intriguing Cases", "Violin"],
},
{
  firstName: "Kristian",
  lastName: "Vos",
  number: "unknown",
  likes: ["JavaScript", "Gaming", "Foxes"],
},
];

function lookUpProfile(name, prop) {
for (let x = 0; x < contacts.length; x++) {
  if (contacts[x].firstName === name) {
    if (contacts[x].hasOwnProperty(prop)) {
      return contacts[x][prop];
    } else {
      return "No such property";
    }
  }
}
return "No such contact";
}
lookUpProfile("Akira", "likes");




// 105. generate random fractions with javascript
/*
Random numbers are useful for creating random behavior.

JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and 1 (exclusive). Thus Math.random() can return a 0 but never return a 1.

Note: Like Storing Values with the Assignment Operator, all function calls will be resolved before the return executes, so we can return the value of the Math.random() function.

Change randomFraction to return a random number instead of returning 0.

Tests
Waiting:randomFraction should return a random number.
Waiting:The number returned by randomFraction should be a decimal.
Waiting:You should be using Math.random to generate the random decimal number.
*/
function randomFraction() {
  let result = 0;
    // Only change code below this line
  while(result === 0){
       result = Math.random();
  }
    return result;
  
    // Only change code above this line
  }




// 106. generate random whole numbers with javascript
/*
It's great that we can generate random decimal numbers, but it's even more useful if we use it to generate random whole numbers.

Use Math.random() to generate a random decimal.
Multiply that random decimal by 20.
Use another function, Math.floor() to round the number down to its nearest whole number.
Remember that Math.random() can never quite return a 1 and, because we're rounding down, it's impossible to actually get 20. This technique will give us a whole number between 0 and 19.

Putting everything together, this is what our code looks like:

Math.floor(Math.random() * 20);
We are calling Math.random(), multiplying the result by 20, then passing the value to Math.floor() function to round the value down to the nearest whole number.

Use this technique to generate and return a random whole number between 0 and 9.

Tests
Waiting:The result of randomWholeNum should be a whole number.
Waiting:You should use Math.random to generate a random number.
Waiting:You should have multiplied the result of Math.random by 10 to make it a number that is between zero and nine.
Waiting:You should use Math.floor to remove the decimal part of the number.
*/
let randomNumberBetween0To9 = Math.floor(Math.random() * 20);


function randomWholeNum() {

// Only change code below this line

return Math.floor(Math.random() * 10);
}



// 107. generate random whole numbers within a range
/*
Instead of generating a random whole number between zero and a given number like we did before, we can generate a random whole number that falls within a range of two specific numbers.

To do this, we'll define a minimum number min and a maximum number max.

Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:

Math.floor(Math.random() * (max - min + 1)) + min
Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.


Tests
Waiting:The lowest random number that can be generated by randomRange should be equal to your minimum number, myMin.
Waiting:The highest random number that can be generated by randomRange should be equal to your maximum number, myMax.
Waiting:The random number generated by randomRange should be an integer, not a decimal.
Waiting:randomRange should use both myMax and myMin, and return a random number in your range.
*/
function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}
console.log(randomRange(3, 4));


// 108. use the parseInt Function
/*
The parseInt() function parses a string and returns an integer. Here's an example:

const a = parseInt("007");
The above function converts the string 007 to the integer 7. If the first character in the string can't be converted into a number, then it returns NaN.

Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.

Tests
Waiting:convertToInteger should use the parseInt() function
Waiting:convertToInteger("56") should return a number
Waiting:convertToInteger("56") should return 56
Waiting:convertToInteger("77") should return 77
Waiting:convertToInteger("JamesBond") should return NaN
*/
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");
convertToInteger("77");
convertToInteger("JamesBond");



// 109. use the parseInt function with a radix
/*
The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

The function call looks like:

parseInt(string, radix);
And here's an example:

const a = parseInt("11", 2);
The radix variable says that 11 is in the binary system, or base 2. This example converts the string 11 to an integer 3.

Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.

Tests
convertToInteger should use the parseInt() function
Passed:convertToInteger("10011") should return a number
Failed:convertToInteger("10011") should return 19
Failed:convertToInteger("111001") should return 57
Passed:convertToInteger("JamesBond") should return NaN
*/
function convertToInteger(str, redix) {
  return parseInt(str, 2);
}

convertToInteger("10011");



// 110. use the conditional ( ternary) operator
/*
The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.

The following function uses an if/else statement to check a condition:

function findGreater(a, b) {
if(a > b) {
  return "a is greater";
}
else {
  return "b is greater or equal";
}
}
This can be re-written using the conditional operator:

function findGreater(a, b) {
return a > b ? "a is greater" : "b is greater or equal";
}
Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either the string Equal or the string Not Equal.

Tests
Waiting:checkEqual should use the conditional operator
Waiting:checkEqual(1, 2) should return the string Not Equal
Waiting:checkEqual(1, 1) should return the string Equal
Waiting:checkEqual(1, -1) should return the string Not Equal
*/
function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);


// 111. use multiple conditional (ternary) operators
/*
In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions.

The following function uses if, else if, and else statements to check multiple conditions:

function findGreaterOrEqual(a, b) {
if (a === b) {
  return "a and b are equal";
}
else if (a > b) {
  return "a is greater";
}
else {
  return "b is greater";
}
}
The above function can be re-written using multiple conditional operators:

function findGreaterOrEqual(a, b) {
return (a === b) ? "a and b are equal" 
  : (a > b) ? "a is greater" 
  : "b is greater";
}
It is considered best practice to format multiple conditional operators such that each condition is on a separate line, as shown above. Using multiple conditional operators without proper indentation may make your code hard to read. For example:

function findGreaterOrEqual(a, b) {
return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return positive, negative or zero.


Tests
Waiting:checkSign should use multiple conditional operators
Waiting:checkSign(10) should return the string positive. Note that capitalization matters
Waiting:checkSign(-12) should return the string negative. Note that capitalization matters
Waiting:checkSign(0) should return the string zero. Note that capitalization matters
*/

function checkSign(num) {
  return (num > 0) ? "positive" :
  (num < 0) ? "negative" : "zero";
}

console.log(checkSign(10));
console.log(checkSign(-12));
console.log(checkSign(0));


// 112. use recursion to create a countdown

/*
In a previous challenge, you learned how to use recursion to replace a for loop. Now, let's look at a more complex function that returns an array of consecutive integers starting with 1 through the number passed to the function.

As mentioned in the previous challenge, there will be a base case. The base case tells the recursive function when it no longer needs to call itself. It is a simple case where the return value is already known. There will also be a recursive call which executes the original function with different arguments. If the function is written correctly, eventually the base case will be reached.

For example, say you want to write a recursive function that returns an array containing the numbers 1 through n. This function will need to accept an argument, n, representing the final number. Then it will need to call itself with progressively smaller values of n until it reaches 1. You could write the function as follows:

function countup(n) {
if (n < 1) {
  return [];
} else {
  const countArray = countup(n - 1);
  countArray.push(n);
  return countArray;
}
}
console.log(countup(5));
The value [1, 2, 3, 4, 5] will be displayed in the console.

At first, this seems counterintuitive since the value of n decreases, but the values in the final array are increasing. This happens because the push happens last, after the recursive call has returned. At the point where n is pushed into the array, countup(n - 1) has already been evaluated and returned [1, 2, ..., n - 1].

We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.

Tests
Waiting:countdown(-1) should return an empty array.
Waiting:countdown(10) should return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
Waiting:countdown(5) should return [5, 4, 3, 2, 1]
Waiting:Your code should not rely on any kind of loops (for, while or higher order functions such as forEach, map, filter, and reduce).
Waiting:You should use recursion to solve this problem.
Waiting:Global variables should not be used to cache the array.

*/

// Only change code below this line
function countdown(n){
  if(n<1){
    return[];
  }else{
    const arr = countdown(n-1);
    arr.unshift(n);
    return arr;
  }
 }
// Only change code above this line


// 113. use recursion to create a range of numbers

/*
Continuing from the previous challenge, we provide you another opportunity to create a recursive function to solve a problem.
We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.

Tests
Waiting:Your function should return an array.
Waiting:Your code should not use any loop syntax (for or while or higher order functions such as forEach, map, filter, or reduce).
Waiting:rangeOfNumbers should use recursion (call itself) to solve this challenge.
Waiting:rangeOfNumbers(1, 5) should return [1, 2, 3, 4, 5].
Waiting:rangeOfNumbers(6, 9) should return [6, 7, 8, 9].
Waiting:rangeOfNumbers(4, 4) should return [4].
Waiting:Global variables should not be used to cache the array.
*/

function rangeOfNumbers(startNum, endNum) {
  if(endNum < startNum){
  return [];
  }
  else{
    const number = rangeOfNumbers(startNum, (endNum-1));
   number.push(endNum);
   return number;
  } 
};

console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(6, 9));
console.log(rangeOfNumbers(4, 4));