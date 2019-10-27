(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapBase = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MapBase =
/*#__PURE__*/
function () {
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

exports.MapBase = MapBase;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overworld = void 0;

var _MapBase2 = require("./MapBase");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Overworld =
/*#__PURE__*/
function (_MapBase) {
  _inherits(Overworld, _MapBase);

  function Overworld() {
    var _this;

    _classCallCheck(this, Overworld);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Overworld).call(this));
    /**
     * The spritemap to be used.
     * @var {HTMLImageElement}
     */

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

exports.Overworld = Overworld;

},{"./MapBase":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssetLoader = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AssetLoader =
/*#__PURE__*/
function () {
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

exports.AssetLoader = AssetLoader;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Command = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The Command class.
 * @abstract
 */
var Command = function Command() {
  _classCallCheck(this, Command);
};

exports.Command = Command;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoveEastCommand = void 0;

var _Command2 = require("./Command");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The MoveEastCommand class.
 */
var MoveEastCommand =
/*#__PURE__*/
function (_Command) {
  _inherits(MoveEastCommand, _Command);

  function MoveEastCommand() {
    _classCallCheck(this, MoveEastCommand);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoveEastCommand).apply(this, arguments));
  }

  _createClass(MoveEastCommand, [{
    key: "execute",

    /**
     * Executes the command.
     *
     * @param actor The GameActor to command.
     * @param delta The game's delta between frames.
     */
    value: function execute(actor, delta) {
      actor.moveE(delta);
    }
  }]);

  return MoveEastCommand;
}(_Command2.Command);

exports.MoveEastCommand = MoveEastCommand;

},{"./Command":4}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoveNorthCommand = void 0;

var _Command2 = require("./Command");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The MoveNorthCommand class.
 */
var MoveNorthCommand =
/*#__PURE__*/
function (_Command) {
  _inherits(MoveNorthCommand, _Command);

  function MoveNorthCommand() {
    _classCallCheck(this, MoveNorthCommand);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoveNorthCommand).apply(this, arguments));
  }

  _createClass(MoveNorthCommand, [{
    key: "execute",

    /**
     * Executes the command.
     *
     * @param actor The GameActor to command.
     * @param delta The game's delta between frames.
     */
    value: function execute(actor, delta) {
      actor.moveN(delta);
    }
  }]);

  return MoveNorthCommand;
}(_Command2.Command);

exports.MoveNorthCommand = MoveNorthCommand;

},{"./Command":4}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoveSouthCommand = void 0;

var _Command2 = require("./Command");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The MoveSouthCommand class.
 */
var MoveSouthCommand =
/*#__PURE__*/
function (_Command) {
  _inherits(MoveSouthCommand, _Command);

  function MoveSouthCommand() {
    _classCallCheck(this, MoveSouthCommand);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoveSouthCommand).apply(this, arguments));
  }

  _createClass(MoveSouthCommand, [{
    key: "execute",

    /**
     * Executes the command.
     *
     * @param actor The GameActor to command.
     * @param delta The game's delta between frames.
     */
    value: function execute(actor, delta) {
      actor.moveS(delta);
    }
  }]);

  return MoveSouthCommand;
}(_Command2.Command);

exports.MoveSouthCommand = MoveSouthCommand;

},{"./Command":4}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoveWestCommand = void 0;

var _Command2 = require("./Command");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The MoveWestCommand class.
 */
var MoveWestCommand =
/*#__PURE__*/
function (_Command) {
  _inherits(MoveWestCommand, _Command);

  function MoveWestCommand() {
    _classCallCheck(this, MoveWestCommand);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoveWestCommand).apply(this, arguments));
  }

  _createClass(MoveWestCommand, [{
    key: "execute",

    /**
     * Executes the command.
     *
     * @param actor The GameActor to command.
     * @param delta The game's delta between frames.
     */
    value: function execute(actor, delta) {
      actor.moveW(delta);
    }
  }]);

  return MoveWestCommand;
}(_Command2.Command);

exports.MoveWestCommand = MoveWestCommand;

},{"./Command":4}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NullCommand = void 0;

var _Command2 = require("./Command");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The NullCommand class.
 * This class is special in that it intentionally doesn't execute anything, in
 * so if a user doesn't have a mapped button, we don't have to check fo `null`.
 */
var NullCommand =
/*#__PURE__*/
function (_Command) {
  _inherits(NullCommand, _Command);

  function NullCommand() {
    _classCallCheck(this, NullCommand);

    return _possibleConstructorReturn(this, _getPrototypeOf(NullCommand).apply(this, arguments));
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

exports.NullCommand = NullCommand;

},{"./Command":4}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Command = require("./Command");

Object.keys(_Command).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Command[key];
    }
  });
});

