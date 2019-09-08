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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AssetLoader = exports.AssetLoader = function () {
    function AssetLoader() {
        _classCallCheck(this, AssetLoader);

        this._assetList = [];
    }

    _createClass(AssetLoader, [{
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

    return AssetLoader;
}();

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FiendGame = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// Enemies
// TODO Might remove


var _InputHandler = require("./Input/InputHandler");

var _Renderer = require("./Renderer");

var _Overworld = require("../atlases/Overworld");

var _GameObject = require("./GameObject/");

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
    new _GameObject.Enemy()];
    this._currentMap = new _Overworld.Overworld();
    this.Renderer = new _Renderer.Renderer(this.ctx);
    // We need to attach the input handling to the enclosing div, since you
    // can't get a handle on `canvas` DOM element since it's not focusable.
    this.InputHandler = new _InputHandler.InputHandler();
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
      this.Renderer.drawTileMap(this._currentMap);
      this.Renderer.draw(this.gameObjectCount, this.gameObjects);
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
      this.InputHandler.handleInput();
      this.update(delta);
      this.draw(delta);
    }
  }]);

  return FiendGame;
}();

},{"../atlases/Overworld":2,"./GameObject/":8,"./Input/InputHandler":13,"./Renderer":14}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Enemy = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GameActor2 = require("./GameActor");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The Enemy class.
 */
var Enemy = exports.Enemy = function (_GameActor) {
    _inherits(Enemy, _GameActor);

    function Enemy() {
        _classCallCheck(this, Enemy);

        var _this = _possibleConstructorReturn(this, (Enemy.__proto__ || Object.getPrototypeOf(Enemy)).call(this));

        _this.name = "Black Bat";
        _this.HP = 100;
        _this.ATK = 1;
        _this.speed = 100;
        _this.position = {
            x: 0,
            y: 0
        };
        return _this;
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
}(_GameActor2.GameActor);

},{"./GameActor":6}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameActor = undefined;

var _GameObject2 = require('../GameObject');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @constructor
 * @extends [[GameObject]] The GameObject base abstract class.
 * @implements IGameActor
 */
var GameActor = exports.GameActor = function (_GameObject) {
  _inherits(GameActor, _GameObject);

  /**
   * @constructor
   */
  function GameActor() {
    _classCallCheck(this, GameActor);

    return _possibleConstructorReturn(this, (GameActor.__proto__ || Object.getPrototypeOf(GameActor)).call(this));
  }

  return GameActor;
}(_GameObject2.GameObject);

},{"../GameObject":7}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
  * The GameObject abstract class. All game entities inherit from this class.
  * On instantiation, the class will generate an auto-incrementing id for use
  * in identifying the newly-created GameObject.
  *
  * @abstract
  */
var GameObject = exports.GameObject = function () {
  /**
    * The GameObject constructor. Auto-increments the GameOject id for the new
    * GameObject being created.
    */
  function GameObject() {
    _classCallCheck(this, GameObject);

    this.id = GameObject.idIncrementor++;
  }
  /**
    * Accessor for the private member `id`.
    *
    * @returns The id of the GameObject
    */


  _createClass(GameObject, [{
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }]);

  return GameObject;
}();
/**
  * Keeps track of the `id` of the last GameObject instantiated.
  *
  * @static
  * @type {number}
  */


GameObject.idIncrementor = 1;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GameObject = require('./GameObject');

Object.keys(_GameObject).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _GameObject[key];
    }
  });
});

var _GameActor = require('./GameActor/GameActor');

Object.keys(_GameActor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _GameActor[key];
    }
  });
});

var _Enemy = require('./GameActor/Enemy');

Object.keys(_Enemy).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Enemy[key];
    }
  });
});

},{"./GameActor/Enemy":5,"./GameActor/GameActor":6,"./GameObject":7}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Command = exports.Command = function Command() {
  _classCallCheck(this, Command);
};

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoveNorthCommand = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Command2 = require("./Command");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The MoveNorthCommand class.
 */
var MoveNorthCommand = exports.MoveNorthCommand = function (_Command) {
  _inherits(MoveNorthCommand, _Command);

  function MoveNorthCommand() {
    _classCallCheck(this, MoveNorthCommand);

    return _possibleConstructorReturn(this, (MoveNorthCommand.__proto__ || Object.getPrototypeOf(MoveNorthCommand)).apply(this, arguments));
  }

  _createClass(MoveNorthCommand, [{
    key: "execute",

    /**
     * Executes the command.
     */
    value: function execute() {
      console.log("Move North!");
    }
  }]);

  return MoveNorthCommand;
}(_Command2.Command);

},{"./Command":9}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoveSouthCommand = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Command2 = require("./Command");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The MoveSouthCommand class.
 */
