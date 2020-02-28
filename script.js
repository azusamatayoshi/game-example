let myGamePiece;
let myObstacle [];

function startGame() {
  myGamePiece = new component(30, 30, "red", 10, 120);
  myObstacle = new component(10, 200, "green", 300, 120);
  myGameArea.start();
}

let myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.frameNo =0;
    this.interval = setInterval(updateGameArea, 20);
 /* },
  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  gameOver : function() {
    clearInterval(this.interval);*/
  }
}
/*
function everyInterval(n) {
  if ((myGameArea.frameNo / n) % 1 == 0) {
      return true;}
    return false;
  }

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function() {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  this.crashWith = function(otherobj) {
    let myleft = this.x;
    let myright = this.x + (this.width);
    let mytop = this.y;
    let mybottom = this.y + (this.height);
    let otherleft = otherobj.x;
    let otherright = otherobj.x + (otherobj.width);
    let othertop = otherobj.y;
    let otherbottom = otherobj.y + (otherobj.height);
    let crash = true;
    if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
      crash = false;
    }
    return crash;
  }
    
}

function updateGameArea() {
  let x, height, gap, minHeight, maxHeight, minGap, maxGap;
  for(i = 0; i < myObstacles.length; i += 1) {
    if (myGamePiece.crashWith(myObstacle)) {
      myGameArea.gameOver();
      return;
    }
  }
  myGameArea.clear();
  myGameArea.frameNo += 1;
  if(myGameArea.frameNo == 1 || everyInterval(150)) {
    x = myGameArea.canvas.width;
    minHeight = 20;
    maxHeight = 200;
    height = Math.floor(Math.random() * (maxHeight-minHeight+1)+minHeight);
    minGap = 50;
    maxGap = 200;
    gap = Math.floor(Math.random() * (maxGap-minGap+1)+minGap);
    myObstacle.push(new component(10, height, "green", x, 0));
    myObstacle.push(new component(10, x-height-gap, "green", x, height+gap));
  }
  for( i = 0; i < myObstacles.length; i += 1) {
    myObstacle[i].x += -1;
    myObstacle[i].update();
  }
  myGamePiece.newPos();
  myGamePiece.update();
  }
}
  
function moveup() {
  myGamePiece.speedY -= 1;
}

function movedown() {
  myGamePiece.speedY += 1;
}

function moveleft() {
  myGamePiece.speedX -= 1;
}

function moveright() {
  myGamePiece.speedX += 1;
}

function stopMove() {
  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;
}
*/
