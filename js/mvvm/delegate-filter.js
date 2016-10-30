"use strict";
var DelegateFilter = (function () {
    function DelegateFilter(check) {
        this._check = check;
    }
    DelegateFilter.prototype.check = function (data) {
        return this._check(data);
    };
    DelegateFilter.create = function (check) {
        return new DelegateFilter(check);
    };
    return DelegateFilter;
}());
exports.DelegateFilter = DelegateFilter;
;
