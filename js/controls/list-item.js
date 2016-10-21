"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var rect_1 = require("../rect");
var widget_1 = require("./widget");
var widget_factory_1 = require("./widget-factory");
var graphics_1 = require("../graphics");
var recyclable_creator_1 = require("../recyclable-creator");
var image_tile_1 = require("../image-tile");
(function (ListItemStyle) {
    ListItemStyle[ListItemStyle["NORMAL"] = 0] = "NORMAL";
    ListItemStyle[ListItemStyle["FIRST"] = 1] = "FIRST";
    ListItemStyle[ListItemStyle["LAST"] = 2] = "LAST";
})(exports.ListItemStyle || (exports.ListItemStyle = {}));
var ListItemStyle = exports.ListItemStyle;
;
/**
 * 列表项。
 */
var ListItem = (function (_super) {
    __extends(ListItem, _super);
    function ListItem(type) {
        _super.call(this, type || ListItem.TYPE);
    }
    Object.defineProperty(ListItem.prototype, "oddEvenStyle", {
        get: function () {
            return this._oddEvenStyle;
        },
        /**
         * 奇数行和偶数行是否采用不同的风格。
         */
        set: function (value) {
            this._oddEvenStyle = value;
        },
        enumerable: true,
        configurable: true
    });
    ListItem.prototype.getStyleType = function () {
        if (!this._oddEvenStyle) {
            return _super.prototype.getStyleType.call(this);
        }
        return this._index % 2 ? "list-item.even" : "list-item.odd";
    };
    ListItem.prototype.relayoutChildren = function () {
        if (this.parent) {
            this._index = this.parent.children.indexOf(this);
        }
        return _super.prototype.relayoutChildren.call(this);
    };
    Object.defineProperty(ListItem.prototype, "iconURL", {
        get: function () {
            return this._iconURL;
        },
        set: function (value) {
            var _this = this;
            if (value) {
                this._icon = image_tile_1.ImageTile.create(value, function (evt) {
                    _this.requestRedraw();
                });
            }
            else {
                this._icon = null;
            }
            this._iconURL = value;
        },
        enumerable: true,
        configurable: true
    });
    ListItem.prototype.drawBackground = function (ctx, style) {
        if (style.backGroundImage) {
            style.backGroundImage.draw(ctx, style.backGroundImageDrawType, 0, 0, this.w, this.h);
        }
        else if (style.backGroundColor || (style.lineColor && style.lineWidth)) {
            graphics_1.Graphics.drawRect(ctx, style.backGroundColor, null, 0, 0, 0, this.w, this.h);
            if (this.listItemStyle === ListItemStyle.FIRST) {
                graphics_1.Graphics.drawLine(ctx, style.lineColor, style.lineWidth, 0, 0, this.w, 0);
            }
            graphics_1.Graphics.drawLine(ctx, style.lineColor, style.lineWidth, 0, this.h, this.w, this.h);
        }
        return this;
    };
    ListItem.prototype.drawImage = function (ctx, style) {
        var icon = this._icon;
        var y = this.topPadding;
        var x = this.leftPadding;
        var h = this.h - this.topPadding - this.bottomPadding;
        var w = h;
        if (icon) {
            icon.draw(ctx, image_tile_1.ImageDrawType.ICON, x, y, w, h);
        }
        return this;
    };
    ListItem.prototype.getTextRect = function (style) {
        var x = this.leftPadding;
        if (this._icon) {
            x += this.h;
        }
        var y = this.topPadding;
        var w = this.w - x - this.rightPadding;
        var h = this.h - y - this.bottomPadding;
        if (style.foreGroundImage) {
            w -= this.h;
        }
        return rect_1.Rect.rect.init(x, y, w, h);
    };
    ListItem.prototype.getDefProps = function () {
        return ListItem.defProps;
    };
    ListItem.create = function (options) {
        return ListItem.recycleBin.create().reset(ListItem.TYPE, options);
    };
    ListItem.defProps = Object.assign({}, widget_1.Widget.defProps, { _oddEvenStyle: false, _iconURL: null });
    ListItem.TYPE = "list-item";
    ListItem.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new ListItem(); });
    return ListItem;
}(widget_1.Widget));
exports.ListItem = ListItem;
;
widget_factory_1.WidgetFactory.register(ListItem.TYPE, ListItem.create);
var ListItemCheckable = (function (_super) {
    __extends(ListItemCheckable, _super);
    function ListItemCheckable(type) {
        _super.call(this, type || ListItemCheckable.TYPE);
    }
    Object.defineProperty(ListItemCheckable.prototype, "multiCheckable", {
        get: function () {
            return this._multiCheckable;
        },
        set: function (value) {
            this._multiCheckable = value;
        },
        enumerable: true,
        configurable: true
    });
    ListItemCheckable.prototype.drawImage = function (ctx, style) {
        if (this.value) {
            var icon = style.foreGroundImage;
            if (icon) {
                var h = this.h - this.topPadding - this.bottomPadding;
                var w = h;
                var y = this.topPadding;
                var x = this.w - this.rightPadding - w;
                icon.draw(ctx, image_tile_1.ImageDrawType.ICON, x, y, w, h);
            }
        }
        return _super.prototype.drawImage.call(this, ctx, style);
    };
    ListItemCheckable.prototype.dispatchClick = function (evt) {
        this.value = !this.value;
        _super.prototype.dispatchClick.call(this, evt);
    };
    Object.defineProperty(ListItemCheckable.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this.setValue(value, true, !this.multiCheckable);
        },
        enumerable: true,
        configurable: true
    });
    ListItemCheckable.create = function (options) {
        return ListItemCheckable.rBin.create().reset(ListItemCheckable.TYPE, options);
    };
    ListItemCheckable.TYPE = "list-item.checkable";
    ListItemCheckable.rBin = new recyclable_creator_1.RecyclableCreator(function () { return new ListItemCheckable(); });
    return ListItemCheckable;
}(ListItem));
exports.ListItemCheckable = ListItemCheckable;
;
widget_factory_1.WidgetFactory.register(ListItemCheckable.TYPE, ListItemCheckable.create);
