// javascript doesn't contain classes technically . classes feature in js was intoduced with ECMAScript 2015. js  is a prototype based language . 
 

// Object Oriented programming- it is a programming paradigm, which means what structure we have of writing code

// Object:
//1) collection of properites and methods(functions and variables)

// why use oop?
// we can use better features of js

// parts of oop
// 1) Object literal: agr m object bolra hu toh object hi lere h
// 2)  constructor function
// 3) prototypes
// 4) classes
// 5) instances(new,this)

// 4 pillars
// 1. abstraction 2. encapsulation 3. inheritance 4. polymorphism


// object literal(normal object)

const user={
    username:"aastha",
    logincount:8,
    signedin:true,

    getUserDetails: function(){
       // console.log("got user details from database");
       console.log(`Username : ${this.username}`);
       console.log(this);
    } 


}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);// empty paranthesis aaaega output m({})

// this -> keyword to specify ki hm kis variable ki bat krre ya kis function ki baat krre h
// this-> it means hm current context ki baaat krre h



// constructor function

//const promiseone = new Promise() // new-> constructor function
//const date= new Date() 


function userone(username,logincount,isloggedin){
    this.username=username;
    this.logincount=logincount;
    this.isloggedin=isloggedin;

    this.greeting= function(){
        console.log(`Welcome ${this.username}`);
    }
    return this

}

const usertwo=new userone("hitesh", 8, "yes")
const userthree=new userone("aastha", 11, true)// values overwrite ho jaegi in order to avoid this we will use new keyword
console.log(usertwo);
console.log(userthree);
console.log(usertwo.constructor);// output- function:userone// it is a refernce

// jb hm new keyword use krenge toh empty object create hga jisse instance kehte h
//2) then ek constructor function call hta h which pacls all the arguments
// 3) then this keyword mei inject ho jata h







