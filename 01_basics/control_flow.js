// if statement

//if(condition){
    // condition= true then we will exectue the code here
//}

/*const isuserloggedin=true
const temperature=21
if(temperature<50){
    console.log("less than 50");

}else{
console.log("greater than 50");}
//<,>,<=,>=,==, !=, ===(checks datatype too), !==(also checks datatype)//(comparator operator)

const score=200
if(score>100){
    const power="fly"
    console.log(`user power: ${power}`)
}*/

// var has a global scope thats why we dont use this instead we use let and const


// short hand notation

const balance=1000
//if(balance>500) console.log("okay");//implicit scope

// can also write multiple line code but it is not good practice
//if(balance>500) console.log("okay"), console.log("bye");


// nested if else

/*if(balance<500){
    console.log("less than");


}else if(balance<750){
    console.log("less than");
}
else if(balance<900){
    console.log("less than");
}
else{
    console.log("less than 1200");
}*/

const userloggedin=true
const debitcard=true
const loggedfromgoogle=false
const loggedfromemail=true
if(userloggedin && debitcard){
    console.log("allow to buy courses");
}
if (loggedfromgoogle || loggedfromemail){
    console.log("user logged in");
}

// Switch case

//switch (key) {
    //     case value:
            
    //         break;
    
    //     default:
    //         break;
    // }
    
    const month = "march"
    
    switch (month) {
        case "jan":
            console.log("January");
            break;
        case "feb":
            console.log("feb");
            break;
        case "march":
            console.log("march");
            break;
        case "april":
            console.log("april");
            break;
    
        default:
            console.log("default case match");
            break;
    }
    // agr break ni lga hta march case k baad toh april bhi print hta but default ni hta print


    // truthy and falsy

    const userEmail = []// when we assume there is/ or not a value in the string it is truthy 

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values(agr y sb valyes hgi toh falsy consider hga)

// false, 0, -0, BigInt 0n, "", null, undefined, NaN(not a number)

//truthy values
// "0", 'false', " ", [], {}, function(){} ("", ''-> string)

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")