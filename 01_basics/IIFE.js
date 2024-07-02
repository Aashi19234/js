// immediately invoked function expresssion

// to prevent the pollution from global scope

(function chai(){// named IIFE
    console.log(`Db Connected`)
}) ();// IIFE syntax

// Note: to prevent pollution from global scope variables we use IIFE.
//IIFE can be used to avoid polluting the global namespace
//, to create private variables and functions, and to execute code immediately.
/*
Preserving Variable Privacy:

IIFE allows for the creation of private variables and functions within its scope. These variables and functions cannot be
 accessed or modified from outside the IIFE, providing a level of privacy and data protection.
 */

// syntax through arrow function
((name)=>{// Unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`)
}) ('aastha')

/*
An IIFE (Immediately Invoked Function Expression) is a JavaScript function that is defined and executed immediately after it is created.
 The main purpose of using an IIFE is to create a new scope,
 which helps avoid polluting the global namespace and can help manage private variables and functions.

 Encapsulation and Data Privacy:

IIFEs allow you to create private variables and functions, which are not exposed to the global scope.

const result = (function() {
    let counter = 0;
    return {
        increment: function() {
            counter++;
            console.log(counter);
        },
        reset: function() {
            counter = 0;
            console.log(counter);
        }
    };
})();

result.increment(); // 1
result.increment(); // 2
result.reset();     // 0
// console.log(counter); // ReferenceError: counter is not defined



*/

