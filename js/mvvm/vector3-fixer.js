"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector3Fixer = (function () {
    function Vector3Fixer(xMin, xMax, yMin, yMax, zMin, zMax) {
        this._value = { x: 0, y: 0, z: 0 };
        this._xMin = xMin;
        this._xMax = xMax;
        this._yMin = yMin;
        this._yMax = yMax;
        this._zMin = zMin;
        this._zMax = zMax;
    }
    Vector3Fixer.prototype.convertBack = function (value) {
        this._value.x = Math.min(this._xMax, Math.max(this._xMin, +value.x));
        this._value.y = Math.min(this._yMax, Math.max(this._yMin, +value.y));
        this._value.z = Math.min(this._zMax, Math.max(this._zMin, +value.z));
        return this._value;
    };
    Vector3Fixer.prototype.convert = function (value) {
        return value;
    };
    Vector3Fixer.create = function (xMin, xMax, yMin, yMax, zMin, zMax) {
        return new Vector3Fixer(xMin, xMax, yMin, yMax, zMin, zMax);
    };
    return Vector3Fixer;
}());
exports.Vector3Fixer = Vector3Fixer;
