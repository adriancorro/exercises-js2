/* Challenge Famous Writers
Did you know you can also have an array of objects? We've created one for you here. Loop through the array, 
and for each object, `console.log()` out the sentence:

"Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."

Here is the array:

*/ 

var writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  },
];

// writers.forEach( p =>  console.log( `  Hi, my name is ${p.firstName} ${p.lastName}. I am ${p.age} years old, and work as a ${p.occupation}.    ` )   )

// extra 
writers.forEach( p => { if(p.alive == true){ console.log( `  Hi, my name is ${p.firstName} ${p.lastName}. I am ${p.age} years old, and work as a ${p.occupation}.    ` )  }}  )
/*
If you want an extra challenge, only `console.log()` the writers that are alive.
*/