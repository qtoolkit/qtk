"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 管理各种服务。
 */
var ServiceLocator = (function () {
    function ServiceLocator() {
        this.services = {};
    }
    ServiceLocator.prototype.register = function (name, service) {
        this.services[name] = service;
        return this;
    };
    ServiceLocator.prototype.get = function (name) {
        return this.services[name];
    };
    return ServiceLocator;
}());
exports.ServiceLocator = ServiceLocator;
;
