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
                throw new MapDefinitionException(this, "Map size needs to have proper dimensions.");
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

var _Renderer = require("./Renderer");

var _Overworld = require("../atlases/Overworld");

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
    this.gameObjects = [
      // new Enemy(),
    ];
    this._renderer = new _Renderer.Renderer(this.ctx);
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
      for (var i = 0; i < this.gameObjectCount; i++) {
        this.gameObjects[i].update(delta);
      }
      this.gameObjectCount = this.gameObjects.length;
    }
  }, {
    key: "draw",
    value: function draw() {
      this._renderer.drawTileMap(new _Overworld.Overworld());
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
      this.draw();
    }
  }]);

  return FiendGame;
}();

},{"../atlases/Overworld":2,"./Renderer":5}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
'use strict';

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
        key: 'draw',
        value: function draw() {
            // Clear the screen
            window.FG.ctx.clearRect(0, 0, window.FG.canvas.width, window.FG.canvas.height);
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
        key: 'drawTileMap',
        value: function drawTileMap(map) {
            for (var x = 0; x < map.cols; x++) {
                for (var y = 0; y < map.rows; y++) {
                    var tile = map.getTile(x, y);
                    console.log('tile :', tile);
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

},{}],6:[function(require,module,exports){
"use strict";

var _FiendGame = require("./engine/FiendGame");

var _Loader = require("./engine/Loader");

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
    // window.R = new Renderer(window.FG.ctx);
    // main(performance.now());
}
;
/**
 * Ensure the assets are loaded before we initialize the game. We do this with a
 * promise to ensure all the images are loaded and ready to be used.
 */
window.onload = function () {
    window.F_LOADER = new _Loader.Loader();
    var p = window.F_LOADER.initAssets();
    Promise.all(p).then(function () {
        init();
    }.bind(this));
};

},{"./engine/FiendGame":3,"./engine/Loader":4}]},{},[6])

//# sourceMappingURL=bundle.js.map
