
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = matter.contraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball1 = new ball(400,300)
	ball2 = new ball(420,290)
	ball3 = new ball(430,310)
	ball4 = new ball(440,280)
	ball5 = new ball(450,320)
	ball6 = new ball(460,270)
	ball7 = new ball(470,330)
  ball8 = new ball(480,260)
  ball9 = new ball(210,300)
  slingshot1 = new Slingshot(this.ball9,{x:210,y:300})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  fill("green")
  ball1.display();
  fill("red")
  ball2.display();
  fill("yellow")
  ball3.display();
  fill("black")
  ball4.display();
  fill("blue")
  ball5.display();
  fill("grey")
  ball6.display();
  fill("purple")
  ball7.display();
  fill("orange")
  ball8.display();
  fill("white")
  ball9.display();
  slingshot1.display();

  

  drawSprites();
 
}



function mouseDragged(){
  Matter.Body.setPosition(this.ball9,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot1.fly();
}





























