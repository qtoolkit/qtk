"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RangeFixer = (function () {
    function RangeFixer(firstMin, firstMax, secondMin, secondMax, secondMustGreater) {
        this._value = { first: 0, second: 0 };
        this._firstMin = firstMin;
        this._firstMax = firstMax;
        this._secondMin = secondMin;
        this._secondMax = secondMax;
        this._secondMustGreater = secondMustGreater || false;
    }
    RangeFixer.prototype.convertBack = function (value) {
        var first = Math.min(this._firstMax, Math.max(this._firstMin, +value.first));
        var second = Math.min(this._secondMax, Math.max(this._secondMin, +value.second));
        if (this._secondMustGreater) {
            this._value.first = Math.min(first, second);
            this._value.second = Math.max(first, second);
        }
        else {
            this._value.first = first;
            this._value.second = second;
        }
        return this._value;
    };
    RangeFixer.prototype.convert = function (value) {
        return value;
    };
    RangeFixer.create = function (firstMin, firstMax, secondMin, secondMax, secondMustGreater) {
        return new RangeFixer(firstMin, firstMax, secondMin, secondMax, secondMustGreater);
    };
    return RangeFixer;
}());
exports.RangeFixer = RangeFixer;
;
