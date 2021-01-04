const Engine = Matter.Engine;
const Body = Matter.Bodies;
const World = Matter.World

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground = Body.rectangle(200,300,400,10);
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}