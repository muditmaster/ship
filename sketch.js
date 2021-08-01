var ship, ship_running;
var sea, seaImage;
function preload(){
    ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
    seaImage = loadImage("sea.png");   
}
function setup(){
  createCanvas(1000,800);
  sea = createSprite(200,200,100,100);
  sea.addImage("sea",seaImage);
  
   ship = createSprite(290,290,100,100);
  ship.addAnimation("running", ship_running);
  ship.scale = 0.3;
}
function draw() {
  background(220);
  sea.velocityX = -4;
   if(sea.x < 0){
    sea.x = width/2;
   } 
drawSprites();   
}
