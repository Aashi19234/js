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





