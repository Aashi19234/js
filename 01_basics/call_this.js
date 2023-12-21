function setusername(username){
    //complex db calls
    this.username=username
}
function createuser(username,email,password){

    //setusername(username)
    setusername.call(this, username)
// call jo h current execution context dusre function ko pass krdeta h
// explain  this whole example in an interview

    this.email=email
    this.password=password


}
const chai=new createuser("chai", "chai@fb.com", "!23")
console.log(chai);
// setusername call hi ni hra kyyuki bss refference gya h call ni hua toh call krne k lie . call use krenge
