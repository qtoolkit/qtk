"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var rect_1 = require("../rect");
var button_1 = require("./button");
var graphics_1 = require("../graphics");
var consts_1 = require("../consts");
var radio_button_1 = require("./radio-button");
var widget_factory_1 = require("./widget-factory");
var image_tile_1 = require("../image-tile");
var recyclable_creator_1 = require("../recyclable-creator");
var TabButton = (function (_super) {
    __extends(TabButton, _super);
    function TabButton() {
        _super.call(this, TabButton.TYPE);
    }
    Object.defineProperty(TabButton.prototype, "closeButton", {
        get: function () {
            return this._closeButton;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabButton.prototype, "closeButtonAtLeft", {
        get: function () {
            return this._closeButtonAtLeft;
        },
        set: function (value) {
            this._closeButtonAtLeft = value;
            this.relayoutChildren();
        },
        enumerable: true,
        configurable: true
    });
    TabButton.prototype.relayoutChildren = function () {
        if (this._closeButton) {
            var x = this.leftPadding;
            var y = this.topPadding;
            var h = this.h - this.topPadding - this.bottomPadding;
            var w = h;
            if (!this.closeButtonAtLeft) {
                x = this.w - this.rightPadding - w;
            }
            this._closeButton.moveResizeTo(x, y, w, h);
        }
        return rect_1.Rect.rect.init(0, 0, this.w, this.h);
    };
    Object.defineProperty(TabButton.prototype, "closable", {
        get: function () {
            return !!this._closeButton;
        },
        set: function (value) {
            if (value && this._closeButton || !value && !this._closeButton) {
                return;
            }
            if (this._closeButton) {
                this.removeChild(this._closeButton);
                this._closeButton = null;
            }
            else {
                var closeButton = button_1.Button.create();
                closeButton.set({ styleType: "tab-button.close" });
                this.addChild(closeButton);
                this._closeButton = closeButton;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabButton.prototype, "desireWidth", {
        get: function () {
            var w = this.leftPadding + this.rightPadding;
            var text = this.text;
            var style = this.getStyle();
            if (this._currentIcon || this._normalIcon) {
                w += this.h;
            }
            if (text && style) {
                var font = style.font;
                w += graphics_1.Graphics.measureText(text, font) + style.fontSize;
            }
            return w;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabButton.prototype, "tabPage", {
        get: function () {
            return this._tabPage;
        },
        set: function (value) {
            this._tabPage = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabButton.prototype, "orientation", {
        get: function () {
            return this._orientation;
        },
        set: function (value) {
            this._orientation = value;
        },
        enumerable: true,
        configurable: true
    });
    TabButton.prototype.setIcons = function (normalIconURL, currentIconURL) {
        var _this = this;
        if (normalIconURL) {
            this._normalIcon = image_tile_1.ImageTile.create(normalIconURL, function (evt) {
                _this.requestRedraw();
            });
        }
        else {
            this._normalIcon = null;
        }
        if (currentIconURL) {
            this._currentIcon = image_tile_1.ImageTile.create(currentIconURL, function (evt) {
                _this.requestRedraw();
            });
        }
        else {
            this._currentIcon = null;
        }
    };
    TabButton.prototype.getStyleType = function () {
        var appendix = this.value ? "current" : "normal";
        return (this._styleType || this.type) + "." + appendix;
    };
    TabButton.prototype.drawImage = function (ctx, style) {
        var text = this.getLocaleText();
        var icon = this.value ? this._currentIcon : this._normalIcon;
        if (icon) {
            var w = 0;
            var h = 0;
            var x = this.leftPadding;
            var y = this.topPadding;
            if (this._orientation === consts_1.Orientation.V) {
                w = this.w - this.leftPadding - this.rightPadding;
                h = this.h - this.bottomPadding - this.topPadding;
                if (text) {
                    h -= style.fontSize;
                }
                icon.draw(ctx, image_tile_1.ImageDrawType.ICON, x, y, w, h);
                if (text) {
                    y = this.h - this.bottomPadding - style.fontSize;
                    graphics_1.Graphics.drawTextSL(ctx, text, style, rect_1.Rect.rect.init(0, y, w, style.fontSize));
                }
            }
            else {
                h = this.h - this.topPadding - this.bottomPadding;
                w = h;
                icon.draw(ctx, image_tile_1.ImageDrawType.ICON, x, y, w, h);
                if (text) {
                    x += w + this.leftPadding;
                    w = this.w - x - this.rightPadding;
                    graphics_1.Graphics.drawTextSL(ctx, text, style, rect_1.Rect.rect.init(x, y, w, h));
                }
            }
        }
        else {
            graphics_1.Graphics.drawTextSL(ctx, text, style, rect_1.Rect.rect.init(0, 0, this.w, this.h));
        }
        return this;
    };
    TabButton.prototype.drawText = function (ctx, style) {
        return this;
    };
    TabButton.prototype.reset = function (type) {
        _super.prototype.reset.call(this, type);
        this.padding = 2;
        this._tabPage = null;
        this._closeButton = null;
        this._normalIcon = null;
        this._currentIcon = null;
        this._closeButtonAtLeft = false;
        this._orientation = consts_1.Orientation.H;
        return this;
    };
    TabButton.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this._tabPage = null;
        this._closeButton = null;
        this._normalIcon = null;
        this._currentIcon = null;
    };
    TabButton.create = function () {
        return TabButton.re.create().reset(TabButton.TYPE);
    };
    TabButton.TYPE = "tab-button";
    TabButton.re = new recyclable_creator_1.RecyclableCreator(function () { return new TabButton(); });
    return TabButton;
}(radio_button_1.RadioButton));
exports.TabButton = TabButton;
;
widget_factory_1.WidgetFactory.register(TabButton.TYPE, TabButton.create);
