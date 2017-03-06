"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DelegateComparator = (function () {
    function DelegateComparator(compare) {
        this._compare = compare;
    }
    DelegateComparator.prototype.compare = function (a, b) {
        return this._compare(a, b);
    };
    DelegateComparator.create = function (compare) {
        return new DelegateComparator(compare);
    };
    return DelegateComparator;
}());
exports.DelegateComparator = DelegateComparator;
;
