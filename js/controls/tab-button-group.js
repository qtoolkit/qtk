"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var rect_1 = require("../rect");
var widget_1 = require("./widget");
var widget_factory_1 = require("./widget-factory");
var widget_recyclable_creator_1 = require("./widget-recyclable-creator");
/**
 * class TabButtonGroup
 * @extends Widget
 * 标签控件上的标签按钮分组。一般不需要直接使用。
 */
var TabButtonGroup = (function (_super) {
    __extends(TabButtonGroup, _super);
    function TabButtonGroup() {
        _super.call(this, TabButtonGroup.TYPE);
    }
    Object.defineProperty(TabButtonGroup.prototype, "value", {
        get: function () {
            var arr = this.children;
            var n = arr.length;
            for (var i = 0; i < n; i++) {
                var iter = arr[i];
                if (iter.value) {
                    return i;
                }
            }
            return 0;
        },
        set: function (value) {
            var n = this.children.length;
            var index = Math.max(0, Math.min(value, n - 1));
            if (n > 0) {
                this.children[index].value = true;
            }
            this.requestRedraw();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabButtonGroup.prototype, "autoExpand", {
        get: function () {
            return this._ae;
        },
        set: function (value) {
            this._ae = value;
            this.relayoutChildren();
        },
        enumerable: true,
        configurable: true
    });
    TabButtonGroup.prototype.relayoutChildren = function () {
        var x = 0;
        var y = 0;
        var w = 0;
        var h = this.h;
        var n = this.children.length;
        var autoExpand = this._ae;
        if (n > 0) {
            var itemW = this.w / n;
            this.children.forEach(function (child) {
                if (autoExpand) {
                    w = itemW;
                }
                else {
                    w = child.desireWidth;
                }
                child.moveResizeTo(x, y, w, h);
                child.relayoutChildren();
                x += w;
            });
        }
        return rect_1.Rect.rect.init(0, 0, this.w, this.h);
    };
    TabButtonGroup.prototype.drawChildren = function (ctx) {
        var current = null;
        this._children.forEach(function (child) {
            if (child.visible) {
                if (child.value) {
                    current = child;
                }
                else {
                    child.draw(ctx);
                }
            }
        });
        if (current) {
            current.draw(ctx);
        }
        return this;
    };
    TabButtonGroup.prototype.getDefProps = function () {
        return TabButtonGroup.defProps;
    };
    TabButtonGroup.create = function (options) {
        return TabButtonGroup.r.create(options);
    };
    TabButtonGroup.defProps = Object.assign({}, widget_1.Widget.defProps, { _ae: true });
    TabButtonGroup.TYPE = "tab-button-group";
    TabButtonGroup.r = widget_recyclable_creator_1.WidgetRecyclableCreator.create(TabButtonGroup);
    return TabButtonGroup;
}(widget_1.Widget));
exports.TabButtonGroup = TabButtonGroup;
;
widget_factory_1.WidgetFactory.register(TabButtonGroup.TYPE, TabButtonGroup.create);
