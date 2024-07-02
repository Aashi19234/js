// singleton-when obj is made from constructor

//object literal:way to declare object
//constructor method: Object.create
const mysym=Symbol("key1")
const name={
    value:"Aastha",// value by default is treated as string
    age:18,
    location:"delhi",
    email:"aastha@google.com",
    [mysym]:"mykey1"

}
console.log(name["value"])// way of accessing objects
console.log(name[mysym])
name.email="aastha12@google.com"//email is changed
//Object.freeze(name)// values cannot be changed
name.email="aastha12@hotmail.com"
//console.log(name);
name.greeting=function(){
    console.log("Hello js user")
};
console.log(name.greeting());
/*
it will print hello js user and undefined bcoz the function is not returning anything.
*/


name.greetingtwo=function(){
    console.log(`Hello Js user, ${this.value}`);//this pointer is used to access  properties inside the object
}
console.log(name.greetingtwo());

//object through constructor
/*
Define the Constructor Function:
javascript
Copy code
function Person(name, age, location, email) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.email = email;
    
    // Adding a method to the object
    this.greeting = function() {
        console.log("Hello, my name is " + this.name);
    };
}
this refers to the new object being created.
Properties name, age, location, and email are assigned using the parameters passed to the constructor function.
The greeting method is defined directly within the constructor.
2. Instantiate Objects:

const person1 = new Person("Aastha", 18, "Delhi", "aastha@google.com");
const person2 = new Person("John", 25, "New York", "john@example.com");
person1 and person2 are new instances of the Person object.
The new keyword creates a new object, sets the prototype of that object to Person.prototype,
 binds this to the new object, and returns the new object.
3. Using the Objects:

console.log(person1.name); // Output: Aastha
console.log(person1.age); // Output: 18
console.log(person1.location); // Output: Delhi
console.log(person1.email); // Output: aastha@google.com
person1.greeting(); // Output: Hello, my name is Aastha

console.log(person2.name); // Output: John
console.log(person2.age); // Output: 25
console.log(person2.location); // Output: New York
console.log(person2.email); // Output: john@example.com
person2.greeting(); // Output: Hello, my name is John






*/



const tinderuser=new Object()
//const tinderuser ={}// another way of declaring object
tinderuser.id="12345ab"
tinderuser.name="rohan"
tinderuser.age=20
console.log(tinderuser);

const regularuser={
    email:"hello@google.com",
    fullname:{
        userfullname:{//nesting of objects
            firstname:"aastha",
            lastname:"jain",
        }
    }
}
console.log(regularuser.fullname);

//optional chaining
console.log(regularuser.fullname?.userfullname.firstname);//if we have to check whether a certain property is present or not

/*
Optional Chaining (?.):

The optional chaining operator (?.) allows you to safely access deeply nested properties of an object without
 having to check if each property in the chain exists.
If any part of the chain is null or undefined, the expression short-circuits and returns undefined instead of throwing an error.
Context:

regularuser is assumed to be an object.
fullname is a property of the regularuser object.
userfullname is a property of the fullname object.
firstname is a property of the userfullname object.
How it Works:

The expression regularuser.fullname?.userfullname.firstname will:
Check if regularuser.fullname exists (i.e., it is not null or undefined).
If regularuser.fullname exists, it will proceed to access userfullname.
If regularuser.fullname does not exist, the whole expression evaluates to undefined.
If regularuser.fullname exists, it will then check if regularuser.fullname.userfullname exists.
If regularuser.fullname.userfullname exists, it will access firstname.
If regularuser.fullname.userfullname does not exist, the expression evaluates to undefined.
Finally, if all properties exist, it will access and return firstname.






*/





//merging of objects
const obj1={1: "a", 2:"b"}
const obj2={3:"c", 4:"d"}
//const obj3=Object.assign(obj1,obj2)
//console.log(obj3);
// another way of merging
const obj3=Object.assign({},obj1,obj2)// ensures guaranteed result
console.log(obj3);

/*
Object.assign Method:

Object.assign(target, ...sources) is a method used to copy the values of all enumerable own properties
 from one or more source objects to a target object.
It returns the target object.
Creating a New Object with {}:

{} creates an empty object literal. This is the target object in Object.assign.
By passing {} as the first argument, you're specifying that you want to copy properties into this new empty object,
 effectively merging the source objects into a new object.
Merging obj1 and obj2:

Object.assign({}, obj1, obj2) copies all properties from obj1 and obj2 into the new empty object {}.
The result is a new object that contains all properties from both obj1 and obj2.

Benefits of Using {}
Avoids Mutating Source Objects: By using {} as the target, you create a new object instead of modifying obj1 or obj2. 
This ensures that obj1 and obj2 remain unchanged.
Combines Properties: It combines properties from both objects into a single new object. If there are properties with the
 same name in obj1 and obj2,
 the properties from obj2 will overwrite those in obj1.




*/


// using spread operator to merge objects
//const obj3={...obj1,...obj2}
//console.log(obj3);

const users=[
    {
        id:1,
        email:"12@gmail.com"

    },
    {
        id:1,
        email:"12@gmail.com"

    },
    {
        id:1,
        email:"12@gmail.com"

    },
]
console.log(users[1].email);

console.log(tinderuser);
console.log(Object.keys(tinderuser));//keys has the datatype array which can be worked on loops
console.log(Object.values(tinderuser));//array datatype
console.log(Object.entries(tinderuser));// it is nested array

console.log(tinderuser.hasOwnProperty('age'));//returns boolean output









