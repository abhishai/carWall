var fixedRect, movingRect;
var car,wall
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car=createSprite(200,300,100,20)
  wall=createSprite(700,300,100,100)
  car.shapeColor="green"
  wall.shapeColor="green"
  car.velocityX=2
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if (isTouching(car,wall)){
  car.shapeColor="red"
  wall.shapeColor="red"

}
else{
  car.shapeColor="green"
  wall.shapeColor="green"
}
  drawSprites();
}
function isTouching(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
 return true;
}
else {
return false;
}
}