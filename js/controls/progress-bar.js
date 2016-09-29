"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var widget_1 = require("./widget");
var graphics_1 = require("../graphics");
var widget_factory_1 = require("./widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
(function (ProgressBarType) {
    ProgressBarType[ProgressBarType["V"] = 1] = "V";
    ProgressBarType[ProgressBarType["VERTICAL"] = 1] = "VERTICAL";
    ProgressBarType[ProgressBarType["H"] = 2] = "H";
    ProgressBarType[ProgressBarType["HORIZONTAL"] = 2] = "HORIZONTAL";
    ProgressBarType[ProgressBarType["C"] = 3] = "C";
    ProgressBarType[ProgressBarType["CIRCLE"] = 3] = "CIRCLE";
})(exports.ProgressBarType || (exports.ProgressBarType = {}));
var ProgressBarType = exports.ProgressBarType;
;
var ProgressBar = (function (_super) {
    __extends(ProgressBar, _super);
    function ProgressBar(type) {
        _super.call(this, type || ProgressBar.TYPE);
        this.textFormater = function (value) {
            return Math.round((value * 100)) + "%";
        };
        this.barType = ProgressBarType.H;
    }
    Object.defineProperty(ProgressBar.prototype, "text", {
        get: function () {
            return this.textFormater(this._value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBar.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            var v = Math.min(1, Math.max(0, value));
            this.setProp("value", v, true);
        },
        enumerable: true,
        configurable: true
    });
    ProgressBar.prototype.drawColorForeGround = function (ctx, style) {
        graphics_1.Graphics.drawRoundRect(ctx, style.foreGroundColor, null, 0, 0, 0, this.w, this.h, style.roundRadius);
        return this;
    };
    ProgressBar.prototype.drawImage = function (ctx, style) {
        var img = style.foreGroundImage;
        var value = this.value;
        ctx.save();
        ctx.beginPath();
        switch (this.barType) {
            case ProgressBarType.V: {
                var h = this.h * value;
                var y = this.h - h;
                ctx.rect(0, y, this.w, h);
                break;
            }
            case ProgressBarType.C: {
                var cx = this.w >> 1;
                var cy = this.h >> 1;
                var angle = this.value * Math.PI * 2 - Math.PI / 2;
                ctx.moveTo(cx, cy);
                ctx.lineTo(cx, 0);
                ctx.arc(cx, cy, cy, -Math.PI / 2, angle, false);
                ctx.closePath();
                break;
            }
            default: {
                var w = this.w * value;
                ctx.rect(0, 0, w, this.h);
                break;
            }
        }
        ctx.clip();
        if (img) {
            img.draw(ctx, style.foreGroundImageDrawType, 0, 0, this.w, this.h);
        }
        else if (style.foreGroundColor) {
            this.drawColorForeGround(ctx, style);
        }
        ctx.restore();
        return this;
    };
    ProgressBar.create = function (options) {
        return ProgressBar.recycleBin.create().reset(ProgressBar.TYPE, options);
    };
    ProgressBar.TYPE = "progress-bar";
    ProgressBar.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new ProgressBar(); });
    return ProgressBar;
}(widget_1.Widget));
exports.ProgressBar = ProgressBar;
;
widget_factory_1.WidgetFactory.register(ProgressBar.TYPE, ProgressBar.create);
