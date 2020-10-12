var Engine = Matter.Engine;
var World = Matter.World;
var Events = Matter.Events;
var Bodies = Matter.Bodies;


var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for (var k=0; k<=width; k=k +80){
    divisions.push(new divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  for (var j=75;j<=width; j=j+50)
  {
    plinkos.push(new plinkos(j,75));
  }

  for (var j=50;j<=width-10; j=j+50)
  {
    plinkos.push(new plinkos(j,175));
  }
}
function draw(){
  background("black");
  textSize(20);
  Engine.update(engine);
  ground.display();
  for (var j=0;j< particles.length; j++){
    for (var k=0;k<divisions.length; k++){
      divisions[k].display();
    }
  }
  drawSprites();
}

  
