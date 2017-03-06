"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("../point");
var widget_1 = require("./widget");
var Events = require("../events");
var key_event_1 = require("../key-event");
var WindowType;
(function (WindowType) {
    WindowType[WindowType["NORMAL"] = 0] = "NORMAL";
    WindowType[WindowType["POPUP"] = 1] = "POPUP";
})(WindowType = exports.WindowType || (exports.WindowType = {}));
;
/**
 * 窗口的基类。
 */
var Window = (function (_super) {
    __extends(Window, _super);
    function Window(type) {
        var _this = _super.call(this, type) || this;
        _this._windowEvent = Events.WindowEvent.create();
        return _this;
    }
    Object.defineProperty(Window.prototype, "windowType", {
        get: function () {
            return this._windowType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Window.prototype, "grabbed", {
        get: function () {
            return this._grabbed;
        },
        enumerable: true,
        configurable: true
    });
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
    Window.prototype.dispatchPointerDown = function (evt) {
        this._pointerPosition.init(evt.x, evt.y);
        _super.prototype.dispatchPointerDown.call(this, evt);
    };
    Window.prototype.dispatchPointerMove = function (evt) {
        this._pointerPosition.init(evt.x, evt.y);
        _super.prototype.dispatchPointerMove.call(this, evt);
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
        this.relayoutChildren();
        this.dispatchWindowEvent(Events.WINDOW_OPEN);
        return this;
    };
    Window.prototype.dispatchWindowEvent = function (type) {
        var e = this._windowEvent.reset(type, this);
        this.dispatchEvent(e);
        if (this.app) {
            this.app.dispatchEvent(e);
        }
    };
    /**
     * 关闭窗口。
     */
    Window.prototype.close = function () {
        if (this._hasOwnCanvas) {
            this._canvas.ungrabKey();
        }
        this.dispatchWindowEvent(Events.WINDOW_CLOSE);
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
        var code = evt.keyCode;
        if (code !== key_event_1.KeyEvent.VK_CONTROL
            && code !== key_event_1.KeyEvent.VK_ALT
            && code !== key_event_1.KeyEvent.VK_COMMAND
            && code !== key_event_1.KeyEvent.VK_SHIFT) {
            var key = String.fromCharCode(evt.keyCode).toLowerCase();
            keys += (keys ? ("+" + key) : key);
            var e = this._shortcutEvent;
            e.init(Events.SHORTCUT, keys.toLowerCase());
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
    Window.prototype.onCreated = function () {
        _super.prototype.onCreated.call(this);
        this.dispatchWindowEvent(Events.WINDOW_CREATED);
    };
    Window.prototype.onReset = function () {
        this._isWindow = true;
        this._grabbed = false;
        this.hasOwnCanvas = true;
        this._pointerPosition = point_1.Point.create(0, 0);
        this._shortcutEvent = Events.ShortcutEvent.create(null, null);
    };
    Window.prototype.translatePointerEvent = function (evt) {
        if (!this.hasOwnCanvas) {
            evt.localX -= this.x;
            evt.localY -= this.y;
        }
    };
    Window.prototype.untranslatePointerEvent = function (evt) {
        if (!this.hasOwnCanvas) {
            evt.localX += this.x;
            evt.localY += this.y;
        }
    };
    Window.prototype.reset = function (type, options) {
        this._app = options ? options.app : null;
        this.dispatchWindowEvent(Events.WINDOW_CREATE);
        return _super.prototype.reset.call(this, type, options);
    };
    return Window;
}(widget_1.Widget));
exports.Window = Window;
;