var _NullCommand = require("./NullCommand");

Object.keys(_NullCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _NullCommand[key];
    }
  });
});

var _MoveNorthCommand = require("./MoveNorthCommand");

Object.keys(_MoveNorthCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MoveNorthCommand[key];
    }
  });
});

var _MoveSouthCommand = require("./MoveSouthCommand");

Object.keys(_MoveSouthCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MoveSouthCommand[key];
    }
  });
});

var _MoveEastCommand = require("./MoveEastCommand");

Object.keys(_MoveEastCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MoveEastCommand[key];
    }
  });
});

var _MoveWestCommand = require("./MoveWestCommand");

Object.keys(_MoveWestCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MoveWestCommand[key];
    }
  });
});

},{"./Command":4,"./MoveEastCommand":5,"./MoveNorthCommand":6,"./MoveSouthCommand":7,"./MoveWestCommand":8,"./NullCommand":9}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Component class
 * @abstract
 */
var Component =
/*#__PURE__*/
function () {
  function Component() {
    _classCallCheck(this, Component);
  }

  _createClass(Component, [{
    key: "getTypeId",

    /**
     * Accessor for the private member `typeId`.
     *
     * @returns The type id the Component.
     */
    value: function getTypeId() {
      return this.typeId;
    }
  }]);

  return Component;
}();

exports.Component = Component;

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventComponent = void 0;

var _Component2 = require("./Component");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The EventComponent class.
 * @implements [[IEventComponent]]
 */
var EventComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(EventComponent, _Component);

  /**
   * @constructor
   */
  function EventComponent() {
    var _this;

    _classCallCheck(this, EventComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EventComponent).call(this));
    _this.typeId = "EventComponent"; // We need to declare this as an object otherwise we get a reference error
    // when we try and assign events to it in the `attach` and `attachMultiple`
    // methods.

    _this.attachedEvents = {};
    return _this;
  }
  /**
   * Attaches a single event to this component. Attached components can be
   * emitted.
   *
   * @param event An `Event` or `CustomEvent` that this EventComponent knows
   * about.
   */


  _createClass(EventComponent, [{
    key: "attach",
    value: function attach(event) {
      this.attachedEvents[event.type] = event;
    }
    /**
     * Adds DOM Events to this component via an array of events.
     *
     * @param events The array of events to add.
     */

  }, {
    key: "attachMultiple",
    value: function attachMultiple(eventList) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = eventList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var event = _step.value;
          this.attach(event);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
    /**
     * Emits an event via the `game-pane` DOM element. Uses the string name of the
     * event to lookup if it's in the attachedEvent member.
     *
     * @param eventName The event to emit.
     */

  }, {
    key: "emit",
    value: function emit(eventName) {
      document.getElementById('game-pane').dispatchEvent(this.attachedEvents[eventName]);
    }
  }]);

  return EventComponent;
}(_Component2.Component);

exports.EventComponent = EventComponent;

},{"./Component":11}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LifeforceComponent = void 0;

var _Component2 = require("./Component");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The Lifeforce component. Adds health to a GameObject. Adds life, health
 * regeneration, and death.
 *
 * This component is required for entities to be alive or dead, as well as take
 * damage.
 *
 * @extends [[Component]]
 */
var LifeforceComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(LifeforceComponent, _Component);

  /**
   * @constructor
   */
  function LifeforceComponent() {
    var _this;

    _classCallCheck(this, LifeforceComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LifeforceComponent).call(this));
    _this.typeId = "LifeforceComponent";
    return _this;
  }
  /**
   * Update is intended to be run once per frame.
   *
   * @param GO The GameObject this component belongs to.
   */


  _createClass(LifeforceComponent, [{
    key: "update",
    value: function update(GO) {}
  }]);

  return LifeforceComponent;
}(_Component2.Component);

exports.LifeforceComponent = LifeforceComponent;

},{"./Component":11}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MovementComponent = void 0;

var _Component2 = require("./Component");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The Movement component. Adds movement to a GameObject.
 *
 * This component is required for entities to be able to move around the world.
 *
 * @extends [[Component]]
 */
var MovementComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(MovementComponent, _Component);

  /**
   * @constructor
   */
  function MovementComponent() {
    var _this;

    _classCallCheck(this, MovementComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MovementComponent).call(this));
    _this.typeId = "MovementComponent";
    _this.speed = 100;
    return _this;
  }
  /**
   * Move the Actor north.
   * @param delta The game's delta between frames.
   */


  _createClass(MovementComponent, [{
    key: "moveN",
    value: function moveN(actor, delta) {
      // Decrementing {y} makes the actor move south, since we're dealing with a
      // 2D array and not an actual mathematical grid plane.
      actor.position.y -= this.speed * delta;
    }
    /**
     * Move the Actor south.
     *
     * @param delta The game's delta between frames.
     */

  }, {
    key: "moveS",
    value: function moveS(actor, delta) {
      // Increasing {y} makes the actor move south, since we're dealing with a 2D
      // array and not an actual mathematical grid plane.
      actor.position.y += this.speed * delta;
    }
    /**
     * Move the Actor east.
     *
     * @param delta The game's delta between frames.
     */

  }, {
    key: "moveE",
    value: function moveE(actor, delta) {
      actor.position.x += this.speed * delta;
    }
    /**
     * Move the Actor west.
     *
     * @param delta The game's delta between frames.
     */

  }, {
    key: "moveW",
    value: function moveW(actor, delta) {
      actor.position.x -= this.speed * delta;
    }
  }]);

  return MovementComponent;
}(_Component2.Component);

exports.MovementComponent = MovementComponent;

},{"./Component":11}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Component = require("./Component");

Object.keys(_Component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Component[key];
    }
  });
});

var _EventComponent = require("./EventComponent");

Object.keys(_EventComponent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _EventComponent[key];
    }
  });
});

var _LifeforceComponent = require("./LifeforceComponent");

Object.keys(_LifeforceComponent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _LifeforceComponent[key];
    }
  });
});

var _MovementComponent = require("./MovementComponent");

Object.keys(_MovementComponent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MovementComponent[key];
    }
  });
});

},{"./Component":11,"./EventComponent":12,"./LifeforceComponent":13,"./MovementComponent":14}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayerDeathEvent = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PlayerDeathEvent class.
 */
var PlayerDeathEvent =
/*#__PURE__*/
function () {
  function PlayerDeathEvent() {
    _classCallCheck(this, PlayerDeathEvent);
  }

  _createClass(PlayerDeathEvent, null, [{
    key: "create",

    /**
     * Retrieves the native ES6 CustomEvent. [[CustomEvent]] allows the attachment
     * of data via the `CustomEventInit` dictionary.
     *
     * @param player The player GameObject.
     *
     * @emits `player_died`
     */
    value: function create(player) {
      var event = new CustomEvent('player_died', {
        detail: {
          'go_id': player.getId()
        }
      });
      return event;
    }
  }]);

  return PlayerDeathEvent;
}();

exports.PlayerDeathEvent = PlayerDeathEvent;

},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PlayerDeathEvent = require("./PlayerDeathEvent");

Object.keys(_PlayerDeathEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PlayerDeathEvent[key];
    }
  });
});

},{"./PlayerDeathEvent":16}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FiendGame = void 0;

var _InputHandler = require("./Input/InputHandler");

var _Camera = require("./Render/Camera/Camera");

var _Renderer = require("./Render/Renderer");

var _sandbox = require("./development/sandbox");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Game superclass. Operations to act upon the main game thread are found
 * here.
 */
