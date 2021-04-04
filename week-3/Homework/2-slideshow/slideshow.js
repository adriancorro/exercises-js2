// Write your code here

// sdocument.body.onload = addElement;


let img1 = src="https://i.ibb.co/qB5WWfg/2.jpg"
let img2 = src="https://i.ibb.co/YN1L55T/1.jpg"
let img3 = src="https://i.ibb.co/p0wYykH/3.jpg"  


 let img  = [ img1 , img2 , img3 ]


function addElement () {
  // crea un nuevo div
  // y añade contenido
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("Hola!¿Qué tal?");
  newDiv.appendChild(newContent); //añade texto al div creado.

  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);

  var p = document.createElement("button");
document.body.appendChild(p);

const allMoviesDiv = document.getElementById('er')
    allMoviesDiv.appendChild(p)


}
addElement ()



