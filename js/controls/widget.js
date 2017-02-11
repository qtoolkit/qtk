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
var string_table_1 = require("../string-table");
var widget_factory_1 = require("./widget-factory");
var graphics_1 = require("../graphics");
var dirty_rect_context_1 = require("../dirty-rect-context");
var image_tile_1 = require("../image-tile");
var behavior_1 = require("../behaviors/behavior");
var layouter_1 = require('../layouters/layouter');
var binding_rule_1 = require("../mvvm/binding-rule");
var binding_rule_2 = require("../mvvm/binding-rule");
var iview_model_1 = require("../mvvm/iview-model");
/**
 * @enum WidgetState
 * 控件的状态
 */
(function (WidgetState) {
    /**
     * @property {number}
     * 正常状态。
     */
    WidgetState[WidgetState["NORMAL"] = 0] = "NORMAL";
    /**
     * @property {number}
     * Pointer在控件上。
     */
    WidgetState[WidgetState["OVER"] = 1] = "OVER";
    /**
     * @property {number}
     * Pointer按下的状态。
     */
    WidgetState[WidgetState["ACTIVE"] = 2] = "ACTIVE";
    /**
     * @property {number}
     * 禁用状态。
     */
    WidgetState[WidgetState["DISABLE"] = 3] = "DISABLE";
    /**
     * @property {number}
     * 选中状态。只对部分设备有效。
     */
    WidgetState[WidgetState["SELECTED"] = 4] = "SELECTED";
})(exports.WidgetState || (exports.WidgetState = {}));
var WidgetState = exports.WidgetState;
;
/**
 * @enum HitTestResult
 * 点击测试结果。
 */
