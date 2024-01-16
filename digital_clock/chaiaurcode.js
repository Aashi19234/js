const clock= document.getElementById('clock')

// use setinterval which control js events. it receives method and interval after which it continously repeats that method
 
setInterval(function(){
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
}, 1000);
