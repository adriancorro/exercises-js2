// Write your code here

// sdocument.body.onload = addElement;


let img1 = src="https://i.ibb.co/YN1L55T/1.jpg"
let img2 = src="https://i.ibb.co/qB5WWfg/2.jpg"     
let img3 = src="https://i.ibb.co/p0wYykH/3.jpg"  
let img  = [ img1 , img2 , img3 ]
let i; 

function addElement (arrayImg) { 

// creacion de div
let div  = document.createElement("div");
document.body.appendChild(div);
div.setAttribute("id", "slide");
let divSlide = document.querySelector(`#slide`)


// creacion de imagen
let imgExercise  = document.createElement("img");
divSlide.appendChild(imgExercise);

//  creacion y seleccion de btnForward por js
var btnForward  = document.createElement("button");
document.body.appendChild(btnForward);
btnForward.setAttribute("id", "btnForward");
let btnForwardSelect = document.querySelector(`#btnForward`)
let valueBtnForward = document.querySelector(`#btnForward`).value;
valueBtnForward = "forward"
btnForwardSelect.append(valueBtnForward)

// añadiendo imagen y haciendo Forward a img
let indexImg = 0
imgExercise.setAttribute("src", `${arrayImg[indexImg]}`);

btnForwardSelect.addEventListener('click', event => {
  stopAlarm ()
  indexImg ++ ;
    if(indexImg === arrayImg.length || indexImg ==  -1){
      indexImg = 0
    }
   
    imgExercise.setAttribute("src", `${arrayImg[indexImg]}`);
 })


// haciendo back
//  creacion y seleccion de btnBack por js
var btnBack  = document.createElement("button");
document.body.appendChild(btnBack);
btnBack.setAttribute("id", "btnBack");
let btnBackSelect = document.querySelector(`#btnBack`)
let valuebtnBack = btnBackSelect.value;
valueBtnBack = "back"
btnBackSelect.append(valueBtnBack)
    
btnBackSelect.addEventListener('click', event => {
  indexImg -- ;
    if(indexImg === -1  || indexImg ==  -2){
      indexImg = arrayImg.length -1
    }
    console.log( arrayImg.length)
    console.log( indexImg)
    imgExercise.setAttribute("src", `${arrayImg[indexImg]}`);
 })

// haciendo autoForward
var autoForward  = document.createElement("button");
document.body.appendChild(autoForward);
autoForward.setAttribute("id", "autoForward");
let btnAutoForwardSelect = document.querySelector(`#autoForward`)
let valueAtnAutoForward = btnAutoForwardSelect.value;
valueAtnAutoForward = "auto Forward"
btnAutoForwardSelect.append(valueAtnAutoForward)

btnAutoForwardSelect.addEventListener('click', event => {   
  clearInterval(i)

  i = setInterval(() => {
    indexImg ++
      if (indexImg >=  arrayImg.length  || indexImg ==  -1) {
        indexImg = 0 
      }
      
      imgExercise.setAttribute("src", `${arrayImg[indexImg]}`);
     
      console.log(indexImg )
      console.log(arrayImg[indexImg] )
  }, 1000);

 })


 // haciendo autoBack
var autoBack  = document.createElement("button");
document.body.appendChild(autoBack);
autoBack.setAttribute("id", "autoBack");
let btnAutoBackSelect = document.querySelector(`#autoBack`)
let valueAutoBackSelect= btnAutoBackSelect.value;
valueAutoBackSelect = "auto back"
btnAutoBackSelect.append(valueAutoBackSelect)

btnAutoBackSelect.addEventListener('click', event => {   
    clearInterval(i)
  
    i = setInterval(() => {
      indexImg --
        if (indexImg ==  -1 || indexImg ==  3) {
          indexImg = arrayImg.length -1;
        }
        imgExercise.setAttribute("src", `${arrayImg[indexImg]}`);
       
    }, 1000);
 })

 // haciendo stop
 var btnStop  = document.createElement("button");
document.body.appendChild(btnStop);
btnStop.setAttribute("id", "btnStop");
let btnStopSelect = document.querySelector(`#btnStop`)
let valuebtnStopSelect= btnStopSelect.value;
valuebtnStopSelect = "stop"
btnStopSelect.append(valuebtnStopSelect)

btnStopSelect.addEventListener( "click" ,  stopAlarm)

function stopAlarm (){
  
  clearInterval(i);
  

  }

}

addElement(img)



