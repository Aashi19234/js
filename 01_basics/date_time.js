let myDate=new Date()
/*console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());*/
//console.log(typeof myDate)
let myCreatedDate=new Date(2023,0,23)
//console.log(myCreatedDate.toDateString());
let otherDate= new Date("2023-02-15")
//console.log(otherDate.toDateString());
/*let myTimeStamp= Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));*/
console.log(otherDate.toLocaleString('default',{
    weekday:"long"
}))

