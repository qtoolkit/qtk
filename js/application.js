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
var window_manager_mobile_1 = require("./controls/window-manager-mobile");
var window_manager_desktop_1 = require("./controls/window-manager-desktop");
var inputEventAdapter = require("./input-event-adapter");
var interaction_request_1 = require("./interaction-request/interaction-request");
var interaction_service_1 = require("./interaction-request/interaction-service");
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
        var options = this._options;
        var str = window.location.search.substr(1);
        var arr = str.split('&');
        arr.forEach(function (iter) {
            var keyValue = iter.split("=");
            options[keyValue[0]] = keyValue[1];
        });
        if (!Application.instance) {
            Application.instance = this;
        }
    }
    Object.defineProperty(Application.prototype, "windowManager", {
        get: function () {
            return this._windwManager;
        },
        set: function (value) {
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
    Object.defineProperty(Application.prototype, "isReady", {
        get: function () {
            return this._isReady;
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
    Application.prototype.loadScript = function (src) {
        Assets.loadScript(src);
    };
    Application.prototype.preload = function (assetsURLS, onDone, onProgress) {
        Assets.Group.preload(assetsURLS, function (evt) {
            if (evt.loaded === evt.total) {
                if (onDone) {
                    onDone(evt);
                }
            }
            if (onProgress) {
                onProgress(evt);
            }
        });
        return this;
    };
    Application.prototype.initOptions = function (args) {
        var options = this._options;
        for (var key in args) {
            options[key] = args[key];
        }
    };
    Application.prototype.run = function () {
        this.dispatchEvent({ type: Events.RUN });
        this._mainLoop.requestRedraw();
    };
    Application.prototype.init = function (args) {
        var _this = this;
        this.initOptions(args);
        var themeManager = new theme_manager_1.ThemeManager();
        var sysThemeDataURL = this._options.sysThemeDataURL;
        var appThemeDataURL = this._options.appThemeDataURL;
        interaction_request_1.InteractionRequest.init(interaction_service_1.InteractionService.init());
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
                        _this.onReady(_this);
                    });
                }
                else {
                    _this.dispatchEventAsync({ type: Events.READY });
                    _this._isReady = true;
                    _this.onReady(_this);
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
        var vp = this._viewPort;
        if (device_info_1.DeviceInfo.isMobile || this.options.isMobile) {
            this._windwManager = window_manager_mobile_1.WindowManagerMobile.create({ app: this, x: 0, y: 0, w: vp.w, h: vp.h });
        }
        else {
            this._windwManager = window_manager_desktop_1.WindowManagerDesktop.create({ app: this, x: 0, y: 0, w: vp.w, h: vp.h });
        }
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
    /**
     * 子类可以重载此函数，做App的初始化工作。
     */
    Application.prototype.onReady = function (app) {
    };
    Application.get = function () {
        return Application.instance;
    };
    Application.create = function (name) {
        var app = new Application(name);
        return app;
    };
    return Application;
}(emitter_1.Emitter));
exports.Application = Application;
;
