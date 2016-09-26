"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var point_1 = require("../point");
var widget_1 = require("./widget");
var Events = require("../events");
(function (WindowType) {
    WindowType[WindowType["NORMAL"] = 0] = "NORMAL";
    WindowType[WindowType["POPUP"] = 1] = "POPUP";
})(exports.WindowType || (exports.WindowType = {}));
var WindowType = exports.WindowType;
;
var Window = (function (_super) {
    __extends(Window, _super);
    function Window(type) {
        _super.call(this, type);
    }
    Object.defineProperty(Window.prototype, "hasOwnCanvas", {
        get: function () {
            return this._hasOwnCanvas;
        },
        set: function (value) {
            this._hasOwnCanvas = value;
        },
        enumerable: true,
        configurable: true
    });
    Window.prototype.reset = function (type) {
        _super.prototype.reset.call(this, type);
        this._isWindow = true;
        this._grabbed = false;
        this.hasOwnCanvas = true;
        this._pointerPosition = point_1.Point.create(0, 0);
        return this;
    };
    Object.defineProperty(Window.prototype, "pointerPosition", {
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
    Object.defineProperty(Window.prototype, "grabbed", {
        get: function () {
            return this._grabbed;
        },
        enumerable: true,
        configurable: true
    });
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
    Window.prototype.ungrab = function () {
        if (this._grabbed && this.canvas) {
            this._grabbed = false;
            this.canvas.ungrab();
        }
        return this;
    };
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
    Window.prototype.open = function () {
        if (this._hasOwnCanvas) {
            this.createCanvas();
            this._canvas.grabKey();
        }
        this.init();
        this.dispatchEvent({ type: Events.OPEN });
        return this;
    };
    Window.prototype.close = function () {
        if (this._hasOwnCanvas) {
            this._canvas.ungrabKey();
        }
        this.dispatchEvent({ type: Events.CLOSE });
        this.deinit();
        this.dispose();
    };
    Window.prototype.dispose = function () {
        this.ungrab();
        _super.prototype.dispose.call(this);
    };
    return Window;
}(widget_1.Widget));
exports.Window = Window;
;
