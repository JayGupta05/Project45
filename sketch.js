var hall1,hall2,hall3;
var rand, backsprite;
var steve,steveImg;
var logan,loganImg;
var zombie,megaZombie;
var zombImg,megaZombImg;
var score = 0;
var rect,healthBar;
var x = 20;
var barArray = [];
var zombieGroup = [];
var megaZombieGroup = [];
var y = [];
var z = [];

function preload(){
  hall1 = loadImage("images/1.png");
  hall2 = loadImage("images/2.png");
  hall3 = loadImage("images/3.png");
  steveImg = loadImage("images/playingCharacter.jpg");
  loganImg = loadImage("images/supportingNPC.jpg");
  zombImg = loadImage("images/zombies.png");
  megaZombImg = loadImage("images/megaZombies.jpg");
}

function setup(){
  createCanvas(displayWidth,displayHeight-100);
  backsprite = createSprite(0,(displayHeight-100)/2,displayWidth,displayHeight);  
  backsprite.addImage("1",hall1);
  backsprite.addImage("2",hall2);
  backsprite.addImage("3",hall3);
  backsprite.velocityX = -5;
  rect = createSprite(80,40,150,50);
  rect.shapeColor = "white";

  steve = new Steve(300,300);
  logan = new Logan(150,300);

  for(var i = 0; i < 10; i++){
    healthBar = new HealthBar(x,40);
    x=x+13;
    barArray.push(healthBar);
  }

}

function draw(){
  if(frameCount % 2000 === 0){
    rand = Math.round(random(1,3));
    console.log(rand);
    backsprite.x = backsprite.width/2;
    switch(rand){
      case 1 : backsprite.changeAnimation("1");
      break;
      case 2 : backsprite.changeAnimation("2",);
      break;
      case 3 : backsprite.changeAnimation("3");
      break;
    }
  }     
  
  if(backsprite.x<=0){
    backsprite.x = backsprite.width/2;
  }

  if(frameCount % 100 === 0){
    zombie = new Zombies();
    zombie.displayZombie();
    zombieGroup.push(zombie);
  }

  if(frameCount % 500 === 0){
    megaZombie = new Zombies();
    megaZombie.display();
    megaZombieGroup.push(megaZombie);
  }

  for(var i = 0; i < zombieGroup.length; i++){
    if(zombieGroup[i].body.x < displayWidth/2 - 300){
      zombieGroup[i].body.velocityX = 0;
      y.push(zombieGroup[i]);
    }
  }

  for(var i = 0; i < megaZombieGroup.length; i++){
    if(megaZombieGroup[i].character.x < displayWidth/2 - 350){
      megaZombieGroup[i].character.velocityX = 0;
      z.push(megaZombieGroup[1]);
    }
  }

  steve.display();
  logan.display();
  steve.move();

  logan.body.x = steve.character.x-150;
  logan.body.y = steve.character.y;
  
  drawSprites();
}