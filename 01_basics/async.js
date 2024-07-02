// imp for interview purposes

// async-> asynchrous code
// js is a synchronous language.
// it is a single threaded langauage// these both are default js behaviour
/*
A single-threaded language, in the context of programming, refers to a programming language or runtime environment 
where only one thread of execution is allowed to run at any given time.
 In other words, the code execution follows a single, sequential flow of control.




*/




/*
execution context: execute one line of code at a time
jb tk purana stament execute ni hga tb tk naya ni hga

 */

/*
block code vs non blocking code
1)block code blocks the flow of program
2) it reads file sync which means jb tk file read hri h tb tk koi aur kaam ni hga


1)non blocking code does nt block executiom
2)it reads file async jb tk file read hri h tb tk aur kaam bhi ho skta h

// refer to ss 59 for the diagram




*/

/*

async Function:
The async keyword is used to define a function as asynchronous.
An async function always returns a promise, and the value of the promise will be whatever
 the async function returns, or it will be automatically wrapped in a resolved promise.


 await Operator:
The await keyword can only be used inside an async function.
It pauses the execution of the async function until the promise is resolved, and then it returns the resolved value.
If the promise is rejected, await throws an error, which can be caught using a try...catch block.

*/

/*
An asynchronous function in JavaScript is a function that operates asynchronously, meaning it doesn't necessarily execute in a sequential manner
 like synchronous code.
 Instead, it allows other operations to run while it executes in the background, without blocking the main execution thread



*/