(function (HitTestResult) {
    /**
     * @property {number}
     * 点击在控件之外。
     */
    HitTestResult[HitTestResult["NONE"] = 0] = "NONE";
    /**
     * @property {number}
     * 点击在控件左上角。
     */
    HitTestResult[HitTestResult["TL"] = 1] = "TL";
    /**
     * @property {number}
     * 点击在控件上面中间。
     */
    HitTestResult[HitTestResult["TM"] = 2] = "TM";
    /**
     * @property {number}
     * 点击在控件右上角。
     */
    HitTestResult[HitTestResult["TR"] = 3] = "TR";
    /**
     * @property {number}
     * 点击在控件左边中间。
     */
    HitTestResult[HitTestResult["ML"] = 4] = "ML";
    /**
     * @property {number}
     * 点击在控件中间区域。
     */
    HitTestResult[HitTestResult["MM"] = 5] = "MM";
    /**
     * @property {number}
     * 点击在控件右边中间。
     */
    HitTestResult[HitTestResult["MR"] = 6] = "MR";
    /**
     * @property {number}
     * 点击在控件左下角。
     */
    HitTestResult[HitTestResult["BL"] = 7] = "BL";
    /**
     * @property {number}
     * 点击在控件下面中间。
     */
    HitTestResult[HitTestResult["BM"] = 8] = "BM";
    /**
     * @property {number}
     * 点击在控件右下角。
     */
    HitTestResult[HitTestResult["BR"] = 9] = "BR";
})(exports.HitTestResult || (exports.HitTestResult = {}));
var HitTestResult = exports.HitTestResult;
;
/**
 * @class Widget
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
        this.viewModelChangeFunc = function (evt) {
            var viewModel = this._viewModel;
            var dataBindingRule = this._dataBindingRule;
            if (dataBindingRule && viewModel) {
                this.onBindData(viewModel, dataBindingRule);
            }
        }.bind(this);
        this.type = type;
    }
    /**
     * @method set
     * 同时设置多个属性。
     */
    Widget.prototype.set = function (props) {
        if (props) {
            for (var key in props) {
                var value = props[key];
                if (value !== undefined) {
                    this[key] = value;
                }
            }
        }
        return this;
    };
    /**
     * @method get
     * 同时获取多个属性。
     */
    Widget.prototype.get = function (props) {
        if (props) {
            for (var key in props) {
                var value = this[key];
                if (value !== undefined) {
                    props[key] = value;
                }
            }
        }
        return this;
    };
    /**
     * 把全局的坐标转换成相对于当前控件左上角的坐标。
     * @param {Pointer} p 全局坐标。
     * @return {Pointer} 相对于当前控件左上角的坐标。
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
     * 把相对于当前控件左上角的坐标转换成全局坐标。
     * @param {Point} p 相对于当前控件左上角的坐标。
     * @return {Point} 全局坐标。
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
     * @param {Point} p 相对于当前控件左上角的坐标。
     * @return {Point}  屏幕上的坐标。
     */
    Widget.prototype.toViewPoint = function (p) {
        p.x += this.x;
        p.y += this.y;
        var iter = this.parent;
        while (iter) {
            p.x += iter.x;
            p.y += iter.y;
            if (iter.offsetX) {
                p.x -= iter.offsetX;
            }
            if (iter.offsetY) {
                p.y -= iter.offsetY;
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
    Widget.prototype.deinit = function () {
        this.children.forEach(function (child) {
            child.deinit();
        });
        this.onDeinit();
    };
    Widget.prototype.translatePointerEvent = function (evt) {
        evt.localX -= this.x;
        evt.localY -= this.y;
    };
    Widget.prototype.untranslatePointerEvent = function (evt) {
        evt.localX += this.x;
        evt.localY += this.y;
    };
    Widget.prototype.dispatchPointerDown = function (evt) {
        if (!this._enable || !this._sensitive) {
            return;
        }
        this.translatePointerEvent(evt);
        var x = evt.localX;
        var y = evt.localY;
        var hitTestResult = this.selfHitTest(x, y);
        if (hitTestResult) {
            this.dispatchEvent(evt, true);
            this.target = this.findEventTargetChild(x, y);
            if (this.target) {
                this.target.dispatchPointerDown(evt);
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
        this.untranslatePointerEvent(evt);
        this.hitTestResult = hitTestResult;
    };
    Widget.prototype.dispatchPointerMoveToTarget = function (evt) {
        this.dispatchEvent(evt, true);
        if (this.target) {
            this.target.dispatchPointerMove(evt);
        }
        if (this.onpointermove) {
            this.onpointermove(evt);
        }
        this.dispatchEvent(evt, false);
    };
    Widget.prototype.dispatchPointerLeave = function (evt) {
        if (this.state === WidgetState.OVER || this.state === WidgetState.ACTIVE) {
            var e = Events.PointerEvent.create(Events.POINTER_LEAVE, evt);
            this.dispatchEvent(e, false);
            this.state = WidgetState.NORMAL;
            e.dispose();
        }
        if (this.target) {
            this.target.dispatchPointerLeave(evt);
        }
        if (this._lastOverWidget) {
            this._lastOverWidget.dispatchPointerLeave(evt);
            this._lastOverWidget = null;
        }
    };
    Widget.prototype.dispatchPointerEnter = function (evt) {
        var e = Events.PointerEvent.create(Events.POINTER_ENTER, evt);
        this.dispatchEvent(e, false);
        e.dispose();
    };
    Widget.prototype.dispatchPointerMoveToUnder = function (evt) {
        var x = evt.localX;
        var y = evt.localY;
        var hitTestResult = this.selfHitTest(x, y);
        if (hitTestResult) {
            this.dispatchEvent(evt, true);
            var _lastOverWidget = this._lastOverWidget;
            var overWidget = this.findEventTargetChild(x, y);
            if (_lastOverWidget !== overWidget) {
                var e = null;
                if (_lastOverWidget) {
                    _lastOverWidget.dispatchPointerMove(evt);
                    _lastOverWidget.dispatchPointerLeave(evt);
                }
                if (overWidget) {
                    overWidget.dispatchPointerEnter(evt);
                }
                this._lastOverWidget = overWidget;
            }
            if (overWidget) {
                overWidget.dispatchPointerMove(evt);
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
    };
    Widget.prototype.dispatchPointerMove = function (evt) {
        if (!this._enable || !this._sensitive) {
            return;
        }
        this.translatePointerEvent(evt);
        if (evt.pointerDown) {
            this.dispatchPointerMoveToTarget(evt);
        }
        this.dispatchPointerMoveToUnder(evt);
        this.untranslatePointerEvent(evt);
    };
    Widget.prototype.dispatchPointerUp = function (evt) {
        if (!this._enable || !this._sensitive) {
            return;
        }
        this.translatePointerEvent(evt);
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
        this.untranslatePointerEvent(evt);
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
    Widget.prototype.findEventTargetChild = function (x, y) {
        var arr = this._children;
        var n = arr.length;
        for (var i = n - 1; i >= 0; i--) {
            var iter = arr[i];
            if (iter._enable && iter._sensitive) {
                if (rect_1.Rect.rect.init(iter.x, iter.y, iter.w, iter.h).containsPoint(x, y)) {
                    return iter;
                }
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
    /**
     * @method scaleTo
     * 设置控件的缩放比例到指定的值。如果duration > 0则启用动画，并返回TWEEN.Tween，否则返回null。
     * @param {number} sx 宽度缩放比例。
     * @param {number} sy 高度缩放比例。
     * @param {number} duration 动画时间。
     * @return {TWEEN.Tween}
     */
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
    /**
     * @method opacityTo
     * 设置控件的透明度到指定的值。如果duration > 0则启用动画，并返回TWEEN.Tween，否则返回null。
     * @param {number} opacity 不透明度[0-1]
     * @param {number} duration 动画时间。
     * @return {TWEEN.Tween}
     */
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
    /**
     * @method rotateTo
     * 设置控件的旋转角度到指定的值。如果duration > 0则启用动画，并返回TWEEN.Tween，否则返回null。
     * @param {number} rotation 旋转角度，单位为弧度。
     * @param {number} duration 动画时间。
     * @return {TWEEN.Tween}
     */
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
    /**
     * @method moveTo
     * 设置控件的位置到指定的值。如果duration > 0则启用动画，并返回TWEEN.Tween，否则返回null。
     * @param {number} x X 坐标。
     * @param {number} y Y 坐标。
     * @param {number} duration 动画时间。
     * @return {TWEEN.Tween}
     */
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
    /**
     * @method moveResizeTo
     * 设置控件的位置和大小到指定的值。如果duration > 0则启用动画，并返回TWEEN.Tween，否则返回null。
     * @param {number} x X 坐标。
     * @param {number} y Y 坐标。
     * @param {number} w 宽度。
     * @param {number} h 高度。
     * @param {number} duration 动画时间。
     * @return {TWEEN.Tween}
     */
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
    /**
     * @method resizeTo
     * 设置控件的大小到指定的值。如果duration > 0则启用动画，并返回TWEEN.Tween，否则返回null。
     * @param {number} w 宽度。
     * @param {number} h 高度。
     * @param {number} duration 动画时间。
     * @return {TWEEN.Tween}
     */
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
        if (this.children.length > 0 && this.childrenLayouter && ((this.w > 0 && this.h > 0) || this._inited)) {
            var ret = this.childrenLayouter.layoutChildren(this, this.children, this.getLayoutRect());
            return this.layoutRect.copy(ret);
        }
        return this.getLayoutRect();
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
    /*
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
         * @property {Layouter} childrenLayouter
         * 用于子控件布局的Layouter。
         */
        set: function (layouter) {
            if (typeof layouter === "string") {
                this._childrenLayouter = layouter_1.LayouterFactory.create(layouter, null);
            }
            else {
                this._childrenLayouter = layouter;
            }
            if (this.children.length) {
                this.relayoutChildren();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "layoutParam", {
        get: function () {
            return this._layoutParam;
        },
        /**
         * @property {Object} layoutParam
         * 布局参数是父控件在布局当前控件时使用的参数。
         */
        set: function (param) {
            this._layoutParam = param;
            if (param) {
                param.widget = this;
            }
        },
        enumerable: true,
        configurable: true
    });
    Widget.prototype.getParentByType = function (type) {
        var iter = this.parent;
        while (iter && iter.type !== type) {
            iter = iter.parent;
        }
        return iter;
    };
    ///////////////////////////////////////////
    /**
     * @method indexOfChild
     * 获取指定子控件的位置序数。
     * @param {Widget} child 子控件
     * @return {number} 位置序数。
     */
    Widget.prototype.indexOfChild = function (child) {
        return this.children.indexOf(child);
    };
    /**
     * @method findChild
     * 查找满足指定条件的子控件。
     * @param {Function} func 比较函数。
     * @return {Widget} 如果找到，返回该子控件，否则返回null。
     */
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
    /**
     * @method findChildByName
     * 按名称查找子控件。
     * @param {string} name 子控件的名称。
     * @return {Widget} 如果找到，返回该子控件，否则返回null。
     */
    Widget.prototype.findChildByName = function (name) {
        var ret = this.findChild(function (child) {
            return child.name === name;
        });
        return ret;
    };
    /**
     * @method findChildByID
     * 按ID查找子控件。
     * @param {string} id 子控件的ID。
     * @return {Widget} 如果找到，返回该子控件，否则返回null。
     */
    Widget.prototype.findChildByID = function (id) {
        var ret = this.findChild(function (child) {
            return child.id === id;
        });
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
     * @method getLocaleText
     * 获取本地化后的文本。
     */
    Widget.prototype.getLocaleText = function () {
        return string_table_1.StringTable.tr(this.text);
    };
    Widget.prototype.getFgImageRect = function (style) {
        return rect_1.Rect.rect.init(this.leftPadding, this.topPadding, this.clientW, this.clientH);
    };
    Widget.prototype.drawImage = function (ctx, style) {
        if (style.foreGroundImage) {
            var r = this.getFgImageRect(style);
            style.foreGroundImage.draw(ctx, image_tile_1.ImageDrawType.ICON, r.x, r.y, r.w, r.h);
        }
        return this;
    };
    Widget.prototype.getTextRect = function (style) {
        return rect_1.Rect.rect.init(this.leftPadding, this.topPadding, this.clientW, this.clientH);
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
    Widget.prototype.computeDirtyRect = function (ctx) {
        ctx.save();
        this.applyTransform(ctx);
        this.computeDirtyRectSelf(ctx);
        this.computeChildrenDirtyRect(ctx);
        ctx.restore();
    };
    Widget.prototype.computeChildrenDirtyRect = function (ctx) {
        this.children.forEach(function (child) {
            child.computeDirtyRect(ctx);
        });
    };
    Widget.prototype.doDraw = function (ctx, style) {
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
        this.doDraw(ctx, style);
        this.dispatchEvent(drawEvent.reset(Events.AFTER_DRAW, ctx, this));
        ctx.restore();
        return;
    };
    Widget.prototype.stateToString = function (state) {
        return WidgetState[state].toLowerCase();
    };
    Object.defineProperty(Widget.prototype, "styleType", {
        get: function () {
            return this._styleType;
        },
        /**
         * @property {string} styleType
         * 用于从主题中获取style数据。
         */
        set: function (styleType) {
            this._styleType = styleType;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @method setStyle
     * 设置控件的Style。
     * @param {WidgetState} state 状态。
     * @param {Style} style 控件的Style。
     * return {Widget} 控件本身。
     */
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
    /**
     * @method removeAllChildren
     * 移出并销毁所有的子控件。
     * return {Widget} 控件本身。
     */
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
    Widget.prototype.onRemoveChild = function (child) {
    };
    /**
     * @method removeChild
     * 移出子控件。批量删除时，请使用快速模式，并在完成时调用relayoutChildren。
     * @param {Widget} child 子控件。
     * @param {boolean} fastMode 快速模式下，不重新布局子控件。
     * @param {boolean} destroy 是否销毁子控件。
     * return {Widget} 控件本身。
     */
    Widget.prototype.removeChild = function (child, fastMode, destroy) {
        var arr = this._children;
        var index = arr.indexOf(child);
        if (index >= 0) {
            arr.splice(index, 1);
            if (!fastMode) {
                this.relayoutChildren();
            }
        }
        this.onRemoveChild(child);
        if (destroy) {
            child.deinit();
            child.dispose();
        }
        return this;
    };
    Widget.prototype.onAddChild = function (child) {
    };
    /**
     * @method addChild
     * 增加子控件。批量增加时，请使用快速模式，并在完成时调用relayoutChildren。
     * @param {Widget} child 子控件。
     * @param {boolean} fastMode 快速模式下，不重新布局子控件。
     * return {Widget} 控件本身。
     */
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
        this.onAddChild(child);
        return this;
    };
    /**
     * @method dispose
     * 销毁控件及其全部子控件。
     */
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
        this._viewModel = null;
        this._dataBindingRule = null;
        this.removeBinding();
        if (this.recycle) {
            this.recycle();
        }
    };
    /**
     * @method requestRedraw
     * 请求重绘。
     */
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
        canvas.ensureCanvas();
        canvas.on(Events.POINTER_DOWN, function (evt) {
            _this.dispatchPointerDown(evt);
        });
        canvas.on(Events.POINTER_MOVE, function (evt) {
            _this.dispatchPointerMove(evt);
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
            if (r.x < 0)
                r.x = 0;
            if (r.y < 0)
                r.y = 0;
            if ((r.x + r.w) > this.w) {
                r.w = this.w - r.x;
            }
            if ((r.y + r.h) > this.h) {
                r.h = this.h - r.y;
            }
            if (r.w > 0 && r.h > 0) {
                r.x = r.x >> 0;
                r.y = r.y >> 0;
                r.w = (r.w + 1) >> 0;
                r.h = (r.h + 2) >> 0;
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
        /**
         * @property {number} x
         * 控件的X坐标。
         */
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
        /**
         * @property {number} y
         * 控件的Y坐标。
         */
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
        /**
         * @property {number} z
         * 控件的位置序数。
         */
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
        /**
         * @property {number} w
         * 控件的宽度。
         */
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
    Object.defineProperty(Widget.prototype, "clientW", {
        get: function () {
            return this._w - this.leftPadding - this.rightPadding;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "clientH", {
        get: function () {
            return this._h - this.topPadding - this.bottomPadding;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "height", {
        /**
         * @property {number} h
         * 控件的高度。
         */
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
        /**
         * @property {WidgetState} state
         * 控件的状态。
         */
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
        /**
         * @property {any} value
         * 控件的值。不同的控件，值的定义不一样。
         */
        get: function () {
            return this._value;
        },
        set: function (value) {
            this.setValue(value, false, false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "selected", {
        /**
         * @property {boolean} selected
         * 控件是否被选中。
         */
        get: function () {
            return this._selected;
        },
        set: function (value) {
            this.setProp("selected", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "isEnableFunc", {
        get: function () {
            return this._isEnableFunc;
        },
        set: function (value) {
            this._isEnableFunc = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "enable", {
        /**
         * @property {boolean} enable
         * 控件是否处于enable状态。
         */
        get: function () {
            if (this.isEnableFunc) {
                return this.isEnableFunc();
            }
            return this._enable;
        },
        set: function (value) {
            this.setProp("enable", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "inputable", {
        /**
         * @property {boolean} inputable
         * [只读] 控件是否可输入，也就是是否可以通过界面修改它的值。
         */
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "visible", {
        /**
         * @property {boolean} visible
         * 控件是否可见。
         */
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
        /**
         * @property {number} opacity
         * 控件的不透明度(0-1)。
         */
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
        /**
         * @property {number} scaleX
         * 控件的宽度缩放比例。
         */
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
        /**
         * @property {number} scaleY
         * 控件的高度缩放比例。
         */
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
        /**
         * @property {number} rotation
         * 控件的旋转角度。
         */
        get: function () {
            return this._rotation;
        },
        set: function (value) {
            this.setProp("rotation", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "sensitive", {
        /**
         * @property {number} sensitive
         * 控件是否接受用户事件。
         */
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
        /**
         * @property {number} pivotX
         * 控件的X轴点，也就旋转点的X坐标。
         */
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
        /**
         * @property {number} pivotY
         * 控件的Y轴点，也就旋转点的Y坐标。
         */
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
        /**
         * @property {string} tips
         * 控件的提示文本。
         */
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
        /**
         * @property {string} text
         * 控件的文本。
         */
        get: function () {
            return this._text;
        },
        set: function (value) {
            this.setProp("text", (value || value === 0) ? value.toString() : "", true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "name", {
        /**
         * @property {string} name
         * 控件的名称。
         */
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
        /**
         * @property {string} type
         * 控件的类型。
         */
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
        /**
         * @property {string} id
         * 控件的ID。
         */
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "userData", {
        /**
         * @property {any} userData
         * 控件的应用数据。
         */
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
        /**
         * @property {Widget} parent
         * 控件的父控件。
         */
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
        /**
         * @property {IApplication} app
         * 应用程序。
         */
        get: function () {
            return this._app;
        },
        set: function (app) {
            this._app = app;
            if (app) {
                this._mainLoop = app.getMainLoop();
                this._themeManager = app.getThemeManager();
            }
            this.children.forEach(function (child) {
                child.app = app;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "win", {
        /**
         * @property {Window} win
         * 控件所在的窗口。
         */
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
        /**
         * @property {Array<Widget>} children
         * 控件的全部子控件。
         */
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
        /**
         * @property {number} leftPadding
         * 控件的左边界。
         */
        get: function () {
            return this._lp;
        },
        set: function (value) {
            this.setProp("lp", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "rightPadding", {
        /**
         * @property {number} rightPadding
         * 控件的右边界。
         */
        get: function () {
            return this._rp;
        },
        set: function (value) {
            this.setProp("rp", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "topPadding", {
        /**
         * @property {number} topPadding
         * 控件的上边界。
         */
        get: function () {
            return this._tp;
        },
        set: function (value) {
            this.setProp("tp", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "bottomPadding", {
        /**
         * @property {number} bottomPadding
         * 控件的下边界。
         */
        get: function () {
            return this._bp;
        },
        set: function (value) {
            this.setProp("bp", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "padding", {
        /**
         * @property {number} padding
         * 控件的边界。
         */
        get: function () {
            return this._tp;
        },
        set: function (value) {
            this.setProp("lp", value, true);
            this.setProp("tp", value, true);
            this.setProp("rp", value, true);
            this.setProp("bp", value, true);
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
    /**
     * @method useBehavior
     * 启用指定名称的Behavior
     * @param {string} name Behavior的名称。
     * @param {any} options 选项。
     * @return {Behavior}
     */
    Widget.prototype.useBehavior = function (name, options) {
        var behavior;
        if (!this._behaviors[name]) {
            behavior = behavior_1.BehaviorFactory.create(name, this, options);
            this._behaviors[name] = behavior;
        }
        else {
            behavior = this._behaviors[name];
            behavior.setOptions(options);
        }
        return behavior;
    };
    Widget.prototype.notifyChange = function (oldValue) {
        this.dispatchEvent(this.eChangeEvent.init(Events.CHANGE, { newValue: this.value, oldValue: oldValue }));
    };
    Widget.prototype.setValue = function (value, notify, exclude) {
        var _this = this;
        var oldValue = this.value;
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
            this.notifyChange(oldValue);
        }
    };
    Widget.prototype.onReset = function () {
    };
    Widget.prototype.onCreated = function () {
    };
    Widget.prototype.getDefProps = function () {
        return Widget.defProps;
    };
    Widget.prototype.reset = function (type, options) {
        var defProps = this.getDefProps();
        for (var key in defProps) {
            this[key] = defProps[key];
        }
        this._dirty = true;
        this._type = type;
        this._app = null;
        this._children = [];
        this._parent = null;
        this._canvas = null;
        this._styles = null;
        this._target = null;
        this._mainLoop = null;
        this._userData = null;
        this._themeManager = null;
        this._lastOverWidget = null;
        this._id = Date.now() + "." + Widget.ID++;
        ;
        this.onclick = null;
        this.oncontextmenu = null;
        this.onpointerdown = null;
        this.onpointermove = null;
        this.onpointerup = null;
        this.onwheel = null;
        this.onkeydown = null;
        this.onkeyup = null;
        this._behaviors = {};
        this._viewModel = null;
        this._dataBindingRule = null;
        this.onReset();
        this.set(options);
        this.onCreated();
        return this;
    };
    Widget.prototype.onFromJson = function (json) {
    };
    /**
     * @method fromJson
     * 用JSON数据初始化当前控件。
     * @param {any} json 数据。
     */
    Widget.prototype.fromJson = function (json) {
        var _this = this;
        var defProps = this.getDefProps();
        for (var key in defProps) {
            var value = json[key];
            if (value === undefined) {
                value = defProps[key];
            }
            this[key] = value;
        }
        var styles = json.styles;
        if (styles) {
            this._styles = {};
            for (var key in styles) {
                var style = styles[key];
                json._styles[key] = style_1.Style.create(style);
            }
        }
        var childrenLayouter = json.childrenLayouter;
        if (childrenLayouter) {
            this.childrenLayouter = layouter_1.LayouterFactory.create(childrenLayouter.type, childrenLayouter);
        }
        var layoutParam = json.layoutParam;
        if (layoutParam) {
            this.layoutParam = layouter_1.LayouterParamFactory.create(layoutParam.type, layoutParam);
        }
        this._children.length = 0;
        if (json.children) {
            json.children.forEach(function (childJson) {
                var child = widget_factory_1.WidgetFactory.create(childJson.type, { parent: _this, app: _this.app });
                child.fromJson(childJson);
                _this._children.push(child);
            });
        }
        if (json.dataBindingRule) {
            this._dataBindingRule = binding_rule_2.BindingRule.createFromJson(json.dataBindingRule);
        }
        if (json.behaviors) {
            this.behaviorsFromJson(json.behaviors);
        }
        this.onFromJson(json);
        return this;
    };
    /**
     * @method clone
     * CLONE当前控件。
     * @return {Widget} 新对象。
     */
    Widget.prototype.clone = function () {
        var json = this.toJson();
        var widget = widget_factory_1.WidgetFactory.createWithJson(json);
        return widget;
    };
    Widget.prototype.onToJson = function (json) {
    };
    Widget.prototype.behaviorsToJson = function () {
        var json = {};
        var behaviors = this._behaviors;
        if (behaviors) {
            for (var key in behaviors) {
                var value = behaviors[key];
                json[key] = value.toJson();
            }
        }
        return json;
    };
    Widget.prototype.behaviorsFromJson = function (json) {
        var behaviors = this._behaviors;
        if (behaviors) {
            for (var key in behaviors) {
                var value = behaviors[key];
                value.dispose();
            }
        }
        if (json) {
            for (var key in json) {
                this.useBehavior(key, json.options);
            }
        }
        return;
    };
    /**
     * @method toJson
     * 序列化当前的控件到JSON数据。
     * @return {any} JSON数据。
     */
    Widget.prototype.toJson = function () {
        var json = {};
        json.type = this._type;
        var defProps = this.getDefProps();
        for (var key in defProps) {
            var value = this[key];
            if (value !== defProps[key]) {
                json[key] = value;
            }
        }
        var styles = this._styles;
        if (styles) {
            json.styles = {};
            for (var key in styles) {
                var style = styles[key];
                json.styles[key] = style.toJson();
            }
        }
        if (this.childrenLayouter) {
            json.childrenLayouter = this.childrenLayouter.toJson();
        }
        if (this.layoutParam) {
            json.layoutParam = this.layoutParam.toJson();
        }
        if (this.children.length) {
            json.children = [];
            this.children.forEach(function (child) {
                json.children.push(child.toJson());
            });
        }
        if (this._dataBindingRule) {
            json.dataBindingRule = this._dataBindingRule.toJson();
        }
        if (this._behaviors) {
            json.behaviors = this.behaviorsToJson();
        }
        this.onToJson(json);
        return json;
    };
    Object.defineProperty(Widget.prototype, "templateItem", {
        get: function () {
            return this._templateItem;
        },
        /**
         * @property {Widget} templateItem
         * 模板项。用于在数据绑定时，自动生成子控件的模板。
         */
        set: function (value) {
            this._templateItem = value;
            this._templateItemJson = value ? value.toJson() : null;
        },
        enumerable: true,
        configurable: true
    });
    Widget.prototype.addChildWithTemplate = function (fastMode) {
        var child = null;
        var json = this._templateItemJson;
        if (json) {
            child = widget_factory_1.WidgetFactory.createWithJson(json);
            this.addChild(child, fastMode);
        }
        return child;
    };
    ////////////////////////////////////////////	
    //绑定单个属性，子控件可以重载本函数去支持其它属性。
    Widget.prototype.onBindProp = function (prop, value) {
        this[prop] = value;
    };
    Object.defineProperty(Widget.prototype, "dataBindingRule", {
        get: function () {
            return this._dataBindingRule;
        },
        /**
         * @property {any} dataBindingRule
         * 数据绑定规则。
         */
        set: function (dataBindingRule) {
            this._dataBindingRule = binding_rule_2.BindingRule.create(dataBindingRule);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @method updateExplicit
     * 显式的更新ViewModel。
     */
    Widget.prototype.updateExplicit = function () {
        if (this._dataBindingRule) {
            this.onUpdateToDataSource();
        }
        this.children.forEach(function (child) {
            child.updateExplicit();
        });
        return this;
    };
    Widget.prototype.removeBinding = function () {
        var viewModel = this._viewModel;
        var dataBindingRule = this._dataBindingRule;
        if (dataBindingRule && viewModel) {
            viewModel.offChange(this.viewModelChangeFunc);
        }
        this._viewModel = null;
        this._dataBindingRule = null;
    };
    Widget.prototype.onBeforeBindData = function () {
    };
    Widget.prototype.onAfterBindData = function () {
    };
    /**
     * @method bindData
     * 绑定数据。
     * @param {IViewModel} viewModel View Model。
     * @return {Widget} 控件本身。
     */
    Widget.prototype.bindData = function (viewModel) {
        var _this = this;
        var dataBindingRule = this._dataBindingRule;
        this._viewModel = viewModel;
        this.onBeforeBindData();
        if (dataBindingRule && viewModel) {
            var bindingMode = viewModel.bindingMode;
            this.onBindCommand(viewModel, dataBindingRule);
            if (bindingMode !== iview_model_1.BindingMode.ONE_WAY_TO_SOURCE) {
                this.onBindData(viewModel, dataBindingRule);
            }
            if (bindingMode === iview_model_1.BindingMode.TWO_WAY || bindingMode === iview_model_1.BindingMode.ONE_WAY_TO_SOURCE) {
                this.watchTargetChange(dataBindingRule);
            }
            if (bindingMode !== iview_model_1.BindingMode.ONE_TIME && bindingMode !== iview_model_1.BindingMode.ONE_WAY_TO_SOURCE) {
                viewModel.onChange(this.viewModelChangeFunc);
            }
            this._isEnableFunc = function () {
                var enable = true;
                var vm = this._viewModel;
                if (vm) {
                    dataBindingRule.forEach(function (prop, item) {
                        var source = item.source;
                        if (source.type === binding_rule_1.BindingCommandSource.TYPE) {
                            var commandSource = source;
                            enable = enable && vm.canExecute(commandSource.command);
                        }
                    });
                }
                return enable;
            };
        }
        this.bindDataToChildren(viewModel);
        if (viewModel.isCollection && this._templateItemJson) {
            var collectionViewModel = viewModel;
            collectionViewModel.onItemsChange(function (evt) {
                _this.bindDataToChildren(viewModel);
            });
        }
        this.onAfterBindData();
        return this;
    };
    Widget.prototype.bindDataToChildren = function (viewModel) {
        if (viewModel.isCollection) {
            if (this._templateItemJson) {
                //对于集合viewModel，如果有模板项存在，则动态生成子控件。
                var json = this._templateItemJson;
                var collectionViewModel = viewModel;
                var n = collectionViewModel.total;
                this.removeAllChildren();
                for (var i = 0; i < n; i++) {
                    var itemViewModel = collectionViewModel.getItemViewModel(i);
                    var child = this.addChildWithTemplate(true);
                    child.bindData(itemViewModel);
                }
                this.relayoutChildren();
            }
            else {
                //对于集合viewModel，如果没有模板项存在，则绑定集合viewModel当前项到子控件。
                this._children.forEach(function (child) {
                    child.bindData(viewModel);
                });
            }
        }
        else {
            //对于非集合viewModel，按正常绑定子控件。
            this._children.forEach(function (child) {
                child.bindData(viewModel);
            });
        }
    };
    /*
     * 绑定命令，注册相应的事件处理函数。
     */
    Widget.prototype.onBindCommand = function (viewModel, dataBindingRule) {
        var _this = this;
        dataBindingRule.forEach(function (prop, item) {
            var source = item.source;
            if (source.type === binding_rule_1.BindingCommandSource.TYPE) {
                var commandSource = source;
                var type = Events.mapToEvent(prop);
                if (type) {
                    var command = commandSource.command;
                    if (typeof command == "object" && command.path) {
                        commandSource.command = viewModel.getProp(command.path);
                    }
                    var commandArgs = commandSource.commandArgs;
                    if (typeof commandArgs == "object" && commandArgs.path) {
                        commandSource.commandArgs = viewModel.getProp(commandArgs.path);
                    }
                    if (commandSource.eventHandler) {
                        _this.off(type, commandSource.eventHandler);
                    }
                    commandSource.eventHandler = function (evt) {
                        var args = commandSource.commandArgs || evt;
                        viewModel.execCommand(commandSource.command, args);
                    };
                    _this.on(type, commandSource.eventHandler);
                }
                else {
                    console.log(prop + " is not supported yet.");
                }
            }
        });
    };
    /*
     * 把数据显示到界面上。
     */
    Widget.prototype.onBindData = function (viewModel, dataBindingRule) {
        var _this = this;
        dataBindingRule.forEach(function (prop, item) {
            var source = item.source;
            if (source.type === binding_rule_1.BindingDataSource.TYPE) {
                var dataSource = source;
                var value = dataSource.value;
                var bindingMode = dataSource.mode || iview_model_1.BindingMode.TWO_WAY;
                if (value === undefined && dataSource.path) {
                    value = viewModel.getProp(dataSource.path, dataSource.converter);
                }
                if (bindingMode !== iview_model_1.BindingMode.ONE_WAY_TO_SOURCE) {
                    _this.onBindProp(prop, value);
                }
            }
        });
    };
    Widget.prototype.getPropDefaultBindMode = function (prop) {
        return (prop === "value" && this.inputable) ? iview_model_1.BindingMode.TWO_WAY : iview_model_1.BindingMode.ONE_WAY;
    };
    /*
     * 子控件重载此函数向用户提示数据无效。
     */
    Widget.prototype.onInvalidInput = function (message) {
        if (message) {
            console.log("invalid value:" + message);
        }
    };
    Widget.prototype.onUpdateToDataSource = function () {
        var _this = this;
        var dataBindingRule = this._dataBindingRule;
        dataBindingRule.forEach(function (prop, item) {
            if (item.source.type === binding_rule_1.BindingDataSource.TYPE) {
                var dataSource = item.source;
                if (dataSource.updateTiming === iview_model_1.UpdateTiming.EXPLICIT) {
                    _this.updateValueToSource(_this.value, dataSource);
                }
            }
        });
    };
    /*
     * 把界面数据更新到模型。
     */
    Widget.prototype.updateValueToSource = function (value, dataSource, oldValue) {
        var result = this._viewModel.setPropEx(dataSource, value, oldValue);
        this.onInvalidInput(result.code ? result.message : null);
    };
    /*
     * 监控控件单个属性的变化。
     */
    Widget.prototype.watchTargetValueChange = function (dataSource) {
        var _this = this;
        var updateTiming = dataSource.updateTiming;
        var bindingMode = dataSource.mode || iview_model_1.BindingMode.TWO_WAY;
        if (updateTiming === iview_model_1.UpdateTiming.EXPLICIT) {
            return;
        }
        if (bindingMode === iview_model_1.BindingMode.TWO_WAY || bindingMode === iview_model_1.BindingMode.ONE_WAY_TO_SOURCE) {
            this.on(Events.CHANGE, function (evt) {
                _this.updateValueToSource(evt.value, dataSource, evt.oldValue);
            });
            if (updateTiming === iview_model_1.UpdateTiming.CHANGING) {
                this.on(Events.CHANGING, function (evt) {
                    _this.updateValueToSource(evt.value, dataSource);
                });
            }
        }
    };
    /*
     * 监控控件属性的变化。
     */
    Widget.prototype.watchTargetChange = function (dataBindingRule) {
        var _this = this;
        dataBindingRule.forEach(function (prop, item) {
            var source = item.source;
            if (source.type === binding_rule_1.BindingDataSource.TYPE) {
                var dataSource = source;
                var bindingMode = _this.getPropDefaultBindMode(prop);
                if (bindingMode === iview_model_1.BindingMode.TWO_WAY) {
                    _this.watchTargetValueChange(dataSource);
                }
            }
        });
    };
    Widget.prototype.hitTest = function (x, y) {
        return this.doHitTest(x, y, rect_1.Rect.rect.init(0, 0, this.w, this.h));
    };
    Widget.prototype.doHitTest = function (x, y, r) {
        return r.containsPoint(x, y) ? HitTestResult.MM : HitTestResult.NONE;
    };
    Widget.prototype.selfHitTest = function (x, y) {
        return this.hitTest(x, y);
    };
    Widget.defProps = {
        _x: 0,
        _y: 0,
        _z: 0,
        _w: 0,
        _h: 0,
        _state: 0,
        _value: 0,
        _enable: true,
        _visible: true,
        _selected: false,
        _opacity: 1,
        _scaleX: 1,
        _scaleY: 1,
        _pivotX: 0.5,
        _pivotY: 0.5,
        _rotation: 0,
        _sensitive: true,
        _tips: null,
        _text: null,
        _name: null,
        _hitTestResult: 0,
        _isWindow: false,
        _mode: 0,
        _styleType: null,
        _lp: 0,
        _tp: 0,
        _rp: 0,
        _bp: 0
    };
    Widget.ID = 10000;
    return Widget;
}(emitter_1.Emitter));
exports.Widget = Widget;
;
