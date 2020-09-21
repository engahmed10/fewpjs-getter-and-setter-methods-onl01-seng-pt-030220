// Add your Circle class here
class Circle {
  constructor(radius,length){
    this.radius=radius;
    this.length =length;
  }

  get radius(){
   return  this.radius
  }

  get diameter(){
    return  this.radius * 2
  }

  get circumference(){
    return   this.diameter() * Math.PI
  }

  get area(){

    //pi *radius^2
    return ((this.radius * this.radius) * Math.PI)
  }



}
