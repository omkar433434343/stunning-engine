var gameState = 0 ;
var playerCount;
var form, player, game;
var position;
var allPlayers;
var car1,car2,car3,car4;
var cars;

function setup(){
  database = firebase.database();
  createCanvas(displayWidth,displayHeight);
  game = new Game();
  game.getstate();
  game.start();
  
}

function draw(){
  background("white");
  if (playerCount === 2){
    game.update(1);


  }
  if(gameState === 1){
    clear();
    game.play();

  }
}

