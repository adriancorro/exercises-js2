/* Challenge Mentors

Write all your code at the end of the file

1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."

2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push()
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"]

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]

3. Create an object method with the name .addSkill() to be able to add skills from it

4. Create a function to add a skill to all members in a list of mentors

function addSkill(mentors,newSkill){
  //your code here
}

5. Create a function to remove a skill to all members in a list of mentors

function removeSkill(mentors,newSkill){
  //your code here
}

6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills

7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes

8. Create a function that adds a student like to all mentors in the array

function addStudentLikes(mentors){
  //your code here
}
*/ 

var mentors = [
  {
    firstName: "Antonio",
    lastName: "Miranda",
    skills: ["JS","React","Node"],
    class: "Mar1",
    studentLikes: 0,
    job:
      {
        company: "Google",
        position: "Senior developer",
        city: "Barcelona"
      }
  },
  {
    firstName: "Leo",
    lastName: "Messi",
    skills: ["Play football"],
    class: "Mar3",
    studentLikes: 0,
    job:
      {
        company: "FC Barcelona",
        position: "Player",
        city: "Barcelona"
      }
  },
  {
    firstName: "John",
    lastName: "VanDamme",
    skills: ["React","Angular","Python","Node"],
    class: "Mar4",
    studentLikes: 0,
    job:
      {
        company: "Facebook",
        position: "Software Manager",
        city: "Chicago"
      }
  },  
  {
    firstName: "Giorgio",
    lastName: "Polvara",
    skills: ["HTML","JS","React"],
    class: "Mar2",
    studentLikes: 0,
    job:
      {
        company: "Amazon",
        position: "Senior developer",
        city: "Barcelona"
      }
  },

];


//YOUR CODE HERE

//1
console.log("1:")
mentors.forEach( p => { if(p.job.city == "Barcelona" ) {  console.log(`Hola, mi nombre es ${p.firstName} ${p.lastName}. Trabajo en ${p.job.city} y conozco ${p.skills}"`) }}   )

//2
console.log("2:")
mentors.forEach( p => { if(p.job.city == "Barcelona" ) { p.skills.push("SQL"); p.class = "Jun1" ;  console.log(`Hola, mi nombre es ${p.firstName} ${p.lastName}. Trabajo en ${p.job.city} y conozco ${p.skills} mi class es ${p.class}`) }}   )

// 3
console.log("3:")
function addSkillPrueba(p){
 return  this.skills.push(p)
}

//  Agregamos una nueva propiedad al objeto literal con cada iteracion pero p.addSkillPropiedad nos da undefined console.log(typeof p.addSkillPropiedad )
// trasformamos la propiedad que nos da undefined en una funcion  p.addSkillPropiedad = addSkillPrueba;
// p.addSkillPropiedad("CSS")  asignamos valor a la funcion creada que a su vez es una propiedad
mentors.map( p => { p.addSkillPropiedad = addSkillPrueba; p.addSkillPropiedad("CSS");  console.log( p.skills ) }   )

//4 
console.log("4:")

function addSkillF(objectLiteral,newSkill){
  //your code here
  objectLiteral.forEach( p => {p.addSkill = addSkillPrueba;  p.addSkill(newSkill) ;
     console.log( p.skills ) } )
  
}
addSkillF(mentors,"Angular");

// 5
console.log("5:")

function remove(objectLiteral, skillToRemove ){
   objectLiteral.forEach( mentor => {
   mentor.skills  =  mentor.skills.filter( skill => { 
        if( skill !== skillToRemove  ){
          return skill;
        }
    } )   
   } )
}
remove( mentors, 'Angular')
 mentors.forEach( mentor => console.log(mentor.skills ))  



// 6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills
console.log("6:") 
function mentorWithMoreSkills (mentors){
  const mentoresOrdenados = mentors.sort( ( a, b ) => {
     return b.skills.length  - a.skills.length
    } )

    // mentoresOrdenados.forEach( p => )
  console.log( mentoresOrdenados[0].firstName )
}

  mentorWithMoreSkills(mentors )  

  // 7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes
  console.log("7:") 

    //creamos el método de objeto
    mentors.forEach ( mentor => {  
      mentor.addStudentLikes =  function(){
              this.studentLikes ++   // es lo mismo que  this.studentLikes = this.studentLikes + 1;
              
      } 
      }   )
      mentors.forEach(mentor => console.log( mentor.addStudentLikes ) )


 //     8. Create a function that adds a student like to all mentors in the array
    console.log("8:") 
          // llamamos al metodo objeto creado en el paso 7 for Each
      function addStudentLikesAll(mentors){
        //your code here
         mentors.forEach(mentor =>   
         mentor.addStudentLikes()
          )
        
      }
      addStudentLikesAll(mentors) 
      addStudentLikesAll(mentors) 
      addStudentLikesAll(mentors) 
      addStudentLikesAll(mentors) 
      mentors.forEach( mentor => console.log( mentor.studentLikes) )
      




