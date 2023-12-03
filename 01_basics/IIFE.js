// immediately invoked function expresssion

// to prevent the pollution from global scope

(function chai(){// named IIFE
    console.log(`Db Connected`)
}) ();// IIFE syntax

// Note: to prevent pollution from global scope variables we use IIFE.


// syntax through arrow function
((name)=>{// Unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`)
}) ('aastha')


