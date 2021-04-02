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
    document.querySelector(".jumbotron").style.backgroundColor = "#87ca8a";
    document.querySelector(".buttons a").style.backgroundColor = "black";
    document.querySelector(".btn-secondary").style.backgroundColor = "#8c9c08";
}
//2
let btnPressed = document.querySelector("#submitBtn");
let elementInput = document.getElementById("exampleInputEmail1");
let elementInputName = document.querySelector("#example-text-input");
let elementInputTex = document.querySelector("#exampleTextarea");

btnPressed.onclick = (event)=> {
    event.preventDefault()
    elementInput.classList.remove("error");
    elementInput.style.backgroundColor = "white";
    elementInputName.style.backgroundColor = "white";
    elementInputTex.style.backgroundColor = "white";

    let isValid = true;

    if(elementInput.value.length <= 0 || !elementInput.value.split("").some(caracter => caracter === "@")) {
        elementInput.style.backgroundColor = "red"
        isValid = false;
        elementInput.classList.add("error")
    }
    if(elementInputName.value.length <= 0) {
        elementInputName.style.backgroundColor = "red"
        isValid = false
    }
    if(elementInputTex.value.length <= 0) {
        elementInputTex.style.backgroundColor = "red"
        isValid = false
    } 
    if(isValid) {
       elementInput.value = "",
       elementInputName.value = "",
       elementInputTex.value = "",

       setTimeout(()=>alert("Thank you for filling out the form!!!"), 100) 
    }
    
    
}