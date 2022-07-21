class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannon_Image = loadImage("assets/cannon.png");
    this.cannon_Base = loadImage("assets/cannonBase.png");
  }
  display()
  {
   push()
   translate(this.x,this.y);
   rotate(this.angle);
   imageMode(CENTER);
   image(this.cannon_Image,0,0,this.width,this.height);
   pop()
   image(this.cannon_Base,70,20,200,200);
   noFill();
  }
  
}
