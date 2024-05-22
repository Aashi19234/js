let myDate=new Date()
console.log(myDate);
/*The line of code let myDate = new Date(); in JavaScript creates a new Date object and assigns it to the variable myDate.

Explanation
Date Object:

In JavaScript, the Date object represents a specific point in time. It allows you to work with dates and times.
Creating a New Date Object:

new Date() creates a new instance of the Date object.
When called without any arguments, it represents the current date and time according to the system
 clock on the computer where the code is executed.*/



console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
//console.log(typeof myDate)
let myCreatedDate=new Date(2023,0,23)
//console.log(myCreatedDate.toDateString());
let otherDate= new Date("2023-02-15")
//console.log(otherDate.toDateString());
/*let myTimeStamp= Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));*/
console.log(otherDate.toLocaleString('default',{
    weekday:"long"
}))

