var player, ground, door;
var jumpCase = 0;
var stage = 5;
var myTileArray = [];
var deathS, crashS, goodS, shootS, jumpS, walkS;
var i = 1;
var block, block2, block3, block4;
var bullets = [];
var enemy1, enemy2, enemy3, enemy4, enemy5, enemy6;
var enemyT = "empty";
var spike1;
var fireballs = [];
var pedstool;

var mute = false;
//var speechRec;

function preload() {

  deathS = loadSound("sound/death.wav");
  crashS = loadSound("sound/crash.wav");
  goodS = loadSound("sound/good.wav");
  jumpS = loadSound("sound/jump.wav");
  shootS = loadSound("sound/shoot.wav");
  walkS = loadSound("sound/walk_temp.wav");

}

//setup
function setup() {
  createCanvas(800, 400);
  player = new Player(20, 380);
  ground = new Ground(400, 390, 800, 20);
  block = new Block(200, 50, 50, 100, 0.6);
  block2 = new Block(350, 50, 50, 100, 1);
  block3 = new Block(500, 50, 50, 100, 1.5)
  block4 = new Block(650, 50, 50, 100, 2);
  door = new MagicDoor(780, 345);
  enemy1 = new Enemy(350);
  enemy2 = new Enemy(350)
  enemy3 = new Enemy(350)
  enemy4 = new Enemy(350)
  enemy5 = new Enemy(350)
  enemy6 = new Enemy(350)
  //fireballs = new Fireball(400, 50, 1)

  spike1 = new Spike(200, 355, 40, 50);
  pedstool = new Pedstool()

  // let lang = navigator.language || 'en-US';
  // speechRec = new p5.SpeechRec(lang, gotSpeech)

  drawTiles();

}

//draw
function draw() {
  background("#c2b280");

  //all global functions
  player.display();
  player.move();
  player.check();

  //????? find tile ????????
  if (stage === 1) {

    level1();
    door.display();

  }

  if (stage === 2) {

    level2();
    //Jump();
    door.display();

  }

  if (stage === 3) {

    level3();
    door.display();

  }

  if (stage === 4) {

    level4();
    door.display();

  }

  if (stage === 5) {
    
    level5();

  }

}

//Jump function
function keyPressed() {

  if (stage != 1) {

    if (key === " ") {
      //console.log(player.velY);
      player.up();
      jumpCase = 1;
    }
    player.velY += 1

  }

  if (stage === 3) {

    if (keyIsDown(81)) {

      bullets.push(new Bullet(player.x, player.y));

      if (mute === false) {

        shootS.play();

      }

    }

    if (keyIsDown(188)) {

      bullets[i].velX = -10;

    }

  }

}


//stage5
function level5() {
  
  ground.display();
  player.grav = 0.6;
  player.update();
  player.upForce = -10;
  player.groundC();

}

//stage4
function level4() {

  ground.display();
  player.grav = 0.6;
  player.update();
  player.upForce = -10;
  player.groundC();

  spike1.display();
  spike1.isTouching(player);

  //fireballs.display();
  //fireballs.update();
  //speechRec.start();

  if (frameCount % 60 === 0) {

    var fireball = new Fireball()
    fireball.display();
    fireballs.push(fireball);
    
    //fireballs[0].display();

  }

}

//stage3
function level3() {

  ground.display();
  player.grav = 0.6;
  player.update();
  player.upForce = -10;
  player.display();

  enemy1.display();
  enemy1.move(player);

  enemy2.display();
  enemy2.move(player);

  enemy3.display();
  enemy3.move(player);

  enemy4.display();
  enemy4.move(player);

  enemy5.display();
  enemy5.move(player);

  enemy6.display();
  enemy6.move(player);

  player.groundC();


  if (enemy1.enemyT === 0) {

    enemy1.isTouching(player);

  }

  if (enemy2.enemyT === 0) {

    enemy2.isTouching(player);

  }

  if (enemy3.enemyT === 0) {

    enemy3.isTouching(player);

  }

  if (enemy4.enemyT === 0) {

    enemy4.isTouching(player);

  }

  if (enemy5.enemyT === 0) {

    enemy5.isTouching(player);

  }

  if (enemy6.enemyT === 0) {

    enemy6.isTouching(player);

  }

  for (var i = bullets.length - 1; i >= 0; i--) {

    //console.log(bullets[i]);
    //var bullet = bullets[i];
    bullets[i].display();
    bullets[i].update();
    bullets[i].isTouching(enemy1);
    bullets[i].isTouching(enemy2);
    bullets[i].isTouching(enemy3);
    bullets[i].isTouching(enemy4);
    bullets[i].isTouching(enemy5);
    bullets[i].isTouching(enemy6);

    // if (bullets[i].offset()) {
    //   //console.log("Offset")
    //   bullets.splice(i, 1);
    // }

  }

}

