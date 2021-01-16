const Bodies=Matter.Bodies;
 const World=Matter.World;
  const Engine =Matter.Engine;
   var engine,world; 
   var ground,ball;
    //not a sprite 
    function setup() {
  createCanvas(400,400); 
 engine=Engine.create();
 world=engine.world;
 // JSON 
 var op={ isStatic:true //key value pairs
  
 } 
 var option={
  restitution:1.0
}
//creating an or body from matter.js
  ground=Bodies.rectangle(200, 390, 400, 20,op); 
  ball=Bodies.circle(200, 200,40 ,option) 
 //add it to the world 
 World.add(world,ground);
 World.add(world,ball);
 console .log (ground) }

 function draw() {
 background(255,25,255); 
 Engine.update(engine); 
 rectMode(CENTER) 
rect(ground.position.x,ground.position.y,400, 20);
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,40,40)
 }