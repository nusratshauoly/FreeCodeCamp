// 9. Finders Keepers
/*
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

Tests
Waiting:findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
Waiting:findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.

*/






// 10. Boo who
/*
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.


Tests
Waiting:booWho(true) should return true.
Waiting:booWho(false) should return true.
Waiting:booWho([1, 2, 3]) should return false.
Waiting:booWho([].slice) should return false.
Waiting:booWho({ "a": 1 }) should return false.
Waiting:booWho(1) should return false.
Waiting:booWho(NaN) should return false.
Waiting:booWho("a") should return false.
Waiting:booWho("true") should return false.
Waiting:booWho("false") should return false.


*/







// 11. Title Case a Sentence
/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.

Tests
Waiting:titleCase("I'm a little tea pot") should return a string.
Waiting:titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.
Waiting:titleCase("sHoRt AnD sToUt") should return the string Short And Stout.
Waiting:titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.

*/






// 12. Slice and Splice
/*
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.


Tests
Waiting:frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
Waiting:frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
Waiting:frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
Waiting:All elements from the first array should be added to the second array in their original order. frankenSplice([1, 2, 3, 4], [], 0) should return [1, 2, 3, 4].
Waiting:The first array should remain the same after the function runs.
Waiting:The second array should remain the same after the function runs.
*/




// 13. Falsy Bouncer
/*
Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

Tests
Waiting:bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
Waiting:bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
Waiting:bouncer([false, null, 0, NaN, undefined, ""]) should return [].
Waiting:bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].
Waiting:You should not mutate arr.
*/






// 14. Where do I Belong
/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

Tests
Waiting:getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
Waiting:getIndexToIns([10, 20, 30, 40, 50], 35) should return a number.
Waiting:getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
Waiting:getIndexToIns([10, 20, 30, 40, 50], 30) should return a number.
Waiting:getIndexToIns([40, 60], 50) should return 1.
Waiting:getIndexToIns([40, 60], 50) should return a number.
Waiting:getIndexToIns([3, 10, 5], 3) should return 0.
Waiting:getIndexToIns([3, 10, 5], 3) should return a number.
Waiting:getIndexToIns([5, 3, 20, 3], 5) should return 2.
Waiting:getIndexToIns([5, 3, 20, 3], 5) should return a number.
Waiting:getIndexToIns([2, 20, 10], 19) should return 2.
Waiting:getIndexToIns([2, 20, 10], 19) should return a number.
Waiting:getIndexToIns([2, 5, 10], 15) should return 3.
Waiting:getIndexToIns([2, 5, 10], 15) should return a number.
Waiting:getIndexToIns([], 1) should return 0.
Waiting:getIndexToIns([], 1) should return a number.

*/







// 15. Mutations
/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

Tests
Waiting:mutation(["hello", "hey"]) should return false.
Waiting:mutation(["hello", "Hello"]) should return true.
Waiting:mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
Waiting:mutation(["Mary", "Army"]) should return true.
Waiting:mutation(["Mary", "Aarmy"]) should return true.
Waiting:mutation(["Alien", "line"]) should return true.
Waiting:mutation(["floor", "for"]) should return true.
Waiting:mutation(["hello", "neo"]) should return false.
Waiting:mutation(["voodoo", "no"]) should return false.
Waiting:mutation(["ate", "date"]) should return false.
Waiting:mutation(["Tiger", "Zebra"]) should return false.
Waiting:mutation(["Noel", "Ole"]) should return true.

*/



// 16. Chunky Monkey
/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


Tests
Waiting:chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
*/


