
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var world;
radius =40;
var groundObj, leftside, rightside;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	
	groundObj=new Ground(width/2,670,width,20);
  	leftside = new Ground(1100,600,20,120);
	rightside = new Ground(500,600,20,120)

	ball = Matter.Bodies.circle(250,650,radius/2,ball_options);
	World.add(world,ball);
	Engine.run(engine);
	rectMode(CENTER);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,radius,radius);


  groundObj.display();
  leftside.display();
  rightside.display();

  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:50,y:-80});
	}
}