var MoveSouthCommand = exports.MoveSouthCommand = function (_Command) {
  _inherits(MoveSouthCommand, _Command);

  function MoveSouthCommand() {
    _classCallCheck(this, MoveSouthCommand);

    return _possibleConstructorReturn(this, (MoveSouthCommand.__proto__ || Object.getPrototypeOf(MoveSouthCommand)).apply(this, arguments));
  }

  _createClass(MoveSouthCommand, [{
    key: "execute",

    /**
     * Executes the command.
     */
    value: function execute() {
      console.log("Move South!");
    }
  }]);

  return MoveSouthCommand;
}(_Command2.Command);

},{"./Command":9}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NullCommand = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Command2 = require("./Command");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The NullCommand class.
 * This class is special in that it intentionally doesn't execute anything, in
 * so if a user doesn't have a mapped button, we don't have to check fo `null`.
 */
var NullCommand = exports.NullCommand = function (_Command) {
  _inherits(NullCommand, _Command);

  function NullCommand() {
    _classCallCheck(this, NullCommand);

    return _possibleConstructorReturn(this, (NullCommand.__proto__ || Object.getPrototypeOf(NullCommand)).apply(this, arguments));
  }

  _createClass(NullCommand, [{
    key: "execute",

    /**
     * Executes the command.
     */
    value: function execute() {}
  }]);

  return NullCommand;
}(_Command2.Command);

},{"./Command":9}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InputHandler = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NullCommand = require("./Commands/NullCommand");

var _MoveNorthCommand = require("./Commands/MoveNorthCommand");

var _MoveSouthCommand = require("./Commands/MoveSouthCommand");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The built-in control scheme types. Allows a user to change the control scheme
 * without remapping all the keys individually.
 *
 * @type {enum} ControlSchemes
 */
var ControlSchemes;
(function (ControlSchemes) {
    ControlSchemes[ControlSchemes["DEFAULT"] = 0] = "DEFAULT";
    ControlSchemes[ControlSchemes["FPS"] = 1] = "FPS";
    ControlSchemes[ControlSchemes["ONEHANDED_RIGHT"] = 2] = "ONEHANDED_RIGHT";
    ControlSchemes[ControlSchemes["ONEHANDED_LEFT"] = 3] = "ONEHANDED_LEFT";
})(ControlSchemes || (ControlSchemes = {}));
/**
 * Maps a button to a keyboard input key.
 *
 * @type {enum} Button
 */
var Button;
(function (Button) {
    Button["UP"] = "ArrowUp";
    Button["DOWN"] = "ArrowDown";
    Button["LEFT"] = "ArrowLeft";
    Button["RIGHT"] = "ArrowRight";
    Button["E"] = "e";
    Button["Q"] = "q";
    Button["BSPACE"] = "Backspace";
    Button["ENTER"] = "Enter";
    Button["SHIFT"] = "Shift";
})(Button || (Button = {}));
/**
 * The ButtonStatus enum.
 * @values
 * [PRESSED]: The button is pressed.
 * [RAISED]: The button is NOT pressed, it is raised. Also can be considered
 * "untouched" by the player.
 * [HELD]: The button is held down.
 * [RELEASED]: The button has been released from a pressed state.
 * [DISABLED]: The button has been disabled and will not fire events.
 *
 * @type {enum} ButtonStatus
 */
var ButtonStatus;
(function (ButtonStatus) {
    ButtonStatus[ButtonStatus["PRESSED"] = 0] = "PRESSED";
    ButtonStatus[ButtonStatus["RAISED"] = 1] = "RAISED";
    ButtonStatus[ButtonStatus["HELD"] = 2] = "HELD";
    ButtonStatus[ButtonStatus["RELEASED"] = 3] = "RELEASED";
    ButtonStatus[ButtonStatus["DISABLED"] = 4] = "DISABLED";
})(ButtonStatus || (ButtonStatus = {}));
/**
 * The InputHandler class.
 */

