const name="Aastha"
const repoCount=50
//console.log(`My name is ${name} and my repo count is ${repoCount}`);
const gamename=new String('Aasthacool')//another way of declaring strings
console.log(gamename[0]);
console.log(gamename.__proto__);// The prototype of String (String.prototype) is not an empty object. It is an object that contains built-in methods for string manipulation.
//The shorthand String {} in the console is a representation indicating that the object is an instance of String.prototype, not an empty object.
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('s'));

const newString = gamename.substring(0, 4)
console.log(newString);// last index value will not be included

const anotherString = gamename.slice(-8, 4)
console.log(anotherString);

/*
The slice method extracts a section of a string and returns it as a new string, without modifying the original string.
It takes two arguments: start and end.
start: The index at which to begin extraction. If negative, it is treated as str.length + start.
end (optional): The index before which to end extraction. The character at this index will not be included. If omitted,
 extraction continues to the end of the string.

 -8 as the start index:

If gameName is a string of length n, then -8 means n - 8.
This means the extraction starts from the 8th character from the end of the string.
4 as the end index:

This specifies the extraction ends just before the 4th character of the string.
Now, let's combine these:

gameName.slice(-8, 4) means to start the extraction from the 8th character
 from the end and go up to (but not including) the 4th character from the beginning.

 Example for Clarity:
Suppose gameName is "SuperAwesomeGame" (length = 16):

-8 would translate to position 16 - 8 = 8, which points to the character 'e' in "SuperAwesomeGame".
The end index is 4, which points to the character 'r' in "SuperAwesomeGame".
Since the start position 8 (character 'e' from "Awesome") comes after the end position 4 (character 'r' in "Super"),
 the slice operation results in an empty string because the extraction range is invalid.

*/

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))// boolean output

console.log(gamename.split('-'));

/*
The split method in JavaScript is used to split a string into an array of substrings based on a specified separator. The syntax is:

javascript
Copy code
string.split(separator)
separator (required): Specifies the character, or regular expression, to use for splitting the string.
 If an empty string is used as the separator, the string is split between each character.
The method returns an array of strings.

If gameName is "Aasthacool", there are no hyphens:

The string doesn't contain the separator '-', so the entire string is returned as a single element in an array.
Output: ["Aasthacool"]


*/

