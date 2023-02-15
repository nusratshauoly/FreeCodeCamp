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

