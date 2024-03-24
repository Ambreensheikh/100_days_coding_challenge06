  //making an initerface for student information
  interface Student{
    name : string ;
    age : number ;
    courses : string[] 
  } 
  let student : Student = {
     name : "Unaiza",
     age : 16 ,
     courses : ["Biology", "Chemistry", "I.T"]
  };
  console.log(student);