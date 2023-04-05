// 1. Convert Celsius to Fahrenheit
/*
The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.

Tests
Waiting:convertCtoF(0) should return a number
Waiting:convertCtoF(-30) should return a value of -22
Waiting:convertCtoF(-10) should return a value of 14
Waiting:convertCtoF(0) should return a value of 32
Waiting:convertCtoF(20) should return a value of 68
Waiting:convertCtoF(30) should return a value of 86
*/





// 2. Reverse a String

/*
Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh".

Tests
Waiting:reverseString("hello") should return a string.
Waiting:reverseString("hello") should return the string olleh.
Waiting:reverseString("Howdy") should return the string ydwoH.
Waiting:reverseString("Greetings from Earth") should return the string htraE morf sgniteerG.
*/






// 3. Factorialize a Number
/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.

Tests
Waiting:factorialize(5) should return a number.
Waiting:factorialize(5) should return 120.
Waiting:factorialize(10) should return 3628800.
Waiting:factorialize(20) should return 2432902008176640000.
Waiting:factorialize(0) should return 1.
*/





// 4. Find the Longest Word in a String
/*
Return the length of the longest word in the provided sentence.

Your response should be a number.

Tests
Waiting:findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
Waiting:findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
Waiting:findLongestWordLength("May the force be with you") should return 5.
Waiting:findLongestWordLength("Google do a barrel roll") should return 6.
Waiting:findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
Waiting:findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.

*/



// 5. Return Largest Numbers in Arrays
/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Tests
Waiting:largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
Waiting:largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].
Waiting:largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
Waiting:largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) should return [25, 48, 21, -3].
*/







// 6. Confirm the Ending
/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Tests
Waiting:confirmEnding("Bastian", "n") should return true.
Waiting:confirmEnding("Congratulation", "on") should return true.
Waiting:confirmEnding("Connor", "n") should return false.
Waiting:confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
Waiting:confirmEnding("He has to give me a new name", "name") should return true.
Waiting:confirmEnding("Open sesame", "same") should return true.
Waiting:confirmEnding("Open sesame", "sage") should return false.
Waiting:confirmEnding("Open sesame", "game") should return false.
Waiting:confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
Waiting:confirmEnding("Abstraction", "action") should return true.
Waiting:Your code should not use the built-in method .endsWith() to solve the challenge.

*/






// 7. Repeat a String Repeat a String
/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

Tests
Waiting:repeatStringNumTimes("*", 3) should return the string ***.
Waiting:repeatStringNumTimes("abc", 3) should return the string abcabcabc.
Waiting:repeatStringNumTimes("abc", 4) should return the string abcabcabcabc.
Waiting:repeatStringNumTimes("abc", 1) should return the string abc.
Waiting:repeatStringNumTimes("*", 8) should return the string ********.
Waiting:repeatStringNumTimes("abc", -2) should return an empty string ("").
Waiting:The built-in repeat() method should not be used.
Waiting:repeatStringNumTimes("abc", 0) should return "".

*/






// 8. Truncate a String
/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Tests
Waiting:truncateString("A-tisket a-tasket A green and yellow basket", 8) should return the string A-tisket....
Waiting:truncateString("Peter Piper picked a peck of pickled peppers", 11) should return the string Peter Piper....
Waiting:truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return the string A-tisket a-tasket A green and yellow basket.
Waiting:truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return the string A-tisket a-tasket A green and yellow basket.
Waiting:truncateString("A-", 1) should return the string A....
Waiting:truncateString("Absolutely Longer", 2) should return the string Ab....

*/








