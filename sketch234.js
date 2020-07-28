var bullet, wall;
var speed, weight;
var deformation;
var thickness;
var weight;
var speed;
function setup() {
  createCanvas(1600,400);
  
  thickness = random(22,83)
  weight = random(400,1500);
  bullet = createSprite(50,200,100,50);
  wall = createSprite(900,200,thickness,height/2);
  bullet.shapeColor = color(255,255,255);
  wall.shapeColor = color(80,80,80);
  speed = random(223,321)
  weight = random(30,52)

}     

function draw() {
  background(0,0,0);
  bullet.velocityX = speed;
  deformation = 0.5*weight*speed*speed/thickness*thickness.ess*thickness;
 

  if (hasCollided(bullet, wall)){

    car.velocityX = 0;
    if(deformation>10){
      bullet.shapeColor = color(255,0,0);
    }
  }
    if(deformation<10){
      bullet.shapeColor = color(0,255,0);
    }
    drawSprites();
  }
 
  
