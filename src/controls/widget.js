/// <reference path="../../typings/globals/tween.js/index.d.ts"/>
/// <reference path="../../typings/globals/eventemitter3/index.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var rect_1 = require("../rect");
var style_1 = require("../style");
var canvas_1 = require("../canvas");
var TWEEN = require("tween.js");
var emitter_1 = require("../emitter");
var graphics_1 = require("../graphics");
var Events = require("../events");
var matrix_stack_1 = require("../matrix-stack");
var layouter_1 = require('../layouter');
var dirty_rect_context_1 = require("../dirty-rect-context");
var behavior_1 = require("../behaviors/behavior");
/**
 * Widget是所有控件的基类。
 */
var Widget = (function (_super) {
    __extends(Widget, _super);
    function Widget(type) {
        _super.call(this);
        this.reset(type);
    }
    Widget.prototype.toLocalPoint = function (p) {
        var iter = this;
        while (iter) {
            p.x -= iter.x;
            p.y -= iter.y;
            iter = iter.parent;
        }
        return p;
    };
    Widget.prototype.toGlobalPoint = function (p) {
        var iter = this;
        while (iter) {
            p.x += iter.x;
            p.y += iter.y;
            iter = iter.parent;
        }
        return p;
    };
    Widget.prototype.set = function (attrs) {
        for (var key in attrs) {
            this[key] = attrs[key];
        }
        return this;
    };
    Widget.prototype.get = function (attrs) {
        for (var key in attrs) {
            attrs[key] = this[key];
        }
        return attrs;
    };
    /**
     * 测试点是否落在当前控件中。
     * @param x X坐标，相对于全局原点的坐标。
     * @param y Y坐标，相对于全局原点的坐标。
     * @param ctx 矩阵变换上下文。ctx包含了从顶级父控件到当前控件的变化。
     * @returns 测试结果HitTestResult。
     */
    Widget.prototype.hitTest = function (x, y, ctx) {
        var m = ctx.invert();
        if (m || true) {
            var p = m.transformPoint(x, y);
            if (p.x >= 0 && p.x <= this.w && p.y >= 0 && p.y <= this.h) {
                return HitTestResult.MM;
            }
        }
        return HitTestResult.NONE;
    };
    Widget.prototype.selfHitTest = function (x, y, ctx) {
        return this.hitTest(x, y, ctx);
    };
    Widget.prototype.dispatchPointerDown = function (evt, ctx) {
        var detail = evt;
        if (!this._enable || !this._sensitive) {
            return;
        }
        ctx.save();
        this.applyTransform(ctx);
        var hitTestResult = this.selfHitTest(detail.x, detail.y, ctx);
        if (hitTestResult) {
            this.dispatchEvent(evt, true);
            this.target = this.findEventTargetChild(detail.x, detail.y, ctx);
            if (this.target) {
                this.target.dispatchPointerDown(evt, ctx);
            }
            if (this.onpointerdown) {
                this.onpointerdown(evt);
            }
            this.dispatchEvent(evt, false);
            this.state = WidgetState.ACTIVE;
        }
        else {
            if (this.onpointerdown) {
                this.onpointerdown(evt);
            }
            this.state = WidgetState.NORMAL;
        }
        ctx.restore();
        this.hitTestResult = hitTestResult;
    };
    Widget.prototype.dispatchPointerMoveToTarget = function (evt, ctx) {
        this.dispatchEvent(evt, true);
        if (this.target) {
            this.target.dispatchPointerMove(evt, ctx);
        }
        if (this.onpointermove) {
            this.onpointermove(evt);
        }
        this.dispatchEvent(evt, false);
    };
    Widget.prototype.dispatchPointerMoveToUnder = function (evt, ctx) {
        ctx.save();
        this.applyTransform(ctx);
        var detail = evt;
        var hitTestResult = this.selfHitTest(detail.x, detail.y, ctx);
        if (hitTestResult) {
            this.dispatchEvent(evt, true);
            var _lastOverWidget = this._lastOverWidget;
            var overWidget = this.findEventTargetChild(detail.x, detail.y, ctx);
            if (_lastOverWidget !== overWidget) {
                var e = null;
                if (_lastOverWidget) {
                    _lastOverWidget.dispatchPointerMove(evt, ctx);
                    e = Events.PointerEvent.create(Events.POINTER_LEAVE, evt);
                    _lastOverWidget.dispatchEvent(e, false);
                    e.dispose();
                }
                if (overWidget) {
                    e = Events.PointerEvent.create(Events.POINTER_ENTER, evt);
                    overWidget.dispatchEvent(e, false);
                    e.dispose();
                }
                this._lastOverWidget = overWidget;
            }
            if (overWidget) {
                overWidget.dispatchPointerMove(evt, ctx);
            }
            if (this.onpointermove) {
                this.onpointermove(evt);
            }
            this.dispatchEvent(evt, false);
            if (evt.pointerDown) {
                this.state = WidgetState.ACTIVE;
            }
            else {
                this.state = WidgetState.OVER;
            }
        }
        else {
            this.dispatchEvent(evt, true);
            if (this.onpointermove) {
                this.onpointermove(evt);
            }
            this.dispatchEvent(evt, false);
            this.state = WidgetState.NORMAL;
        }
        ctx.restore();
    };
    Widget.prototype.dispatchPointerMove = function (evt, ctx) {
        if (!this._enable || !this._sensitive) {
            return;
        }
        if (evt.pointerDown) {
            this.dispatchPointerMoveToTarget(evt, ctx);
        }
        this.dispatchPointerMoveToUnder(evt, ctx);
    };
    Widget.prototype.dispatchPointerUp = function (evt) {
        if (!this._enable || !this._sensitive) {
            return;
        }
        this.dispatchEvent(evt, true);
        if (this._lastOverWidget && this.target !== this._lastOverWidget) {
            this._lastOverWidget.dispatchPointerUp(evt);
        }
        if (this.target) {
            this.target.dispatchPointerUp(evt);
        }
        if (this.onpointerup) {
            this.onpointerup(evt);
        }
        this.dispatchEvent(evt, false);
        this.state = WidgetState.NORMAL;
    };
    Widget.prototype.dispatchClick = function (evt) {
        if (!this._enable || !this._sensitive) {
            return;
        }
        this.dispatchEvent(evt, true);
        if (this.target) {
            this.target.dispatchClick(evt);
        }
        if (this.onclick) {
            this.onclick(evt);
        }
        this.dispatchEvent(evt, false);
    };
    Widget.prototype.dispatchKeyDown = function (evt) {
        if (!this._enable || !this._sensitive) {
            return;
        }
        this.dispatchEvent(evt, true);
        if (this.target) {
            this.target.dispatchKeyDown(evt);
        }
        if (this.onkeydown) {
            this.onkeydown(evt);
        }
        this.dispatchEvent(evt, false);
    };
    Widget.prototype.dispatchKeyUp = function (evt) {
        if (!this._enable || !this._sensitive) {
            return;
        }
        this.dispatchEvent(evt, true);
        if (this.target) {
            this.target.dispatchKeyUp(evt);
        }
        if (this.onkeyup) {
            this.onkeyup(evt);
        }
        this.dispatchEvent(evt, false);
    };
    Widget.prototype.dispatchWheel = function (evt) {
        if (!this._enable || !this._sensitive) {
            return;
        }
        this.dispatchEvent(evt, true);
        if (this.target) {
            this.target.dispatchWheel(evt);
        }
        if (this.onwheel) {
            this.onwheel(evt);
        }
        this.dispatchEvent(evt, false);
    };
    Widget.prototype.applyTransform = function (ctx) {
        var e = Events.ApplyTransformEvent.get();
        this.dispatchEvent(e.reset(Events.BEFORE_APPLY_TRANSFORM, ctx, this));
        if (!this._canvas) {
            ctx.translate(this._x, this._y);
        }
        var px = this._pivotX * this._w;
        var py = this._pivotY * this._h;
        if (this._rotation || this._scaleX !== 1 || this._scaleY !== 1) {
            ctx.translate(px, py);
            ctx.rotate(this._rotation);
            ctx.scale(this._scaleX, this._scaleY);
            ctx.translate(-px, -py);
        }
        this.dispatchEvent(e.reset(Events.AFTER_APPLY_TRANSFORM, ctx, this));
        return this;
    };
    Widget.prototype.findEventTargetChild = function (x, y, ctx) {
        var arr = this._children;
        var n = arr.length;
        for (var i = n - 1; i >= 0; i--) {
            var iter = arr[i];
            if (iter._enable && iter._sensitive) {
                ctx.save();
                iter.applyTransform(ctx);
                var hitTestResult = iter.hitTest(x, y, ctx);
                if (hitTestResult) {
                    ctx.restore();
                    return iter;
                }
                ctx.restore();
            }
        }
        return null;
    };
    ///////////////////////////////////////////
    Widget.prototype.animate = function () {
        var tween = new TWEEN.Tween(this);
        return tween;
    };
    Widget.prototype.scaleTo = function (sx, sy, duration) {
        if (duration > 0) {
            var tween = new TWEEN.Tween(this);
            tween.to({ scaleX: sx, scaleY: sy }, duration).start();
            return tween;
        }
        else {
            this.scaleX = sx;
            this.scaleY = sy;
            return null;
        }
    };
    Widget.prototype.rotateTo = function (rotation, duration) {
        if (duration > 0) {
            var tween = new TWEEN.Tween(this);
            tween.to({ rotation: rotation }, duration).start();
            return tween;
        }
        else {
            this.rotation = rotation;
            return null;
        }
    };
    Widget.prototype.moveTo = function (x, y, duration) {
        if (duration > 0) {
            var tween = new TWEEN.Tween(this);
            tween.to({ x: x, y: y }, duration).start();
            return tween;
        }
        else {
            this.x = x;
            this.y = y;
            return null;
        }
    };
    Widget.prototype.moveResizeTo = function (x, y, w, h, duration) {
        if (duration > 0) {
            var tween = new TWEEN.Tween(this);
            tween.to({ x: x, y: y, w: w, h: h }, duration).start();
            return tween;
        }
        else {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            return null;
        }
    };
    Widget.prototype.resizeTo = function (w, h, duration) {
        if (duration > 0) {
            var tween = new TWEEN.Tween(this);
            tween.to({ w: w, h: h }, duration).start();
            return tween;
        }
        else {
            this.w = w;
            this.h = h;
            return null;
        }
    };
    ///////////////////////////////////////////
    Widget.prototype.getLayoutRect = function () {
        return rect_1.Rect.create(this.leftPadding, this.topPadding, this.w - this.leftPadding - this.rightPadding, this.h - this.topPadding - this.bottomPadding);
    };
    Widget.prototype.relayoutChildren = function () {
        if (this.childrenLayouter) {
            var r = this.getLayoutRect();
            this.childrenLayouter.layoutChildren(this, this.children, r);
            r.dispose();
            this.requestRedraw();
        }
        return null;
    };
    Widget.prototype.requestRelayout = function () {
        if (this.parent) {
            this.parent.relayoutChildren();
        }
        return this;
    };
    Widget.prototype.useChildrenLayouter = function (type, options) {
        this.childrenLayouter = layouter_1.LayouterFactory.create(type, options);
        return this;
    };
    Object.defineProperty(Widget.prototype, "childrenLayouter", {
        get: function () {
            return this._childrenLayouter;
        },
        set: function (layouter) {
            this._childrenLayouter = layouter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "layoutParam", {
        get: function () {
            return this._layoutParam;
        },
        set: function (param) {
            this._layoutParam = param;
        },
        enumerable: true,
        configurable: true
    });
    ///////////////////////////////////////////
    Widget.prototype.findChild = function (func) {
        var i = 0;
        var arr = this._children;
        var n = arr.length;
        for (var i = 0; i < n; i++) {
            var iter = arr[i];
            if (func(iter)) {
                return iter;
            }
        }
        return null;
    };
    Widget.prototype.findChildByName = function (name) {
        var ret = this.findChild(function (child) {
            return child.name === name;
        });
        return ret;
    };
    Widget.prototype.findChildByID = function (id) {
        var ret = this.findChild(function (child) {
            return child.id === id;
        });
        return ret;
    };
    Widget.prototype.find = function (path) {
        var items = path.split("/");
        var n = items.length;
        var ret = this;
        for (var i = 0; i < n; i++) {
            var name = items[i];
            ret = ret.findChildByName(name);
        }
        return ret;
    };
    Widget.prototype.drawBackground = function (ctx, style) {
        if (style.backGroundImage) {
            style.backGroundImage.draw(ctx, style.backGroundImageDrawType, 0, 0, this.w, this.h);
        }
        else if (style.backGroundColor || (style.lineColor && style.lineWidth)) {
            graphics_1.Graphics.drawRoundRect(ctx, style.backGroundColor, style.lineColor, style.lineWidth, 0, 0, this.w, this.h, style.roundRadius);
        }
        return this;
    };
    Widget.prototype.getLocaleText = function () {
        return this._text;
    };
    Widget.prototype.drawText = function (ctx, style) {
        var text = this.getLocaleText();
        if (text && style.fontColor) {
            ctx.font = style.font;
            ctx.fillStyle = style.fontColor;
            ctx.textAlign = style.textAlign;
            ctx.textBaseline = style.textBaseline;
            ctx.fillText(text, this.w >> 1, this.h >> 1);
        }
        return this;
    };
    Widget.prototype.drawChildren = function (ctx) {
        this._children.forEach(function (child) {
            if (child.visible) {
                child.draw(ctx);
            }
        });
        return this;
    };
    Widget.prototype.drawTips = function (ctx, style) {
        return this;
    };
    Widget.prototype.computeDirtyRectSelf = function (ctx) {
        if (this._dirty) {
            ctx.addRect(-5, -5, this.w + 10, this.h + 10);
        }
    };
    Widget.prototype.computeDirtyRect = function (ctx) {
        ctx.save();
        this.applyTransform(ctx);
        this.computeDirtyRectSelf(ctx);
        this.children.forEach(function (child) {
            child.computeDirtyRect(ctx);
        });
        ctx.restore();
    };
    Widget.prototype.draw = function (ctx) {
        this._dirty = false;
        var style = this.getStyle();
        ctx.save();
        var opacity = this._opacity;
        if (opacity !== 1) {
            ctx.globalAlpha *= opacity;
        }
        this.applyTransform(ctx);
        var drawEvent = Events.DrawEvent.get();
        this.dispatchEvent(drawEvent.reset(Events.BEFORE_DRAW, ctx, this));
        if (style) {
            this.drawBackground(ctx, style)
                .drawChildren(ctx)
                .drawText(ctx, style)
                .drawTips(ctx, style);
        }
        else {
            this.drawChildren(ctx);
        }
        this.dispatchEvent(drawEvent.reset(Events.AFTER_DRAW, ctx, this));
        ctx.restore();
        return;
    };
    Widget.prototype.stateToString = function (state) {
        return states[state];
    };
    ;
    Object.defineProperty(Widget.prototype, "styleType", {
        set: function (styleType) {
            this._styleType = styleType;
        },
        enumerable: true,
        configurable: true
    });
    Widget.prototype.setStyle = function (state, style) {
        if (!this._styles) {
            this._styles = {};
        }
        var stateName = this.stateToString(state);
        this._styles[stateName] = style;
        return this;
    };
    Widget.prototype.getStyleOfState = function (state) {
        var style = null;
        var stateName = this.stateToString(state);
        if (this._styles) {
            style = this._styles[stateName];
        }
        else {
            var tm = this._themeManager;
            var styleType = this._styleType || this.type;
            style = tm.get(styleType, stateName);
        }
        return style;
    };
    Widget.prototype.getStyle = function () {
        var state = this._state;
        var style = this.getStyleOfState(state);
        if (!style) {
            style = this.getStyleOfState(WidgetState.NORMAL);
        }
        return style;
    };
    Widget.prototype.sortChildren = function () {
        var arr = this._children;
        arr.sort(function (a, b) {
            return a.z - b.z;
        });
        return this;
    };
    Widget.prototype.appendChild = function (child) {
        this._children.push(child);
        return this;
    };
    Widget.prototype.addChild = function (child) {
        var arr = this._children;
        arr.push(child);
        child.parent = this;
        child.app = this.app;
        this.sortChildren();
        this.relayoutChildren();
        return this;
    };
    Widget.prototype.dispose = function () {
        this.dispatchEvent({ type: Events.DISPOSE });
        if (this._canvas) {
            this._canvas.dispose();
            this._canvas = null;
        }
        this.removeAllListeners();
        this._children.forEach(function (child) {
            child.dispose();
        });
        this._parent = null;
        this._children = [];
    };
    Widget.prototype.removeChild = function (child) {
        var arr = this._children;
        var index = arr.indexOf(child);
        if (index >= 0) {
            arr.splice(index, 1);
            this.relayoutChildren();
        }
        return this;
    };
    Widget.prototype.requestRedraw = function () {
        var app = this._app;
        this._dirty = true;
        if (app) {
            app.getMainLoop().requestRedraw();
        }
        return this;
    };
    //////////////////////////////////////////////////
    Widget.prototype.createCanvas = function () {
        var _this = this;
        var app = this.app;
        var density = app.getViewPort().density;
        var canvas = canvas_1.Canvas.create(this.x, this.y, this.w, this.h, density);
        var matrixStack = matrix_stack_1.MatrixStack.create();
        canvas.ensureCanvas();
        canvas.on(Events.POINTER_DOWN, function (evt) {
            matrixStack.identity();
            _this.dispatchPointerDown(evt, matrixStack);
        });
        canvas.on(Events.POINTER_MOVE, function (evt) {
            matrixStack.identity();
            _this.dispatchPointerMove(evt, matrixStack);
        });
        canvas.on(Events.POINTER_UP, function (evt) {
            _this.dispatchPointerUp(evt);
        });
        canvas.on(Events.CLICK, function (evt) {
            _this.dispatchClick(evt);
        });
        canvas.on(Events.WHEEL, function (evt) {
            _this.dispatchWheel(evt);
        });
        canvas.on(Events.KEYDOWN, function (evt) {
            _this.dispatchKeyDown(evt);
        });
        canvas.on(Events.KEYUP, function (evt) {
            _this.dispatchKeyUp(evt);
        });
        this._canvas = canvas;
        var mainLoop = this.app.getMainLoop();
        var dirtyRectContext = dirty_rect_context_1.DirtyRectContext.create();
        var lastDirtyRect = rect_1.Rect.create(0, 0, this.w, this.h);
        var debugDirtyRect = app.options.debugDirtyRect;
        function drawWithDirtyRect(evt) {
            var ctx = canvas.getContext("2d");
            dirtyRectContext.reset();
            this.computeDirtyRect(dirtyRectContext);
            var dirtyRect = dirtyRectContext.getRect();
            var r = lastDirtyRect.merge(dirtyRect);
            if (r.w > 0 && r.h > 0) {
                ctx.save();
                ctx.beginPath();
                ctx.clearRect(r.x, r.y, r.w, r.h);
                ctx.rect(r.x, r.y, r.w, r.h);
                ctx.clip();
                ctx.globalAlpha = 1;
                this.draw(ctx);
                if (debugDirtyRect) {
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = "gold";
                    ctx.strokeRect(dirtyRect.x + 1, dirtyRect.y + 1, dirtyRect.w - 2, dirtyRect.h - 2);
                }
                ctx.restore();
            }
            lastDirtyRect.copy(dirtyRect);
        }
        function drawWithoutDirtyRect(evt) {
            var ctx = canvas.getContext("2d");
            ctx.globalAlpha = 1;
            this.draw(ctx);
        }
        var withoutDirtyRect = app.options.withoutDirtyRect;
        var draw = withoutDirtyRect ? drawWithoutDirtyRect.bind(this) : drawWithDirtyRect.bind(this);
        mainLoop.on(Events.TICK, draw);
        this.on(Events.DISPOSE, function (evt) {
            mainLoop.off(Events.TICK, draw);
        });
        this.on(Events.CHANGE, function (evt) {
            var attr = evt.attr;
            var value = evt.newValue;
            switch (attr) {
                case "x": {
                    canvas.x = value;
                    break;
                }
                case "y": {
                    canvas.y = value;
                    break;
                }
                case "w": {
                    canvas.w = value;
                    break;
                }
                case "h": {
                    canvas.h = value;
                    break;
                }
                case "z": {
                    canvas.z = value;
                    break;
                }
            }
        });
        return this;
    };
    Object.defineProperty(Widget.prototype, "dirty", {
        //////////////////////////////////////////////////
        get: function () {
            return this._dirty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this.setAttr("x", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this.setAttr("y", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "z", {
        get: function () {
            return this._z;
        },
        set: function (value) {
            this.setAttr("z", value, true);
            if (this._parent) {
                this._parent.sortChildren();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "w", {
        get: function () {
            return this._w;
        },
        set: function (value) {
            this.setAttr("w", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "h", {
        get: function () {
            return this._h;
        },
        set: function (value) {
            this.setAttr("h", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            if (this._state !== value) {
                this.setAttr("state", value, true);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this.setAttr("value", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (value) {
            this.setAttr("selected", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "enable", {
        get: function () {
            return this._enable;
        },
        set: function (value) {
            this.setAttr("enable", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (value) {
            var oldValue = this._visible;
            if (this.value !== oldValue) {
                this.setVisible(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Widget.prototype.setVisible = function (value) {
        this.setAttr("visible", value, true);
        this.dispatchEvent({ type: value ? Events.SHOW : Events.HIDE });
        this.requestRedraw();
    };
    Object.defineProperty(Widget.prototype, "opacity", {
        get: function () {
            return this._opacity;
        },
        set: function (value) {
            this.setAttr("opacity", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "scaleX", {
        get: function () {
            return this._scaleX;
        },
        set: function (value) {
            this.setAttr("scaleX", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "scaleY", {
        get: function () {
            return this._scaleY;
        },
        set: function (value) {
            this.setAttr("scaleY", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "rotation", {
        get: function () {
            return this._rotation;
        },
        set: function (value) {
            this.setAttr("rotation", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "focusable", {
        get: function () {
            return this._focusable;
        },
        set: function (value) {
            this.setAttr("focusable", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "sensitive", {
        get: function () {
            return this._sensitive;
        },
        set: function (value) {
            this.setAttr("sensitive", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "pivotX", {
        get: function () {
            return this._pivotX;
        },
        set: function (value) {
            this.setAttr("pivotX", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "pivotY", {
        get: function () {
            return this._pivotY;
        },
        set: function (value) {
            this.setAttr("pivotY", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "tips", {
        get: function () {
            return this._tips;
        },
        set: function (value) {
            this.setAttr("tips", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (value) {
            this.setAttr("text", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this.setAttr("name", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this.setAttr("type", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "tag", {
        get: function () {
            return this._tag;
        },
        set: function (value) {
            this.setAttr("tag", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "userData", {
        get: function () {
            return this._userData;
        },
        set: function (value) {
            this._userData = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "target", {
        get: function () {
            return this._target;
        },
        set: function (value) {
            this._target = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "hitTestResult", {
        get: function () {
            return this._hitTestResult;
        },
        set: function (value) {
            this._hitTestResult = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        set: function (value) {
            this._parent = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "app", {
        get: function () {
            return this._app;
        },
        set: function (app) {
            this._app = app;
            if (app) {
                this._mainLoop = app.getMainLoop();
                this._themeManager = app.getThemeManager();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "win", {
        get: function () {
            for (var iter = this; iter !== null; iter = iter._parent) {
                if (iter._isWindow) {
                    return iter;
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "canvas", {
        get: function () {
            return this._canvas;
        },
        enumerable: true,
        configurable: true
    });
    Widget.prototype.isWindow = function () {
        return this._isWindow;
    };
    Object.defineProperty(Widget.prototype, "leftPadding", {
        get: function () {
            return this._leftPadding;
        },
        set: function (value) {
            this.setAttr("leftPadding", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "rightPadding", {
        get: function () {
            return this._rightPadding;
        },
        set: function (value) {
            this.setAttr("rightPadding", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "topPadding", {
        get: function () {
            return this._topPadding;
        },
        set: function (value) {
            this.setAttr("topPadding", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "bottomPadding", {
        get: function () {
            return this._bottomPadding;
        },
        set: function (value) {
            this.setAttr("bottomPadding", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "padding", {
        get: function () {
            return this._topPadding;
        },
        set: function (value) {
            this.setAttr("leftPadding", value, true);
            this.setAttr("topPadding", value, true);
            this.setAttr("rightPadding", value, true);
            this.setAttr("bottomPadding", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Widget.prototype.setAttr = function (attr, newValue, notify) {
        var attrName = "_" + attr;
        var oldValue = this[attrName];
        if (oldValue !== newValue) {
            this[attrName] = newValue;
            this.requestRedraw();
            if (notify) {
                var evt = Events.ChangeEvent.create(attr, oldValue, newValue);
                this.dispatchEvent(evt);
                evt.dispose();
            }
        }
        return this;
    };
    Widget.prototype.setText = function (text, notify) {
        return this.setAttr("text", text, notify);
    };
    Widget.prototype.setValue = function (value, notify) {
        return this.setAttr("value", value, notify);
    };
    Widget.prototype.useBehavior = function (type, options) {
        if (!this._behaviors[type]) {
            var behavior = behavior_1.BehaviorFactory.create(type, this, options);
            this._behaviors[type] = behavior;
        }
        return this._behaviors[type];
    };
    Widget.prototype.reset = function (type) {
        this._x = 0;
        this._y = 0;
        this._z = 0;
        this._w = 0;
        this._h = 0;
        this._state = WidgetState.NORMAL;
        this._value = 0;
        this._enable = true;
        this._visible = true;
        this._selected = false;
        this._opacity = 1;
        this._scaleX = 1;
        this._scaleY = 1;
        this._pivotX = 0.5;
        this._pivotY = 0.5;
        this._rotation = 0;
        this._focusable = false;
        this._sensitive = true;
        this._tips = null;
        this._text = null;
        this._dirty = false;
        this._name = type;
        this._id = Date.now() + "." + Widget.ID++;
        ;
        this._tag = null;
        this._type = type;
        this._userData = null;
        this._target = null;
        this._hitTestResult = HitTestResult.NONE;
        this._isWindow = false;
        this._parent = null;
        this._app = null;
        this._children = [];
        this._themeManager = null;
        this._mainLoop = null;
        this._mode = WidgetMode.RUNTIME;
        this._canvas = null;
        this._styles = null;
        this._styleType = null;
        this._leftPadding = 0;
        this._topPadding = 0;
        this._rightPadding = 0;
        this._bottomPadding = 0;
        this._lastOverWidget = null;
        this.onclick = null;
        this.onpointerdown = null;
        this.onpointermove = null;
        this.onpointerup = null;
        this.onwheel = null;
        this.onkeydown = null;
        this.onkeyup = null;
        this._behaviors = {};
        return this;
    };
    Widget.prototype.fromJson = function (json) {
        this._x = json.x;
        this._y = json.y;
        this._z = json.z;
        this._w = json.w;
        this._h = json.h;
        this._state = json.state;
        this._enable = json.enable;
        this._visible = json.visible;
        this._opacity = json.opacity;
        this._scaleX = json.scaleX;
        this._scaleY = json.scaleY;
        this._pivotX = json.pivotX;
        this._pivotY = json.pivotY;
        this._rotation = json.rotation;
        this._focusable = json.focusable;
        this._sensitive = json.sensitive;
        this._tips = json.tips;
        this._text = json.text;
        this._name = json.name;
        this._id = json.id;
        this._tag = json.tag;
        this._type = json.type;
        this._mode = json.mode;
        this.value = json.value;
        this._leftPadding = json.leftPadding;
        this._rightPadding = json.rightPadding;
        this._topPadding = json.topPadding;
        this._bottomPadding = json.bottomPadding;
        var styles = json.styles;
        if (styles) {
            this._styles = {};
            for (var key in styles) {
                var style = styles[key];
                json._styles[key] = style_1.Style.create(style);
            }
        }
        return this;
    };
    Widget.prototype.toJson = function (json) {
        if (!json) {
            json = {};
        }
        json.x = this._x;
        json.y = this._y;
        json.z = this._z;
        json.w = this._w;
        json.h = this._h;
        json.state = this._state;
        json.enable = this._enable;
        json.visible = this._visible;
        json.opacity = this._opacity;
        json.scaleX = this._scaleX;
        json.scaleY = this._scaleY;
        json.pivotX = this._pivotX;
        json.pivotY = this._pivotY;
        json.rotation = this._rotation;
        json.focusable = this._focusable;
        json.sensitive = this._sensitive;
        json.tips = this._tips;
        json.text = this._text;
        json.name = this._name;
        json.id = this._id;
        json.tag = this._tag;
        json.type = this._type;
        json.mode = this._mode;
        json.leftPadding = this._leftPadding;
        json.rightPadding = this._rightPadding;
        json.topPadding = this._topPadding;
        json.bottomPadding = this._bottomPadding;
        json.value = this.value;
        var styles = this._styles;
        if (styles) {
            json.styles = {};
            for (var key in styles) {
                var style = styles[key];
                json.styles[key] = style.toJson();
            }
        }
        return json;
    };
    Widget.create = function (app, options) {
        var widget = new Widget("dummy");
        widget.app = app;
        return widget;
    };
    Widget.ID = 10000;
    return Widget;
}(emitter_1.Emitter));
exports.Widget = Widget;
;
(function (WidgetMode) {
    WidgetMode[WidgetMode["RUNTIME"] = 0] = "RUNTIME";
    WidgetMode[WidgetMode["DESIGN"] = 1] = "DESIGN";
})(exports.WidgetMode || (exports.WidgetMode = {}));
var WidgetMode = exports.WidgetMode;
;
(function (WidgetState) {
    WidgetState[WidgetState["NORMAL"] = 0] = "NORMAL";
    WidgetState[WidgetState["OVER"] = 1] = "OVER";
    WidgetState[WidgetState["ACTIVE"] = 2] = "ACTIVE";
    WidgetState[WidgetState["DISABLE"] = 3] = "DISABLE";
    WidgetState[WidgetState["SELECTED"] = 4] = "SELECTED";
})(exports.WidgetState || (exports.WidgetState = {}));
var WidgetState = exports.WidgetState;
;
(function (HitTestResult) {
    HitTestResult[HitTestResult["NONE"] = 0] = "NONE";
    HitTestResult[HitTestResult["TL"] = 1] = "TL";
    HitTestResult[HitTestResult["TM"] = 2] = "TM";
    HitTestResult[HitTestResult["TR"] = 3] = "TR";
    HitTestResult[HitTestResult["ML"] = 4] = "ML";
    HitTestResult[HitTestResult["MM"] = 5] = "MM";
    HitTestResult[HitTestResult["MR"] = 6] = "MR";
    HitTestResult[HitTestResult["RL"] = 7] = "RL";
    HitTestResult[HitTestResult["RM"] = 8] = "RM";
    HitTestResult[HitTestResult["RR"] = 9] = "RR";
})(exports.HitTestResult || (exports.HitTestResult = {}));
var HitTestResult = exports.HitTestResult;
;
var states = ["normal", "over", "active", "disable", "selected"];
