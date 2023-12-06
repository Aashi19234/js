//const coding=["js", "ruby","cpp"]

/*const values= coding.forEach( (item)=>{
    console.log(item);
})
console.log(values);*/

// foreach loop does not return anything it shows undefined


//const nums=[1,2,3,4,5,6]

//const newnums=nums.filter( (val)=>val>4)// it returns value
    


//console.log(newnums);

// filter has a call back function and we need to provode a condition and whichever element satisfies that condition that we have to print

/*const newnums=nums.filter((val)=>{
    return val>4// agr hm return ni krenge toh empty array aaefa output m bcoz scope start ho gya h curly braces lgake
})*/


/*const newnums=[]
nums.forEach( (val)=>{
    if(val>4){
        newnums.push(val)
    }
})
console.log(newnums);*/


//Exercise
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //const userbooks=books.filter((bk)=>bk.genre==='History')

  //const userbooks=books.filter( (bk)=> { return bk.publish>=2000})

  //const userbooks= books.filter((bk)=>bk.publish>=1995&&bk.genre==='Science')
  //console.log(userbooks);


// convept continue
// maps function
const nums=[1,2,3,4,5,6,6,7]

//const newnums= nums.map( (val)=> val+10)// map automatcally returns value
//console.log(newnums);

// chaining
//const newnums=nums.map( (val)=> val*10)
//. map( (val)=> val+1)
//.filter( (val)=> val>=20)
//console.log(newnums);

// REDUCE
// it executes a user-supplied "reducer"
// call back function
// we get accumulator and current value
// accumulator is empty variable

const mynums=[1,2,3]
const total= mynums.reduce( function(acc,currval){
    //console.log(`acc value : ${acc} and currvalue : ${currval}`);
    //return acc+currval
}, 0)// , k baad jo value denge vo  initial val of accumulator
//console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);