"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var point_1 = require("../point");
var widget_1 = require("./widget");
var Events = require("../events");
/**
 * 窗口的基类。
 */
var Window = (function (_super) {
    __extends(Window, _super);
    function Window(type) {
        _super.call(this, type);
    }
    Object.defineProperty(Window.prototype, "hasOwnCanvas", {
        get: function () {
            return this._hasOwnCanvas;
        },
        /**
         * 是否有自己的Canvas元素(此属性需要在窗口打开之前赋值)。
         * PC上运行时，每个窗口都有自己的Canvas元素。
         * Mobile上运行是，每个窗口共享一个Canvas。
         */
        set: function (value) {
            if (this._inited) {
                console.log("too late to set hasOwnCanvas");
                return;
            }
            this._hasOwnCanvas = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Window.prototype, "pointerPosition", {
        /**
         * 获取鼠标在当前窗口上的位置。
         */
        get: function () {
            return this._pointerPosition;
        },
        enumerable: true,
        configurable: true
    });
    Window.prototype.dispatchPointerDown = function (evt, ctx) {
        this._pointerPosition.init(evt.x, evt.y);
        _super.prototype.dispatchPointerDown.call(this, evt, ctx);
    };
    Window.prototype.dispatchPointerMove = function (evt, ctx) {
        this._pointerPosition.init(evt.x, evt.y);
        _super.prototype.dispatchPointerMove.call(this, evt, ctx);
    };
    /**
     * 抓住事件，让输入事件始终发到当前窗口，直到ungrab为止。
     */
    Window.prototype.grab = function () {
        if (!this._grabbed && this.canvas) {
            this._grabbed = true;
            var canvas = this.canvas;
            setTimeout(function (evt) {
                canvas.grab();
            }, 0);
        }
        return this;
    };
    /**
     * 取消抓住事件。
     */
    Window.prototype.ungrab = function () {
        if (this._grabbed && this.canvas) {
            this._grabbed = false;
            this.canvas.ungrab();
        }
        return this;
    };
    /**
     * 窗口隐藏或显示时，需要grab/ungrab事件。
     */
    Window.prototype.setVisible = function (value) {
        _super.prototype.setVisible.call(this, value);
        if (!value) {
            if (this._grabbed) {
                this.ungrab();
                this._shouldGrabWhenVisible = true;
            }
        }
        else {
            if (this._shouldGrabWhenVisible) {
                this.grab();
            }
        }
    };
    /**
     * 打开窗口。创建窗口的Canvas元素，初始化窗口内的控件，布局窗口内的控件。
     */
    Window.prototype.open = function () {
        if (this._hasOwnCanvas) {
            this.createCanvas();
            this._canvas.grabKey();
        }
        this.init();
        this.dispatchEvent({ type: Events.OPEN });
        this.relayoutChildren();
        return this;
    };
    /**
     * 关闭窗口。
     */
    Window.prototype.close = function () {
        if (this._hasOwnCanvas) {
            this._canvas.ungrabKey();
        }
        this.dispatchEvent({ type: Events.CLOSE });
        this.ungrab();
        this.deinit();
        this.dispose();
    };
    /**
     * 让窗口最大化，即填满父控件(窗口管理器)或整个可见区域。
     */
    Window.prototype.maximize = function () {
        var containor = this.parent || this.app.getViewPort();
        var w = containor.w;
        var h = containor.h;
        if (w !== this.w) {
            this.w = w;
        }
        if (h !== this.h) {
            this.h = h;
        }
        if (this._inited) {
            this.relayoutChildren();
        }
        return this;
    };
    /**
     * 将对话框移动到屏幕中间。
     */
    Window.prototype.moveToCenter = function () {
        var containor = this.parent || this.app.getViewPort();
        var w = containor.w;
        var h = containor.h;
        this.x = (w - this.w) >> 1;
        this.y = (h - this.h) >> 1;
        return this;
    };
    Window.prototype.dispatchKeyDown = function (evt) {
        _super.prototype.dispatchKeyDown.call(this, evt);
        var keys = "";
        if (evt.ctrlKey) {
            keys = "ctrl";
        }
        if (evt.commandKey) {
            keys += keys ? "+cmd" : "cmd";
        }
        if (evt.altKey) {
            keys += keys ? "+alt" : "alt";
        }
        if (evt.shiftKey) {
            keys += keys ? "+shift" : "shift";
        }
        var key = String.fromCharCode(evt.keyCode).toLowerCase();
        if (key) {
            keys += (keys ? ("+" + key) : key);
            var e = this._shortcutEvent;
            e.init(Events.SHORTCUT, keys);
            this.dispatchShortcut(e);
        }
    };
    Window.prototype.dispatchShortcut = function (e) {
        this.dispatchEvent(e);
    };
    Window.prototype.registerShortcut = function (keys, func) {
        var lowerKeys = keys.toLowerCase();
        this.on(Events.SHORTCUT, function (evt) {
            if (lowerKeys === evt.keys) {
                func(evt);
            }
        });
    };
    Window.prototype.onReset = function () {
        this._isWindow = true;
        this._grabbed = false;
        this.hasOwnCanvas = true;
        this._pointerPosition = point_1.Point.create(0, 0);
        this._shortcutEvent = Events.ShortcutEvent.create(null, null);
    };
    return Window;
}(widget_1.Widget));
exports.Window = Window;
;
