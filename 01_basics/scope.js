
/*console.log(a)
console.log(b)
console.log(c)*/
//var c=30// global scope
let a=50
{}// this is scope
if(true){// block scope
    let a=10
const b=20
var c=30
//console.log("Inner : ", a)

}
//console.log(a)// it will not print coz undefined
//console.log(b)// not print coz not availabe
//console.log(c)// it will print
// var prefers block scope which is not beneficial

// nested scopes

function one(){
    const username="aastha"

    function two(){
        const website="youtube"
        console.log(username);// function two can access elements of function one
    }
    //console.log(website);// we cannot acees website because its scope is finished in function two
    //two()
}
//one()
// note: agr ham function two ko call ni krenge toh function one bhi execute ni hga kyuki function one ka console.log() hmara function two mei hai

if (true){
    const username="hitesh"
    if (username=="hitesh"){
        const website="youtube"
        //console.log(username+ website);
    }
    //console.log(website)// not print
}
//console.log(username);// not print


console.log(addone(5))
function addone(num){
    return num+1
}

//addtwo(5)//it will give error beacuse we have stored function in variable and it is declared below and we cannot use a variable before its declartion 

const addtwo= function(num){//expression
    return num+2
}

    
    

