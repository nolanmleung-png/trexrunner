var trex 
var score =0;
var gameOver,restart

function pre_load(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
  trex_collided = loadImage("trex_collided.png")
  ground_image = loadImage("ground2.png")

}

function setup() {

  createCanvas(600, 200);
  

  trex = createSprite(50,180,20,50);
  trex.addAnimation("running",trex_running);
  trex.addAnimation("collided",trex_collided)
  trex.scale= 0.5;

  ground = createSprite(0,190,20,20);
  trex.addAnimation("ground",ground_image);

  gameOverImg = loadImage("gameOver.png")
  restartImg =("restart.png")
  gameOver = createSprite(300,100);
  gameOver.addImage(restartImg);
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  gameOver.scale = 0.5;
  restart.scale = 0.5;

  if (gameState ==PLAY){
    score = score + Math.round(getFramRate()/60);

    if (keyDown("space"))
      trex.velocityY=-10;
  }
  trex.velocityY = trex.velcoityY+0.8;

  if (ground.x<0){
    ground.x = ground.width/2;
  }

  trex.collide(invidableGround);
  spawnClouds();
  spawnObstacles();

  if(obstaclesGroup.istouching(trex)){
    gameState = END;

  }
  ground.velocityX = -(6+3*score/100);

}





function draw() {
  background(220);
  drawSprites();
}   