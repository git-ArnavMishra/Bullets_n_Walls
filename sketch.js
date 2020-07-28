var bullet, wall;
var speed, weight;
var damage;
var thickness;
var weight;
var speed;
function setup() {
  createCanvas(1600,400);
  
  thickness = random(22,83)
  weight = random(30,52);
  bullet = createSprite(50,200,100,50);
  wall = createSprite(900,200,thickness,height/2);
  bullet.shapeColor = color(255,255,255);
  wall.shapeColor = color(80,80,80);
  speed = random(223,321);
  
}     

function draw() {
  background(0,0,0);
  bullet.velocityX = speed;
  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    if(damage>10){
      bullet.shapeColor = color(255,0,0);
    }
    if(damage<10){
      bullet.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
  }
function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge >= wallLeftEdge)
  {
    return true;
  }
  return false;
}

 
  
