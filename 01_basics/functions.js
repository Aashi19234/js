// Functions

// syntax

function sayMyname(){
    console.log("Aastha");
}
//sayMyname()// calling function

function addnumbers(number1, number2){// parameters(values passed during function definition )
    console.log(number1+number2);

}
//addnumbers(3,4)//arguments(when function is called then which values are passed that are arguments)
//const result= addnumbers(3,5)
//console.log(result);// output: undefined(we have to return the functon too)

// to avoid this we have another way of printing
function addnumbers(number1, number2){
    //let result=number1+number2(ese bhi kr skte h)
    return number1+number2

    
const result= addnumbers(3,5)
//console.log(result)

//different way of passing arguments and parameters
function loginusermessage(username){
    if(username=== undefined){// also we can write if (!username)
        console.log("Please enter a ussername");
        return 
    }
    return `${username} just logged in`
}
console.log(loginusermessage())
// in order to prevent undefined situation we can provide a default parameter so that even if user doesn't pass any value
// it has that default value

}



//function calculatecartprice( num1){
   // return num1

//}
//console.log(calculatecartprice(200,400,500))// this will print only first number in order to resolve it we have to use rest operator

function calculatecartprice(...num1){// rest operator=...
    return num1
}
//console.log(calculatecartprice(200,400,500))// returns array

/*note: if we have val1 val2 and ...num1 in parameters the the output will be [500] because
200 and 400 are covered in val1 and va2*/


const user ={
    username:"hitesh",
    price:199,
}
//function handleobject(anyobject){
   // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
//}
//handleobject(user)
/*handleobject({
    username:"sam",
    price:399
})*/
const arr=[20,40,50]
//function returnsecvalue(getarray){
    //return getarray[1]
//}
//console.log(returnsecvalue(arr))


