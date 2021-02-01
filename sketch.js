var fixedRect, movingRect;
var triangle,square,circle,hexagon;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
triangle = createSprite(600,100,80,30);
square = createSprite(300,100,50,80);
circle = createSprite(600,700,50,80);
hexagon = createSprite(700,600,40,90);
triangle.shapeColor= "green"
square.shapeColor= "green"
circle.shapeColor= "green"
hexagon.shapeColor= "green"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 if(touching(circle,movingRect)){
  movingRect.shapeColor = "red";
  circle.shapeColor = "red";  
 } 
 else{
  movingRect.shapeColor = "green";
  circle.shapeColor = "green";

 }
 if(touching(square,movingRect)){
  movingRect.shapeColor = "red";
  square.shapeColor = "red";  
 } 
 else{
  movingRect.shapeColor = "green";
  square.shapeColor = "green";

 }
 /* if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }*/
  drawSprites();
}



