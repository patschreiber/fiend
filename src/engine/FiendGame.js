/**
 * The Game superclass. Operations to act upon the main game thread are found
 * here.
 */
class FiendGame {'use strict';
  constructor() {
    /**
     * The ID returned from our main loop's most recent call to
     * requestAnimationFrame(). The token can then be used when we call
     * cancelAnimationFrame() to stop the main loop by telling the browser to
     * cancel the request that corresponds to our token.
     */
    this.stopToken = null;
  }

  stopMainLoop() {
    window.cancelAnimationFrame(this.stopToken);
    console.log("cancelled");
  }
}
