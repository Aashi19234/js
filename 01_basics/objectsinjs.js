// how can we change value of math.pi that is 3.14 domething somthing to 3 or 4
//no we cannot change value of pi as it its writable and enumerable and configurable  value is false and it cannot be changed to true becasue it is very in-detail and hard-coded false in cpp 
const descriptor= Object.getOwnPropertyDescriptor(Math, "PI")

//console.log(descriptor);
//console.log(Math.PI);
const chai={
    name:'ginger chai',
    price:250,
    isavailable: true

}
//console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
//Object.defineProperty(chai, 'name', {
   // writable:false,
    //enumerable:false

//})
//console.log(Object.getOwnPropertyDescriptor(chai,"name"));
for(let [key,value] of Object.entries(chai)){
    console.log(`${key}: ${value}`);

}