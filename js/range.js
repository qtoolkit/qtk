"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Range = (function () {
    function Range(first, second) {
        this.first = first;
        this.second = second;
    }
    Range.prototype.dispose = function () {
    };
    Range.prototype.init = function (first, second) {
        this.first = first;
        this.second = second;
        return this;
    };
    Range.create = function (first, second) {
        return new Range(first, second);
    };
    return Range;
}());
Range.range = Range.create(0, 0);
exports.Range = Range;
;
