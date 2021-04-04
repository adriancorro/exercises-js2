/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/ 

/* Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). */

let backgroundElement = document.querySelector(`body`)

// setTimeout( a => backgroundElement.style.backgroundColor =  'green', 5000)


/* setTimeout(function() { 
    backgroundElement.style.backgroundColor =  'green' } 
, 5000) */


/* Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
 */

const colors = [ 'black', 'blue']
let index = 0

setTimeout(function() { 
    backgroundElement.style.backgroundColor =  'green'
    //setInterval() repite la ejecución de la función continuamente
    setInterval(() => {
        console.log(colors.length)
        if (index == colors.length) {
            index = 0 
        }
        backgroundElement.style.backgroundColor = colors[index];
        console.log(index)
        // el index suma + 1  cada 5 segundo
        index ++
    }, 5000);
} 
, 5000)
