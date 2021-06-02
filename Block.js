class Block{
    constructor(x, y, height) {
      var options = {
          'density':1.0,
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      strokeWeight(4);
      stroke("black");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  