//stage2
function level2() {
  ground.display();
  player.grav = 0.6;
  player.update();
  player.upForce = -10;
  //Jump();
  player.display();
  player.groundC();



  block.update();
  block.display();
  block.isTouching(player);

  block2.update();
  block2.display();
  block2.isTouching(player);

  block3.update();
  block3.display();
  block3.isTouching(player);

  block4.update();
  block4.display();
  block4.isTouching(player);
  //console.log(block.y);
  //console.log("js is broken")

}

//stage detection
function level1() {

  textSize(45);
  stroke(20);
  textFont('Georgia');
  text("Stage 1", 600, 70);
  //??level1??
  player.foward();
  player.groundC();

  player.grav = 0;
  //console.log(myTileArray.length)
  for (var i = 0; i < myTileArray.length; i++) {

    var tile = myTileArray[i];
    tile.display();

  }


  //??for loop??
  for (var i = 0; i < myTileArray.length; i++) {
    var tile = myTileArray[i]
    if (tile.isTouching(player)) {

      tile.tileColor = "green"
      player.display();

    } else {

      tile.tileColor = 255;

    }
  }
}

function drawTiles() {
  //Tiles
  var tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9, tile10, tile11, tile12, tile13, tile14, tile15, tile16, tile17, tile18, tile19;

  //making them tiles
  tile1 = new Tile(100, 70, 70, 70);

  myTileArray.push(tile1)
  tile2 = new Tile(100, 160, 70, 70);
  myTileArray.push(tile2)

  tile3 = new Tile(100, 250, 70, 70);
  myTileArray.push(tile3)

  tile4 = new gTile(190, 70, 70, 70);
  myTileArray.push(tile4)

  tile5 = new gTile(190, 160, 70, 70);
  //tile5.display();
  myTileArray.push(tile5)

  tile6 = new gTile(190, 250, 70, 70);
  //tile6.display();
  myTileArray.push(tile6)

  tile7 = new gTile(190, 340, 70, 70);
  //tile7.display();
  myTileArray.push(tile7)

  tile8 = new gTile(280, 70, 70, 70);
  //tile8.display();
  myTileArray.push(tile8)

  tile9 = new Tile(280, 160, 70, 70);
  //tile9.display();
  myTileArray.push(tile9)

  tile10 = new Tile(280, 250, 70, 70);
  //tile10.display();
  myTileArray.push(tile10)

  tile11 = new Tile(280, 340, 70, 70);
  //tile11.display();
  myTileArray.push(tile11)

  tile12 = new gTile(370, 70, 70, 70);
  //tile12.display();
  myTileArray.push(tile12)

  tile13 = new gTile(370, 160, 70, 70);
  //tile13.display();
  myTileArray.push(tile13)

  tile14 = new gTile(370, 250, 70, 70);
  //tile14.display();
  myTileArray.push(tile14)

  tile15 = new Tile(370, 340, 70, 70);
  //tile15.display();
  myTileArray.push(tile15)

  tile16 = new Tile(460, 70, 70, 70);
  //tile16.display();
  myTileArray.push(tile16)

  tile17 = new Tile(460, 160, 70, 70);
  //tile17.display();
  myTileArray.push(tile17)

  tile18 = new gTile(460, 250, 70, 70);
  //tile18.display();
  myTileArray.push(tile18)

  tile19 = new Tile(460, 340, 70, 70);
  //tile19.display();
  myTileArray.push(tile19);

}

// function gotSpeech() {

//   if (speechRec.resultValue) {

//     createP(speechRec.resultString)

//   }
//   console.log(speechRec);
// }