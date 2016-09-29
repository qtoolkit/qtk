"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var style_1 = require("../style");
var widget_1 = require("./widget");
var widget_factory_1 = require("./widget-factory");
var graphics_1 = require("../graphics");
var consts_1 = require("../consts");
var recyclable_creator_1 = require("../recyclable-creator");
/**
 * 颜色控件。
 */
var Color = (function (_super) {
    __extends(Color, _super);
    function Color(type) {
        _super.call(this, type);
    }
    Object.defineProperty(Color.prototype, "color", {
        get: function () {
            return this._style.lineColor;
        },
        set: function (value) {
            this._style.lineColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "lineColor", {
        get: function () {
            return this._style.lineColor;
        },
        set: function (value) {
            this._style.lineColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "lineWidth", {
        get: function () {
            return this._style.lineWidth;
        },
        set: function (value) {
            this._style.lineWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "value", {
        get: function () {
            return this.color;
        },
        set: function (color) {
            this.color = color;
        },
        enumerable: true,
        configurable: true
    });
    Color.prototype.setStyle = function (state, style) {
        this._style = style;
        return this;
    };
    Color.prototype.onReset = function () {
        this._style = style_1.Style.create();
        this._style.fontSize = 16;
        this._style.textColor = "Black";
    };
    Color.prototype.getStyle = function () {
        return this._style;
    };
    return Color;
}(widget_1.Widget));
exports.Color = Color;
;
var ColorTile = (function (_super) {
    __extends(ColorTile, _super);
    function ColorTile() {
        _super.call(this, ColorTile.TYPE);
    }
    Object.defineProperty(ColorTile.prototype, "color", {
        get: function () {
            return this._style.backGroundColor;
        },
        set: function (value) {
            this._style.backGroundColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorTile.prototype, "roundRadius", {
        get: function () {
            return this._style.roundRadius;
        },
        set: function (value) {
            this._style.roundRadius = value;
        },
        enumerable: true,
        configurable: true
    });
    ColorTile.create = function (options) {
        return ColorTile.recycleBin.create().reset(ColorTile.TYPE, options);
    };
    ColorTile.TYPE = "color-tile";
    ColorTile.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new ColorTile(); });
    return ColorTile;
}(Color));
exports.ColorTile = ColorTile;
;
widget_factory_1.WidgetFactory.register(ColorTile.TYPE, ColorTile.create);
var ColorLine = (function (_super) {
    __extends(ColorLine, _super);
    function ColorLine() {
        _super.call(this, ColorLine.TYPE);
    }
    Object.defineProperty(ColorLine.prototype, "color", {
        get: function () {
            return this._style.lineColor;
        },
        set: function (value) {
            this._style.lineColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorLine.prototype, "orientation", {
        get: function () {
            return this._orientation;
        },
        set: function (value) {
            this._orientation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorLine.prototype, "vAlign", {
        get: function () {
            return this._vAlign;
        },
        set: function (value) {
            this._vAlign = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorLine.prototype, "hAlign", {
        get: function () {
            return this._hAlign;
        },
        set: function (value) {
            this._hAlign = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorLine.prototype, "lineJoin", {
        get: function () {
            return this._style.lineJoin;
        },
        set: function (value) {
            this._style.lineJoin = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorLine.prototype, "lineCap", {
        get: function () {
            return this._style.lineCap;
        },
        set: function (value) {
            this._style.lineCap = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorLine.prototype, "dashLine", {
        get: function () {
            return this._style.dashLine;
        },
        set: function (value) {
            this._style.dashLine = value;
        },
        enumerable: true,
        configurable: true
    });
    ColorLine.prototype.drawColorBackground = function (ctx, style) {
        var x = 0;
        var y = 0;
        var lineWidth = style.lineWidth || 1;
        ctx.lineCap = style.lineCap || "butt";
        ctx.lineJoin = style.lineJoin || "miter";
        if (style.dashLine) {
            ctx.setLineDash(style.dashLine);
        }
        if (this._orientation === consts_1.Orientation.V) {
            switch (this._hAlign) {
                case consts_1.AlignH.L: {
                    x = 0;
                    break;
                }
                case consts_1.AlignH.R: {
                    x = this.w - lineWidth;
                    break;
                }
                default: {
                    x = this.w >> 1;
                    break;
                }
            }
            graphics_1.Graphics.drawLine(ctx, style.lineColor, lineWidth, x, y, x, this.h);
        }
        else {
            switch (this._vAlign) {
                case consts_1.AlignV.T: {
                    y = 0;
                    break;
                }
                case consts_1.AlignV.B: {
                    y = this.h - lineWidth;
                    break;
                }
                default: {
                    y = this.h >> 1;
                    break;
                }
            }
            graphics_1.Graphics.drawLine(ctx, style.lineColor, lineWidth, x, y, this.w, y);
        }
        return this;
    };
    ColorLine.create = function (options) {
        return ColorLine.recycleBin.create().reset(ColorLine.TYPE, options);
    };
    ColorLine.TYPE = "color-tile";
    ColorLine.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new ColorLine(); });
    return ColorLine;
}(Color));
exports.ColorLine = ColorLine;
;
widget_factory_1.WidgetFactory.register(ColorLine.TYPE, ColorLine.create);
