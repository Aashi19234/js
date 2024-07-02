// Context are of type : 
// Global Execution Context :  stored in this
// Function Execution Context
// Eval Execution Context

// Javascript code is run in two phases : 

// Memory creation phase (or called creation phase) : in this phase only memory is allocated to the variables functions
// Execution phase : Code is executed in this ohase
//                For every time the code is execute, a context is created, which consist of : 
// 		New Variable Enviorment
//                 Execution Thread
// 	 It returns the variable to the parent context, ie. global execution context, and then it is delete to free up the memory

// refer to screenshot number 57 58


/*
JavaScript Execution Overview
Call Stack:
The call stack keeps track of function calls.
When a function is called, it goes on the top of the stack.
When the function finishes, it is removed from the stack.

Heap:
The heap is where JavaScript stores objects and data that needs dynamic memory allocation.

Event Loop:
The event loop continuously checks the call stack and the message queue.
If the call stack is empty, it takes the first message from the message queue and pushes its callback onto the call stack to be executed.

Message Queue:
The message queue holds messages (like event callbacks) waiting to be processed.

Web APIs:
Web APIs are provided by the browser (or Node.js) for things like setTimeout, fetch, etc.
These APIs handle asynchronous operations and, once complete, put their callbacks in the message queue.
Example with Code

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 1000);

console.log("End");
Execution Flow:

console.log("Start") runs and prints "Start".
setTimeout is called, and its callback is scheduled.
console.log("End") runs and prints "End".
After 1 second, setTimeout callback moves to the message queue.
When the call stack is empty, the event loop pushes the callback to the call stack.
The callback runs and prints "Timeout".
Summary
JavaScript runs functions using the call stack.
It handles asynchronous operations using the event loop and message queue.
Web APIs manage async tasks and their callbacks go into the message queue once they're done.














*/