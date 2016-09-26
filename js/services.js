"use strict";
exports.THEME_MANAGER = "qtk-keyup";
/**
 * 管理各种服务。
 */
var Manager = (function () {
    function Manager() {
        this.services = {};
    }
    Manager.prototype.register = function (name, service) {
        this.services[name] = service;
        return this;
    };
    Manager.prototype.get = function (name) {
        return this.services[name];
    };
    return Manager;
}());
exports.Manager = Manager;
;
