"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var rect_1 = require("../rect");
var widget_1 = require("./widget");
var graphics_1 = require("../graphics");
var widget_factory_1 = require("./widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
var Label = (function (_super) {
    __extends(Label, _super);
    function Label(type) {
        _super.call(this, type || Label.TYPE);
    }
    Object.defineProperty(Label.prototype, "multiLines", {
        get: function () {
            return this._multiLines;
        },
        set: function (value) {
            this.setProp("multiLines", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Label.prototype, "value", {
        get: function () {
            return this.text;
        },
        set: function (value) {
            this.text = value;
        },
        enumerable: true,
        configurable: true
    });
    Label.prototype.setStyle = function (state, style) {
        _super.prototype.setStyle.call(this, state, style);
        this.relayoutText();
        return this;
    };
    Label.prototype.drawTextSL = function (ctx, text, style) {
        if (text && style.textColor) {
            var x = this.leftPadding;
            var y = this.topPadding;
            var w = this.w - x - this.rightPadding;
            var h = this.h - y - this.bottomPadding;
            graphics_1.Graphics.drawTextSL(ctx, text, style, rect_1.Rect.rect.init(x, y, w, h));
        }
        return this;
    };
    Label.prototype.drawTextML = function (ctx, style) {
        if (style.textColor) {
            var x = this.leftPadding;
            var y = this.topPadding;
            var w = this.w - x - this.rightPadding;
            var h = this.h - y - this.bottomPadding;
            graphics_1.Graphics.drawTextML(ctx, this._textLines, style, rect_1.Rect.rect.init(x, y, w, h));
        }
        return this;
    };
    Label.prototype.drawText = function (ctx, style) {
        if (this._textLines && this._textLines.length) {
            if (this._multiLines) {
                this.drawTextML(ctx, style);
            }
            else {
                var text = this._textLines[0].text;
                this.drawTextSL(ctx, text, style);
            }
        }
        return this;
    };
    Label.prototype.relayoutText = function () {
        if (this._inited) {
            var style = this.getStyle();
            var text = this.getLocaleText();
            this._textLines = graphics_1.Graphics.layoutText(text, this.w, style.font);
        }
        return this;
    };
    ;
    Label.prototype.setProp = function (prop, newValue, notify) {
        _super.prototype.setProp.call(this, prop, newValue, notify);
        if (prop === "w" || prop === "h" || prop === "value" || prop === "text") {
            this.relayoutText();
        }
        return this;
    };
    Label.prototype.onInit = function () {
        _super.prototype.onInit.call(this);
        this.relayoutText();
    };
    Label.prototype.reset = function (type) {
        _super.prototype.reset.call(this, type);
        this.padding = 5;
        return this;
    };
    Label.create = function (options) {
        return Label.recycleBin.create().reset(Label.TYPE).set(options);
    };
    Label.TYPE = "label";
    Label.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new Label(); });
    return Label;
}(widget_1.Widget));
exports.Label = Label;
;
widget_factory_1.WidgetFactory.register(Label.TYPE, Label.create);
