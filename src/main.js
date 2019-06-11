/**
 * Starting with the semicolon is in case whatever line of code above this
 * example relied on automatic semicolon insertion (ASI). The browser could
 * accidentally think this whole example continues from the previous line. The
 * leading semicolon marks the beginning of our new line if the previous one was
 * not empty or terminated.
 */
;(function() {'use strict';

  let FG = new FiendGame();

  /**
   * The main game loop. We use requestAnimationFrame to be thread-safe and not
   * dominate the browser when the player blurs focus on our tab.
   *
   * @param {DOMHighResTimeStamp} tFrame The number of milliseconds since
   * navigationStart (when the previous document is unloaded.
   * window.requestAnimationFrame() always provides a DOMHighResTimeStamp to
   * callbacks as an argument when they are executed.
   */
  function main(tFrame) {
    // Store the ID returned from our main loop's most recent call to requestAnimationFrame()
    FG.stopToken = window.requestAnimationFrame(main);

    FG.stopMainLoop();
  }

  main();
})();
