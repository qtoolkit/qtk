"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberFixer = (function () {
    function NumberFixer(vMin, vMax) {
        this.vMin = vMin;
        this.vMax = vMax;
    }
    NumberFixer.prototype.convertBack = function (value) {
        return Math.min(this.vMax, Math.max(this.vMin, +value));
    };
    NumberFixer.prototype.convert = function (value) {
        return value;
    };
    NumberFixer.create = function (vMin, vMax) {
        return new NumberFixer(vMin, vMax);
    };
    return NumberFixer;
}());
exports.NumberFixer = NumberFixer;
