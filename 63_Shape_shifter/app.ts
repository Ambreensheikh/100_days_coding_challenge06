
 // making a custome type alias for shapes
 type Kind = {
   Kind : "circle" | "Rectangle";
   radius? : number;   //for circle
   width? : number;    //for rectangle
   length? : number;   //for rectangle

 };
 let circle : shape ={
     Kind  : "circle",
     radius : 7 
 };
 let Rectangle : shape = {
    Kind : "Rectangle",
    width : 24,
    length : 12
 };
