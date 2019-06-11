/**
 * Starting with the semicolon is in case whatever line of code above this
 * example relied on automatic semicolon insertion (ASI). The browser could
 * accidentally think this whole example continues from the previous line. The
 * leading semicolon marks the beginning of our new line if the previous one was
 * not empty or terminated.
 */
;(function() {'use strict';

  let FG = new FiendGame();
  let R = new Renderer();

  /**
   * The main game loop. We use requestAnimationFrame to be thread-safe and not
   * dominate the browser when the player blurs focus on our tab.
   *
   * render() is passed tFrame because it is assumed that the render method will
   *          calculate how long it has been since the most recently passed
   *          update tick for extrapolation (purely cosmetic for fast devices).
   *          It draws the scene.
   *
   * update() calculates the game state as of a given point in time. It should
   *          always increment by tickLength. It is the authority for game
   *          state. It is passed the DOMHighResTimeStamp for the time it
   *          represents (which, again, is always last update + FG.tickLength
   *          unless a pause feature is added, etc.)
   *
   * init()   Performs whatever tasks are needed before the main loop must run.
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
    FG.stopToken = window.requestAnimationFrame(main);

    // Delta should be in seconds, not ms, so we divide by 1000.
    let delta = (tFrame - FG.lastTick) / 1000.0;

    FG.update(delta);
    R.render();
  }

  main(performance.now());
})();
