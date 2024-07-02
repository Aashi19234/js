
/*console.log(a)
console.log(b)
console.log(c)*/
//var c=30// global scope
let a=50
{}// this is scope
if(true){// block scope
    let a=10
const b=20
var c=30
//console.log("Inner : ", a)

}
//console.log(a)// it will not print coz undefined
//console.log(b)// not print coz not availabe
//console.log(c)// it will print
// var prefers block scope which is not beneficial

// nested scopes

function one(){
    const username="aastha"

    function two(){
        const website="youtube"
        console.log(username);// function two can access elements of function one
    }
    //console.log(website);// we cannot acees website because its scope is finished in function two
    //two()
}
//one()
// note: agr ham function two ko call ni krenge toh function one bhi execute ni hga kyuki function one ka console.log() hmara function two mei hai

if (true){
    const username="hitesh"
    if (username=="hitesh"){
        const website="youtube"
        //console.log(username+ website);
    }
    //console.log(website)// not print
}
//console.log(username);// not print


console.log(addone(5))
function addone(num){
    return num+1
}

//addtwo(5)//it will give error beacuse we have stored function in variable and it is declared below and we cannot use a variable before its declartion 

const addtwo= function(num){//expression
    return num+2
}

    
    

/*

var Keyword
Characteristics of var:
Function Scope:

Variables declared with var are function-scoped. This means they are available throughout the entire function in which they are declared.
If declared outside of any function, they are globally scoped.
Hoisting:

Variables declared with var are hoisted to the top of their scope. This means that the declaration is moved to the top of the scope, but not
 the initialization, and then they are initialized with undefined.
You can use the variable before it is declared, but its value will be undefined until the declaration is encountered in the code.
Re-declaration:

Variables declared with var can be re-declared within the same scope without any error.
No Block Scope:

var does not have block scope. It means variables declared with var are not confined to the block (e.g., inside an if statement or a loop)
 in which they are declared.
Example:

function example() {
    console.log(x); // undefined (due to hoisting)
    var x = 10;
    if (true) {
        var y = 20;
    }
    console.log(y); // 20 (no block scope)
}

example();
let Keyword
Characteristics of let:
Block Scope:

Variables declared with let are block-scoped. They are only available within the block (delimited by {}) in which they are declared.
No Hoisting (Temporal Dead Zone):

Variables declared with let are hoisted to the top of their block, but they are not initialized. You cannot use the variable before its
 declaration; doing so will result in a ReferenceError.


No Re-declaration:
Variables declared with let cannot be re-declared within the same scope.
Example:

function example() {
    // console.log(a); // ReferenceError: Cannot access 'a' before initialization
    let a = 10;
    if (true) {
        let b = 20;
        console.log(b); // 20 (block scope)
    }
    // console.log(b); // ReferenceError: b is not defined (block scope)
}

example();
Key Differences
Scope:

var is function-scoped.
let is block-scoped.
Hoisting:

var declarations are hoisted and initialized with undefined.
let declarations are hoisted but not initialized (Temporal Dead Zone).
Re-declaration:

var can be re-declared in the same scope.
let cannot be re-declared in the same scope.
Global Object Property:

Variables declared with var in the global scope become properties of the global object (e.g., window in browsers).
Variables declared with let do not become properties of the global object.
Example Demonstrating Differences:
javascript
Copy code
// Global scope example
var x = 'global';
let y = 'global';

function testScope() {
    console.log(x); // undefined (hoisting)
    console.log(y); // ReferenceError: Cannot access 'y' before initialization
    var x = 'local';
    let y = 'local';
    console.log(x); // local
    console.log(y); // local
}

testScope();

console.log(window.x); // global (var attaches to global object)
console.log(window.y); // undefined (let does not attach to global object)
Conclusion
While both var and let can be used to declare variables in JavaScript, let provides better control over the scope and behavior of variables, 
especially within block-level constructs like loops and conditionals. Using let helps to avoid issues related to hoisting and scope that
 can arise with var.














*/

/*
The let keyword is preferred over var because:

Block Scope: let is block-scoped, meaning it is only accessible within the block it is defined in, which reduces the risk of
 unintended variable access and makes the code easier to understand and maintain.

No Hoisting Initialization: While both var and let are hoisted, let does not initialize to undefined.
 Accessing a let variable before its declaration results in a ReferenceError, which helps prevent bugs related to uninitialized variables.



*/