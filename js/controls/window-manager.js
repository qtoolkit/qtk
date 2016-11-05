"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var widget_1 = require("./widget");
var Events = require("../events");
var widget_factory_1 = require("./widget-factory");
var widget_recyclable_creator_1 = require("./widget-recyclable-creator");
var WindowManager = (function (_super) {
    __extends(WindowManager, _super);
    function WindowManager() {
        _super.call(this, WindowManager.TYPE);
    }
    WindowManager.prototype.onWindowCreate = function (evt) {
        console.log("onWindowCreate");
    };
    WindowManager.prototype.onWindowCreated = function (evt) {
        console.log("onWindowCreated");
    };
    WindowManager.prototype.onWindowOpen = function (evt) {
        console.log("onWindowOpen");
    };
    WindowManager.prototype.onWindowClose = function (evt) {
        console.log("onWindowClose");
    };
    WindowManager.prototype.onCreated = function () {
        var _this = this;
        _super.prototype.onCreated.call(this);
        var app = this.app;
        this.createCanvas();
        app.on(Events.WINDOW_OPEN, function (evt) { return _this.onWindowOpen(evt); });
        app.on(Events.WINDOW_CLOSE, function (evt) { return _this.onWindowClose(evt); });
        app.on(Events.WINDOW_CREATE, function (evt) { return _this.onWindowCreate(evt); });
        app.on(Events.WINDOW_CREATED, function (evt) { return _this.onWindowCreated(evt); });
    };
    WindowManager.create = function (options) {
        return WindowManager.recycleBin.create(options);
    };
    WindowManager.TYPE = "window-manager";
    WindowManager.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(WindowManager);
    return WindowManager;
}(widget_1.Widget));
exports.WindowManager = WindowManager;
;
widget_factory_1.WidgetFactory.register(WindowManager.TYPE, WindowManager.create);
