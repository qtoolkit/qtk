"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var widget_1 = require("./widget");
var widget_factory_1 = require("./widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
var Pages = (function (_super) {
    __extends(Pages, _super);
    function Pages() {
        _super.call(this, Pages.TYPE);
    }
    Object.defineProperty(Pages.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            var n = this.children.length - 1;
            this._value = Math.max(0, Math.min(value, n));
            this.requestRedraw();
        },
        enumerable: true,
        configurable: true
    });
    Pages.prototype.setValueByPage = function (page) {
        this.value = this.indexOfChild(page);
        return this;
    };
    Object.defineProperty(Pages.prototype, "target", {
        get: function () {
            if (this.children.length) {
                return this.children[this.value];
            }
            else {
                return null;
            }
        },
        set: function (value) {
        },
        enumerable: true,
        configurable: true
    });
    Pages.prototype.relayoutChildren = function () {
        var r = this.getLayoutRect();
        this.children.forEach(function (child) {
            child.moveResizeTo(r.x, r.y, r.w, r.h);
        });
        return r;
    };
    Pages.prototype.drawChildren = function (ctx) {
        var target = this.target;
        if (target) {
            target.draw(ctx);
        }
        return this;
    };
    Pages.prototype.findEventTargetChild = function (x, y, ctx) {
        return this.target;
    };
    Pages.prototype.onReset = function () {
        this.value = 0;
    };
    Pages.create = function (options) {
        return Pages.recycleBin.create().reset(Pages.TYPE, options);
    };
    Pages.TYPE = "pages";
    Pages.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new Pages(); });
    return Pages;
}(widget_1.Widget));
exports.Pages = Pages;
;
widget_factory_1.WidgetFactory.register(Pages.TYPE, Pages.create);
