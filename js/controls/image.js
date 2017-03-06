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
var style_1 = require("../style");
var widget_1 = require("./widget");
var widget_factory_1 = require("./widget-factory");
var image_tile_1 = require("../image-tile");
var widget_recyclable_creator_1 = require("./widget-recyclable-creator");
/**
 * 图片控件。
 */
var Image = (function (_super) {
    __extends(Image, _super);
    function Image() {
        return _super.call(this, Image.TYPE) || this;
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
    Image.prototype.onToJson = function (json) {
        if (this._style) {
            json.style = this._style.toJson();
        }
    };
    Image.prototype.onFromJson = function (json) {
        if (json.style) {
            this._style = style_1.Style.create(json.style);
        }
    };
    Image.prototype.setStyle = function (state, style) {
        this._style = style;
        return this;
    };
    Image.prototype.onReset = function () {
        _super.prototype.onReset.call(this);
        var style = style_1.Style.create();
        style.fontSize = 12;
        style.textColor = "Black";
        style.backGroundImageDrawType = image_tile_1.ImageDrawType.DEFAULT;
        this._style = style;
    };
    Image.prototype.getStyle = function () {
        return this._style;
    };
    Image.create = function (options) {
        return Image.recycleBin.create(options);
    };
    return Image;
}(widget_1.Widget));
Image.TYPE = "image";
Image.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(Image);
exports.Image = Image;
;
widget_factory_1.WidgetFactory.register(Image.TYPE, Image.create);
