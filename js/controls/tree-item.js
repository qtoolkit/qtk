"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var rect_1 = require("../rect");
var point_1 = require("../point");
var widget_factory_1 = require("./widget-factory");
var graphics_1 = require("../graphics");
var image_tile_1 = require("../image-tile");
var widget_recyclable_creator_1 = require("./widget-recyclable-creator");
var widget_1 = require("./widget");
/**
 * 树形视图中，显示的一个子项。
 */
var TreeItem = (function (_super) {
    __extends(TreeItem, _super);
    function TreeItem() {
        _super.call(this, TreeItem.TYPE);
    }
    Object.defineProperty(TreeItem.prototype, "text", {
        /**
         * 显示的文本，从data中获取。
         */
        get: function () {
            return this._data.text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItem.prototype, "icon", {
        /**
         * 显示的图标，从data中获取。
         */
        get: function () {
            return this._data.icon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItem.prototype, "userData", {
        /**
         * 显示的图标，从data中获取。
         */
        get: function () {
            return this._data.userData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItem.prototype, "desireWidth", {
        get: function () {
            var text = this.data.text;
            var style = this.getStyle();
            var w = this._level * this._indention + this.h;
            if (text) {
                w += graphics_1.Graphics.measureText(text, style.font);
            }
            return w;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItem.prototype, "visible", {
        /**
         * 可见性判断：要求父控件没有折叠。
         */
        get: function () {
            var item = this.parentItem;
            while (item !== null) {
                if (!item.expanded) {
                    return false;
                }
                item = item.parentItem;
            }
            return this._visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItem.prototype, "parentItem", {
        get: function () {
            return this._parentItem;
        },
        set: function (parentItem) {
            this._parentItem = parentItem;
            if (parentItem) {
                parentItem._childrenItems.push(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItem.prototype, "childrenItems", {
        get: function () {
            return this._childrenItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItem.prototype, "level", {
        get: function () {
            return this._level;
        },
        set: function (value) {
            this._level = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItem.prototype, "selected", {
        get: function () {
            return this.data.selected;
        },
        set: function (value) {
            this.data.selected = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItem.prototype, "isLeaf", {
        get: function () {
            var data = this._data;
            return !data.children || !data.children.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItem.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItem.prototype, "indention", {
        get: function () {
            return this._indention;
        },
        set: function (value) {
            this._indention = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItem.prototype, "expanded", {
        get: function () {
            return this.data.expanded;
        },
        set: function (value) {
            this.data.expanded = value;
        },
        enumerable: true,
        configurable: true
    });
    TreeItem.prototype.getStateForStyle = function () {
        return this.selected ? widget_1.WidgetState.SELECTED : this._state;
    };
    TreeItem.prototype.getStyleType = function () {
        if (this._styleType) {
            return this._styleType;
        }
        var appendix = this.isLeaf ? "leaf" : (this.expanded ? "expanded" : "collapsed");
        return (this.type) + "." + appendix;
    };
    TreeItem.prototype.drawImage = function (ctx, style) {
        var img = style.foreGroundImage;
        if (img) {
            var y = 0;
            var w = this.h;
            var h = this.h;
            var x = this._level * this._indention;
            img.draw(ctx, image_tile_1.ImageDrawType.ICON, x, y, w, h);
        }
        return this;
    };
    TreeItem.prototype.drawText = function (ctx, style) {
        var text = this.data.text;
        if (text && style.textColor) {
            var y = 0;
            var h = this.h;
            var x = this._level * this._indention;
            if (style.foreGroundImage) {
                x += h;
            }
            var w = this.x + this.w - x;
            graphics_1.Graphics.drawTextSL(ctx, text, style, rect_1.Rect.rect.init(x, y, w, h));
        }
        return this;
    };
    TreeItem.prototype.dispatchDblClick = function (evt) {
        _super.prototype.dispatchDblClick.call(this, evt);
        if (!this.isLeaf) {
            this.expanded = !this.expanded;
            this.parent.relayoutChildren();
        }
    };
    TreeItem.prototype.dispatchClick = function (evt) {
        if (!this.isLeaf) {
            var p = this.toLocalPoint(point_1.Point.point.copy(evt));
            var y = 0;
            var w = this.h;
            var h = this.h;
            var x = this._level * this._indention;
            if (p.isIn(x, y, w, h)) {
                this.expanded = !this.expanded;
                this.parent.relayoutChildren();
            }
        }
        var parent = this.parent;
        if (evt.ctrlKey && parent.multiSelectable) {
            parent.setItemSelected(this, !this.selected, false);
        }
        else {
            parent.setItemSelected(this, true, true);
        }
        _super.prototype.dispatchClick.call(this, evt);
    };
    TreeItem.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this._data = null;
        this.parentItem = null;
        this._childrenItems = null;
    };
    TreeItem.prototype.onReset = function () {
        this._level = 0;
        this._data = null;
        this._indention = 30;
        this._parentItem = null;
        this._childrenItems = [];
    };
    TreeItem.create = function (options) {
        return TreeItem.recycleBin.create(options);
    };
    TreeItem.TYPE = "tree-item";
    TreeItem.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(TreeItem);
    return TreeItem;
}(widget_1.Widget));
exports.TreeItem = TreeItem;
;
widget_factory_1.WidgetFactory.register(TreeItem.TYPE, TreeItem.create);
