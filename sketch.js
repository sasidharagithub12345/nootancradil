const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body

var engine
var world
var pendulum
var rope
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  pendulum1 = new Pendulum(250,450,"black")
  pendulum2 = new Pendulum(450,450,"black")
  pendulum3 = new Pendulum(650,450,"black")
  pendulum4 = new Pendulum(850,450,"black")
  
  rope = new Rope(pendulum1.body,200)
  rope2 = new Rope(pendulum2.body,200)
  rope3 = new Rope(pendulum3.body,200)
  rope4 = new Rope(pendulum4.body,200)
 
}

function draw() {
  
pendulum1.display()
pendulum2.display()
pendulum3.display()
pendulum4.display()

rope.display()
rope2.display()
rope3.display()
rope4.display()


}
function mouseDragged(){

Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY})

}