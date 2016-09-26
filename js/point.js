"use strict";
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.dispose = function () {
    };
    Point.prototype.init = function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    };
    Point.prototype.copy = function (p) {
        this.x = p.x;
        this.y = p.y;
        return this;
    };
    Point.prototype.isInRect = function (r) {
        return this.isIn(r.x, r.y, r.w, r.h);
    };
    Point.prototype.isIn = function (x, y, w, h) {
        var xx = this.x;
        var yy = this.y;
        return xx >= x && xx <= (x + w) && yy >= y && yy <= (y + h);
    };
    Point.create = function (x, y) {
        return new Point(x, y);
    };
    Point.point = Point.create(0, 0);
    return Point;
}());
exports.Point = Point;
;
