// prototype is built-in property which provides various methods.


const newhero=["hulk", "superman"]
// js ka jo default behave h that is prototypal behaviour
// js ko agr ek cheez se result ni milra then it will leep trying by accessing parents or grandparents until it reaches null value


// refer to ss 62


function multiplyby5(num){
    return num*5
}

multiplyby5.power=2
console.log(multiplyby5(5));
console.log(multiplyby5.power);//output-2
console.log(multiplyby5.prototype);// output-{}

// in js, function is an object also along with a function
// prototype of object is null


function createuser(username,score){
    this.username=username
    this.score=score
}
createuser.prototype.increment=function(){
    this.score++
}
createuser.prototype.printme=function(){
    console.log(`score is ${this.score}`);
}


const chai= new createuser("chai", 25)
const tea=createuser("tea", 250)
// ab compiler confuse ho jaega ki kisko increment kre kyuki dono same function use krre h kyuki it doesn't have any context, islie hm this use krenge which means jisne bhi call kia h usko increment krenge
chai.printme()

// bina new keyword lgae y ni chlega kyuki create user m y sb values inject hi ni hui and new keyword se y values inject ho gai


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/



// prototype portion

let heros=["thor", 'spiderman']
let heropower={
    thor: "hammer",
    spiderman:"sling",
    getSpiderpower: function(){
        console.log(`spidy power is ${spiderman}`);
    }
}
// will continue last 18 mins baad mei






