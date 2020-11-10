//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;

var bullet,wall,thickness,speed,weight
var lbullet,lwall;



function setup() {
  createCanvas(1000,400);
  thickness=random(22,83);
  speed=random(55,90)
  weight=random(400,1000)
  bullet=createSprite(50,200,50,5);
  wall=createSprite(800,200,100,thickness/2);
  
  
  bullet.velocityX=speed;
  bullet.shapeColor=color(255);
}

function draw() {
  background(255,255,255);  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    }
    if(damage>10){
    wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
    wall.shapeColor=color(0,255,0);
    }
    if(wall.x-bullet.x<(bullet.width+wall.width)/2)
    {
      bullet.velocityX=0;
      var deformation=0.5 * weight * speed * speed/22509;
      if(deformation>180) {
          bullet.shapeColor=color(255,0,0);
     }
     
      }
      if(deformation<100);{
          bullet.shapeColor=color(0,255,0);
      }
    
  
  drawSprites();
    }
function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x +lbullet.width;
wallLeftEdge=lwall.x
if (bulletRightEdge>=wallLeftEdge){
    return true
}
    return false

    
}