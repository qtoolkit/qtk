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
var widget_1 = require("../controls/widget");
/**
 * 被动式可滚分组。滚动区域由外面设置。
 */
var PassiveScrollableGroup = (function (_super) {
    __extends(PassiveScrollableGroup, _super);
    function PassiveScrollableGroup(type) {
        return _super.call(this, type) || this;
    }
    Object.defineProperty(PassiveScrollableGroup.prototype, "offsetX", {
        get: function () {
            return this._ox;
        },
        /**
         * X的偏移。
         */
        set: function (value) {
            this._ox = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PassiveScrollableGroup.prototype, "offsetY", {
        get: function () {
            return this._oy;
        },
        /**
         * Y的偏移。
         */
        set: function (value) {
            this._oy = value;
        },
        enumerable: true,
        configurable: true
    });
    PassiveScrollableGroup.prototype.relayoutChildren = function () {
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
    PassiveScrollableGroup.prototype.doDrawChildren = function (ctx) {
        _super.prototype.drawChildren.call(this, ctx);
    };
    PassiveScrollableGroup.prototype.drawChildren = function (ctx) {
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
    PassiveScrollableGroup.prototype.offsetPointerEvent = function (evt) {
        evt.x += this._ox;
        evt.y += this._oy;
    };
    /*
     * 在处理指针事件后，再减去滚动的偏移。
     */
    PassiveScrollableGroup.prototype.unOffsetPointerEvent = function (evt) {
        evt.y -= this._oy;
    };
    PassiveScrollableGroup.prototype.onReset = function () {
        _super.prototype.onReset.call(this);
        this._ox = 0;
        this._oy = 0;
    };
    PassiveScrollableGroup.prototype.dispatchClick = function (evt) {
        this.offsetPointerEvent(evt);
        _super.prototype.dispatchClick.call(this, evt);
        this.unOffsetPointerEvent(evt);
    };
    PassiveScrollableGroup.prototype.dispatchDblClick = function (evt) {
        this.offsetPointerEvent(evt);
        _super.prototype.dispatchDblClick.call(this, evt);
        this.unOffsetPointerEvent(evt);
    };
    PassiveScrollableGroup.prototype.dispatchPointerDown = function (evt) {
        this.offsetPointerEvent(evt);
        _super.prototype.dispatchPointerDown.call(this, evt);
        this.unOffsetPointerEvent(evt);
    };
    PassiveScrollableGroup.prototype.dispatchPointerMove = function (evt) {
        this.offsetPointerEvent(evt);
        _super.prototype.dispatchPointerMove.call(this, evt);
        this.unOffsetPointerEvent(evt);
    };
    PassiveScrollableGroup.prototype.dispatchPointerUp = function (evt) {
        this.offsetPointerEvent(evt);
        _super.prototype.dispatchPointerUp.call(this, evt);
        this.unOffsetPointerEvent(evt);
    };
    return PassiveScrollableGroup;
}(widget_1.Widget));
exports.PassiveScrollableGroup = PassiveScrollableGroup;
;
