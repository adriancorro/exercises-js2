// Write your code here

// sdocument.body.onload = addElement;


let img1 = src="https://i.ibb.co/YN1L55T/1.jpg"
let img2 = src="https://i.ibb.co/qB5WWfg/2.jpg"     
let img3 = src="https://i.ibb.co/p0wYykH/3.jpg"  
let img  = [ img1 , img2 , img3 ]

function addElement () { 
// creacion de imagen
let imgExercise  = document.createElement("img");
document.body.appendChild(imgExercise);

//  creacion y seleccion de btnForward por js
var btnForward  = document.createElement("button");
document.body.appendChild(btnForward);
btnForward.setAttribute("id", "btnForward");
let btnForwardSelect = document.querySelector(`#btnForward`)
let valueBtnForward = document.querySelector(`#btnForward`).value;
valueBtnForward = "dddddd"
btnForwardSelect.append(valueBtnForward)

// añadiendo imagen y haciendo Forward a img
let indexImg = 0
imgExercise.setAttribute("src", `${img[indexImg]}`);

btnForwardSelect.addEventListener('click', event => {
  indexImg ++ ;
    if(indexImg === img.length){
      indexImg = 0
    }
    console.log( img.length)
    console.log( indexImg)
    imgExercise.setAttribute("src", `${img[indexImg]}`);
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
    if(indexImg === -1){
      indexImg = img.length -1
    }
    console.log( img.length)
    console.log( indexImg)
    imgExercise.setAttribute("src", `${img[indexImg]}`);
 })





}
addElement ()



