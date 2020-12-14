class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");

    this.smokeImage = loadImage("sprites/smoke.png");

    this.trajectory = [];

    

  }

  display() {
    var xy = this.body.position
    //this.body.position.y = mouseY;

    
    super.display();

    var pos = [xy.x, xy.y];
    
    if(this.body.velocity.x>10 && this.body.position.x>200){
    this.trajectory.push(pos);
    }

    for(var i = 0; i<this.trajectory.length; i=i+1){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1])
    }


  }
}
