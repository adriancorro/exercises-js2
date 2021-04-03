// 1
let btnBlue = document.querySelector("#blueBtn");
let btnOrange = document.querySelector("#orangeBtn");
let btnGreen = document.querySelector("#greenBtn") 

btnBlue.onclick = ()=> {
    document.querySelector(".jumbotron").style.backgroundColor = "#588fbd",
    document.querySelector(".buttons a").style.backgroundColor = "#ffa500";
    document.querySelector(".btn-secondary").style.backgroundColor = "black";
    document.querySelector(".btn-secondary").style.color = "white";
}
btnOrange.onclick = ()=> {
    document.querySelector(".jumbotron").style.backgroundColor = "#f0ad4e";
    document.querySelector(".buttons a").style.backgroundColor = "#5751fd";
    document.querySelector(".btn-secondary").style.backgroundColor = "#31b0d5";
    document.querySelector(".btn-secondary").style.color = "white";
}
btnGreen.onclick = ()=> {
    document.querySelector(".jumbotron").style.backgroundColor = "#87ca8a" ;
    document.querySelector(".buttons a").style.backgroundColor = "black";
    document.querySelector(".btn-secondary").style.backgroundColor = "#8c9c08";
}
//2
let btnPressed = document.querySelector("#submitBtn");

/* 
Este ejemplo usa onblury onfocuspara cambiar el texto dentro de un <input>elemento.


let input = document.querySelector('input');

input.onblur = inputBlur;
input.onfocus = inputFocus;

function inputBlur() {
  input.value = 'Focus has been lost';
}

function inputFocus() {
  input.value = 'Focus is here';
} 

*/


let elementos = document.querySelectorAll(".form-control");
elementos.forEach( elemento => {elemento.onfocus = inputFocus; elemento.onblur = inputBlur; } )


function inputFocus() {
    elementos.forEach( elemento => { 
        elemento.style.backgroundColor = "white";
        elemento.style.border = "1px solid white"
        allGood = true
      } )

  }

  function inputBlur() {
    
    if(!elementos[0].value.split("").some(caracter => caracter === "@")){
        elementos[0].style.backgroundColor = "hsl(0deg 100% 50% / 35%)"
        elementos[0].style.border = "1px solid crimson"
    }

    elementos.forEach( elemento => {  if(elemento.value.length <= 0   )    {
        
        elemento.style.backgroundColor = "hsl(0deg 100% 50% / 35%)"
        elemento.style.border = "1px solid crimson"
        allGood = false

    }  } )
  }

btnPressed.onclick = (event)=> {
    event.preventDefault()
    
    elementos.forEach( elemento => { 
        elemento.style.backgroundColor = "white";
        elemento.style.border = "1px solid white"
        allGood = true
      } )

    elementos.forEach( elemento => {  if(elemento.value.length <= 0  ||  !elementos[0].value.split("").some(caracter => caracter === "@") )  {
        elemento.style.backgroundColor = "hsl(0deg 100% 50% / 35%)"
        elemento.style.border = "1px solid crimson"
        allGood = false
    }  } )

    if(allGood) {
        elementos.forEach( elemento => { 
        elemento.value = ""; }
        )
       setTimeout(()=>alert("Thank you for filling out the form!!!"), 100) 
    }
}