var FiendGame =
/*#__PURE__*/
function () {
  function FiendGame(gamePaneWidth, gamePaneHeight) {
    _classCallCheck(this, FiendGame);

    /**
     * Create the game pane and canvas.
     */
    this.canvas = this.genCanvas(gamePaneWidth, gamePaneHeight);
    this.container = document.getElementById("fiend-game");
    this.container.insertBefore(this.canvas, this.container.firstChild);
    this.stopToken = null;
    this.tickLength = 60;
    this.lastFrameTime = 0;
    this.maxEntities = 1000;
    this.Renderer = new _Renderer.Renderer(this.canvas);
    this.InputHandler = new _InputHandler.InputHandler();
    this.Camera = new _Camera.Camera();
    this.gameObjectCount = 0;
    this.sandbox = new _sandbox.Sandbox();
    this.Player = this.sandbox.Player; // TODO: gameObjects should be empty on init.
    // this.gameObjects = [];

    this.gameObjects = this.sandbox.testGameObjects; // LOad the test game objects
    // Let's kick off the game loop!

    this.main(performance.now());
  }
  /**
   * Generates a new canvas DOM canvas element. The game will run in this
   * canvas.
   *
   * @param {number} w The width of the canvas, in pixels.
   * @param {number} h The height of the canvas, in pixels.
   */


  _createClass(FiendGame, [{
    key: "genCanvas",
    value: function genCanvas(w, h) {
      var canvas = document.createElement('canvas');
      canvas.id = "game-pane";
      canvas.width = w;
      canvas.height = h;
      canvas.tabIndex = 1;
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
    key: "_update",
    value: function _update(delta) {
      // TODO Remove clog.
      // console.log('delta :', delta);
      for (var i = 0; i < this.gameObjectCount; i++) {
        this.gameObjects[i].update(delta);
      }

      this.gameObjectCount = this.gameObjects.length;
    }
    /**
     * Responsible for drawing the current game state to the screen.
     */

  }, {
    key: "_draw",
    value: function _draw() {
      // Draw the scene.
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
    value: function shutdownGame() {
      this.stopMainLoop();
    }
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
      this.stopToken = window.requestAnimationFrame(this.main.bind(this)); // Delta should be in seconds, not ms, so we divide by 1000.

      var delta = (tFrame - this.lastFrameTime) / 1000.0; // Keep track of when the last frame happened.

      this.lastFrameTime = tFrame;
      this.InputHandler.handleInput(this.Player, delta);

      this._update(delta);

      this._draw();
    }
  }]);

  return FiendGame;
}();

exports.FiendGame = FiendGame;

},{"./Input/InputHandler":28,"./Render/Camera/Camera":29,"./Render/Renderer":30,"./development/sandbox":31}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActorFactory = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The ActorFactory class. Used for common actors such as common enemies,
 * wildlife, generic NPCs, etc. Allows us to implement the "Type Object"
 * pattern.
 *
 * The benefit here is twofold:
 * 1) We can define the Actor's properties in an external file, say, JSON, then
 * create a new Actor with those properties when a Scene is loaded.
 * 2) We can change the type of the Actor on the fly without recreating it.
 */
var ActorFactory = function ActorFactory() {
  _classCallCheck(this, ActorFactory);
};

exports.ActorFactory = ActorFactory;

},{}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdinaryFolkFactory = void 0;

var _GameObject = require("../../../GameObject");

var _Component = require("../../../Component");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The OrdinaryFolkFactory class. This is used to spawn non-unique,
 * humanoid-like GameActors aka "Folks."
 */
var OrdinaryFolkFactory =
/*#__PURE__*/
function (_ActorFactory) {
  _inherits(OrdinaryFolkFactory, _ActorFactory);

  /**
   * @constructor
   */
  function OrdinaryFolkFactory() {
    var _this;

    _classCallCheck(this, OrdinaryFolkFactory);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OrdinaryFolkFactory).call(this));
    _this.label = "ordinary_folk";
    return _this;
  }
  /**
   * Factory method for creating a new Npc of type OrdinaryFolk.
   * For reference, check out the Type Object (factory) pattern.
   *
   * @param position The starting position of the spawned Actor.
   *
   * @return The spawned GameActor.
   */


  _createClass(OrdinaryFolkFactory, [{
    key: "spawn",
    value: function spawn(position) {
      var npc = new _GameObject.OrdinaryFolk(this, position);
      npc.addComponent(new _Component.MovementComponent());
      npc.addComponent(new _Component.LifeforceComponent());
      return npc;
    }
  }]);

  return OrdinaryFolkFactory;
}(_GameObject.ActorFactory);

exports.OrdinaryFolkFactory = OrdinaryFolkFactory;

},{"../../../Component":15,"../../../GameObject":27}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayerFactory = void 0;

var _GameObject = require("../../../GameObject");

var _Component = require("../../../Component");

var _Event = require("../../../Event");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The Player class. This is used to spawn a Player character.
 */
var PlayerFactory =
/*#__PURE__*/
function (_ActorFactory) {
  _inherits(PlayerFactory, _ActorFactory);

  /**
   * @constructor
   */
  function PlayerFactory() {
    var _this;

    _classCallCheck(this, PlayerFactory);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PlayerFactory).call(this));
    _this.label = "player_1";
    return _this;
  }
  /**
   * Factory method for creating a new Npc of type OrdinaryFolk.
   * For reference, check out the Type Object (factory) pattern.
   *
   * @param position The starting position of the spawned Actor.
   *
   * @return The spawned GameActor.
   */


  _createClass(PlayerFactory, [{
    key: "spawn",
    value: function spawn(position) {
      var player = new _GameObject.Player(this, position);
      player.addComponent(new _Component.EventComponent());
      player.addComponent(new _Component.LifeforceComponent());
      player.addComponent(new _Component.MovementComponent()); // Attach some Player-specific events.

      player.getComponent("EventComponent").attach(_Event.PlayerDeathEvent.create(player));
      return player;
    }
  }]);

  return PlayerFactory;
}(_GameObject.ActorFactory);

