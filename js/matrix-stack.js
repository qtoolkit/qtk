"use strict";
var matrix_1 = require("./matrix");
var MatrixStack = (function () {
    function MatrixStack() {
        this.stack = [];
        this.matrix = new matrix_1.Matrix();
    }
    MatrixStack.prototype.save = function () {
        this.stack.push(this.matrix.clone());
        return this;
    };
    MatrixStack.prototype.restore = function () {
        if (this.stack.length) {
            this.matrix = this.stack.pop();
        }
        return this;
    };
    MatrixStack.prototype.identity = function () {
        this.matrix.identity();
        return this;
    };
    MatrixStack.prototype.set = function (a, b, c, d, tx, ty) {
        this.matrix.set(a, b, c, d, tx, ty);
        return this;
    };
    MatrixStack.prototype.rotate = function (rad) {
        this.matrix.rotate(rad);
        return this;
    };
    MatrixStack.prototype.scale = function (sx, sy) {
        this.matrix.scale(sx, sy);
        return this;
    };
    MatrixStack.prototype.translate = function (dx, dy) {
        this.matrix.translate(dx, dy);
    };
    MatrixStack.prototype.transformPoint = function (x, y, out) {
        return this.matrix.transformPoint(x, y, out);
    };
    MatrixStack.prototype.invert = function () {
        return this.matrix.invert();
    };
    MatrixStack.prototype.matrixToString = function () {
        return this.matrix.toString();
    };
    MatrixStack.create = function () {
        return new MatrixStack();
    };
    return MatrixStack;
}());
exports.MatrixStack = MatrixStack;
;
