import { FiendGame } from "./engine/FiendGame";
import { AssetLoader } from "./engine/AssetLoader";

/**
 * We need some global variables so we can load the game and the assets. Let's
 * consider moving the F_LOADER to it's own class so we don't need a global for
 * the assets.
 */
declare global {
  interface Window {
    F_LOADER: AssetLoader;
  }
}

/**
 * Create a new instance of FiendGame, which loads the game.
 */
function init() {
  // Init functionality, for now.
  // `game-pane` element should be created on when a new instance of FiendGame
  // is initialized.
  new FiendGame(640, 480);

  let gamePane = document.getElementById("game-pane");

  if (gamePane === null) {
    throw new Error("The `game-pane` DOM element couldn't be found. Fiend\
    requires a DOM node with id of `game-pane` to work correctly.");
  }
  // Focus the game pane on page load.
  gamePane.focus();
}

/**
 * Ensure the assets are loaded before we initialize the game. We do this with a
 * promise to ensure all the images are loaded and ready to be used.
 * TODO Make this better, more TypeScript-y.
 */
window.onload = function () {
  window.F_LOADER = new AssetLoader();
  var p = window.F_LOADER.initAssets();
  Promise.all(p).then(() => {
    init();
  });
};
