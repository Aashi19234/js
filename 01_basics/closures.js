/*In JavaScript, closures are a fundamental concept. They occur when a function is defined within another function 
and has access to the outer function's scope, even after the outer function has finished executing.

Here's a simple example to illustrate:


function outerFunction() {
  let outerVariable = 'I am from outer function';

  function innerFunction() {
    console.log(outerVariable); // innerFunction has access to outerVariable
  }

  return innerFunction; // Return the inner function
}

let myClosure = outerFunction(); // Call outerFunction and assign the returned innerFunction to myClosure
myClosure(); // Execute myClosure, which still has access to outerVariable
In this example, innerFunction is a closure because it's defined inside outerFunction and has access to outerVariable.
 Even after outerFunction has finished executing and returned, innerFunction retains access to outerVariable.

Closures are powerful because they allow functions to have persistent state. They are commonly used in JavaScript for encapsulation,
 data privacy, and creating modular and reusable code.*/






