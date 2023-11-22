let myYoutubename="aastha.com"
let anothername=myYoutubename
anothername="helloindia"
console.log(myYoutubename)
console.log(anothername)

//in stack we get copy value instead of original reference

let userone= {
    emailid:"aastha123"

    

}
let usertwo=userone
usertwo.emailid="aastha@google"
console.log(userone.emailid)
console.log(usertwo.emailid)

//in heap we get original reference

