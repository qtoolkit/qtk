"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var widget_1 = require("../controls/widget");
/**
 * 可滚的分组。
 */
var ScrollableGroup = (function (_super) {
    __extends(ScrollableGroup, _super);
    function ScrollableGroup(type) {
        _super.call(this, type);
    }
    Object.defineProperty(ScrollableGroup.prototype, "offsetX", {
        get: function () {
            return this._ox;
        },
        set: function (value) {
            this._ox = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollableGroup.prototype, "offsetY", {
        get: function () {
            return this._oy;
        },
        set: function (value) {
            this._oy = value;
        },
        enumerable: true,
        configurable: true
    });
    ScrollableGroup.prototype.relayoutChildren = function () {
        if (!this.w || !this.h) {
            return null;
        }
        var x = this.leftPadding;
        var y = this.topPadding;
        if (this.w > this.h) {
            var h = this.clientH;
            this.children.forEach(function (child) {
                child.moveResizeTo(x, y, child.w, h);
                child.relayoutChildren();
                x += child.w;
            });
        }
        else {
            var w = this.clientW;
            this.children.forEach(function (child) {
                child.moveResizeTo(x, y, w, child.h);
                child.relayoutChildren();
                y += child.h;
            });
        }
        return this.getLayoutRect();
    };
    ScrollableGroup.prototype.doDrawChildren = function (ctx) {
        _super.prototype.drawChildren.call(this, ctx);
    };
    ScrollableGroup.prototype.drawChildren = function (ctx) {
        var ox = this._ox;
        var oy = this._oy;
        var x = this.leftPadding;
        var y = this.topPadding;
        var w = this.w - x - this.rightPadding;
        var h = this.h - y - this.bottomPadding;
        ctx.save();
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.clip();
        ctx.translate(-ox, -oy);
        this.doDrawChildren(ctx);
        ctx.restore();
        return this;
    };
    /*
     * 在处理指针事件前，先加上滚动的偏移。
     */
    ScrollableGroup.prototype.offsetPointerEvent = function (evt) {
        evt.x += this._ox;
        evt.y += this._oy;
    };
    /*
     * 在处理指针事件后，再减去滚动的偏移。
     */
    ScrollableGroup.prototype.unOffsetPointerEvent = function (evt) {
        evt.y -= this._oy;
    };
    ScrollableGroup.prototype.onReset = function () {
        _super.prototype.onReset.call(this);
        this._ox = 0;
        this._oy = 0;
    };
    ScrollableGroup.prototype.dispatchClick = function (evt) {
        this.offsetPointerEvent(evt);
        _super.prototype.dispatchClick.call(this, evt);
        this.unOffsetPointerEvent(evt);
    };
    ScrollableGroup.prototype.dispatchDblClick = function (evt) {
        this.offsetPointerEvent(evt);
        _super.prototype.dispatchDblClick.call(this, evt);
        this.unOffsetPointerEvent(evt);
    };
    ScrollableGroup.prototype.dispatchPointerDown = function (evt, ctx) {
        this.offsetPointerEvent(evt);
        _super.prototype.dispatchPointerDown.call(this, evt, ctx);
        this.unOffsetPointerEvent(evt);
    };
    ScrollableGroup.prototype.dispatchPointerMove = function (evt, ctx) {
        this.offsetPointerEvent(evt);
        _super.prototype.dispatchPointerMove.call(this, evt, ctx);
        this.unOffsetPointerEvent(evt);
    };
    ScrollableGroup.prototype.dispatchPointerUp = function (evt) {
        this.offsetPointerEvent(evt);
        _super.prototype.dispatchPointerUp.call(this, evt);
        this.unOffsetPointerEvent(evt);
    };
    return ScrollableGroup;
}(widget_1.Widget));
exports.ScrollableGroup = ScrollableGroup;
;
