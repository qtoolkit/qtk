"use strict";
var Rect = (function () {
    function Rect(x, y, w, h) {
        this.init(x, y, w, h);
    }
    Rect.prototype.init = function (x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        return this;
    };
    Rect.prototype.dispose = function () {
    };
    Rect.prototype.clone = function () {
        return Rect.create(this.x, this.y, this.w, this.h);
    };
    Rect.prototype.equal = function (other) {
        return this.x === other.x && this.y === other.y && this.w === other.w && this.h === other.h;
    };
    Rect.prototype.copy = function (other) {
        return this.init(other.x, other.y, other.w, other.h);
    };
    Rect.prototype.merge = function (other) {
        var x = Math.min(this.x, other.x);
        var y = Math.min(this.y, other.y);
        this.w = Math.max(this.x + this.w, other.x + other.w) - x;
        this.h = Math.max(this.y + this.h, other.y + other.h) - y;
        this.x = x;
        this.y = y;
        return this;
    };
    Rect.create = function (x, y, w, h) {
        var r = new Rect(x || 0, y || 0, w || 0, h || 0);
        return r;
    };
    Rect.rect = Rect.create(0, 0, 0, 0);
    return Rect;
}());
exports.Rect = Rect;
;
