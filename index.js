// Add your Circle class here
class Circle {
  constructor(radius){

    this.radius=radius;
  }

  get radius(){
   return  this.radius
  }

  get diameter(){


  }

  get circumference(){

  }

  get area(){

    //pi r^2
    return ((this.radius * this.radius) * Math.PI) 
  }


  set radius(radius){
   this.radius =this.radius

  }

}
