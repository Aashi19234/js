let name="Aastha"
let age=20
let isprime=true
console.table([typeof "Aastha", typeof age, typeof true, typeof null, typeof undefined])

//console.log([]===[]);// it will return false,bcoz js compare object by references not by value.

let arr=[1,2,3];
console.log(typeof arr);
// typeof arr is object

/*
JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

*/

/*
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"


*/

/*
Primitive Data
A primitive data value is a single simple data value with no additional properties and methods.

The typeof operator can return one of these primitive types:

string
number
boolean
undefined

*/

/*
Complex Data
The typeof operator can return one of two complex types:

function
object
The typeof operator returns "object" for objects, arrays, and null.

The typeof operator does not return "object" for functions.


*/

/*
 Difference Between Undefined and Null
undefined and null are equal in value but different in type:

typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true
*/


/*
The instanceof Operator
The instanceof operator returns true if an object is an instance of the specified object:

Example
const cars = ["Saab", "Volvo", "BMW"];

(cars instanceof Array);// true
(cars instanceof Object);//true
(cars instanceof String);//false
(cars instanceof Number);// false



*/

/*
The void Operator
The void operator evaluates an expression and returns undefined.
*/

/*
NaN stands for "Not a Number". It is a special numeric value that represents an undefined or unrepresentable value.
 In JavaScript, NaN is a property of the Number object, which is why typeof NaN returns "number".
NaN is used to represent the result of operations that have an undefined numerical result, such as dividing by zero or 
taking the square root of a negative number. It is also used to represent missing or invalid data.
NaN is not equal to any other value, including itself. This means that NaN is not equal to, greater than, or less 
than anything, including itself. For example, NaN < 1 returns false.
*/