/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
 let content = document.querySelector("#content");
 console.log(content);
 function exerciseOne(arrayOfPeople) {
   arrayOfPeople.forEach(persona => {
     let h1 = document.createElement("h1")
     h1.append(persona.name);
     let h2 = document.createElement("h2")
     h2.append(persona.job);
     content.append(h1, h2)
   })
 }

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
 function exerciseTwo(shopping) {
  let ul = document.createElement("ul");

  shopping.forEach(item => {
    let li = document.createElement("li");
    li.append(item)
    ul.append(li)
  })
  content.append(ul)
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  let elementH1 =  document.createElement("h1");
  elementH1.append("Book List")
  let elementUl = document.createElement("ul");
  elementUl.style.display = "flex";
  elementUl.style.listStyle = "none";
  elementUl.style.margin = "15px" 

  let img1 = src="https://i.ibb.co/qB5WWfg/2.jpg"
  let img2 = src="https://i.ibb.co/YN1L55T/1.jpg"
  let img3 = src="https://i.ibb.co/p0wYykH/3.jpg"

  

  let imgArr = [];
  imgArr.push(img1, img2, img3)
  console.log(img1)
  books.forEach((book, index) => {
    let elementLi = document.createElement("li");
    elementLi.style.margin = "15px" 
    elementLi.style.padding = "15px" 
    let elementP = document.createElement("p");
    let elementImg = document.createElement("img");
    elementP.append(`${book.title}-${book.author}`);
    elementLi.append(elementP, elementImg);
    elementLi.classList.add('clasLi')

    elementImg.src = imgArr[index]
    if(book.alreadyRead) {
      elementLi.style.backgroundColor = "green"

    }else {
      
      elementLi.style.backgroundColor = "red"
    }
    elementUl.append(elementLi);
  })
  content.append(elementH1, elementUl)
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
