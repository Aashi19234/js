// promise object represents the eventual completion or failure of an asynchronous operation and its resulting value.
// mtlb haath k haath kaam ni hga but eventually hga
// example: file system, cryptography
// three states of promises
//1) pending 2) fulfilled 3)rejected
// mostly we consume promises


/*const promiseone = new Promise(function (resolve,reject){
    // Do an asynch task
    // Database cslls, cryptography,network calls
    setTimeout(function (){
        console.log("Task is complete");
        resolve()// resolve connect ho gya .then se ab promise consumed bhi print hga but task is completed k baad
    }, 1000)
})// promise created

promiseone.then(function(){
    console.log("Promise consumed");
})// relation with resolve

// ab bina variable m store kie

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("task done");
        resolve()

    }, 1000)
}).then(()=>{
    console.log("task resolved");
})*/

/*const promiseThree = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"aaastha", email:"hello@example"})

    },1000)
})
promiseThree.then((user)=>{
    console.log(user);// isme hmne jo resolve m values pass ki h vo print hngi
})

const promisefour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true// isko false krenge toh hmara username print ho jaega kyuki resolve hmne uss condition m dia h
        if(!error){
            resolve({username:"Aastha",password: "123" })

        }
        else{
            reject('ERROR')

        }
    }, 1000)

})
promisefour.then((user)=>{
    console.log(user);
    return user.username
    //in order to access values of object we have to do chaining of .then

}).then((username)=>{// jo value hmare first . then se return hri h vo hm second.then m as an argument denge

    console.log(username);
}).catch((error)=>{// catch bhi use krna pdega vrna error aa jaega
    console.log(error);

}).finally(()=>{
    console.log("The promise is either resolved or rejected");
    // finally btata h ki hmara kaam complete hua ya ni and y hr case m work krta h
   
    // it provides a way to run the final code whether the promise is resolved or rejected
})*/

const promisefive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true
        if(!error){
            resolve({username : "javascript" , password:"1234"})
        }
        else{
            reject("ERROR")
        }
    },1000)
})

// async await works same as .then,.catch
// async await directly errors ko handle ni kr skte isko hme try-catch m wrap krna pdega
async function consumePromisefive(){
    try{
     const response = await promisefive
     console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromisefive()

async function getAllusers(){
    try{

    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    const data=response.json()
    console.log(data);
    } catch(error){
        console.log("E: ", error);
        
        
    }
}
getAllusers()

