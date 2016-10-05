"use strict";
var DelegateValueConverter = (function () {
    function DelegateValueConverter(convert, convertBack) {
        this._convert = convert;
        this._convertBack = convertBack;
    }
    DelegateValueConverter.prototype.convert = function (data) {
        return this._convert(data);
    };
    DelegateValueConverter.prototype.convertBack = function (data) {
        return this._convertBack(data);
    };
    DelegateValueConverter.create = function (convert, convertBack) {
        return new DelegateValueConverter(convert, convertBack);
    };
    return DelegateValueConverter;
}());
exports.DelegateValueConverter = DelegateValueConverter;
;
