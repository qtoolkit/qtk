"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var emitter_1 = require("./emitter");
var Events = require("./events");
var event_detail_1 = require("./event-detail");
var inputEventAdapter = require("./input-event-adapter");
/**
 * Canvas是对HTMLCanvasElement的包装，主要解决两个问题：
 *
 * 1.对指针事件坐标的转换，让绝对坐标变成相对与Canvas左上角的坐标。
 *
 * 2.支持高清屏。为了避免在高清屏上图片模糊，让Canvas的宽高乘以devicePixelRatio, Canvas的style.width/style.height仍然用实际的宽高，getContext时预先将矩阵乘以devicePixelRatio，从而让使用者无需关心当前屏幕的类型。
 *
 */
var Canvas = (function (_super) {
    __extends(Canvas, _super);
    function Canvas(x, y, w, h, devicePixelRatio, offline) {
        _super.call(this);
        this._id = "canvas";
        this._x = x || 0;
        this._y = y || 0;
        this._w = w || 0;
        this._h = h || 0;
        this._offline = offline || false;
        this._devicePixelRatio = devicePixelRatio || 1;
        var me = this;
        this.onPointerEvent = function (evt) {
            me.transformXY(evt.detail);
            var e = Events.PointerEvent.create(evt.type, evt.detail);
            me.dispatchEvent(e);
            e.dispose();
        };
        this.onKeyEvent = function (evt) {
            var e = Events.KeyEvent.create(evt.type, evt.detail);
            me.dispatchEvent(e);
            e.dispose();
        };
        this.onWheelEvent = function (evt) {
            var e = Events.WheelEvent.create(evt.detail);
            me.dispatchEvent(e);
            e.dispose();
        };
    }
    Canvas.prototype.transformXY = function (detail) {
        detail.x -= this.x;
        detail.y -= this.y;
        detail.pointerDownX -= this.x;
        detail.pointerDownY -= this.y;
    };
    Object.defineProperty(Canvas.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
            if (this.canvas) {
                this.canvas.id = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
            this.moveCanvas(this.canvas);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
            this.moveCanvas(this.canvas);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "w", {
        get: function () {
            return this._w;
        },
        set: function (value) {
            this._w = value;
            this.resizeCanvas(this.canvas);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "h", {
        get: function () {
            return this._h;
        },
        set: function (value) {
            this._h = value;
            this.resizeCanvas(this.canvas);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "width", {
        get: function () {
            return this._w;
        },
        set: function (value) {
            this.w = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "height", {
        get: function () {
            return this._h;
        },
        set: function (value) {
            this.h = value;
        },
        enumerable: true,
        configurable: true
    });
    Canvas.prototype.grabKey = function () {
        inputEventAdapter.grabKey(this.canvas);
    };
    Canvas.prototype.ungrabKey = function () {
        inputEventAdapter.ungrabKey(this.canvas);
    };
    Canvas.prototype.grab = function () {
        inputEventAdapter.grab(this.canvas);
    };
    Canvas.prototype.ungrab = function () {
        inputEventAdapter.ungrab(this.canvas);
    };
    Canvas.prototype.moveCanvas = function (canvas) {
        if (canvas) {
            var x = this._x;
            var y = this._y;
            canvas.style.position = "absolute";
            canvas.style.left = x + "px";
            canvas.style.top = y + "px";
        }
    };
    Canvas.prototype.resizeCanvas = function (canvas) {
        if (canvas) {
            var w = this._w;
            var h = this._h;
            canvas.width = w * this._devicePixelRatio;
            canvas.style.width = w + "px";
            canvas.height = h * this._devicePixelRatio;
            canvas.style.height = h + "px";
        }
    };
    Object.defineProperty(Canvas.prototype, "z", {
        set: function (value) {
            this._z = value;
            this.canvas.style.zIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Canvas.prototype.dispose = function () {
        var canvas = this.canvas;
        if (!this._offline) {
            document.body.removeChild(canvas);
        }
        canvas.removeEventListener(Events.POINTER_DOWN, this.onPointerEvent);
        canvas.removeEventListener(Events.POINTER_MOVE, this.onPointerEvent);
        canvas.removeEventListener(Events.POINTER_UP, this.onPointerEvent);
        canvas.removeEventListener(Events.CLICK, this.onPointerEvent);
        canvas.removeEventListener(Events.WHEEL, this.onWheelEvent);
        canvas.removeEventListener(Events.KEYDOWN, this.onKeyEvent);
        canvas.removeEventListener(Events.KEYUP, this.onKeyEvent);
    };
    Canvas.prototype.createCanvas = function () {
        var canvas = document.createElement("canvas");
        canvas.id = this._id;
        this.moveCanvas(canvas);
        this.resizeCanvas(canvas);
        if (!this._offline) {
            document.body.appendChild(canvas);
        }
        var me = this;
        canvas.addEventListener(Events.POINTER_DOWN, this.onPointerEvent);
        canvas.addEventListener(Events.POINTER_MOVE, this.onPointerEvent);
        canvas.addEventListener(Events.POINTER_UP, this.onPointerEvent);
        canvas.addEventListener(Events.CLICK, this.onPointerEvent);
        canvas.addEventListener(Events.DBLCLICK, this.onPointerEvent);
        canvas.addEventListener(Events.WHEEL, this.onWheelEvent);
        canvas.addEventListener(Events.KEYDOWN, this.onKeyEvent);
        canvas.addEventListener(Events.KEYUP, this.onKeyEvent);
        canvas.oncontextmenu = function (evt) {
            evt.preventDefault();
            var detail = event_detail_1.PointerEventDetail.create(evt.which, evt.pageX, evt.pageY, evt.altKey, evt.ctrlKey, evt.shiftKey, false);
            me.onPointerEvent({ type: Events.CONTEXT_MENU, detail: detail });
            detail.dispose();
        };
        return canvas;
    };
    Canvas.prototype.ensureCanvas = function () {
        if (!this.canvas) {
            this.canvas = this.createCanvas();
        }
    };
    Canvas.prototype.getContext = function (type) {
        if (!this.canvas) {
            this.canvas = this.createCanvas();
        }
        var ctx = this.canvas.getContext("2d");
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(this._devicePixelRatio, this._devicePixelRatio);
        return ctx;
    };
    Canvas.create = function (x, y, w, h, devicePixelRatio, offline) {
        return new Canvas(x, y, w, h, devicePixelRatio, offline);
    };
    return Canvas;
}(emitter_1.Emitter));
exports.Canvas = Canvas;
