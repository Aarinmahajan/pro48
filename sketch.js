const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var number1,number2,number3,number4,number5,number6,line1;
var score= 15+'M';

function preload() {
  
 
  
}

function setup() {
  createCanvas(1000,1000);
 // number1=new Dice(500,500,100,100);
  //number2=new Dice(500,500,100,100);
  //number3=new Dice(500,500,100,100);
  //number4=new Dice(500,500,100,100);
  //number5=new Dice(500,500,100,100);
  //number6=new Dice(500,500,100,100);
  line1 = new Block(810,260,300,PI/0);
  
}

function draw() {
  background("white");

  number1.display();
  number2.display();
  number3.display();
  number4.display();
  number5.display();
  number6.display();
  line1.display();
  textSize(20);
  fill("black");
  text("Money: " + score, 450, 50);
  
  drawSprites()
}