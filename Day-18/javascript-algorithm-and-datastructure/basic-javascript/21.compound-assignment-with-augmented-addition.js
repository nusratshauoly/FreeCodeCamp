/* 
Compound Assignment With Augmented Addition
In programming, it is common to use assignments to modify the contents of a variable. Remember that everything to the right of the equals sign is evaluated first, so we can say:

myVar = myVar + 5;
to add 5 to myVar. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.

One such operator is the += operator.

let myVar = 1;
myVar += 5;
console.log(myVar);
6 would be displayed in the console.

Convert the assignments for a, b, and c to use the += operator.

Tests
Waiting:a should equal 15.
Waiting:b should equal 26.
Waiting:c should equal 19.
Waiting:You should use the += operator for each variable.
Waiting:You should not modify the code above the specified comment.

*/

/* let a = 3;
let b = 17;
let c = 12; */

// Only change code below this line
/* a = a + 12;
b = 9 + b;
c = c + 7; */

let a = 3;
a += 12;
console.log(a);
let b = 17;
b += 9;
console.log(b);
let c = 12;
c += 7;
console.log(c);