"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
/**
 * 2维矩阵变换
 */
var Matrix = (function () {
    function Matrix() {
        this.data = new Float32Array(6);
        this.identity();
    }
    Matrix.prototype.identity = function () {
        var data = this.data;
        data[0] = 1;
        data[1] = 0;
        data[2] = 0;
        data[3] = 1;
        data[4] = 0;
        data[5] = 0;
        return this;
    };
    Matrix.prototype.clone = function () {
        var other = new Matrix();
        var data = other.data;
        var src = this.data;
        data[0] = src[0];
        data[1] = src[1];
        data[2] = src[2];
        data[3] = src[3];
        data[4] = src[4];
        data[5] = src[5];
        return other;
    };
    Matrix.prototype.set = function (a, b, c, d, tx, ty) {
        var data = this.data;
        data[0] = a;
        data[1] = b;
        data[2] = c;
        data[3] = d;
        data[4] = tx;
        data[5] = ty;
        return this;
    };
    Matrix.prototype.rotate = function (rad) {
        var a = this.data;
        var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], s = Math.sin(rad), c = Math.cos(rad);
        a[0] = a0 * c + a2 * s;
        a[1] = a1 * c + a3 * s;
        a[2] = a0 * -s + a2 * c;
        a[3] = a1 * -s + a3 * c;
        return this;
    };
    Matrix.prototype.scale = function (sx, sy) {
        var a = this.data;
        a[0] *= sx;
        a[1] *= sx;
        a[2] *= sy;
        a[3] *= sy;
        return this;
    };
    Matrix.prototype.translate = function (dx, dy) {
        var a = this.data;
        var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
        a[4] = a0 * dx + a2 * dy + a4;
        a[5] = a1 * dx + a3 * dy + a5;
        return this;
    };
    ;
    Matrix.prototype.transformPoint = function (x, y, out) {
        var p = out || point_1.Point.create();
        var a = this.data;
        p.x = a[0] * x + a[2] * y + a[4];
        p.y = a[1] * x + a[3] * y + a[5];
        return p;
    };
    ;
    Matrix.prototype.equal = function (other) {
        var a = this.data;
        var b = other.data;
        return a[0] === b[0]
            && a[1] === b[1]
            && a[2] === b[2]
            && a[3] === b[3]
            && a[4] === b[4]
            && a[5] === b[5];
    };
    Matrix.prototype.invert = function () {
        var a = this.data;
        var aa = a[0], ab = a[1], ac = a[2], ad = a[3], atx = a[4], aty = a[5];
        var det = aa * ad - ab * ac;
        if (!det) {
            return null;
        }
        det = 1.0 / det;
        var newMatrix = Matrix.create();
        var out = newMatrix.data;
        out[0] = ad * det;
        out[1] = -ab * det;
        out[2] = -ac * det;
        out[3] = aa * det;
        out[4] = (ac * aty - ad * atx) * det;
        out[5] = (ab * atx - aa * aty) * det;
        return newMatrix;
    };
    ;
    Matrix.prototype.toString = function () {
        var ret = Array.prototype.map.call(this.data, function (iter) {
            return iter.toFixed(2);
        });
        return JSON.stringify(ret);
    };
    Matrix.prototype.dispose = function () {
        this.identity();
        Matrix.cache.push(this);
    };
    Matrix.create = function () {
        if (Matrix.cache.length) {
            return Matrix.cache.pop();
        }
        return new Matrix();
    };
    return Matrix;
}());
Matrix.cache = [];
exports.Matrix = Matrix;
;
