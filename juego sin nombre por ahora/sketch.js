var background;
var bg;
var personaje, personajeImg;
var invisible1, invisible2, invisible3, invisible4, invisible5, invisible6;
var oso, osoImg;
var manzana, manzanaImg;
var vida = 10;
var hambre = 1;
var gameState = "vivo";
function preload(){
  bg = loadImage("sprites/fondo.png");
  personajeImg = loadAnimation("sprites/moviendose1.png","sprites/moviendose2.png","sprites/moviendose3.png");
  manzanaImg = loadImage("sprites/Apple.png");
}

function setup(){
  createCanvas(600,600);
  rectMode(CENTER);
  background= createSprite(300,300);
  background.addImage(bg);
  invisible1 = createSprite(background.x,background.y,1300,10);
  fill("yellow");
  invisible2 = createSprite(600,0,10,955);
  personaje=createSprite(300,300,1,1);
  personaje.addAnimation("movimiento",personajeImg);
  manzana=createSprite(300,400,10,10);
  manzana.addImage(manzanaImg);
  hambre= 0;
}

function draw(){
  //backGround("white");
  if(keyDown("up")){
    //personaje.y= personaje.y-2;
    background.y= background.y+2;
    manzana.y= manzana.y+2;
  }
  if(keyDown("down")){
    //personaje.y= personaje.y+2;
    background.y= background.y-2;
    manzana.y= manzana.y-2;
  }
  if(keyDown("right")){
    //personaje.x= personaje.x+2;
    background.x= background.x-2;
    manzana.x= manzana.x-2;
  }
  if(keyDown("left")){
    //personaje.x= personaje.x-2;
    background.x= background.x+2;
    manzana.x= manzana.x+2;
  }
  if (vida===0||vida<0){
    gameState="muerto"
  }
  if (hambre===0||hambre<0){
    gameState="hambriento"
    vida=vida-10
  }
  if (personaje.isTouching(manzana)){
    hambre=hambre+1;
    manzana.lifetime = 0;
  }
  //console.log(gameState);
  console.log(hambre);
 drawSprites();
}