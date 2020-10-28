var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1700,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(30,80);
  bullet = createSprite(50, 200, 50, 10);
  wall = createSprite(1500, 200, thickness, height/2);
}

function draw() {
  background(255,255,255);  
  bullet.velocityX = speed;
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);


    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}

function hasCollided(Lbullet,Lwall){
  bulletRightEdge = Lbullet.x + Lbullet.width;
  wallLeftEdge = Lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
return false;
}
