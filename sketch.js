
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1;
var roof1;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new bob(100,500,50);
	bob2 = new bob(200,500,50);
	bob3 = new bob(300,500,50);
	bob4 = new bob(400,500,50);
	bob5 = new bob(500,500,50);
	roof1 = new Roof(300,100,450,50);
	rope1 = new Rope(bob1.body,roof1.body,-200,0);
	rope2 = new Rope(bob2.body,roof1.body,-100,0);
	rope3 = new Rope(bob3.body,roof1.body,0,0);
	rope4 = new Rope(bob4.body,roof1.body,100,0);
	rope5 = new Rope(bob5.body,roof1.body,200,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);

  if(keyDown("space")){
  	  Body.setVelocity(bob5.body,{x:15,y:0})
  }

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



