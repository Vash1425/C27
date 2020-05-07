
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hold,ball,ground;

function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

var ground_options={
   isStatic : true
  }


  var hold_options={
     isStatic: true
  }

 ground = Bodies.rectangle(300,530,600,20,ground_options)
  World.add(world,ground);

hold = Bodies.rectangle(300,100,200,20,hold_options);
World.add(world,hold);

var ball_options = {

  restitution : 1.0,
  density : 4.0,

}

ball  = Bodies.circle(220,200,40,ball_options);
World.add(world,ball);


var options = {
  bodyA : ball,
  bodyB : hold,

  length  : 200,
}

var string = Constraint.create(options);
World.add(world,string);

}


function draw() {
  background(255,0,0); 
  Engine.update(engine);

fill("black")
  text("Press space bar to oscillate the pendulam to left and right with mouse",80,25);
fill("black")
  text("Press backspace to stop the Pendulum from oscillating",100,50);
  
  fill ("brown");
rectMode(CENTER);
rect(hold.position.x,hold.position.y,200,20);

fill("red");
strokeWeight(0);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);


fill("silver");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40);

strokeWeight(8);
stroke("black");
line(ball.position.x,ball.position.y,hold.position.x,hold.position.y)




if(keyCode===32){
ball.position.y = mouseY;
ball.position.x = mouseX;
}

else if (keyCode === 8){
ball.position.x = 300;

}

}