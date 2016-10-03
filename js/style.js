/// <reference path="../typings/globals/eventemitter3/index.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var emitter_1 = require("./emitter");
var Events = require("./events");
var image_tile_1 = require("./image-tile");
/**
 * Style用来控制Widget的外观效果，如背景和字体等等。
 */
var Style = (function (_super) {
    __extends(Style, _super);
    function Style() {
        _super.call(this);
    }
    Style.prototype.notifyChanged = function () {
        this.dispatchEvent({ type: Events.CHANGE });
    };
    Object.defineProperty(Style.prototype, "textLineHeight", {
        get: function () {
            return Math.round(this.fontSize * 1.2);
        },
        enumerable: true,
        configurable: true
    });
    Style.prototype.clone = function () {
        var other = new Style();
        if (this._backGroundColor) {
            other._backGroundColor = this._backGroundColor;
        }
        if (this._foreGroundColor) {
            other._foreGroundColor = this._foreGroundColor;
        }
        if (this._backGroundImage) {
            other._backGroundImage = this._backGroundImage;
        }
        if (this._backGroundImageDrawType) {
            other._backGroundImageDrawType = this._backGroundImageDrawType;
        }
        if (this._foreGroundImage) {
            other._foreGroundImage = this._foreGroundImage;
        }
        if (this._foreGroundImageDrawType) {
            other._foreGroundImageDrawType = this._foreGroundImageDrawType;
        }
        if (this._fontFamily) {
            other._fontFamily = this._fontFamily;
        }
        if (this._fontSize) {
            other._fontSize = this._fontSize;
        }
        if (this._textColor) {
            other._textColor = this._textColor;
        }
        if (this._fontBold) {
            other._fontBold = this._fontBold;
        }
        if (this._fontItalic) {
            other._fontItalic = this._fontItalic;
        }
        if (this._fontUnderline) {
            other._fontUnderline = this._fontUnderline;
        }
        if (this._lineColor) {
            other._lineColor = this._lineColor;
        }
        if (this._lineWidth) {
            other._lineWidth = this._lineWidth;
        }
        if (this._lineJoin) {
            other._lineJoin = this._lineJoin;
        }
        if (this._lineCap) {
            other._lineCap = this._lineCap;
        }
        if (this._dashLine) {
            other._dashLine = this._dashLine;
        }
        if (this._roundRadius) {
            other._roundRadius = this._roundRadius;
        }
        if (this._roundType) {
            other._roundType = this._roundType;
        }
        return other;
    };
    Style.prototype.toJson = function () {
        var json = {};
        if (this._backGroundColor) {
            json.backGroundColor = this._backGroundColor;
        }
        if (this._foreGroundColor) {
            json.foreGroundColor = this._foreGroundColor;
        }
        if (this._backGroundImage) {
            json.backGroundImage = this._backGroundImage.toJson();
        }
        if (this._backGroundImageDrawType) {
            json.backGroundImageDrawType = image_tile_1.ImageDrawType[this._backGroundImageDrawType];
        }
        if (this._foreGroundImage) {
            json.foreGroundImage = this._foreGroundImage.toJson();
        }
        if (this._foreGroundImageDrawType) {
            json.foreGroundImageDrawType = image_tile_1.ImageDrawType[this._foreGroundImageDrawType];
        }
        if (this._fontFamily) {
            json.fontFamily = this._fontFamily;
        }
        if (this._fontSize) {
            json.fontSize = this._fontSize;
        }
        if (this._textColor) {
            json.textColor = this._textColor;
        }
        if (this._fontBold) {
            json.fontBold = this._fontBold;
        }
        if (this._fontItalic) {
            json.fontItalic = this._fontItalic;
        }
        if (this._fontUnderline) {
            json.fontUnderline = this._fontUnderline;
        }
        if (this._textBaseline) {
            json.textBaseline = this._textBaseline;
        }
        if (this._textAlign) {
            json.textAlign = this._textAlign;
        }
        if (this._lineWidth) {
            json.lineWidth = this._lineWidth;
        }
        if (this._lineJoin) {
            json.lineJoin = this._lineJoin;
        }
        if (this._lineCap) {
            json.lineCap = this._lineCap;
        }
        if (this._dashLine) {
            json.dashLine = this._dashLine;
        }
        if (this._lineColor) {
            json.lineColor = this._lineColor;
        }
        if (this._roundRadius) {
            json.roundRadius = this._roundRadius;
        }
        if (this._roundType) {
            json.roundType = this._roundType;
        }
        return json;
    };
    Style.prototype.fromJson = function (json, baseURL) {
        var _this = this;
        if (json.backGroundColor) {
            this._backGroundColor = json.backGroundColor;
        }
        if (json.foreGroundColor) {
            this._foreGroundColor = json.foreGroundColor;
        }
        if (json.backGroundImage) {
            var url = baseURL ? baseURL + "/" + json.backGroundImage : json.backGroundImage;
            this._backGroundImage = image_tile_1.ImageTile.create(url, function (evt) {
                _this.notifyChanged();
            });
        }
        if (json.foreGroundImage) {
            var url = baseURL ? baseURL + "/" + json.foreGroundImage : json.foreGroundImage;
            this._foreGroundImage = image_tile_1.ImageTile.create(url, function (evt) {
                _this.notifyChanged();
            });
        }
        if (json.backGroundImageDrawType) {
            this._backGroundImageDrawType = parseInt(image_tile_1.ImageDrawType[json.backGroundImageDrawType]);
        }
        if (json.foreGroundImageDrawType) {
            this._foreGroundImageDrawType = parseInt(image_tile_1.ImageDrawType[json.foreGroundImageDrawType]);
        }
        if (json.fontFamily) {
            this._fontFamily = json.fontFamily;
        }
        if (json.fontSize) {
            this._fontSize = json.fontSize;
        }
        if (json.textColor) {
            this._textColor = json.textColor;
        }
        if (json.fontBold) {
            this._fontBold = json.fontBold;
        }
        if (json.fontItalic) {
            this._fontItalic = json.fontItalic;
        }
        if (json.fontUnderline) {
            this._fontUnderline = json.fontUnderline;
        }
        if (json.textBaseline) {
            this._textBaseline = json.textBaseline;
        }
        if (json.textAlign) {
            this._textAlign = json.textAlign;
        }
        if (json.lineWidth) {
            this._lineWidth = json.lineWidth;
        }
        if (json.lineJoin) {
            this._lineJoin = json.lineJoin;
        }
        if (json.lineCap) {
            this._lineCap = json.lineCap;
        }
        if (json.dashLine) {
            this._dashLine = json.dashLine;
        }
        if (json.lineColor) {
            this._lineColor = json.lineColor;
        }
        if (json.roundRadius) {
            this._roundRadius = json.roundRadius;
        }
        if (json.roundType) {
            this._roundType = json.roundType;
        }
        this.notifyChanged();
    };
    Object.defineProperty(Style.prototype, "backGroundColor", {
        get: function () {
            return this._backGroundColor;
        },
        set: function (value) {
            this._backGroundColor = value;
            this.notifyChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "foreGroundColor", {
        get: function () {
            return this._foreGroundColor;
        },
        set: function (value) {
            this._foreGroundColor = value;
            this.notifyChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "backGroundImage", {
        get: function () {
            return this._backGroundImage;
        },
        set: function (value) {
            this._backGroundImage = value;
            this.notifyChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "backGroundImageDrawType", {
        get: function () {
            return this._backGroundImageDrawType;
        },
        set: function (value) {
            this._backGroundImageDrawType = value;
            this.notifyChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "foreGroundImage", {
        get: function () {
            return this._foreGroundImage;
        },
        set: function (value) {
            this._foreGroundImage = value;
            this.notifyChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "foreGroundImageDrawType", {
        get: function () {
            return this._foreGroundImageDrawType;
        },
        set: function (value) {
            this._foreGroundImageDrawType = value;
            this.notifyChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "font", {
        get: function () {
            return this._fontSize + "px " + (this._fontFamily || "Sans");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "fontFamily", {
        get: function () {
            return this._fontFamily || "Sans";
        },
        set: function (value) {
            this._fontFamily = value;
            this.notifyChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "fontSize", {
        get: function () {
            return this._fontSize;
        },
        set: function (value) {
            this._fontSize = value;
            this.notifyChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "textColor", {
        get: function () {
            return this._textColor;
        },
        set: function (value) {
            this._textColor = value;
            this.notifyChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "fontBold", {
        get: function () {
            return this._fontBold;
        },
        set: function (value) {
            this._fontBold = value;
            this.notifyChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "fontItalic", {
        get: function () {
            return this._fontItalic;
        },
        set: function (value) {
            this._fontItalic = value;
            this.notifyChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "fontUnderline", {
        get: function () {
            return this._fontUnderline;
        },
        set: function (value) {
            this._fontUnderline = value;
            this.notifyChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "textAlign", {
        get: function () {
            return this._textAlign || "center";
        },
        set: function (value) {
            this._textAlign = value;
            this.notifyChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "textBaseline", {
        get: function () {
            return this._textBaseline || "middle";
        },
        set: function (value) {
            this._textBaseline = value;
            this.notifyChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "lineWidth", {
        get: function () {
            return this._lineWidth;
        },
        set: function (value) {
            this._lineWidth = value;
            this.notifyChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "lineJoin", {
        get: function () {
            return this._lineJoin;
        },
        set: function (value) {
            this._lineJoin = value;
            this.notifyChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "lineCap", {
        get: function () {
            return this._lineCap;
        },
        set: function (value) {
            this._lineCap = value;
            this.notifyChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "dashLine", {
        get: function () {
            return this._dashLine;
        },
        set: function (value) {
            this._dashLine = value;
            this.notifyChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "lineColor", {
        get: function () {
            return this._lineColor;
        },
        set: function (value) {
            this._lineColor = value;
            this.notifyChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "roundRadius", {
        get: function () {
            return this._roundRadius;
        },
        set: function (value) {
            this._roundRadius = value;
            this.notifyChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "roundType", {
        get: function () {
            return this._roundType;
        },
        set: function (value) {
            this._roundType = value;
            this.notifyChanged();
        },
        enumerable: true,
        configurable: true
    });
    Style.create = function (json, baseURL) {
        var style = new Style();
        if (json) {
            style.fromJson(json, baseURL);
        }
        return style;
    };
    Style.fill = function (ctx, fillStyle, h) {
        if (!fillStyle || typeof fillStyle === "string") {
            ctx.fillStyle = fillStyle;
        }
        else {
            var key = fillStyle + "." + h;
            var value = Style.fillStyles[key];
            if (!value) {
                var data = fillStyle;
                var n = data.length;
                var delta = 1 / n;
                var value = ctx.createLinearGradient(0, 0, 0, h);
                for (var i = 0; i < n; i++) {
                    var color = data[i];
                    value.addColorStop(i * delta, color);
                }
                Style.fillStyles[key] = value;
            }
            ctx.fillStyle = value;
        }
        ctx.fill();
        return;
    };
    Style.fillStyles = {};
    return Style;
}(emitter_1.Emitter));
exports.Style = Style;
;
