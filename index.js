// Add your Circle class here
class Circle {
  constructor(radius){
    this.radius=radius;
  }

  get radius(){
   return  this.radius
  }

  get diameter(){
    return  this.radius*2
  }

  get circumference(){

  }

  get area(){

    //pi *radius^2
    return ((this.radius * this.radius) * Math.PI)
  }



//  Define setter methods for diameter, circumference, and area

set diameter(){
  
}
set circumference(){
  
}

set area(radius){

  //pi *radius^2
  this.radius= ((this.radius * this.radius) * Math.PI)
}



}
