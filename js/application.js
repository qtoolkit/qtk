"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var path = require("path");
var TWEEN = require("tween.js");
var Events = require("./events");
var assets_1 = require("./assets");
var main_loop_1 = require("./main-loop");
var emitter_1 = require("./emitter");
var view_port_1 = require("./view-port");
var image_tile_1 = require("./image-tile");
var theme_manager_1 = require("./theme-manager");
var device_info_1 = require("./device-info");
var window_manager_mobile_1 = require("./controls/window-manager-mobile");
var window_manager_desktop_1 = require("./controls/window-manager-desktop");
var inputEventAdapter = require("./input-event-adapter");
var interaction_request_1 = require("./interaction-request/interaction-request");
var interaction_service_1 = require("./interaction-request/interaction-service");
/**
 * @class Application
 * @extends IApplication
 * 代表整个应用程序，可以通过Application获取各种服务。
 *
 */
var Application = (function (_super) {
    __extends(Application, _super);
    function Application(name) {
        _super.call(this);
        this._name = name;
        this.parseURLParams();
        if (!Application.instance) {
            Application.instance = this;
        }
    }
    Object.defineProperty(Application.prototype, "name", {
        /**
         * @property {String} name 应用程序的名字。
         */
        get: function () {
            return this._name;
        },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Application.prototype, "options", {
        /**
         * @property {Object} options 应用程序的参数。
         */
        get: function () {
            return this._options;
        },
        set: function (options) {
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 获取窗口管理器。
     */
    Application.prototype.getWindowManager = function () {
        return this._windwManager;
    };
    /**
     * 获取主循环。
     */
    Application.prototype.getMainLoop = function () {
        return this._mainLoop;
    };
    /**
     * 加载指定的脚本。
     * @param {string} src 脚本URL。
     */
    Application.prototype.loadScript = function (src) {
        assets_1.AssetManager.loadScript(src);
    };
    /**
     * 预加载指定的资源。
     * @param {Array<string>} assetsURLS 资源URL列表。
     * @param {Function} onDone 加载完成时的回调函数。
     * @param {Function} onProgress 每加载一个资源时的回调函数。
     *
     * 示例：
     *
     *     @example
     *     app.preload(assetsURLs, function onLoad() {
     *        app.init({sysThemeDataURL:themeURL, appThemeDataURL:appThemeURL});
     *        app.run();
     *     });
     */
    Application.prototype.preload = function (assetsURLS, onDone, onProgress) {
        assets_1.AssetGroup.preload(assetsURLS, function (evt) {
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
    /**
     * 开始运行。
     */
    Application.prototype.run = function () {
        this.dispatchEvent({ type: Events.RUN });
        this._mainLoop.requestRedraw();
    };
    /**
     * 初始化。
     */
    Application.prototype.init = function (args) {
        var _this = this;
        this.initOptions(args);
        var themeManager = new theme_manager_1.ThemeManager();
        interaction_request_1.InteractionRequest.init(interaction_service_1.InteractionService.init());
        var sysThemeJson = window.sysThemeJson;
        var appThemeJson = window.appThemeJson;
        var sysThemePath = path.dirname(this._options.sysThemeDataURL);
        var appThemePath = path.dirname(this._options.appThemeDataURL);
        if (sysThemeJson) {
            themeManager.load(sysThemeJson, sysThemePath);
        }
        if (appThemeJson) {
            themeManager.load(appThemeJson, appThemePath);
        }
        this._themeManager = themeManager;
        this._viewPort = view_port_1.ViewPort.create(0, 0, 0);
        this._mainLoop = main_loop_1.MainLoop.create();
        device_info_1.DeviceInfo.init(navigator.language, navigator.userAgent);
        inputEventAdapter.init(document, window, device_info_1.DeviceInfo.isPointerSupported, device_info_1.DeviceInfo.isMSPointerSupported, device_info_1.DeviceInfo.isTouchSupported);
        if (device_info_1.DeviceInfo.isMacOS) {
            var density = this._viewPort.density;
            image_tile_1.ImageTile.init(density, 1 / density, function (img) {
                _this._mainLoop.requestRedraw();
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
        this.dispatchEventAsync({ type: Events.READY });
        this.onReady(this);
        return this;
    };
    /**
     * 获取主题管理器。
     */
    Application.prototype.getThemeManager = function () {
        return this._themeManager;
    };
    /**
     * 获取ViewPort。
     */
    Application.prototype.getViewPort = function () {
        return this._viewPort;
    };
    Application.prototype.initOptions = function (args) {
        var options = this._options;
        for (var key in args) {
            options[key] = args[key];
        }
    };
    Application.prototype.parseURLParams = function () {
        this._options = {};
        var options = this._options;
        var str = window.location.search.substr(1);
        var arr = str.split('&');
        arr.forEach(function (iter) {
            var keyValue = iter.split("=");
            options[keyValue[0]] = keyValue[1];
        });
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
