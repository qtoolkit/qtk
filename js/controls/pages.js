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
var widget_1 = require("./widget");
var widget_factory_1 = require("./widget-factory");
var widget_recyclable_creator_1 = require("./widget-recyclable-creator");
/**
 * @class Pages
 * 页面管理器。管理多个页面，只有一个页面处于活跃状态，仅该页面可见，可以处理事件。
 */
var Pages = (function (_super) {
    __extends(Pages, _super);
    function Pages() {
        return _super.call(this, Pages.TYPE) || this;
    }
    Object.defineProperty(Pages.prototype, "value", {
        get: function () {
            return this._value;
        },
        /**
         * @property {number} value
         * 表示该活跃页面的索引。
         */
        set: function (value) {
            var n = this.children.length - 1;
            this._value = Math.max(0, Math.min(value, n));
            this.requestRedraw();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pages.prototype, "target", {
        get: function () {
            if (this.children.length) {
                return this.children[this.value];
            }
            else {
                return null;
            }
        },
        set: function (widget) {
            this.value = this.children.indexOf(widget);
        },
        enumerable: true,
        configurable: true
    });
    Pages.prototype.findEventTargetChild = function (x, y) {
        return this.target;
    };
    Pages.prototype.relayoutChildren = function () {
        var r = this.getLayoutRect();
        this.children.forEach(function (child) {
            child.moveResizeTo(r.x, r.y, r.w, r.h);
            child.relayoutChildren();
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
    Pages.prototype.onReset = function () {
        _super.prototype.onReset.call(this);
        this.value = 0;
    };
    Pages.create = function (options) {
        return Pages.recycleBin.create(options);
    };
    return Pages;
}(widget_1.Widget));
Pages.TYPE = "pages";
Pages.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(Pages);
exports.Pages = Pages;
;
widget_factory_1.WidgetFactory.register(Pages.TYPE, Pages.create);
