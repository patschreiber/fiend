// GET CONTEXT 
const cvs = document.getElementById("game-pane");
const ctx = cvs.getContext("2d");

// LOAD SPRITE IMAGE
const sprite = new Image();
sprite.src = "src/lib/data/spritemap.png";

const bg = {
  sX : 0,
  sY : 0,
  w : 275,
  h : 226,
  x : 0,
  y : cvs.height - 226,

  draw : function() {
    ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
  }
}

function update() {

}

function draw() {
  bg.draw();
}

function gameLoop() {
  update();
  draw();

  requestAnimationFrame(gameLoop);
}

gameLoop();