exports.PlayerFactory = PlayerFactory;

},{"../../../Component":15,"../../../Event":17,"../../../GameObject":27}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameActor = void 0;

var _GameObject2 = require("../../GameObject");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The base GameActor class. All GameObjects that can influence things in the
 * environment will derive from the GameActor class.
 * @abstract
 * @extends [[GameObject]] The GameObject base abstract class.
 * @implements [[IGameActor]]
 */
var GameActor =
/*#__PURE__*/
function (_GameObject) {
  _inherits(GameActor, _GameObject);

  /**
   * @constructor
   *
   * @param position The starting position of the spawned Actor.
   */
  function GameActor(position) {
    var _this;

    _classCallCheck(this, GameActor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameActor).call(this));
    _this.position = position; // We need to declare this as an object otherwise we get a reference error
    // when we try and assign Components to it with addComponent().

    _this.components = {};
    return _this;
  }
  /**
   * Adds a Component to the GameActor's `ComponentContainer`, if it's not
   * already attached.
   *
   * @param component The Component to be attached.
   *
   * @return If the Component was successfully attached or not.
   */


  _createClass(GameActor, [{
    key: "addComponent",
    value: function addComponent(component) {
      var typeId = component.getTypeId();

      if (this.hasComponent(typeId)) {
        // TODO: Make this a real exception.
        console.log('addComponentError :', "A ".concat(typeId, " Component is already attached to this GameActor(id:").concat(this.getId(), ")"));
        return false;
      }

      this.components[typeId] = component;
      return true;
    }
    /**
     * Removes a Component from the GameActor's `ComponentContainer`, if it's
     * attached.
     *
     * @param key The lookup key for the Component to be removed from this
     * GameActor. Usually this is the Component's `typeId` as a string.
     *
     * @return If the Component was successfully removed or not.
     */

  }, {
    key: "removeComponent",
    value: function removeComponent(key) {
      if (this.hasComponent(key)) {
        delete this.components[key];
        return true;
      } // TODO: Make this a real exception.


      console.log('removeComponentError :', "Cannot remove Component ".concat(key, " since one's not attached to this GameActor(id:").concat(this.getId(), ")"));
    }
    /**
     * Checks to see if a Component is attached to this GameActor via the
     * `ComponentContainer` list.
     *
     * @param key The key to use as a look up. Usually this is the Component's
     * `typeId` as a string.
     *
     * @return If the Component is attached to this GameActor.
     */

  }, {
    key: "hasComponent",
    value: function hasComponent(key) {
      return this.components[key] === undefined ? false : true;
    }
    /**
     * Gets a Component attached to this GameActor.
     *
     * @see https://stackoverflow.com/questions/58573975
     *
     * @param key The key to use as a look up. Usually this is the Component's
     * `typeId` as a string. It must be a key defined in the `ComponentContainer`
     * type.
     *
     * @return The desired attached Component, or null if it's not attached.
     */

  }, {
    key: "getComponent",
    value: function getComponent(key) {
      if (this.hasComponent(key)) {
        return this.components[key];
      }

      return null;
    }
    /**
     * Retrieves the list of Components attached to this GameActor.
     *
     * @return The list of attached Components.
     */

  }, {
    key: "listComponents",
    value: function listComponents() {
      return Object.keys(this.components);
    } // TODO: Make a subclass that has movement. Not all actors will, I dont think.

  }, {
    key: "moveN",
    value: function moveN(delta) {}
  }, {
    key: "moveS",
    value: function moveS(delta) {}
  }, {
    key: "moveE",
    value: function moveE(delta) {}
  }, {
    key: "moveW",
    value: function moveW(delta) {}
  }]);

  return GameActor;
}(_GameObject2.GameObject);

exports.GameActor = GameActor;

},{"../../GameObject":27}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Npc = void 0;

var _GameActor2 = require("./GameActor");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The Npc class. All non-player characters are Npcs, unlike some games where
 * there is a `Monster` class for all hostile actors.The reasoning is that in
 * Fiend, any non-player character can be a friend or foe, depending on how the
 * player acts.
 */
var Npc =
/*#__PURE__*/
function (_GameActor) {
  _inherits(Npc, _GameActor);

  /**
   * @constructor
   *
   * @param actorType The Actor's type.
   * @param position The starting position of the spawned Actor.
   */
  function Npc(actorType, position) {
    var _this;

    _classCallCheck(this, Npc);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Npc).call(this, position));
    _this._type = actorType;
    return _this;
  }
  /**
   * The update method for the Npc class.
   *
   * @param delta The time difference between frames. Provided by the game's
   * main game loop.
   * @see FiendGame.main()
   */


  _createClass(Npc, [{
    key: "update",
    value: function update(delta) {}
  }]);

  return Npc;
}(_GameActor2.GameActor);

