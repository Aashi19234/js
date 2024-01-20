/*class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}
//const chai= new User("chai","chai@gmail.com","123")
//console.log(chai.encryptPassword());
//console.log(chai.changeusername());*/



// inheritance
class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME IS ${this.username}`);
    }
}
/*class Teacher extends user{
    constructor(username,email, password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}
const chai=  new Teacher("chai", "chai@teacher.com", "123");
chai.addCourse()
const masalachai= new user("coldcoffee");
//masalachai.addCourse()// error dega coz masala chai k pass access ni hai 
masalachai.logMe()// masalachai user ka object h toh uspe user ka access hoega
console.log(chai===masalachai);
console.log(chai===Teacher);
console.log(chai instanceof user);*/


// static properties

class Student{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`Username ${this.username}`);
    }
    static createId(){// agr hme kisi method ka access sbko no dena toh hm static keyword use krenge isse sbko access ni milega uss method ka
        return `123`
    }
}
const Aastha= new Student("Aastha");
console.log(Aastha.createId());

class College extends Student{
    constructor(username, email){
        super(username)
        this.email=email

    }
}
const iphone = new College("iphone" , "i@phone.com");
console.log(iphone.createId());





