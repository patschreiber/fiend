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
     * @type {number}
     */
    this.stopToken = null;

    /**
     * How frequently the game state updates. It is 20 Hz (50ms)
     * @type {number}
     */
    this.tickLength = 50;

    /**
     * The most recently elapsed tick of the game clock.
     * @type {double} DOMHighResTimeStamp
     */
    this.lastTick = performance.now();
  }

  update(delta) {
    this.lastTick = this.lastTick + this.tickLength;
    console.log('this.lastTick :', this.lastTick);
    console.log('delta :', delta);
  }

  /**
   * Stops the main game loop.
   */
  stopMainLoop() {
    window.cancelAnimationFrame(this.stopToken);
    console.log("cancelled");
  }

}