exports.Npc = Npc;

},{"./GameActor":22}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdinaryFolk = void 0;

var _GameObject = require("../../GameObject");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The OrdinaryFolk class. Ordinary Folks are generally benign NPCs to populate
 * the world.
 */
var OrdinaryFolk =
/*#__PURE__*/
function (_Npc) {
  _inherits(OrdinaryFolk, _Npc);

  /**
   * @constructor
   *
   * @param actorType The Actor's type.
   * @param position The starting position of the spawned Actor.
   */
  function OrdinaryFolk(actorType, position) {
    _classCallCheck(this, OrdinaryFolk);

    return _possibleConstructorReturn(this, _getPrototypeOf(OrdinaryFolk).call(this, actorType, position));
  }
  /**
   * The update method for the Npc class.
   *
   * @param delta The time difference between frames. Provided by the game's
   * main game loop.
   * @see FiendGame.main()
   */


  _createClass(OrdinaryFolk, [{
    key: "update",
    value: function update(delta) {}
    /**
     * Draws the NPC entity.
     * TODO: This should be moved to the Render component once it's done.
     *
     * @param ctx The canvas context.
     */

  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.beginPath();
      ctx.rect(this.position.x, this.position.y, 20, 20);
      ctx.fillStyle = "#FF0000";
      ctx.fill();
      ctx.closePath();
    }
  }]);

  return OrdinaryFolk;
}(_GameObject.Npc);

exports.OrdinaryFolk = OrdinaryFolk;

},{"../../GameObject":27}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Player = void 0;

var _GameObject = require("../../GameObject");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The Player class. Keeps track of the state of the player including all
 * attributes and stats.
 *
 * @abstract
 * @extends [[GameActor]] The GameObject base abstract class.
 * @implements [[IPlayer]]
 */
var Player =
/*#__PURE__*/
function (_GameActor) {
  _inherits(Player, _GameActor);

  /**
   * @constructor
   *
   * @param actorType The Actor's type.
   * @param position The starting position of the Player.
   */
  function Player(actorType, position) {
    var _this;

    _classCallCheck(this, Player);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Player).call(this, position));
    _this._type = actorType;
    return _this;
  }
  /**
   * Updates the Player's state. Intended to be run in the main game loop.
   *
   * @param delta The time difference between frames. Provided by the game's
   * main game loop.
   * @see FiendGame.main()
   */


  _createClass(Player, [{
    key: "update",
    value: function update(delta) {} // this._eventComponent.emit('player_died');
    // TODO: console.log('this.position :', this.position);

    /**
     * Draws the Player entity
     *
     * @param ctx The canvas context.
     */

  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.position.x, this.position.y, 10, 0, Math.PI * 2);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }
    /**
     *    |               .    ||
     *   |||      ....  .||.  ...    ...   .. ...    ....
     *  |  ||   .|   ''  ||    ||  .|  '|.  ||  ||  ||. '
     *  .''''|.  ||       ||    ||  ||   ||  ||  ||  . '|..
     * .|.  .||.  '|...'  '|.' .||.  '|..|' .||. ||. |'..|'
     */

    /**
     * Move the Player north.
     *
     * @param delta The game's delta between frames.
     */

  }, {
    key: "moveN",
    value: function moveN(delta) {
      if (this.hasComponent("MovementComponent")) {
        this.getComponent("MovementComponent").moveN(this, delta);
      }
    }
    /**
     * Public API for the MovementComponent
     *
     * @param delta The game's delta between frames.
     */

  }, {
    key: "moveS",
    value: function moveS(delta) {
      if (this.hasComponent("MovementComponent")) {
        this.getComponent("MovementComponent").moveS(this, delta);
      }
    }
    /**
     * Move the Player east.
     *
     * @param delta The game's delta between frames.
     */

  }, {
    key: "moveE",
    value: function moveE(delta) {
      if (this.hasComponent("MovementComponent")) {
        this.getComponent("MovementComponent").moveE(this, delta);
      }
    }
    /**
     * Move the Player west.
     *
     * @param delta The game's delta between frames.
     */

  }, {
    key: "moveW",
    value: function moveW(delta) {
      if (this.hasComponent("MovementComponent")) {
        this.getComponent("MovementComponent").moveW(this, delta);
      }
    }
  }]);

  return Player;
}(_GameObject.GameActor);

exports.Player = Player;

},{"../../GameObject":27}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameObject = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GameObject abstract class. All game entities inherit from this class.
 * On instantiation, the class will generate an auto-incrementing id for use
 * in identifying the newly-created GameObject.
 *
 * @abstract
 */
