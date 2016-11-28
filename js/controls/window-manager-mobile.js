"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var window_1 = require("./window");
var window_manager_1 = require("./window-manager");
var widget_factory_1 = require("./widget-factory");
var widget_recyclable_creator_1 = require("./widget-recyclable-creator");
/**
 * 移动应用程序的窗口管理器，所有窗口共享一个Canvas，NormalWindow总是最大化显示。
 */
var WindowManagerMobile = (function (_super) {
    __extends(WindowManagerMobile, _super);
    function WindowManagerMobile() {
        _super.call(this, WindowManagerMobile.TYPE);
    }
    Object.defineProperty(WindowManagerMobile.prototype, "target", {
        get: function () {
            var n = this._windows.length;
            var win = n > 0 ? this._windows[n - 1] : null;
            return win;
        },
        enumerable: true,
        configurable: true
    });
    WindowManagerMobile.prototype.dispatchPointerDown = function (evt, ctx) {
        var target = this.target;
        if (target) {
            target.dispatchPointerDown(evt, ctx);
        }
    };
    WindowManagerMobile.prototype.dispatchPointerMove = function (evt, ctx) {
        var target = this.target;
        if (target) {
            target.dispatchPointerMove(evt, ctx);
        }
    };
    WindowManagerMobile.prototype.dispatchPointerUp = function (evt) {
        var target = this.target;
        if (target) {
            target.dispatchPointerUp(evt);
        }
    };
    WindowManagerMobile.prototype.dispatchKeyDown = function (evt) {
        var target = this.target;
        if (target) {
            target.dispatchKeyDown(evt);
        }
    };
    WindowManagerMobile.prototype.dispatchClick = function (evt) {
        var target = this.target;
        if (target) {
            target.dispatchClick(evt);
        }
    };
    WindowManagerMobile.prototype.dispatchDblClick = function (evt) {
        var target = this.target;
        if (target) {
            target.dispatchDblClick(evt);
        }
    };
    WindowManagerMobile.prototype.dispatchWheel = function (evt) {
        var target = this.target;
        if (target) {
            target.dispatchWheel(evt);
        }
    };
    WindowManagerMobile.prototype.computeChildrenDirtyRect = function (ctx) {
        var windows = this._windows;
        var n = windows.length;
        var start = this.getVisibleWinStartIndex();
        for (var i = start; i < n; i++) {
            var win = windows[i];
            win.computeDirtyRect(ctx);
        }
    };
    WindowManagerMobile.prototype.getVisibleWinStartIndex = function () {
        var windows = this._windows;
        var n = windows.length;
        var start = 0;
        for (var i = n - 1; i >= 0; i--) {
            var win = windows[i];
            if (win.windowType === window_1.WindowType.NORMAL) {
                start = i;
                break;
            }
        }
        return start;
    };
    WindowManagerMobile.prototype.draw = function (ctx) {
        var windows = this._windows;
        var n = windows.length;
        var start = this.getVisibleWinStartIndex();
        for (var i = start; i < n; i++) {
            var win = windows[i];
            win.draw(ctx);
        }
        this._dirty = false;
        return this;
    };
    WindowManagerMobile.prototype.onWindowCreated = function (evt) {
        var win = evt.widget;
        win.hasOwnCanvas = false;
        if (win.windowType === window_1.WindowType.NORMAL) {
            win.moveResizeTo(0, 0, this.w, this.h);
        }
    };
    WindowManagerMobile.create = function (options) {
        return WindowManagerMobile.recycleBin.create(options);
    };
    WindowManagerMobile.TYPE = "window-manager-mobile";
    WindowManagerMobile.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(WindowManagerMobile);
    return WindowManagerMobile;
}(window_manager_1.WindowManager));
exports.WindowManagerMobile = WindowManagerMobile;
;
widget_factory_1.WidgetFactory.register(WindowManagerMobile.TYPE, WindowManagerMobile.create);
