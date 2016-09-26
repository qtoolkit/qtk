"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var style_1 = require("../style");
var widget_1 = require("./widget");
var widget_factory_1 = require("./widget-factory");
var image_tile_1 = require("../image-tile");
var recyclable_creator_1 = require("../recyclable-creator");
/**
 * 图片控件。
 */
var Image = (function (_super) {
    __extends(Image, _super);
    function Image() {
        _super.call(this, Image.TYPE);
    }
    Object.defineProperty(Image.prototype, "image", {
        get: function () {
            return this._style.backGroundImage;
        },
        set: function (image) {
            this._style.backGroundImage = image;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "drawType", {
        get: function () {
            return this._style.backGroundImageDrawType;
        },
        set: function (drawType) {
            this._style.backGroundImageDrawType = drawType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "value", {
        get: function () {
            var image = this._style.backGroundImage;
            return image ? image.src : null;
        },
        set: function (url) {
            var _this = this;
            this._style.backGroundImage = image_tile_1.ImageTile.create(url, function (evt) {
                _this.requestRedraw();
            });
        },
        enumerable: true,
        configurable: true
    });
    Image.prototype.setStyle = function (state, style) {
        this._style = style;
        return this;
    };
    Image.prototype.reset = function (type) {
        _super.prototype.reset.call(this, type);
        this._style = style_1.Style.create();
        this._style.fontSize = 12;
        this._style.textColor = "Black";
        this.drawType = image_tile_1.ImageDrawType.DEFAULT;
        return this;
    };
    Image.prototype.getStyle = function () {
        return this._style;
    };
    Image.create = function (options) {
        return Image.recycleBin.create().reset(Image.TYPE).set(options);
    };
    Image.TYPE = "image";
    Image.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new Image(); });
    return Image;
}(widget_1.Widget));
exports.Image = Image;
;
widget_factory_1.WidgetFactory.register(Image.TYPE, Image.create);