var GameObject =
/*#__PURE__*/
function () {
  /**
   * @constructor
   * Auto-increments the GameOject id for the new GameObject being created.
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
 * @var idIncrementor Keeps track of the `id` of the last GameObject
 instantiated.
 *
 * @static
 */


exports.GameObject = GameObject;
GameObject.idIncrementor = 1;

},{}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GameObject = require("./GameObject");

Object.keys(_GameObject).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _GameObject[key];
    }
  });
});

var _GameActor = require("./GameActor/GameActor");

Object.keys(_GameActor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _GameActor[key];
    }
  });
});

var _Npc = require("./GameActor/Npc");

Object.keys(_Npc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Npc[key];
    }
  });
});

var _OrdinaryFolk = require("./GameActor/OrdinaryFolk");

Object.keys(_OrdinaryFolk).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _OrdinaryFolk[key];
    }
  });
});

var _Player = require("./GameActor/Player");

Object.keys(_Player).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Player[key];
    }
  });
});

var _ActorFactory = require("./GameActor/ActorFactory/ActorFactory");

Object.keys(_ActorFactory).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ActorFactory[key];
    }
  });
});

var _OrdinaryFolkFactory = require("./GameActor/ActorFactory/OrdinaryFolkFactory");

Object.keys(_OrdinaryFolkFactory).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _OrdinaryFolkFactory[key];
    }
  });
});

var _PlayerFactory = require("./GameActor/ActorFactory/PlayerFactory");

Object.keys(_PlayerFactory).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PlayerFactory[key];
    }
  });
});

},{"./GameActor/ActorFactory/ActorFactory":19,"./GameActor/ActorFactory/OrdinaryFolkFactory":20,"./GameActor/ActorFactory/PlayerFactory":21,"./GameActor/GameActor":22,"./GameActor/Npc":23,"./GameActor/OrdinaryFolk":24,"./GameActor/Player":25,"./GameObject":26}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputHandler = void 0;

var _Command = require("../Command");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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


var InputHandler =
/*#__PURE__*/
function () {
  /**
   * The InputHandler constructor.
   * Attaches the keydown and keyup KeyboardEvent to the document.
   */
  function InputHandler() {
    var _this = this;

    _classCallCheck(this, InputHandler);

    document.getElementById('game-pane').addEventListener('keydown', function (event) {
      return _this.buttonPressed(event);
    }, false);
    document.getElementById('game-pane').addEventListener('keyup', function (event) {
      return _this.buttonReleased(event);
    }, false);
    this.inputMap = this.initInputMap(); // TODO: This should read in user-defined input mappings, otheriwse load
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
    value: function handleInput(actor, delta) {
      if (this.inputMap[Button.UP].status === ButtonStatus.PRESSED) {
        this.inputMap[Button.UP].command.execute(actor, delta);
      }

      if (this.inputMap[Button.DOWN].status === ButtonStatus.PRESSED) {
        this.inputMap[Button.DOWN].command.execute(actor, delta);
      }

      if (this.inputMap[Button.LEFT].status === ButtonStatus.PRESSED) {
        this.inputMap[Button.LEFT].command.execute(actor, delta);
      }

      if (this.inputMap[Button.RIGHT].status === ButtonStatus.PRESSED) {
        this.inputMap[Button.RIGHT].command.execute(actor, delta);
      }

      if (this.inputMap[Button.E].status === ButtonStatus.PRESSED) {
        this.inputMap[Button.E].command.execute(actor, delta);
      }

      if (this.inputMap[Button.Q].status === ButtonStatus.PRESSED) {
        this.inputMap[Button.Q].command.execute(actor, delta);
      }

      if (this.inputMap[Button.BSPACE].status === ButtonStatus.PRESSED) {
        this.inputMap[Button.BSPACE].command.execute(actor, delta);
      }

      if (this.inputMap[Button.ENTER].status === ButtonStatus.PRESSED) {
        this.inputMap[Button.ENTER].command.execute(actor, delta);
      }

      if (this.inputMap[Button.SHIFT].status === ButtonStatus.PRESSED) {
        this.inputMap[Button.SHIFT].command.execute(actor, delta);
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
          command: _Command.NullCommand,
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
          this.inputMap[Button.UP].command = new _Command.MoveNorthCommand();
          this.inputMap[Button.DOWN].command = new _Command.MoveSouthCommand();
          this.inputMap[Button.LEFT].command = new _Command.MoveWestCommand();
          this.inputMap[Button.RIGHT].command = new _Command.MoveEastCommand();
          this.inputMap[Button.E].command = new _Command.NullCommand();
          this.inputMap[Button.Q].command = new _Command.NullCommand();
          this.inputMap[Button.BSPACE].command = new _Command.NullCommand();
          this.inputMap[Button.ENTER].command = new _Command.NullCommand();
          this.inputMap[Button.SHIFT].command = new _Command.NullCommand();
      }
    }
  }]);

  return InputHandler;
}(); // var key = {
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


