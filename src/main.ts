import { Enemy } from "./entities/Enemy";
import { FiendGame } from "./engine/FiendGame";
import { Renderer } from "./engine/Renderer/Renderer";

declare global {
  interface Window { 
    FG: FiendGame,
    R: Renderer,
  }
}

/**
 * Starting with the semicolon is in case whatever line of code above this
 * example relied on automatic semicolon insertion (ASI). The browser could
 * accidentally think this whole example continues from the previous line. The
 * leading semicolon marks the beginning of our new line if the previous one was
 * not empty or terminated.
 */
 function init() {

  // init functionality, for now
  window.FG = new FiendGame(640, 480);
  window.R = new Renderer(window.FG.ctx);

  main(performance.now());

};

/**
 * Ensure the assets are loaded before we initialize the game. We do this with a
 * promise to ensure all the images are loaded and ready to be used.
 */
 window.onload = function() {
  var p = F_LOADER.initAssets();
  Promise.all(p).then(function () {
    init();
  }.bind(this));
}

/**
  * The main game loop. We use requestAnimationFrame to be thread-safe and not
  * dominate the browser when the player blurs focus on our tab.
  *
  * render() is passed tFrame because it is assumed that the render method will
  *          calculate how long it has been since the most recently passed
  *          update tick for extrapolation (purely cosmetic for fast devices).
  *          It draws the scene.
  *
  * update() calculates the game state as of a given point in time.
  *
  * init()   Performs whatever tasks are needed before the main loop can run.
  *
  *
  * @param {DOMHighResTimeStamp} tFrame The number of milliseconds since
  * navigationStart (when the previous document is unloaded.
  * window.requestAnimationFrame() always provides a DOMHighResTimeStamp to
  * callbacks as an argument when they are executed.
  */
  function main(tFrame) {
  // Store the ID returned from our main loop's most recent call to
  // requestAnimationFrame().
  window.FG.stopToken = window.requestAnimationFrame(main);

  // Delta should be in seconds, not ms, so we divide by 1000.
  let delta = (tFrame - window.FG.lastFrameTime) / 1000.0;
  // Keep track of when the last frame happened.
  window.FG.lastFrameTime = tFrame;

  // TODO processInput();
  window.FG.update(delta);
  window.R.draw();
}