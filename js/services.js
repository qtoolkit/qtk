"use strict";
exports.THEME_MANAGER = "qtk-keyup";
/**
 * 管理各种服务。
 */
var ServiceManager = (function () {
    function ServiceManager() {
        this.services = {};
    }
    ServiceManager.prototype.register = function (name, service) {
        this.services[name] = service;
        return this;
    };
    ServiceManager.prototype.get = function (name) {
        return this.services[name];
    };
    return ServiceManager;
}());
exports.ServiceManager = ServiceManager;
;
