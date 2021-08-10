var trex, trex_running, edges;
var groundImage, invisibleground;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  ground=createSprite(200, 180, 400, 20)
  ground.addImage(groundImage)
  invisibleground=createSprite(200, 190, 400, 13)
  invisibleground.visible=false
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
}


function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
  console.log(trex.y)
  ground.velocityX=-6
  if(ground.x<0) {
    ground.x=ground.width/2
  }
  //jump when space key is pressed
  if(keyDown("space")&& trex.y>=150){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 1;
  
  //stop trex from falling down
  trex.collide(invisibleground)
  drawSprites();
}