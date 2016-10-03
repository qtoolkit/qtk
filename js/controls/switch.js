"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var widget_1 = require("./widget");
var TWEEN = require("tween.js");
var graphics_1 = require("../graphics");
var widget_factory_1 = require("./widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
/**
 * 开关控件。
 */
var Switch = (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        _super.call(this, Switch.TYPE);
    }
    Object.defineProperty(Switch.prototype, "offset", {
        get: function () {
            if (this._switching) {
                return this._offset;
            }
            return this.value ? this.maxOffset : this.minOffset;
        },
        set: function (value) {
            this.requestRedraw();
            this._offset = Math.min(this.maxOffset, Math.max(value, this.minOffset));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Switch.prototype, "minOffset", {
        get: function () {
            return this.h >> 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Switch.prototype, "maxOffset", {
        get: function () {
            return this.w - (this.h >> 1);
        },
        enumerable: true,
        configurable: true
    });
    Switch.prototype.drawColorBackground = function (ctx, style) {
        var w = this.w;
        var h = this.h;
        var r = h >> 1;
        var offset = this.offset;
        var fillColor = null;
        var strokeColor = null;
        if (!this._switching) {
            fillColor = this.value ? style.backGroundColor : style.foreGroundColor;
            strokeColor = style.lineColor;
            graphics_1.Graphics.drawRoundRect(ctx, fillColor, strokeColor, 1, 0, 0, w, h, r);
        }
        else {
            strokeColor = style.lineColor;
            fillColor = style.backGroundColor;
            graphics_1.Graphics.drawRoundRect(ctx, fillColor, strokeColor, 1, 0, 0, w, h, r);
            w = this.w - (offset - r);
            fillColor = style.foreGroundColor;
            graphics_1.Graphics.drawRoundRect(ctx, fillColor, strokeColor, 1, offset - r, 0, w, h, r);
        }
        var y = r;
        var x = this.offset;
        graphics_1.Graphics.drawCircle(ctx, style.foreGroundColor, style.lineColor, style.lineWidth, x, y, r);
        return this;
    };
    Switch.prototype.dispatchPointerUp = function (evt) {
        var _this = this;
        var dx = evt.x - evt.pointerDownX;
        if (dx > 5 && this.value || dx < -5 && !this.value) {
            _super.prototype.dispatchPointerUp.call(this, evt);
            return;
        }
        var duration = 200;
        var tween = new TWEEN.Tween(this);
        var offset = this.value ? this.minOffset : this.maxOffset;
        this._switching = true;
        this.offset = this.value ? this.maxOffset : this.minOffset;
        tween.to({ offset: offset }, duration).start();
        tween.onComplete(function (evt) {
            _this.value = !_this.value;
            _this._switching = false;
        });
        _super.prototype.dispatchPointerUp.call(this, evt);
    };
    Switch.create = function (options) {
        return Switch.recycleBin.create().reset(Switch.TYPE, options);
    };
    Switch.TYPE = "switch";
    Switch.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new Switch(); });
    return Switch;
}(widget_1.Widget));
exports.Switch = Switch;
;
widget_factory_1.WidgetFactory.register(Switch.TYPE, Switch.create);
