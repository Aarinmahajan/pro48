class Dice {
    constructor(x, y, width, height) {
        var options= {
            'density':1.0
        }
        this.number1 = loadImage("images/1.png")
        this.number2 = loadImage("images/2.png")
        this.number3 = loadImage("images/3.png")
        this.number4 = loadImage("images/4.png")
        this.number5 = loadImage("images/5.png")
        this.number6 = loadImage("images/6.png")

    this.body = Bodies.square(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.width=this.height;
    World.add(world, this.body);

    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        strokeWeight(4);
        stroke("black");
        square(0, 0, this.width, this.height);
        pop()
    }


}