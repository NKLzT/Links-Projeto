function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const STAR_COUNT = 100
let result = ""
for(let i = 0; i < STAR_COUNT; i++){
  result += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 3)}px ${randomNumber(0, 3)}px #fff,`
}
console.log(result.substring(0, result.length - 1))
/*
--------------------------------------
*/
document.addEventListener('DOMContentLoaded',function(event){
var dataText = [ "FULLSTACK", "HTML,CSS,JAVASCRIPT", "JAVA,C#,PYTHON", ""];

function typeWriter(text, i, fnCallback) {

  if (i < (text.length)) {

   document.querySelector("p").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

    setTimeout(function() {
      typeWriter(text, i + 1, fnCallback)
    }, 100);
  }
  else if (typeof fnCallback == 'function') {
    setTimeout(fnCallback, 700);
  }
}
 function StartTextAnimation(i) {
   if (typeof dataText[i] == 'undefined'){
      setTimeout(function() {
        StartTextAnimation(0);
      }, 20000);
   }
  if (i < dataText[i].length) {
   typeWriter(dataText[i], 0, function(){
     StartTextAnimation(i + 1);
   });
  }
}
StartTextAnimation(0);
});