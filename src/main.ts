import { FiendGame } from "./engine/FiendGame";
import { Loader } from "./engine/Loader";

/**
 * We need some global variables so we can load the game and the assets. Let's 
 * consider moving the F_LOADER to it's own class so we don't need a global for
 * the assets.
 */
declare global {
  interface Window { 
    FG: FiendGame,
    F_LOADER: Loader;
  }
}

/**
 * Load a new instance of FiendGame, which loads the game.
 */
function init() {

  // init functionality, for now
  window.FG = new FiendGame(640, 480);
};

/**
 * Ensure the assets are loaded before we initialize the game. We do this with a
 * promise to ensure all the images are loaded and ready to be used.
 * TODO Make this better, maybe in it's own class.
 */
 window.onload = function() {

  window.F_LOADER = new Loader();
  var p = window.F_LOADER.initAssets();
  Promise.all(p).then(function () {
    init();
  }.bind(this));
}
