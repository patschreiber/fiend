import { FiendGame } from "./engine/FiendGame";
import { Loader } from "./engine/Loader";

declare global {
  interface Window { 
    FG: FiendGame,
    F_LOADER: Loader;
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
  // window.R = new Renderer(window.FG.ctx);

  // main(performance.now());

};

/**
 * Ensure the assets are loaded before we initialize the game. We do this with a
 * promise to ensure all the images are loaded and ready to be used.
 */
 window.onload = function() {
  window.F_LOADER = new Loader();

  var p = window.F_LOADER.initAssets();
  Promise.all(p).then(function () {
    init();
  }.bind(this));
}
