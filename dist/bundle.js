(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FiendGame = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Enemy = require("../entities/Enemy");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The Game superclass. Operations to act upon the main game thread are found
 * here.
 */
var FiendGame = exports.FiendGame = function () {
  function FiendGame(gamePaneWidth, gamePaneHeight) {
    _classCallCheck(this, FiendGame);

    /**
     *
     */
    this.canvas = this.genCanvas(gamePaneWidth, gamePaneHeight);
    this.container = document.getElementById("fiend-game");
    this.container.insertBefore(this.canvas, this.container.firstChild);
    this.ctx = this.canvas.getContext('2d');
    /**t
     * Prevent anti-aliasing in the event a tile gets scaled.
     *
     * @property {CanvasRenderingContext2D.imageSmoothingEnabled}
     */
    this.ctx.imageSmoothingEnabled = false;
    /**
     * The ID returned from our main loop's most recent call to
     * requestAnimationFrame(). The token can then be used when we call
     * cancelAnimationFrame() to stop the main loop by telling the browser to
     * cancel the request that corresponds to our token.
     * @type {number}
     */
    this.stopToken = null;
    /**
     * How frequently the game state updates. It is 16.66 Hz (60ms)
     * @type {number}
     */
    this.tickLength = 60;
    /**
     * The most recently elapsed tick of the game clock.
     * @type {double} DOMHighResTimeStamp
     */
    this.lastFrameTime = 0;
    this.maxEntities = 1000;
    this.gameObjectCount = 0;
    /**
     * The list of active game objects to be updated each framr
     */
    this.gameObjects = [new _Enemy.Enemy()];
  }
  /**
   *
   * @param {integer} w The width of the canvas, in pixels.
   * @param {integer} h The height of the canvas, in pixels.
   */


  _createClass(FiendGame, [{
    key: "genCanvas",
    value: function genCanvas(w, h) {
      var canvas = document.createElement('canvas');
      canvas.id = "game-pane";
      canvas.width = w;
      canvas.height = h;
      return canvas;
    }
    /**
     * Calculates the game state as of a given point in time. It is the authority
     * for game state. The delta should be used in calculations to make the game
     * simulation framerate independent.
     *
     * @param {float} delta  The difference in time between this frame and last
     * frame, in seconds.
     */

  }, {
    key: "update",
    value: function update(delta) {
      for (var i = 0; i < this.gameObjectCount; i++) {
        this.gameObjects[i].update(delta);
      }
      this.gameObjectCount = this.gameObjects.length;
    }
    /**
     * Stops the main game loop.
     */

  }, {
    key: "stopMainLoop",
    value: function stopMainLoop() {
      window.cancelAnimationFrame(this.stopToken);
      console.log("Goodbye...");
    }
    /**
     * Attempts to gracefully tear down the game.
     */

  }, {
    key: "shutdownGame",
    value: function shutdownGame() {}
  }]);

  return FiendGame;
}();

},{"../entities/Enemy":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Enemy = exports.Enemy = function () {
    function Enemy() {
        _classCallCheck(this, Enemy);

        this.HP = 100;
        this.ATK = 1;
        this.speed = 100;
        this.position = {
            x: 0,
            y: 0
        };
    }

    _createClass(Enemy, [{
        key: "update",
        value: function update(delta) {
            this.position.x += this.speed * delta;
            this.position.y += this.speed * delta;
        }
    }, {
        key: "draw",
        value: function draw() {
            window.FG.ctx.beginPath();
            window.FG.ctx.arc(this.position.x, this.position.y, 10, 0, Math.PI * 2);
            window.FG.ctx.fillStyle = "#0095DD";
            window.FG.ctx.fill();
            window.FG.ctx.closePath();
        }
    }]);

    return Enemy;
}();

},{}],3:[function(require,module,exports){
"use strict";

var _FiendGame = require("./engine/FiendGame");

window.FG = new _FiendGame.FiendGame(640, 480);

},{"./engine/FiendGame":1}]},{},[3])

//# sourceMappingURL=bundle.js.map
