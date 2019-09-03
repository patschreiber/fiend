(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MapBase = exports.MapBase = function () {
    function MapBase() {
        _classCallCheck(this, MapBase);

        this.cols = 0;
        this.rows = 0;
        this.tsize = 0;
        this.tiles = null;
    }
    /**
     * Gets the tile value located by the column and row (x,y) coordinates.
     * This is trivial with a 2D array, but this method allows us to use a 1D
     * array instead.
     *
     * @param {integer} x   The x-axis position of the requested tile.
     * @param {integer} y   The y-axis position of the requested tile.
     */


    _createClass(MapBase, [{
        key: "getTile",
        value: function getTile(x, y) {
            if (this.cols === 0 || this.rows === 0 || this.tsize === 0) {
                throw new Error("Map size needs to have proper dimensions.");
            }
            return this.tiles[y * this.cols + x];
        }
    }]);

    return MapBase;
}();

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Overworld = undefined;

var _MapBase2 = require("./MapBase");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Overworld = exports.Overworld = function (_MapBase) {
    _inherits(Overworld, _MapBase);

    function Overworld() {
        _classCallCheck(this, Overworld);

        /**
         * The spritemap to be used.
         * @var {HTMLImageElement}
         */
        var _this = _possibleConstructorReturn(this, (Overworld.__proto__ || Object.getPrototypeOf(Overworld)).call(this));

        _this.SM = window.F_LOADER.getImage('TESTNUMBERED');
        _this.cols = 20;
        _this.rows = 15;
        _this.tsize = 300;
        _this.tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10];
        _this.layers = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
        return _this;
    }

    return Overworld;
}(_MapBase2.MapBase);

},{"./MapBase":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FiendGame = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// Enemies
// TODO This might change


var _InputHandler = require("./Input/InputHandler");

var _Renderer = require("./Renderer");

var _Overworld = require("../atlases/Overworld");

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
     * The list of active game objects to be updated each frame.
     */
    this.gameObjects = [
    // TODO This is a test, do should be empty on init.
    new _Enemy.Enemy()];
    this._currentMap = new _Overworld.Overworld();
    this._renderer = new _Renderer.Renderer(this.ctx);
    // We need to attach the input handling to the enclosing div, since you 
    // can't get a handle on `canvas` DOM element since it's not focusable. 
    this.inputHandler = new _InputHandler.InputHandler(this.container);
    console.log('this.inputHandler :', this.inputHandler);
    // Let's kick off the game loop!
    this.main(performance.now());
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
      // TODO Remove clog. 
      // console.log('delta :', delta);
      for (var i = 0; i < this.gameObjectCount; i++) {
        this.gameObjects[i].update(delta);
      }
      this.gameObjectCount = this.gameObjects.length;
    }
  }, {
    key: "draw",
    value: function draw(delta) {
      // Clear the screen
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      // Always store the texture in a var so we don't call "new Foo()" multiple
      // times a second. 
      this._renderer.drawTileMap(this._currentMap);
      this._renderer.draw(this.gameObjectCount, this.gameObjects);
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

  }, {
    key: "main",
    value: function main(tFrame) {
      // Store the ID returned from our main loop's most recent call to
      // requestAnimationFrame().
      this.stopToken = window.requestAnimationFrame(this.main.bind(this));
      // Delta should be in seconds, not ms, so we divide by 1000.
      var delta = (tFrame - this.lastFrameTime) / 1000.0;
      // Keep track of when the last frame happened.
      this.lastFrameTime = tFrame;
      // TODO processInput();
      this.update(delta);
      this.draw(delta);
    }
  }]);

  return FiendGame;
}();

},{"../atlases/Overworld":2,"../entities/Enemy":7,"./Input/InputHandler":4,"./Renderer":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputHandler = exports.InputHandler = function () {
    function InputHandler(gameDiv) {
        var _this = this;

        _classCallCheck(this, InputHandler);

        this._gameContainerElement = gameDiv;
        // this.keyboardEventListener = () => this.handleInput(); 
        document.getElementById("fiend-game").addEventListener('keydown', function (event) {
            return _this.handleInput(event);
        });
    }

    _createClass(InputHandler, [{
        key: "execute",
        value: function execute() {
            throw new Error("Abstract method!");
        }
        /**
         *
         * @param {KeyboardEvent} event The user interaction with a keyboard.
         * Deprecates event keyCode.
         */

    }, {
        key: "handleInput",
        value: function handleInput(event) {
            console.log("hi");
            console.log('event.key :', event.keyCode);
        }
    }]);

    return InputHandler;
}();
// var key = {
//   BACKSPACE: 8,
//   TAB:       9,
//   RETURN:   13,
//   ESC:      27,
//   SPACE:    32,
//   PAGEUP:   33,
//   PAGEDOWN: 34,
//   END:      35,
//   HOME:     36,
//   LEFT:     37,
//   UP:       38,
//   RIGHT:    39,
//   DOWN:     40,
//   INSERT:   45,
//   DELETE:   46,
//   ZERO:     48, ONE: 49, TWO: 50, THREE: 51, FOUR: 52, FIVE: 53, SIX: 54, SEVEN: 55, EIGHT: 56, NINE: 57,
//   A:        65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90,
//   TILDA:    192
// };

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Loader = exports.Loader = function () {
    function Loader() {
        _classCallCheck(this, Loader);

        this._assetList = [];
    }

    _createClass(Loader, [{
        key: "initAssets",
        value: function initAssets() {
            return [this.loadImage("testTileset", "./DAT/1bittest.png"), this.loadImage("testTileset2", "./DAT/psychic-swamp.png"), this.loadImage("TESTORIG", "./DAT/low-res-spritesheet.png"), this.loadImage("TESTNUMBERED", "./DAT/pixel_art_tileset_test.png")];
        }
    }, {
        key: "loadImage",
        value: function loadImage(key, src) {
            var img = new Image();
            var d = new Promise(function (resolve, reject) {
                img.onload = function () {
                    this._assetList[key] = img;
                    resolve(img);
                }.bind(this);
                img.onerror = function () {
                    reject('Could not load image: ' + src);
                };
            }.bind(this));
            img.src = src;
            return d;
        }
    }, {
        key: "getImage",
        value: function getImage(key) {
            return key in this._assetList ? this._assetList[key] : null;
        }
    }]);

    return Loader;
}();

},{}],6:[function(require,module,exports){
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
        value: function draw(gameObjectCount, gameObjects) {
            for (var i = 0; i < gameObjectCount; i++) {
                gameObjects[i].draw(this.ctx);
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

},{}],7:[function(require,module,exports){
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
        value: function draw(ctx) {
            ctx.beginPath();
            ctx.arc(this.position.x, this.position.y, 10, 0, Math.PI * 2);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }
    }]);

    return Enemy;
}();

},{}],8:[function(require,module,exports){
"use strict";

var _FiendGame = require("./engine/FiendGame");

var _Loader = require("./engine/Loader");

/**
 * Load a new instance of FiendGame, which loads the game.
 */
function init() {
    // init functionality, for now
    window.FG = new _FiendGame.FiendGame(640, 480);
}
;
/**
 * Ensure the assets are loaded before we initialize the game. We do this with a
 * promise to ensure all the images are loaded and ready to be used.
 * TODO Make this better, maybe in it's own class.
 */
window.onload = function () {
    document.getElementById("fiend-game").addEventListener('keydown', function (e) {
        console.log("hi");
        console.log('event.key :', e.keyCode);
    });
    window.F_LOADER = new _Loader.Loader();
    var p = window.F_LOADER.initAssets();
    Promise.all(p).then(function () {
        init();
    }.bind(this));
};

},{"./engine/FiendGame":3,"./engine/Loader":5}]},{},[8])

//# sourceMappingURL=bundle.js.map
