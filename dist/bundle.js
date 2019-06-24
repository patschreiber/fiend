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

},{"../entities/Enemy":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renderer = exports.Renderer = function () {
    function Renderer(context) {
        _classCallCheck(this, Renderer);

        /**
         * The empty tile value. If this value is set for a position in a map's
         * array, it will not be rendered.
         *
         * @var {integer}
         */
        this.EMPTY_TILE = 0;
        /**
         * The canvas context.
         *
         * @var {CanvasRenderingContext2D}
         */
        this.ctx = context;
        /**
         * Multiplier for x,y position to pixels. What size the tiles for the game
         * will be rendered at. Always use a power of 2 so the scaling prevents
         * blurring.
         *
         * @var {integer}
         */
        this.pixels = 32;
        /**
         * The scale at which the tile will be rendered. 1 = 1x scaling, 2 = 2x
         * scaling, etc.
         *
         * @var {integer}
         */
        this.scale = 1;
    }

    _createClass(Renderer, [{
        key: "draw",
        value: function draw() {
            // Clear the screen
            window.FG.ctx.clearRect(0, 0, window.FG.canvas.width, window.FG.canvas.height);
            this.drawTileMap(new Overworld());
            for (var i = 0; i < window.FG.gameObjectCount; i++) {
                window.FG.gameObjects[i].draw();
            }
        }
        /**
         * Renders a map according to the coordinates given in the map's file by
         * translating the coordinates to a spritesheet.
         *
         * If a tile is 32x32 pixels, the 1st tile will start at (0,0) on
         * the spritesheet, the 2nd tile will start at (32,0), the 34d at (64,0) and
         * so on.
         *
         * +---+---+---+---+
         * | 1 | 2 | 3 | 4 |
         * +---+---+---+---+
         * | 5 | 6 | 7 | 8 |
         * +---+---+---+---+
         *
         * 'source x' and 'source y' will get the correct coords in the image file.
         * So for our first tile, '1', drawImage will grab the subimage at (32,0).
         * drawImage would get the subimage at (64,32) for tile '7'.
         *
         * TODO  https://hashrocket.com/blog/posts/using-tiled-and-canvas-to-render-game-screens
         *
         * @param {Object} map  The map object that extends MapBase.
         */

    }, {
        key: "drawTileMap",
        value: function drawTileMap(map) {
            for (var x = 0; x < map.cols; x++) {
                for (var y = 0; y < map.rows; y++) {
                    var tile = map.getTile(x, y);
                    // Let's skip rendering empty tiles.
                    if (tile !== this.EMPTY_TILE) {
                        this.ctx.drawImage(
                        // Image Source
                        map.SM,
                        // Source x (See example in comment block)
                        (tile - 1) % map.cols * this.pixels,
                        // Source y (See example in comment block)
                        Math.floor((tile - 1) / map.rows) * this.pixels,
                        // Source width
                        this.pixels,
                        // Source height
                        this.pixels,
                        // Target x
                        x * (this.pixels * this.scale),
                        // Target y
                        y * (this.pixels * this.scale),
                        // Target width 
                        this.pixels * this.scale,
                        // Target height
                        this.pixels * this.scale);
                    }
                }
            }
        }
    }]);

    return Renderer;
}();

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import { FiendGame as FG } from "../engine/FiendGame";
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

},{}],4:[function(require,module,exports){
"use strict";

var _FiendGame = require("./engine/FiendGame");

var _Renderer = require("./engine/Renderer/Renderer");

/**
 * Starting with the semicolon is in case whatever line of code above this
 * example relied on automatic semicolon insertion (ASI). The browser could
 * accidentally think this whole example continues from the previous line. The
 * leading semicolon marks the beginning of our new line if the previous one was
 * not empty or terminated.
 */
function init() {
    // init functionality, for now
    window.FG = new _FiendGame.FiendGame(640, 480);
    window.R = new _Renderer.Renderer(window.FG.ctx);
    main(performance.now());
}
;
/**
 * Ensure the assets are loaded before we initialize the game. We do this with a
 * promise to ensure all the images are loaded and ready to be used.
 */
window.onload = function () {
    var p = F_LOADER.initAssets();
    Promise.all(p).then(function () {
        init();
    }.bind(this));
};
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
    var delta = (tFrame - window.FG.lastFrameTime) / 1000.0;
    // Keep track of when the last frame happened.
    window.FG.lastFrameTime = tFrame;
    // TODO processInput();
    window.FG.update(delta);
    window.R.draw();
}

},{"./engine/FiendGame":1,"./engine/Renderer/Renderer":2}]},{},[4])

//# sourceMappingURL=bundle.js.map
