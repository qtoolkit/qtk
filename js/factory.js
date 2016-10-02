"use strict";
/**
 * 一个通用的工厂类。
 */
var Factory = (function () {
    function Factory() {
        this.creators = {};
    }
    Factory.prototype.register = function (type, creator) {
        this.creators[type] = creator;
    };
    Factory.prototype.create = function (type, options) {
        var obj = null;
        var creator = this.creators[type];
        if (creator) {
            obj = creator(options);
        }
        return obj;
    };
    return Factory;
}());
exports.Factory = Factory;
