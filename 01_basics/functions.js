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

}
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


