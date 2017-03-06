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
var widget_1 = require("./widget");
var widget_factory_1 = require("./widget-factory");
var image_tile_1 = require("../image-tile");
var widget_recyclable_creator_1 = require("./widget-recyclable-creator");
var CheckButton = (function (_super) {
    __extends(CheckButton, _super);
    function CheckButton(type) {
        return _super.call(this, type || CheckButton.TYPE) || this;
    }
    Object.defineProperty(CheckButton.prototype, "inputable", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckButton.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this.setValue(value, false, false);
        },
        enumerable: true,
        configurable: true
    });
    CheckButton.prototype.getStyleType = function () {
        var appendix = this.value ? "checked" : "unchecked";
        return (this._styleType || this.type) + "." + appendix;
    };
    CheckButton.prototype.drawText = function (ctx, style) {
        var text = this.getLocaleText();
        if (text && style.textColor) {
            var x = this.w >> 1;
            var y = this.h >> 1;
            var img = style.foreGroundImage;
            ctx.font = style.font;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = style.textColor;
            if (img) {
                var textAlign = style.textAlign;
                switch (textAlign) {
                    case "right": {
                        x = this.h;
                        ctx.textAlign = "left";
                        break;
                    }
                    case "left": {
                        x = 0;
                        ctx.textAlign = "left";
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }
            ctx.fillText(text, x, y);
        }
        return this;
    };
    CheckButton.prototype.drawImage = function (ctx, style) {
        var img = style.foreGroundImage;
        var text = this.text;
        if (img) {
            var x = 0;
            var y = 0;
            var w = this.w;
            var h = this.h;
            if (text && style.textColor) {
                var textAlign = style.textAlign;
                switch (textAlign) {
                    case "right": {
                        w = h;
                        break;
                    }
                    case "left": {
                        w = h;
                        x = this.w - w;
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }
            img.draw(ctx, image_tile_1.ImageDrawType.ICON, x, y, w, h);
        }
        return this;
    };
    CheckButton.prototype.dispatchClick = function (evt) {
        var oldValue = this.value;
        this.value = !this.value;
        this.notifyChange(oldValue);
        _super.prototype.dispatchClick.call(this, evt);
    };
    CheckButton.create = function (options) {
        return CheckButton.recycleBin.create(options);
    };
    return CheckButton;
}(widget_1.Widget));
CheckButton.TYPE = "check-button";
CheckButton.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(CheckButton);
exports.CheckButton = CheckButton;
;
widget_factory_1.WidgetFactory.register(CheckButton.TYPE, CheckButton.create);
