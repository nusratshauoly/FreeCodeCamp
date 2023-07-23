//  12. Sum All Odd Fibonacci Numbers

/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

Tests
Waiting:sumFibs(1) should return a number.
Waiting:sumFibs(1000) should return 1785.
Waiting:sumFibs(4000000) should return 4613732.
Waiting:sumFibs(4) should return 5.
Waiting:sumFibs(75024) should return 60696.
Waiting:sumFibs(75025) should return 135721.
*/







/////////////////////////////////

// 13. Sum All Primes

/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

Tests
Waiting:sumPrimes(10) should return a number.
Waiting:sumPrimes(10) should return 17.
Waiting:sumPrimes(977) should return 73156.
*/





////////////////////////////////////

// 14. Smallest Common Multiple

/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

Tests
Waiting:smallestCommons([1, 5]) should return a number.
Waiting:smallestCommons([1, 5]) should return 60.
Waiting:smallestCommons([5, 1]) should return 60.
Waiting:smallestCommons([2, 10]) should return 2520.
Waiting:smallestCommons([1, 13]) should return 360360.
Waiting:smallestCommons([23, 18]) should return 6056820.
*/








//////////////////////////////////////

// 15. Drop it

/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

Tests
Waiting:dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
Waiting:dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
Waiting:dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
Waiting:dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
Waiting:dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
Waiting:dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].
*/







// 16. Steamroller

/*
Flatten a nested array. You must account for varying levels of nesting.

Tests
Waiting:steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
Waiting:steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
Waiting:steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
Waiting:steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
Waiting:Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
Waiting:Global variables should not be used.
*/






///////////////////////////////////

// 17. Binary Agents

/*
Return an English translated sentence of the passed binary string.

The binary string will be space separated.

Tests
Waiting:binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return the string Aren't bonfires fun!?
Waiting:binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return the string I love FreeCodeCamp!
*/






///////////////////////////////////

// 18. Everything Be True

/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.

Tests
Waiting:truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot") should return false.
Waiting:truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name") should return true.
Waiting:truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "role") should return false.
Waiting:truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}], "number") should return true.
Waiting:truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "caught") should return false.
Waiting:truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "number") should return false.
Waiting:truthCheck([{name: "Quincy", username: "QuincyLarson"}, {name: "Naomi", username: "nhcarrigan"}, {name: "Camperbot"}], "username") should return false.
Waiting:truthCheck([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]}, {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users: []}], "users") should return true.
Waiting:truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "data") should return true.
Waiting:truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "id") should return false.
*/






///////////////////////////////////

// 19. Arguments Optional

/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Tests
Waiting:addTogether(2, 3) should return 5.
Waiting:addTogether(23, 30) should return 53.
Waiting:addTogether(5)(7) should return 12.
Waiting:addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") should return undefined.
Waiting:addTogether(2, "3") should return undefined.
Waiting:addTogether(2)([3]) should return undefined.
Waiting:addTogether("2", 3) should return undefined.
Waiting:addTogether(5, undefined) should return undefined.
*/







////////////////////////////////////

// 20. Make a Person

/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

Tests
Waiting:No properties should be added. Object.keys(bob).length should always return 6.
Waiting:bob instanceof Person should return true.
Waiting:bob.firstName should return undefined.
Waiting:bob.lastName should return undefined.
Waiting:bob.getFirstName() should return the string Bob.
Waiting:bob.getLastName() should return the string Ross.
Waiting:bob.getFullName() should return the string Bob Ross.
Waiting:bob.getFullName() should return the string Haskell Ross after bob.setFirstName("Haskell").
Waiting:bob.getFullName() should return the string Haskell Curry after bob.setLastName("Curry").
Waiting:bob.getFullName() should return the string Haskell Curry after bob.setFullName("Haskell Curry").
Waiting:bob.getFirstName() should return the string Haskell after bob.setFullName("Haskell Curry").
Waiting:bob.getLastName() should return the string Curry after bob.setFullName("Haskell Curry").
*/







///////////////////////////////////

// 21. Map the Debris

/*
According to Kepler's Third Law, the orbital period  T
  of two point masses orbiting each other in a circular or elliptic orbit is:

T=2πa3μ‾‾‾√
 
a
  is the orbit's semi-major axis
μ=GM
  is the standard gravitational parameter
G
  is the gravitational constant,
M
  is the mass of the more massive body.
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

Tests
Waiting:orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].
Waiting:orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].
*/