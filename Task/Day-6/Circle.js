class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
    getRadius(){
      return this.radius;
      };
    setRadius(value){
      this.radius = value;
      };
    getColor(){
      return this.color;
    };
    setColor(color){
      this.color = color;
    };
    
    getArea(){
      return Math.PI * this.radius * this.radius;
      };
    getCircumference(){
      return 2 * Math.PI * this.radius;
      };
  }
  
  let cir = new Circle(1.0, "red");
  console.log("Radius:",cir.getRadius());
  console.log("Color:",cir.getColor());
  console.log("Area:",cir.getArea());
  console.log("Circumference:",cir.getCircumference());