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
    Window.prototype.reset = function (type) {
        _super.prototype.reset.call(this, type);
        this._isWindow = true;
        this._grabbed = false;
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
    Window.prototype.dispatchPointerMove = function (evt, ctx) {
        this._pointerPosition.init(evt.x - this.x, evt.y - this.y);
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
            this.canvas.grab();
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
        this.dispatchEvent({ type: Events.OPEN });
        return this;
    };
    Window.prototype.close = function () {
        this.dispatchEvent({ type: Events.CLOSE });
        this.dispose();
    };
    Window.prototype.dispose = function () {
        this.ungrab();
        _super.prototype.dispose.call(this);
    };
    Window.prototype.init = function (app, x, y, w, h, createCanvas) {
        this.app = app;
        this.x = x || 0;
        this.y = y || 0;
        this.w = w || 0;
        this.h = h || 0;
        if (createCanvas) {
            this.createCanvas();
        }
        return this;
    };
    return Window;
}(widget_1.Widget));
exports.Window = Window;
;
