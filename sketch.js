
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1350, 700);


	engine = Engine.create();
	world = engine.world;

	pos = width/2;
	//Create the Bodies Here.
	paper = new paper(200,650,23);
	ground = new ground(675,680,1350,10);
	
	dustbinPart1 = new dustbin(pos,665,126,10);
	dustbinPart2 = new dustbin(pos+60,570,10,188);
	dustbinPart3 = new dustbin(pos-60,570,10,188);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  paper.display();
  ground.display();
 
  dustbinPart1.display();
  dustbinPart2.display();
  dustbinPart3.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}
