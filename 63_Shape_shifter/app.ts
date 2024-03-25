
 // making a custome type alias for shapes
 type Shape = {
   kind :  "Circle" | "Rectangle";
   radius? : number;   //for circle
   width? : number;    //for rectangle
   length? : number;   //for rectangle

 };
 let circle: Shape = {
     kind  : "Circle",
     radius : 7 
 };
 let Rectangle: Shape= {
    kind : "Rectangle",
    width : 24,
    length : 12
 };
  console.log(circle);
  console.log(Rectangle)
 