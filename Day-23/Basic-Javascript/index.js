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


*/
// 101. nesting for loops

// 102. iterate with javascript do... while loops

// 103. replace loops using recursion

// 104. profile lookup

// 105. generate random fractions with javascript

// 106. generate random whole numbers with javascript

// 107. generate random whole numbers within a range

// 108. use the parseInt Function

// 109. use the parseInt function with a radix

// 110. use the conditional ( ternary) operator

// 111. use multiple conditional (ternary) operators

// 112. use recursion to create a countdown

// 113. use recursion to create a range of numbers
