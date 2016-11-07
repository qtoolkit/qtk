"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var widget_1 = require("./widget");
var Events = require("../events");
/**
 * 实现窗口管理器的基本功能。
 */
var WindowManager = (function (_super) {
    __extends(WindowManager, _super);
    function WindowManager() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(WindowManager.prototype, "windows", {
        /**
         * 窗口列表。
         */
        get: function () {
            return this._windows;
        },
        set: function (value) {
        },
        enumerable: true,
        configurable: true
    });
    WindowManager.prototype.addWindow = function (win) {
        this._windows.push(win);
    };
    WindowManager.prototype.removeWindow = function (win) {
        this._windows.remove(win);
    };
    WindowManager.prototype.onWindowCreate = function (evt) {
        var win = evt.widget;
        this.addWindow(win);
    };
    WindowManager.prototype.onWindowCreated = function (evt) {
    };
    WindowManager.prototype.onWindowOpen = function (evt) {
    };
    WindowManager.prototype.onWindowClose = function (evt) {
        var win = evt.widget;
        this.removeWindow(win);
    };
    /**
     * 向APP注册窗口的事件。
     */
    WindowManager.prototype.onCreated = function () {
        var _this = this;
        _super.prototype.onCreated.call(this);
        this.createCanvas();
        this._windows = [];
        var app = this.app;
        app.on(Events.WINDOW_OPEN, function (evt) { return _this.onWindowOpen(evt); });
        app.on(Events.WINDOW_CLOSE, function (evt) { return _this.onWindowClose(evt); });
        app.on(Events.WINDOW_CREATE, function (evt) { return _this.onWindowCreate(evt); });
        app.on(Events.WINDOW_CREATED, function (evt) { return _this.onWindowCreated(evt); });
    };
    return WindowManager;
}(widget_1.Widget));
exports.WindowManager = WindowManager;
