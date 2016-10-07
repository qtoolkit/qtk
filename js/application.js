"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var path = require("path");
var TWEEN = require("tween.js");
var Assets = require("./assets");
var Events = require("./events");
var consts_1 = require("./consts");
var main_loop_1 = require("./main-loop");
var emitter_1 = require("./emitter");
var view_port_1 = require("./view-port");
var image_tile_1 = require("./image-tile");
var theme_manager_1 = require("./theme-manager");
var device_info_1 = require("./device-info");
var service_locator_1 = require("./service-locator");
var inputEventAdapter = require("./input-event-adapter");
/**
 * 代表整个应用程序，可以通过Application获取各种服务。
 *
 */
var Application = (function (_super) {
    __extends(Application, _super);
    function Application(name) {
        _super.call(this);
        this.name = name;
        this._options = {};
        this.servicesManager = new service_locator_1.ServiceLocator();
    }
    Object.defineProperty(Application.prototype, "isReady", {
        get: function () {
            return this._isReady;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Application.prototype, "assets", {
        get: function () {
            return Assets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Application.prototype, "mainLoop", {
        get: function () {
            return this._mainLoop;
        },
        enumerable: true,
        configurable: true
    });
    Application.prototype.getMainLoop = function () {
        return this._mainLoop;
    };
    Object.defineProperty(Application.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (options) {
        },
        enumerable: true,
        configurable: true
    });
    Application.prototype.initOptions = function (args) {
        var options = this._options;
        for (var key in args) {
            options[key] = args[key];
        }
        var str = window.location.search.substr(1);
        var arr = str.split('&');
        arr.forEach(function (iter) {
            var keyValue = iter.split("=");
            options[keyValue[0]] = keyValue[1];
        });
    };
    Application.prototype.run = function () {
        this.dispatchEvent({ type: Events.RUN });
        this._mainLoop.requestRedraw();
    };
    /**
     * 子类可以重载此函数，做App的初始化工作。
     */
    Application.prototype.start = function () {
    };
    Application.prototype.init = function (args) {
        var _this = this;
        this.initOptions(args);
        var themeManager = new theme_manager_1.ThemeManager();
        var sysThemeDataURL = this._options.sysThemeDataURL;
        var appThemeDataURL = this._options.appThemeDataURL;
        if (sysThemeDataURL) {
            Assets.loadJSON(sysThemeDataURL).then(function (json) {
                var baseURL = path.dirname(sysThemeDataURL);
                themeManager.load(json, baseURL);
                return appThemeDataURL;
            }).then(function (url) {
                if (url) {
                    Assets.loadJSON(url).then(function (json) {
                        var baseURL = path.dirname(url);
                        themeManager.load(json, baseURL);
                        _this.dispatchEventAsync({ type: Events.READY });
                        _this._isReady = true;
                        _this.start();
                    });
                }
                else {
                    _this.dispatchEventAsync({ type: Events.READY });
                    _this._isReady = true;
                    _this.start();
                }
            });
        }
        this.registerService(consts_1.Services.THEME_MANAGER, themeManager);
        this._viewPort = view_port_1.ViewPort.create(0, 0, 0);
        this._mainLoop = main_loop_1.MainLoop.create();
        device_info_1.DeviceInfo.init(navigator.language, navigator.userAgent);
        inputEventAdapter.init(document, window, device_info_1.DeviceInfo.isPointerSupported, device_info_1.DeviceInfo.isMSPointerSupported, device_info_1.DeviceInfo.isTouchSupported);
        if (device_info_1.DeviceInfo.isMacOS) {
            var density = this.viewPort.density;
            image_tile_1.ImageTile.init(density, 1 / density, function (img) {
                _this.mainLoop.requestRedraw();
            });
        }
        this._mainLoop.on(Events.PRETICK, function (evt) {
            var time = evt.deltaTime;
            TWEEN.update(time);
        });
        return this;
    };
    Application.prototype.getService = function (name) {
        return this.servicesManager.get(name);
    };
    Application.prototype.registerService = function (name, service) {
        this.servicesManager.register(name, service);
        return this;
    };
    Application.prototype.getThemeManager = function () {
        return this.getService(consts_1.Services.THEME_MANAGER);
    };
    Object.defineProperty(Application.prototype, "viewPort", {
        get: function () {
            return this._viewPort;
        },
        enumerable: true,
        configurable: true
    });
    Application.prototype.getViewPort = function () {
        return this._viewPort;
    };
    Application.prototype.onReady = function (func) {
        if (this._isReady) {
            func.call(this);
        }
        else {
            this.on(Events.READY, func);
        }
    };
    Application.get = function () {
        return Application.instance;
    };
    Application.create = function (name) {
        var app = new Application(name);
        if (!Application.instance) {
            Application.instance = app;
        }
        return app;
    };
    return Application;
}(emitter_1.Emitter));
exports.Application = Application;
;
