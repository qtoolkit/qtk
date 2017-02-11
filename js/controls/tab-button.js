"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var rect_1 = require("../rect");
var widget_1 = require("./widget");
var button_1 = require("./button");
var graphics_1 = require("../graphics");
var consts_1 = require("../consts");
var radio_button_1 = require("./radio-button");
var widget_factory_1 = require("./widget-factory");
var image_tile_1 = require("../image-tile");
var widget_recyclable_creator_1 = require("./widget-recyclable-creator");
/**
 * 标签控件上的标签按钮。
 */
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
            return this._cbAtLeft;
        },
        set: function (value) {
            this._cbAtLeft = value;
            this.relayoutChildren();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabButton.prototype, "orientation", {
        get: function () {
            return this._orn;
        },
        set: function (value) {
            this._orn = value;
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
        this._normalIconURL = normalIconURL ? normalIconURL : null;
        if (currentIconURL) {
            this._currentIcon = image_tile_1.ImageTile.create(currentIconURL, function (evt) {
                _this.requestRedraw();
            });
        }
        else {
            this._currentIcon = null;
        }
        this._currentIconURL = currentIconURL ? currentIconURL : null;
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
    TabButton.prototype.relayoutChildren = function () {
        if (this._closeButton) {
            var h = this.h >> 1;
            var w = h;
            var x = (this.h - h) >> 1;
            var y = x;
            if (!this.closeButtonAtLeft) {
                x = this.w - x - w;
            }
            this._closeButton.moveResizeTo(x, y, w, h);
        }
        return rect_1.Rect.rect.init(0, 0, this.w, this.h);
    };
    Object.defineProperty(TabButton.prototype, "desireWidth", {
        get: function () {
            var w = this.leftPadding + this.rightPadding;
            var text = this.text;
            var style = this.getStyle();
            if (this._currentIcon || this._normalIcon) {
                w += this.h;
            }
            if (this._closeButton) {
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
    TabButton.prototype.getStyleType = function () {
        var appendix = this.value ? "current" : "normal";
        return (this._styleType || this.type) + "." + appendix;
    };
    TabButton.prototype.drawImage = function (ctx, style) {
        var text = this.getLocaleText();
        var icon = this.value ? this._currentIcon : this._normalIcon;
        var w = 0;
        var h = 0;
        if (icon) {
            var x = this.leftPadding;
            var y = this.topPadding;
            if (this._orn === consts_1.Orientation.V) {
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
                    if (this._closeButton) {
                        w -= this.h;
                    }
                    graphics_1.Graphics.drawTextSL(ctx, text, style, rect_1.Rect.rect.init(x, y, w, h));
                }
            }
        }
        else {
            w = this.w;
            if (this._closeButton) {
                w -= this.h;
            }
            graphics_1.Graphics.drawTextSL(ctx, text, style, rect_1.Rect.rect.init(0, 0, w, this.h));
        }
        return this;
    };
    TabButton.prototype.drawText = function (ctx, style) {
        return this;
    };
    TabButton.prototype.onReset = function () {
        this._tabPage = null;
        this._closeButton = null;
        this._normalIcon = null;
        this._currentIcon = null;
    };
    TabButton.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this._tabPage = null;
        this._closeButton = null;
        this._normalIcon = null;
        this._currentIcon = null;
    };
    TabButton.prototype.getDefProps = function () {
        return TabButton.defProps;
    };
    TabButton.create = function (options) {
        return TabButton.re.create(options);
    };
    TabButton.defProps = Object.assign({}, widget_1.Widget.defProps, { _lp: 2, _tp: 2, _rp: 2, _bp: 2,
        _normalIconURL: null, _currentIconURL: null, closable: false, _cbAtLeft: false, _orn: consts_1.Orientation.H });
    TabButton.TYPE = "tab-button";
    TabButton.re = widget_recyclable_creator_1.WidgetRecyclableCreator.create(TabButton);
    return TabButton;
}(radio_button_1.RadioButton));
exports.TabButton = TabButton;
;
widget_factory_1.WidgetFactory.register(TabButton.TYPE, TabButton.create);
