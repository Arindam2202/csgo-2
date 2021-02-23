var thickness,wall;
var speed,bullet, weight;
function setup() {
  createCanvas(1200,400);
  thickness=random(22,83);
  wall = createSprite(1000,200,60,thickness,height/2);
  bullet = createSprite(50,200,50,50);
 wall.shapeColor = "red";
 bullet.shapeColor = "blue";

  speed =random(55,90);
  bullet.velocityX = speed;
  weight= random(400,1500);
}

function draw() {
  background(255,255,255);
  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5* weight *speed*speed/(thickness * thickness* thickness);

    if(damage>10)
    {
      wall.shapeColor = color(255,0,0);

    }
if(damage<10)
{
  wall.shapeColor = color(0,255,0);
}
  }
 
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}