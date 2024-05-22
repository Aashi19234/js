const myArr=[1,4,56,7]
//console.log(myArr);
myArr.push(6)
//console.log(myArr)
myArr.pop()
//console.log(myArr)
myArr.unshift(9)// element will be pushed from front
console.log(myArr)
myArr.shift()
console.log(myArr)// element will be popped from front
//console.log(myArr.includes(4))//boolean response
console.log(myArr.indexOf(7))
const newArr=myArr.join()
/*
myArr.join() is a method that concatenates all the elements of the array myArr into a single string, with each
 element separated by commas (the default separator).
For example, if myArr is [1, 2, 3], then myArr.join() will return the string "1,2,3".
newArr = myArr.join(); results in newArr being "1,2,3".
console.log("A ", myArr); will output A [1, 2, 3] to the console.

*/


console.log("A ",myArr)

const myn1=myArr.slice(1,3)// it will return a portion of the given array and the end index will not be included, in this case 3.
console.log(myn1)
const myn2=myArr.splice(1,3)// it will return a portion of the given array, and end ndex will be included.
console.log(myn2)
/*
slice: original array doesnt get manipulated.
splice: original array gets manipulated.



*/
console.log("B ",myArr)
const subs=["maths","physics","english","science"]
const marks=[10,20,40,60]
//subs.push(marks)
//console.log(subs);
//const result =subs.concat(marks)// to join two arrays
//console.log(result);
// spread operation to join two or more strings
//const result=[...subs,...marks]
/*
Spread Operator (...):

The spread operator (...) is used to spread out the elements of an iterable (like an array) into individual elements.
In the context of arrays, the spread operator allows you to take all elements of an array and insert them into another array.
Combining Arrays:

const result = [...subs, ...marks]; creates a new array result that combines the elements of the arrays subs and marks.
The expression ...subs spreads out all elements of the subs array.
Similarly, ...marks spreads out all elements of the marks array.
These elements are then combined into a single array result.

*/
//console.log(result)
const another_arr=[1,2,3,[14,56,[67,78]]]
const result=another_arr.flat(Infinity)
console.log(result);
/*
flat() method: it flattens the nested array into a single level array.
-> depth is provided to specify how deep the flattening should be.
-> by default depth is 1.
-> infinity depth means completely flattening the array.



*/


console.log(Array.isArray("Hello"))// check if its array or not
console.log(Array.from("Hello"))//coverts into array
console.log(Array.from({name:"Aastha"}))//will return empty array

/*
The code console.log(Array.from({name: "Aastha"})) returns an empty array because Array.from expects an iterable 
or array-like object as its argument. Let's break this down further:

Array.from()
Array.from() is a static method that creates a new, shallow-copied Array instance from an iterable or array-like object.
 Here are the types of inputs Array.from() can work with:

Iterable Objects: Objects that can be iterated over, such as arrays, strings, sets, and maps.
Array-like Objects: Objects with a length property and indexed elements, like arguments objects or
 objects with numerical keys and a length property.
The Object {name: "Aastha"}
The object {name: "Aastha"} is neither iterable nor array-like. Specifically:

It does not have a length property.
It does not have indexed elements.
It is not iterable (you can't use a for...of loop on it).
Example:

console.log(Array.from({ name: "Aastha" }));
Why it Returns an Empty Array
When Array.from is called on { name: "Aastha" }, it checks whether the object is iterable or array-like.
 Since the object does not meet either condition, Array.from cannot extract any elements from it. Consequently, it returns an empty array.

Correct Usage of Array.from
To use Array.from, you need to provide an iterable or array-like object. Here are some examples:

From an array-like object:

const arrayLike = { 0: "a", 1: "b", length: 2 };
console.log(Array.from(arrayLike)); // Output: ["a", "b"]
From an iterable object:

const set = new Set(["a", "b", "c"]);
console.log(Array.from(set)); // Output: ["a", "b", "c"]
From a string (iterable):

const str = "Aastha";
console.log(Array.from(str)); // Output: ["A", "a", "s", "t", "h", "a"]




*/





let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));



