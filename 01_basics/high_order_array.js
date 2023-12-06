// for of loop(array specifuc loop)

//[{}, {}, {}]-> array of objects

/*const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);

}*/

/*const greetings="hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
    
}*/

// maps(it is an object holding key-value pair and remebers the orginal insertion order of keys)


//const map= new Map()
map.set('IN', "India")
map.set('usa', "united states")
//console.log(map);

// prints only unique items

/*for (const key of map ){
    console.log(key);
    
}*/

// destructruing of array
/*for (const [key, value] of map) {

    console.log(key, ':-', value);
}*/
// for of loop is not applicable for objects
/*const myobj={
    'game1': 'nfs',
    'game2':'hello'
}*/

const myobj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby'
}

// for in loop for objects
/*for (const key in myobj) {
    console.log(key);
    
}

for (const key in myobj) {
    console.log(`${key} is shortcut for ${myobj[key]}`);
}*/

const programming=["js", "cpp", "c"]
for (const key in programming) {
    console.log(programming[key]);
    
}

// in for in loop we cannot access values directly but in for of loop we can access values directly
//const map= new Map()
map.set('IN', "India")
map.set('usa', "united states")

/*for (const key in map) {
    console.log(key);
}*/
// maps not iteretable thruough forof and forin loop


// for each loop

const coding =["js", "ruby", "java"]



