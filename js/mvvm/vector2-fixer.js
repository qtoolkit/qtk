"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector2Fixer = (function () {
    function Vector2Fixer(xMin, xMax, yMin, yMax) {
        this._value = { x: 0, y: 0 };
        this._xMin = xMin;
        this._xMax = xMax;
        this._yMin = yMin;
        this._yMax = yMax;
    }
    Vector2Fixer.prototype.convertBack = function (value) {
        this._value.x = Math.min(this._xMax, Math.max(this._xMin, +value.x));
        this._value.y = Math.min(this._yMax, Math.max(this._yMin, +value.y));
        return this._value;
    };
    Vector2Fixer.prototype.convert = function (value) {
        return value;
    };
    Vector2Fixer.create = function (xMin, xMax, yMin, yMax) {
        return new Vector2Fixer(xMin, xMax, yMin, yMax);
    };
    return Vector2Fixer;
}());
exports.Vector2Fixer = Vector2Fixer;
