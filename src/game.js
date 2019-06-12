/**
 * DEPRECATED.
 */


// Requires Overworld.js


// GET CONTEXT
const cvs = document.getElementById("game-pane");
const ctx = cvs.getContext("2d");

// LOAD SPRITE IMAGE
const sprite = new Image();
sprite.src = "src/lib/data/low-res-spritesheet.png";

const bg = {
  sX : 0,     // The spritesheet coordinate to start from. "Source X"
  sY : 0,     // The spritesheet coordinate to start from. "Source Y"
  w : 32,     // The sprite width.
  h : 32,     // The sprite height.
  x : 0,      // The destination x coordinate
  y : 0,      // The destination y coordinate

  draw : function() {
    ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
  }
}

function render() {
        bg.draw();

}

function update() {

}

// function draw() {
//   bg.draw();
// }

function gameLoop() {
  update();
  bg.draw();
  render();

  requestAnimationFrame(gameLoop);
}

gameLoop();