var InputHandler = exports.InputHandler = function () {
    /**
     * The InputHandler constructor.
     * Attaches the keydown and keyup KeyboardEvent to the document.
     */
    function InputHandler() {
        var _this = this;

        _classCallCheck(this, InputHandler);

        document.addEventListener('keydown', function (event) {
            return _this.buttonPressed(event);
        }, false);
        document.addEventListener('keyup', function (event) {
            return _this.buttonReleased(event);
        }, false);
        this.inputMap = this.initInputMap();
        // TODO: This should read in user-defined input mappings, otheriwse load
        // default settings. (if user has saved control scheme, else load default)
        this.loadControlScheme(ControlSchemes.DEFAULT);
    }
    /**
     * Binds an input to a command.
     *
     * @param {KeyboardEvent} event The key to bind the event to
     * @param {Command} command The command to bind to the button
     */


    _createClass(InputHandler, [{
        key: "keyBind",
        value: function keyBind(event, command) {
            this.inputMap[event.key].command = command;
        }
        /**
         * Determins if a button was pressed. Callback for when a button is pressed by
         * the user.
         *
         * @param {KeyboardEvent} event The user interaction with a keyboard.
         */

    }, {
        key: "buttonPressed",
        value: function buttonPressed(event) {
            event.preventDefault();
            if (this.inputMap[event.key]) {
                this.inputMap[event.key].status = ButtonStatus.PRESSED;
            }
        }
        /**
         * Callback for when a button is released by the user.
         *
         * @param {KeyboardEvent} event The user interaction with a keyboard.
         */

    }, {
        key: "buttonReleased",
        value: function buttonReleased(event) {
            event.preventDefault();
            if (this.inputMap[event.key]) {
                this.inputMap[event.key].status = ButtonStatus.RAISED;
            }
        }
        /**
         * Handles user input. Runs once per game loop.
         */

    }, {
        key: "handleInput",
        value: function handleInput() {
            if (this.inputMap[Button.UP].status === ButtonStatus.PRESSED) {
                this.inputMap[Button.UP].command.execute();
            }
            if (this.inputMap[Button.DOWN].status === ButtonStatus.PRESSED) {
                this.inputMap[Button.DOWN].command.execute();
            }
            if (this.inputMap[Button.LEFT].status === ButtonStatus.PRESSED) {
                this.inputMap[Button.LEFT].command.execute();
            }
            if (this.inputMap[Button.RIGHT].status === ButtonStatus.PRESSED) {
                this.inputMap[Button.RIGHT].command.execute();
            }
            if (this.inputMap[Button.E].status === ButtonStatus.PRESSED) {
                this.inputMap[Button.E].command.execute();
            }
            if (this.inputMap[Button.Q].status === ButtonStatus.PRESSED) {
                this.inputMap[Button.Q].command.execute();
            }
            if (this.inputMap[Button.BSPACE].status === ButtonStatus.PRESSED) {
                this.inputMap[Button.BSPACE].command.execute();
            }
            if (this.inputMap[Button.ENTER].status === ButtonStatus.PRESSED) {
                this.inputMap[Button.ENTER].command.execute();
            }
            if (this.inputMap[Button.SHIFT].status === ButtonStatus.PRESSED) {
                this.inputMap[Button.SHIFT].command.execute();
            }
        }
        /**
         * Initializes an input map so the structure is available when needed.
         *
         * @return {IInputMap} The IInputMap interface.
         */

    }, {
        key: "initInputMap",
        value: function initInputMap() {
            var ip = {};
            for (var buttonKey in Button) {
                ip[Button[buttonKey]] = {
                    command: _NullCommand.NullCommand,
                    status: ButtonStatus.RAISED
                };
            }
            return ip;
        }
        /**
         * Loads a control scheme when the game first initializes, so the player can
         * have some input. Supports multiple control schemes so players can re-map
         * controls without having to re-map each button individually.
         *
         * @param controlScheme
         */

    }, {
        key: "loadControlScheme",
        value: function loadControlScheme(controlScheme) {
            switch (controlScheme) {
                case 1:
                    break;
                default:
                    // this.inputMap[Button.UP].command = new MoveNorthCommand(player: GameActor);
                    this.inputMap[Button.UP].command = new _MoveNorthCommand.MoveNorthCommand();
                    this.inputMap[Button.DOWN].command = new _MoveSouthCommand.MoveSouthCommand();
                    this.inputMap[Button.LEFT].command = new _NullCommand.NullCommand();
                    this.inputMap[Button.RIGHT].command = new _NullCommand.NullCommand();
                    this.inputMap[Button.E].command = new _NullCommand.NullCommand();
                    this.inputMap[Button.Q].command = new _NullCommand.NullCommand();
                    this.inputMap[Button.BSPACE].command = new _NullCommand.NullCommand();
                    this.inputMap[Button.ENTER].command = new _NullCommand.NullCommand();
                    this.inputMap[Button.SHIFT].command = new _NullCommand.NullCommand();
            }
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

},{"./Commands/MoveNorthCommand":10,"./Commands/MoveSouthCommand":11,"./Commands/NullCommand":12}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
"use strict";

var _FiendGame = require("./engine/FiendGame");

var _AssetLoader = require("./engine/AssetLoader");

/**
 * Load a new instance of FiendGame, which loads the game.
 */
function init() {
    // init functionality, for now
    new _FiendGame.FiendGame(640, 480);
}
;
/**
 * Ensure the assets are loaded before we initialize the game. We do this with a
 * promise to ensure all the images are loaded and ready to be used.
 * TODO Make this better, more TypeScript-y.
 */
window.onload = function () {
    window.F_LOADER = new _AssetLoader.AssetLoader();
    var p = window.F_LOADER.initAssets();
    Promise.all(p).then(function () {
        init();
    });
};

},{"./engine/AssetLoader":3,"./engine/FiendGame":4}]},{},[15])

//# sourceMappingURL=bundle.js.map
