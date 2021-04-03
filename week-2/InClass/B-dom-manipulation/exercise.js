/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
// 1. all the "p" element nodes of the document
console.log(document.querySelectorAll('p'))

//2  2. the first div element node
console.log(document.querySelector('div'))

//3--> should log the "#jumbotron-text" node
console.log(document.getElementById('jumbotron-text'))

// 4. all the "p" elements of contained. inside the .primary-content element node
console.log(document.querySelectorAll('.primary-content p'))


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
function alertCallback(event) {
    event.preventDefault() // si no le agregamos event.preventDefault()  al terminar de hacer el evento click la pagina cargara y se hara focus desde el principio
    // console.log('Thanks for visiting Bikes for Refugees!')
    alert('Thanks for visiting Bikes for Refugees!')
}
const alertButton = document.getElementById('alertBtn')

alertButton.addEventListener('click', alertCallback)

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

const body = document.querySelector('body')

function changeColor(event, color) {
    event.preventDefault() 
    
    // if (body.style.backgroundColor === 'black') {
    //     body.style.backgroundColor = 'green'
    // } else {
    //     body.style.backgroundColor = 'black'
    // }
    body.style.backgroundColor = color
}
const colorButton = document.getElementById('bgrChangeBtn')
// colorButton.addEventListener('click', event => {
//     changeColor(event, 'black')
// })

/*
Task 4
======

When a user clicks the ‘Add some text’ button, 
a new paragraph should be added inside the section
that says “LEARN MORE”
*/

function addText(event, texto) {
    event.preventDefault()
    const contenedor = document.querySelector('h2.heading-underline')
    const p = document.createElement('p')
    contenedor.appendChild(p)
    p.innerText = texto
}
const addSomeTextButton = document.getElementById('addTextBtn')
addSomeTextButton.addEventListener('click', event => {
    addText(event, '')
})


/*
Task 5
======

When the 'Larger links!' button is clicked,
the text of all links on the page should increase.
*/
// 1 funcion callback
function increaseLinkSize(event) {
    event.preventDefault()
    const allLinks = document.querySelectorAll('a') // return []
    allLinks.forEach(anchor => {
        let fontSize = Number.parseInt(anchor.style.fontSize)
        fontSize += 1
        anchor.style.fontSize = fontSize + 'em'
    })
}
// 2 obtener el boton
const largerLinkButton = document.getElementById('largerLinksBtn')
// 3 agregar el event listener
largerLinkButton.addEventListener('click', increaseLinkSize)
/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked,
get the text inside the input field and create
a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
// 1 llamar addText
// 2 buscar el boton
const addFromInputField = document.getElementById('addArticleBtn')
const inputTextField = document.querySelector('input') // Usar un id o una clase
// 3 addEventListener
addFromInputField.addEventListener('click', event => {
    addText(event, inputTextField.value)
    // 1.1 clear input field
    inputTextField.value = ''
})
/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3,
every time the 'Change colour' button is clicked,
the background color will be changed with the next color in the array.
The next color when you are in the last color of the array
will be the first color again.
*/

const colors = ['cyan', 'green', 'tomato', 'magenta', 'pink']

colorButton.addEventListener('click', event => {
    let currentColor = body.style.backgroundColor
    let currentColorIndex = colors.indexOf(currentColor)
    currentColorIndex++

    if (currentColorIndex == colors.length) {
        currentColorIndex = 0
    }

    changeColor(event, colors[currentColorIndex])
})

// // interval N veces
// const intervalId = setInterval(() => console.log(`interval`), 500)

// // timout 1 vez
// const timeoutId = setTimeout(() => clearInterval(intervalId), 6000)

// console.log(`intervalId: ${intervalId}`)
// console.log(`timeoutId: ${timeoutId}`)

// clearTimeout(timeoutId)

// focus out
inputTextField.addEventListener('focusout', event => {
    console.log(`you left`)
    // validar que el campo input tenga un email valido
    if (inputTextField.value.length == 0) {
        inputTextField.style.border = '1px solid red'
    } else {
        inputTextField.style.border = ''
    }
})