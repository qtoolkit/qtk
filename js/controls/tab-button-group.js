"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var rect_1 = require("../rect");
var widget_1 = require("./widget");
var widget_factory_1 = require("./widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
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
            return this._autoExpand;
        },
        set: function (value) {
            this._autoExpand = value;
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
        var autoExpand = this._autoExpand;
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
    TabButtonGroup.prototype.onReset = function () {
        this.autoExpand = true;
    };
    TabButtonGroup.create = function (options) {
        return TabButtonGroup.r.create().reset(TabButtonGroup.TYPE, options);
    };
    TabButtonGroup.TYPE = "tab-button-group";
    TabButtonGroup.r = new recyclable_creator_1.RecyclableCreator(function () { return new TabButtonGroup(); });
    return TabButtonGroup;
}(widget_1.Widget));
exports.TabButtonGroup = TabButtonGroup;
;
widget_factory_1.WidgetFactory.register(TabButtonGroup.TYPE, TabButtonGroup.create);
