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

const overworld = new Overworld();

function render() {

  for (let y=0; y<overworld.topography.length; y++) {
    for (let x=0; x<overworld.topography[y].length; x++) {
      if (overworld[y][x] === 1) {
        console.log('overworld[y][x] :', overworld[y][x]);
        bg.draw();
      }
      console.log('overworld.topography[y][x] :', overworld.topography[y][x]);
    }
  }
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