exports.InputHandler = InputHandler;

},{"../Command":10}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Camera = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Camera = function Camera() {
  _classCallCheck(this, Camera);
};

exports.Camera = Camera;

},{}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Renderer = void 0;

var _Overworld = require("../../atlases/Overworld");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Renderer =
/*#__PURE__*/
function () {
  function Renderer(canvas) {
    _classCallCheck(this, Renderer);

    this.canvas = canvas;
    /**
     * The canvas context.
     *
     * @var {CanvasRenderingContext2D}
     */

    this.ctx = this.canvas.getContext('2d');
    /**
     * Prevent anti-aliasing in the event a tile gets scaled.
     *
     * @property {CanvasRenderingContext2D.imageSmoothingEnabled}
     */

    this.ctx.imageSmoothingEnabled = false;
    /**
     * The empty tile value. If this value is set for a position in a map's
     * array, it will not be rendered.
     * TODO: Move this to the Scene.
     *
     * @var {integer}
     */

    this.EMPTY_TILE = 0;
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
    this._currentMap = new _Overworld.Overworld();
  }

  _createClass(Renderer, [{
    key: "draw",
    value: function draw(gameObjectCount, gameObjects) {
      // Clear the screen
      // TODO: Pull this out. Put in renderer.
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Always store the texture in a var so we don't call "new Foo()" multiple
      // times a second.

      this.drawTileMap(this._currentMap);

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
          var tile = map.getTile(x, y); // Let's skip rendering empty tiles.

          if (tile !== this.EMPTY_TILE) {
            this.ctx.drawImage( // Image Source
            map.SM, // Source x (See example in comment block)
            (tile - 1) % map.cols * this.pixels, // Source y (See example in comment block)
            Math.floor((tile - 1) / map.rows) * this.pixels, // Source width
            this.pixels, // Source height
            this.pixels, // Target x
            x * (this.pixels * this.scale), // Target y
            y * (this.pixels * this.scale), // Target width
            this.pixels * this.scale, // Target height
            this.pixels * this.scale);
          }
        }
      }
    }
  }]);

  return Renderer;
}();

exports.Renderer = Renderer;

},{"../../atlases/Overworld":2}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sandbox = void 0;

var _GameObject = require("../GameObject");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Sandbox class. Play around!
 * This is a debug file and should not be used in production.
 */
var Sandbox =
/*#__PURE__*/
function () {
  function Sandbox() {
    var _this = this;

    _classCallCheck(this, Sandbox);

    // Instantiate Actor factories here as a test. We want to instantiate the
    // factory so the memory is allocated when the Scene is loaded.
    // TODO: Actor factories should be loaded per Scene, once the scene
    // functionality is created!
    this.OrdinaryFolkFactory = new _GameObject.OrdinaryFolkFactory();
    this.PlayerFactory = new _GameObject.PlayerFactory();
    this.Player = this.PlayerFactory.spawn({
      x: 125,
      y: 125
    });
    this.testGameObjects = [// TODO This is a test, do should be empty on init.
    this.Player, this.OrdinaryFolkFactory.spawn({
      x: 200,
      y: 100
    })]; // TODO: This is a test to test event emission.

    document.getElementById('game-pane').addEventListener('player_died', function (event) {
      return _this.respondToGameObjectCreation(event);
    }, false);
  }

  _createClass(Sandbox, [{
    key: "update",
    value: function update(delta) {}
  }, {
    key: "respondToGameObjectCreation",
    value: function respondToGameObjectCreation(event) {
      console.log('event.detail.go_id :', event.detail.go_id);
    }
  }]);

  return Sandbox;
}();

exports.Sandbox = Sandbox;

},{"../GameObject":27}],32:[function(require,module,exports){
"use strict";

var _FiendGame = require("./engine/FiendGame");

var _AssetLoader = require("./engine/AssetLoader");

/**
 * Create a new instance of FiendGame, which loads the game.
 */
function init() {
  // Init functionality, for now.
  new _FiendGame.FiendGame(640, 480); // Focus the game pane on page load.

  document.getElementById('game-pane').focus();
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

},{"./engine/AssetLoader":3,"./engine/FiendGame":18}]},{},[32])

//# sourceMappingURL=bundle.js.map
