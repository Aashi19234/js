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

IIFE allows for the creation of private variables and functions within its scope. These variables and functions cannot be accessed or modified from outside the IIFE, providing a level of privacy and data protection.
 */

// syntax through arrow function
((name)=>{// Unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`)
}) ('aastha')


