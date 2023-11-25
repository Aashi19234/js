const myArr=[1,4,56,7]
//console.log(myArr);
myArr.push(6)
//console.log(myArr)
myArr.pop()
//console.log(myArr)
myArr.unshift(9)
//console.log(myArr)
myArr.shift()
//console.log(myArr)
//console.log(myArr.includes(4))//boolean response
//console.log(myArr.indexOf(7))
const newArr=myArr.join()
//console.log("A ",myArr)
const myn1=myArr.slice(1,3)
//console.log(myn1)
const myn2=myArr.splice(1,3)
//console.log(myn2)
//console.log("B ",myArr)
const subs=["maths","physics","english","science"]
const marks=[10,20,40,60]
//subs.push(marks)
//console.log(subs);
//const result =subs.concat(marks)// to join two arrays
//console.log(result);
// spread operation to join two or more strings
//const result=[...subs,...marks]
//console.log(result)
const another_arr=[1,2,3,[14,56,[67,78]]]
const result=another_arr.flat(Infinity)
//console.log(result);
console.log(Array.isArray("Hello"))// check if its array or not
console.log(Array.from("Hello"))//coverts into array
console.log(Array.from({name:"Aastha"}))//will return empty array
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));



