const form = document.querySelector("form");
// this usecase of height and weight will give empty values
// jab form submit hta h toh do types m hta h either post type or get type
// apply method on events to control the default action of form
form.addEventListener('submit', function(e){
    e.preventDefault()
   const height = parseInt( document.querySelector('#height').value)
   const weight= parseInt(document.querySelector('#weight').value)
   // hme values submit krne k baad extract krni h
   // islie ese extract krre h value
   const results = document.querySelector('#results')
   if(height===''|| height <0 || isNaN(height)){
    results.innerHTML= 'Please give a valid height';

   }
   
   else if(weight===''|| weight <0 || isNaN(weight)){
    results.innerHTML= 'Please give a valid weight';

   }
   else{
    const bmi= (weight/((height*height)/10000)).toFixed(2)
    // show the resut
    results.innerHTML= `<span>${bmi}</span>`;
   }
    



});