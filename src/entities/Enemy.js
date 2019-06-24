"use strict";
exports.__esModule = true;
var Enemy = /** @class */ (function () {
    function Enemy() {
        this.HP = 100;
        this.ATK = 1;
        this.speed = 100;
        this.position = {
            x: 0,
            y: 0
        };
    }
    Enemy.prototype.update = function (delta) {
        this.position.x += this.speed * delta;
        this.position.y += this.speed * delta;
    };
    Enemy.prototype.draw = function () {
        // FG.ctx.beginPath();
        // FG.ctx.arc(this.position.x, this.position.y, 10, 0, Math.PI*2);
        // FG.ctx.fillStyle = "#0095DD";
        // FG.ctx.fill();
        // FG.ctx.closePath();
    };
    return Enemy;
}());
exports.Enemy = Enemy;
