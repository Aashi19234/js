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
/*console.log(name["value"])// way of accessing objects
console.log(name[mysym])
name.email="aastha12@google.com"//email is changed
Object.freeze(name)// values cannot be changed
name.email="aastha12@hotmail.com"
console.log(name);*/
/*name.greeting=function(){
    console.log("Hello js user")
}
console.log(name.greeting());*/
/*name.greetingtwo=function(){
    console.log(`Hello Js user, ${this.value}`);//this pointer is used to access  properties inside the object
}*/
//console.log(name.greetingtwo());

//object through constructor

//const tinderuser=new Object()
const tinderuser ={}// another way of declaring object
tinderuser.id="12345ab"
tinderuser.name="rohan"
tinderuser.age=20
//console.log(tinderuser);

const regularuser={
    email:"hello@google.com",
    fullname:{
        userfullname:{//nesting of objects
            firstname:"aastha",
            lastname:"jain",
        }
    }
}
//console.log(regularuser.fullname);

//optional chaining
console.log(regularuser.fullname?.userfullname.firstname);//if we have to check whether a certain property is present or not

//merging of objects
const obj1={1: "a", 2:"b"}
const obj2={3:"c", 4:"d"}
//const obj3=Object.assign(obj1,obj2)
//onsole.log(obj3);
// another way of merging
//const obj3=Object.assign({},obj1,obj2)// ensures guaranteed result
//console.log(obj3);


// using spread operator to merge objects
const obj3={...obj1,...obj2}
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
//console.log(users[1].email);

/*console.log(tinderuser);
console.log(Object.keys(tinderuser));//keys has the datatype array which can be worked on loops
console.log(Object.values(tinderuser));//array datatype
console.log(Object.entries(tinderuser));// it is nested array
console.log(tinderuser.hasOwnProperty('age'));*///returns boolean output









