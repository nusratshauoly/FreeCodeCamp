// 1. Sum All Numbers in a Range

/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

Tests
Waiting:sumAll([1, 4]) should return a number.
Waiting:sumAll([1, 4]) should return 10.
Waiting:sumAll([4, 1]) should return 10.
Waiting:sumAll([5, 10]) should return 45.
Waiting:sumAll([10, 5]) should return 45.
*/



/////////////////////////////////////

// 2. Diff Two Arrays

/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.

Tests
Waiting:diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
Waiting:["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
Waiting:["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item.
Waiting:["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
Waiting:["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with two items.
Waiting:["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
Waiting:["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return an empty array.
Waiting:[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
Waiting:[1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item.
Waiting:[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
Waiting:[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return an array with two items.
Waiting:[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
Waiting:[], ["snuffleupagus", "cookie monster", "elmo"] should return an array with three items.
Waiting:[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
Waiting:[1, "calf", 3, "piglet"], [7, "filly"] should return an array with six items.
*/






////////////////////////////////////

// 3. Seek and Destroy
/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.

Tests
Waiting:destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
Waiting:destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
Waiting:destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
Waiting:destroyer([2, 3, 2, 3], 2, 3) should return [].
Waiting:destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
Waiting:destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].
*/








/////////////////////////////////////

// 4. Wherefore art thou

/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

Tests
Waiting:whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].
Waiting:whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
Waiting:whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
Waiting:whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
Waiting:whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
Waiting:whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) should return []
Waiting:whatIsInAName([{"a": 1, "b": 2, "c": 3, "d": 9999}], {"a": 1, "b": 9999, "c": 3}) should return []
*/






/////////////////////////////////////

// 5. Spinal Tap Case
/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Tests
Waiting:spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.
Waiting:spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.
Waiting:spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.
Waiting:spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.
Waiting:spinalCase("AllThe-small Things") should return the string all-the-small-things.
*/





////////////////////////////////////

// 6. Pig Latin
/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

Tests
Waiting:translatePigLatin("california") should return the string aliforniacay.
Waiting:translatePigLatin("paragraphs") should return the string aragraphspay.
Waiting:translatePigLatin("glove") should return the string oveglay.
Waiting:translatePigLatin("algorithm") should return the string algorithmway.
Waiting:translatePigLatin("eight") should return the string eightway.
Waiting:Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway.
Waiting:Should handle words without vowels. translatePigLatin("rhythm") should return the string rhythmay.
*/





///////////////////////////////////

// 7. Search and Replace

/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

Tests
Waiting:myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.
Waiting:myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch.
Waiting:myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there.
Waiting:myReplace("This has a spellngi error", "spellngi", "spelling") should return the string This has a spelling error.
Waiting:myReplace("His name is Tom", "Tom", "john") should return the string His name is John.
Waiting:myReplace("Let us get back to more Coding", "Coding", "algorithms") should return the string Let us get back to more Algorithms.

*/








////////////////////////////////////

// 8. DNA Pairing

/*
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Tests
Waiting:pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
Waiting:pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
Waiting:pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

*/






/////////////////////////////////

// 9. Missing letters

/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Tests
Waiting:fearNotLetter("abce") should return the string d.
Waiting:fearNotLetter("abcdefghjklmno") should return the string i.
Waiting:fearNotLetter("stvwx") should return the string u.
Waiting:fearNotLetter("bcdf") should return the string e.
Waiting:fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/





///////////////////////////////////

// 10. Sorted Union

/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

Tests
Waiting:uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
Waiting:uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
Waiting:uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
Waiting:uniteUnique([1, 3, 2], [5, 4], [5, 6]) should return [1, 3, 2, 5, 4, 6].
Waiting:uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
*/





/////////////////////////////

// 11. Convert HTML Entities

/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Tests
Waiting:convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.
Waiting:convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.
Waiting:convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.
Waiting:convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.
Waiting:convertHTML("Schindler's List") should return the string Schindler&apos;s List.
Waiting:convertHTML("<>") should return the string &lt;&gt;.
Waiting:convertHTML("abc") should return the string abc.
*/






