// this: it refers to the the current context and it is a keyword

// arrow functions
const user={
    username:"aastha",
    price:999,
    welcomemessage: function(){
       
        console.log(`${this.username}, welcome to website`)
        //console.log(this)
    }


}
/*user.welcomemessage()
user.username="sam"
user.welcomemessage()*/
//console.log(this)// outpit: empty object


// note:  browser k andr jo global object hai that is window object
// note: local k andr global object is empty object(hmare github pr)

/*function tea(){
    let username="aastha"
    console.log(this.username);// undefined
}
tea()*/

// arrow function

const chai = () => {// arrow function
    let username= "aastha"
    console.log(this.username);// undefined
    console.log(this)// output: {}
}
//chai()

 ()=> {}// syntax of arrow function

 /*const addtwo=(num1,num2)=> {
    return num1+num2
 }
 console.log(addtwo(3,4));*/

 const addtwo=(num1,num2)=>  num1+num2// implicit return(not necessary to use return keyword)

    
 
 console.log(addtwo(3,4));

 // implicit return tyoe cannot return objects we have to use explicit return type for this


 

