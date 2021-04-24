var hypnoticBall, database;
var position;
var canvas;
var gameState =0;
var backgroundImg;
var form,player,game;
var playerCount
var allPlayers

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);
 game = new Game()
 game.getState()
 game.start()
 
  
}

function draw(){
  background("white");
  
   if(playerCount === 4){
     game.update(1)
   }
   if(gameState === 1){
     clear()
     game.play()
   }
  
}

