const score=100
//console.log(score);
const balance = new Number(200)
console.log(balance);

/*
Creating a Number Object:

new Number(200) creates a new Number object.
In JavaScript, Number is a wrapper object that can hold a numeric value.
When you use new Number(200), it does not create a primitive number but an instance of the Number object.
Number objects are instances of the Number class and have properties and methods.

When you execute the code, the console output will be:

[Number: 200]
This indicates that balance is an instance of the Number object with the value 200
*/
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));
const othernum=30.7689
console.log(othernum.toPrecision(3));
const hundreds=1000000
console.log(hundreds.toLocaleString());// by default US format
console.log(hundreds.toLocaleString('en-IN'));//changed to indian format
console.log(Math);
console.log(Math.abs(-5))
console.log(Math.round(5.8))
console.log(Math.ceil(8.6))
console.log(Math.min(9,8,5,10,34))
console.log(Math.random())// value btw 0 and 1, 0 will be inclusive and 1 will be exclusive
console.log((Math.random()*10)+1)//to avoid 0
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)


