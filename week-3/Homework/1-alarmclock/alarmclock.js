let i = -1;
let interval = 0 ;
function setAlarm() {

 clearInterval(i)
 let value = document.querySelector("#alarmSet").value;
 let change = 1000; 

i = setInterval (  () =>  {
  let time = document.querySelector("#timeRemaining");
  if( value === 0 ){
    clearInterval(i)
    playAlarm()
  }

  let min = parseInt(value/60)  < 10  ?  ` 0${ parseInt(  value  / 60) }`    : parseInt (value/60) ;
  let seg = value % 60 < 10 ? ` 0${value % 60 }` :  value % 60 
  time.innerHTML = ` time remaining: ${min}: ${seg}`
  value = value -1

 
  
}, change);
}

let stop2 = document.querySelector("#stop");
stop2.addEventListener( "click" ,  stopAlarm)

 function stopAlarm (){
  
   clearInterval(i);
   
 
   }





// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
