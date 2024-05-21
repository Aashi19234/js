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

/*
In JavaScript, objects are reference types, meaning that when you assign an object to a variable,
 you're assigning a reference to the object, not a copy of the object itself. 

Code Breakdown
javascript

let userone = {
    emailid: "aastha123"
};

let usertwo = userone;
usertwo.emailid = "aastha@google";

console.log(userone.emailid);
console.log(usertwo.emailid);
Object Creation:

javascript

let userone = {
    emailid: "aastha123"
};
This line creates an object with a property emailid set to "aastha123" and assigns it to the variable userone.
Reference Assignment:

javascript

let usertwo = userone;
Here, usertwo is assigned the same reference that userone holds. This means both userone and usertwo are pointing to the same object in memory.
Modifying the Object via usertwo:

javascript

usertwo.emailid = "aastha@google";
This line changes the emailid property of the object that both userone and usertwo reference. Since there is only one object in memory, the change is reflected in both variables.
Output:

javascript

console.log(userone.emailid);  // Output: "aastha@google"
console.log(usertwo.emailid);  // Output: "aastha@google"
Explanation of Output
When you log userone.emailid, it outputs "aastha@google" because userone and usertwo reference the same object. The change made through usertwo is reflected when accessing the object via userone.

Similarly, logging usertwo.emailid outputs "aastha@google" for the same reason: both variables point to the same object, so any modifications are visible regardless of which variable is used to access the object.




*/