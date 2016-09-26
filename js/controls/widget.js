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
var utils_1 = require("../utils");
var Events = require("../events");
var matrix_stack_1 = require("../matrix-stack");
var graphics_1 = require("../graphics");
var dirty_rect_context_1 = require("../dirty-rect-context");
var layouter_1 = require('../layouters/layouter');
var behavior_1 = require("../behaviors/behavior");
/**
 * Widget是所有控件的基类。
 */
var Widget = (function (_super) {
    __extends(Widget, _super);
    function Widget(type) {
        _super.call(this);
        ///////////////////////////////////////////
        this.layoutRect = rect_1.Rect.create(0, 0, 0, 0);
        this.eChangeEvent = Events.ChangeEvent.create();
        this.ePropChangeEvent = Events.PropChangeEvent.create();
        this.type = type;
    }
    /**
     * 同时设置多个属性。
     */
    Widget.prototype.set = function (props) {
        if (props) {
            for (var key in props) {
                this[key] = props[key];
            }
        }
        return this;
    };
    /**
     * 同时获取多个属性。
     */
    Widget.prototype.get = function (props) {
        if (props) {
            for (var key in props) {
                props[key] = this[key];
            }
        }
        return props;
    };
    /**
     * 把全局的坐标转换成相对于当前控件左上角的坐标。
     * @param p 全局坐标。
     * @returns 相对于当前控件左上角的坐标。
     */
    Widget.prototype.toLocalPoint = function (p) {
        p.x -= this.x;
        p.y -= this.y;
        var iter = this.parent;
        while (iter) {
            p.x -= iter.x;
            p.y -= iter.y;
            iter = iter.parent;
        }
        return p;
    };
    /**
     * 把Pointer事件的坐标转换成相对于当前控件左上角的坐标。
     * @param p Pointer事件的坐标。
     * @returns 相对于当前控件左上角的坐标。
     */
    Widget.prototype.eventPointToLocal = function (p) {
        if (this._canvas) {
            return p;
        }
        p.x -= this.x;
        p.y -= this.y;
        var iter = this.parent;
        while (iter) {
            if (iter._canvas) {
                break;
            }
            p.x -= iter.x;
            p.y -= iter.y;
            iter = iter.parent;
        }
        return p;
    };
    /**
     * 把相对于当前控件左上角的坐标转换成全局坐标。
     * @param p 相对于当前控件左上角的坐标。
     * @returns 全局坐标。
     */
    Widget.prototype.toGlobalPoint = function (p) {
        p.x += this.x;
        p.y += this.y;
        var iter = this.parent;
        while (iter) {
            p.x += iter.x;
            p.y += iter.y;
            iter = iter.parent;
        }
        return p;
    };
    /**
     * 把相对于当前控件左上角的坐标转换成屏幕上的坐标。
     * @param p 相对于当前控件左上角的坐标。
     * @returns 屏幕上的坐标。
     */
    Widget.prototype.toViewPoint = function (p) {
        p.x += this.x;
        p.y += this.y;
        var iter = this.parent;
        while (iter) {
            p.x += iter.x;
            p.y += iter.y;
            if (iter.offsetX) {
                p.x - iter.offsetX;
            }
            if (iter.offsetY) {
                p.y - iter.offsetY;
            }
            iter = iter.parent;
        }
        return p;
    };
    Widget.prototype.onInit = function () {
        this._inited = true;
        if (!this.app && this.parent) {
            this.app = this.parent.app;
        }
    };
    /**
     * 初始化。在窗口打开后，对窗口上所有控件调用，或者在窗口打开后，对新创建的控件调用。
     */
    Widget.prototype.init = function () {
        this.onInit();
        this.children.forEach(function (child) {
            child.init();
        });
        return this;
    };
    Widget.prototype.onDeinit = function () {
        this._inited = false;
    };
    /**
     * ~初始化。在窗口关闭后，对窗口上所有控件调用，或者对被移出的控件调用。
     */
    Widget.prototype.deinit = function () {
        this.children.forEach(function (child) {
            child.deinit();
        });
        this.onDeinit();
    };
    /**
     * 分发一个事件到当前控件及其子控件。
     */
    Widget.prototype.dispatchEventToAll = function (evt) {
        this.dispatchEvent(evt);
        this.children.forEach(function (child) {
            child.dispatchEvent(evt);
        });
    };
    /**
     * 测试点是否落在当前控件中。
     * @param x X坐标，相对于全局原点的坐标。
     * @param y Y坐标，相对于全局原点的坐标。
     * @param ctx 矩阵变换上下文。ctx包含了从顶级父控件到当前控件的变化。
     * @returns 测试结果HitTestResult。
     */
    Widget.prototype.hitTest = function (x, y, ctx) {
        return this.doHitTest(x, y, rect_1.Rect.rect.init(0, 0, this.w, this.h), ctx);
    };
    Widget.prototype.doHitTest = function (x, y, r, ctx) {
        var m = ctx.invert();
        if (m) {
            var p = m.transformPoint(x, y);
            if (p.x >= r.x && p.x <= (r.x + r.w) && p.y >= r.y && p.y <= (r.y + r.h)) {
                return HitTestResult.MM;
            }
        }
        return HitTestResult.NONE;
    };
    Widget.prototype.selfHitTest = function (x, y, ctx) {
        return this.hitTest(x, y, ctx);
    };
    Widget.prototype.dispatchPointerDown = function (evt, ctx) {
        if (!this._enable || !this._sensitive) {
            return;
        }
        ctx.save();
        this.applyTransform(ctx);
        var hitTestResult = this.selfHitTest(evt.x, evt.y, ctx);
        if (hitTestResult) {
            this.dispatchEvent(evt, true);
            this.target = this.findEventTargetChild(evt.x, evt.y, ctx);
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
        var hitTestResult = this.selfHitTest(evt.x, evt.y, ctx);
        if (hitTestResult) {
            this.dispatchEvent(evt, true);
            var _lastOverWidget = this._lastOverWidget;
            var overWidget = this.findEventTargetChild(evt.x, evt.y, ctx);
            if (_lastOverWidget !== overWidget) {
                var e = null;
                if (_lastOverWidget) {
                    _lastOverWidget.dispatchPointerMove(evt, ctx);
                    e = Events.PointerEvent.create(Events.POINTER_LEAVE, evt);
                    _lastOverWidget.dispatchEvent(e, false);
                    e.dispose();
                    _lastOverWidget.state = WidgetState.NORMAL;
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
    Widget.prototype.dispatchContextMenu = function (evt) {
        if (!this._enable || !this._sensitive) {
            return;
        }
        this.dispatchEvent(evt, true);
        if (this.target) {
            this.target.dispatchContextMenu(evt);
        }
        if (this.oncontextmenu) {
            this.oncontextmenu(evt);
        }
        this.dispatchEvent(evt, false);
    };
    Widget.prototype.dispatchDblClick = function (evt) {
        if (!this._enable || !this._sensitive) {
            return;
        }
        this.dispatchEvent(evt, true);
        if (this.target) {
            this.target.dispatchDblClick(evt);
        }
        if (this.ondblclick) {
            this.ondblclick(evt);
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
        this.requestRedraw();
        return tween;
    };
    Widget.prototype.scaleTo = function (sx, sy, duration) {
        this.requestRedraw();
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
    Widget.prototype.opacityTo = function (opacity, duration) {
        this.requestRedraw();
        if (duration > 0) {
            var tween = new TWEEN.Tween(this);
            tween.to({ opacity: opacity }, duration).start();
            return tween;
        }
        else {
            this.opacity = opacity;
            ;
            return null;
        }
    };
    Widget.prototype.rotateTo = function (rotation, duration) {
        this.requestRedraw();
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
        this.requestRedraw();
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
    Widget.prototype.getLayoutRect = function () {
        return this.layoutRect.init(this.leftPadding, this.topPadding, this.w - this.leftPadding - this.rightPadding, this.h - this.topPadding - this.bottomPadding);
    };
    /**
     * 根据当前的childrenLayouter重新布局子控件。
     */
    Widget.prototype.relayoutChildren = function () {
        this.requestRedraw();
        if (this.childrenLayouter) {
            var ret = this.childrenLayouter.layoutChildren(this, this.children, this.getLayoutRect());
            return this.layoutRect.copy(ret);
        }
        return null;
    };
    /**
     * 请求重新布局当前控件。
     */
    Widget.prototype.requestRelayout = function () {
        if (this.parent) {
            this.parent.relayoutChildren();
        }
        return this;
    };
    /**
     * 根据当前的childrenLayouter创建子控件的布局参数。
     */
    Widget.prototype.createChildLayoutParam = function (options) {
        var layouter = this.childrenLayouter;
        return layouter ? layouter.createParam(options) : null;
    };
    /**
     * 启用指定的childrenLayouter。
     */
    Widget.prototype.useChildrenLayouter = function (type, options) {
        this.childrenLayouter = layouter_1.LayouterFactory.create(type, options);
        return this;
    };
    Object.defineProperty(Widget.prototype, "childrenLayouter", {
        get: function () {
            return this._childrenLayouter;
        },
        /**
         * 设置childrenLayouter。
         */
        set: function (layouter) {
            if (typeof layouter === "string") {
                this._childrenLayouter = layouter_1.LayouterFactory.create(layouter, null);
            }
            else {
                this._childrenLayouter = layouter;
            }
            this.relayoutChildren();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "layoutParam", {
        get: function () {
            return this._layoutParam;
        },
        /**
         * 布局参数是父控件在布局当前控件时使用的。
         */
        set: function (param) {
            this._layoutParam = param;
            if (this.parent) {
                this.parent.relayoutChildren();
            }
        },
        enumerable: true,
        configurable: true
    });
    ///////////////////////////////////////////
    Widget.prototype.indexOfChild = function (child) {
        return this.children.indexOf(child);
    };
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
    Widget.prototype.drawColorBackground = function (ctx, style) {
        var roundType = 0;
        var roundTypeName = style.roundType;
        if (roundTypeName) {
            if (roundTypeName === "top") {
                roundType = graphics_1.RoundType.TL | graphics_1.RoundType.TR;
            }
            else if (roundTypeName === "bottom") {
                roundType = graphics_1.RoundType.BL | graphics_1.RoundType.BR;
            }
            else if (roundTypeName === "left") {
                roundType = graphics_1.RoundType.BL | graphics_1.RoundType.TL;
            }
            else if (roundTypeName === "right") {
                roundType = graphics_1.RoundType.TR | graphics_1.RoundType.BR;
            }
        }
        graphics_1.Graphics.drawRoundRect(ctx, style.backGroundColor, style.lineColor, style.lineWidth, 0, 0, this.w, this.h, style.roundRadius, roundType);
        return this;
    };
    Widget.prototype.drawBackground = function (ctx, style) {
        if (style.backGroundImage) {
            style.backGroundImage.draw(ctx, style.backGroundImageDrawType, 0, 0, this.w, this.h);
        }
        else if (style.backGroundColor || (style.lineColor && style.lineWidth)) {
            this.drawColorBackground(ctx, style);
        }
        return this;
    };
    /**
     * 获取本地化后的文本。
     */
    Widget.prototype.getLocaleText = function () {
        return this.text;
    };
    /**
     * 绘制前景图片，子控件根据需要重载。
     */
    Widget.prototype.drawImage = function (ctx, style) {
        return this;
    };
    /**
     * 获取文本显示区域。
     */
    Widget.prototype.getTextRect = function (style) {
        var x = this.leftPadding;
        var y = this.topPadding;
        var w = this.w - x - this.rightPadding;
        var h = this.h - y - this.bottomPadding;
        return rect_1.Rect.rect.init(x, y, w, h);
    };
    Widget.prototype.drawText = function (ctx, style) {
        var text = this.getLocaleText();
        if (text && style.textColor) {
            graphics_1.Graphics.drawTextSL(ctx, text, style, this.getTextRect(style));
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
    /**
     * 计算脏矩形。
     */
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
                .drawImage(ctx, style)
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
    Widget.prototype.getStyleType = function () {
        return this._styleType || this.type;
    };
    Widget.prototype.getStyleOfState = function (state) {
        var style = null;
        var tm = this._themeManager;
        var stateName = this.stateToString(state);
        if (this._styles) {
            style = this._styles[stateName];
        }
        else if (tm) {
            var styleType = this.getStyleType();
            style = tm.get(styleType, stateName);
        }
        return style;
    };
    Widget.prototype.getStateForStyle = function () {
        return this.enable ? this._state : WidgetState.DISABLE;
    };
    Widget.prototype.getStyle = function () {
        var state = this.getStateForStyle();
        var style = this.getStyleOfState(state);
        if (!style) {
            style = this.getStyleOfState(WidgetState.NORMAL);
        }
        return style;
    };
    Widget.prototype.sortChildren = function () {
        var arr = this._children;
        utils_1.stableSort(arr, function (a, b) {
            return a.z - b.z;
        });
        return this;
    };
    Widget.prototype.removeAllChildren = function () {
        this.children.forEach(function (child) {
            child.deinit();
            child.dispose();
        });
        this.target = null;
        this.children.length = 0;
        this._lastOverWidget = null;
        return this;
    };
    Widget.prototype.removeChild = function (child, fastMode, destroy) {
        var arr = this._children;
        var index = arr.indexOf(child);
        if (index >= 0) {
            arr.splice(index, 1);
            if (!fastMode) {
                this.relayoutChildren();
            }
        }
        if (destroy) {
            child.deinit();
            child.dispose();
        }
        return this;
    };
    Widget.prototype.addChild = function (child, fastMode) {
        var arr = this._children;
        arr.push(child);
        child.parent = this;
        child.app = this.app;
        if (this._inited) {
            child.init();
        }
        if (!fastMode) {
            this.sortChildren();
            this.relayoutChildren();
        }
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
        this._app = null;
        this._parent = null;
        this._children = [];
        this._layoutParam = null;
        this._childrenLayouter = null;
        if (this.recycle) {
            this.recycle();
        }
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
        canvas.on(Events.DBLCLICK, function (evt) {
            _this.dispatchDblClick(evt);
        });
        canvas.on(Events.CONTEXT_MENU, function (evt) {
            _this.dispatchContextMenu(evt);
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
        this.on(Events.PROP_CHANGE, function (evt) {
            var prop = evt.prop;
            var value = evt.newValue;
            switch (prop) {
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
            this.setProp("x", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this.setProp("y", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "z", {
        get: function () {
            return this._z;
        },
        set: function (value) {
            this.setProp("z", value, true);
            if (this._parent) {
                this._parent.sortChildren();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "desireWidth", {
        get: function () {
            return this._w;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "w", {
        get: function () {
            return this._w;
        },
        set: function (value) {
            this.setProp("w", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "width", {
        get: function () {
            return this._w;
        },
        set: function (value) {
            this.setProp("w", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "height", {
        get: function () {
            return this._h;
        },
        set: function (value) {
            this.setProp("h", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "h", {
        get: function () {
            return this._h;
        },
        set: function (value) {
            this.setProp("h", value, true);
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
                this.setProp("state", value, true);
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
            this.setValue(value, true, false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (value) {
            this.setProp("selected", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "enable", {
        get: function () {
            return this._enable;
        },
        set: function (value) {
            this.setProp("enable", value, true);
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
        this.setProp("visible", value, true);
        this.dispatchEvent({ type: value ? Events.SHOW : Events.HIDE });
        this.requestRedraw();
    };
    Object.defineProperty(Widget.prototype, "opacity", {
        get: function () {
            return this._opacity;
        },
        set: function (value) {
            this.setProp("opacity", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "scaleX", {
        get: function () {
            return this._scaleX;
        },
        set: function (value) {
            this.setProp("scaleX", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "scaleY", {
        get: function () {
            return this._scaleY;
        },
        set: function (value) {
            this.setProp("scaleY", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "rotation", {
        get: function () {
            return this._rotation;
        },
        set: function (value) {
            this.setProp("rotation", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "focusable", {
        get: function () {
            return this._focusable;
        },
        set: function (value) {
            this.setProp("focusable", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "sensitive", {
        get: function () {
            return this._sensitive;
        },
        set: function (value) {
            this.setProp("sensitive", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "pivotX", {
        get: function () {
            return this._pivotX;
        },
        set: function (value) {
            this.setProp("pivotX", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "pivotY", {
        get: function () {
            return this._pivotY;
        },
        set: function (value) {
            this.setProp("pivotY", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "tips", {
        get: function () {
            return this._tips;
        },
        set: function (value) {
            this.setProp("tips", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (value) {
            this.setProp("text", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this.setProp("name", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this.setProp("type", value, true);
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
            this.setProp("tag", value, true);
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
            this.setProp("leftPadding", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "rightPadding", {
        get: function () {
            return this._rightPadding;
        },
        set: function (value) {
            this.setProp("rightPadding", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "topPadding", {
        get: function () {
            return this._topPadding;
        },
        set: function (value) {
            this.setProp("topPadding", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "bottomPadding", {
        get: function () {
            return this._bottomPadding;
        },
        set: function (value) {
            this.setProp("bottomPadding", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "padding", {
        get: function () {
            return this._topPadding;
        },
        set: function (value) {
            this.setProp("leftPadding", value, true);
            this.setProp("topPadding", value, true);
            this.setProp("rightPadding", value, true);
            this.setProp("bottomPadding", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Widget.prototype.setProp = function (prop, newValue, notify) {
        var propName = "_" + prop;
        var oldValue = this[propName];
        if (oldValue !== newValue) {
            this[propName] = newValue;
            this.requestRedraw();
            if (notify) {
                var evt = this.ePropChangeEvent;
                evt.init(Events.PROP_CHANGE, { prop: prop, oldValue: oldValue, newValue: newValue });
                this.dispatchEvent(evt);
            }
        }
        return this;
    };
    Widget.prototype.setText = function (text, notify) {
        return this.setProp("text", text, notify);
    };
    Widget.prototype.useBehavior = function (type, options) {
        var behavior;
        if (!this._behaviors[type]) {
            behavior = behavior_1.BehaviorFactory.create(type, this, options);
            this._behaviors[type] = behavior;
        }
        else {
            behavior = this._behaviors[type];
            behavior.setOptions(options);
        }
        return behavior;
    };
    Widget.prototype.notifyChange = function () {
        this.dispatchEvent(this.eChangeEvent.init(Events.CHANGE, { newValue: this.value, oldValue: !this.value }));
    };
    Widget.prototype.setValue = function (value, notify, exclude) {
        var _this = this;
        if (exclude) {
            var type = this.type;
            if (this.parent && value) {
                var arr = this.parent.children;
                arr.forEach(function (child) {
                    if (child !== _this && child.type === type) {
                        if (child.value) {
                            child.setProp("value", false, true);
                        }
                    }
                });
            }
            this.setProp("value", true, notify);
        }
        else {
            this.setProp("value", value, notify);
        }
        if (notify) {
            this.notifyChange();
        }
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
        this.oncontextmenu = null;
        this.onpointerdown = null;
        this.onpointermove = null;
        this.onpointerup = null;
        this.onwheel = null;
        this.onkeydown = null;
        this.onkeyup = null;
        this._behaviors = {};
        this.removeAllListeners();
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
        widget.reset("dummy");
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
