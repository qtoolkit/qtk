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
var rect_1 = require("../rect");
var layouter_1 = require("./layouter");
var TYPE = "list";
/**
 * 列表布局器。
 */
var ListLayouter = (function (_super) {
    __extends(ListLayouter, _super);
    function ListLayouter() {
        var _this = _super.call(this) || this;
        _this.rect = rect_1.Rect.create(0, 0, 0, 0);
        return _this;
    }
    Object.defineProperty(ListLayouter.prototype, "type", {
        get: function () {
            return TYPE;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 设置参数。
     */
    ListLayouter.prototype.setOptions = function (options) {
        this.h = options.h || 80;
        this.spacing = options.spacing || 0;
        return this;
    };
    ListLayouter.prototype.layoutChildren = function (widget, children, rect) {
        var x = rect.x;
        var y = rect.y;
        var w = rect.w;
        var h = this.h;
        var spacing = this.spacing;
        var arr = widget.children;
        for (var i = 0, n = arr.length; i < n; i++) {
            var child = arr[i];
            var param = child.layoutParam;
            if (!child.visible) {
                continue;
            }
            if (param && param.type === TYPE) {
                h = param.h || this.h;
                spacing = param.spacing || this.spacing;
            }
            else {
                h = this.h;
                spacing = i ? this.spacing : 0;
            }
            y += spacing;
            child.moveResizeTo(x, y, w, h);
            child.relayoutChildren();
            y += h;
        }
        this.rect.init(rect.x, rect.y, w, y - rect.y);
        return this.rect;
    };
    ListLayouter.prototype.createParam = function (options) {
        return ListLayouterParam.createWithOptions(options);
    };
    ListLayouter.create = function (h, spacing) {
        return ListLayouter.createWithOptions({ h: h, spacing: spacing });
    };
    ListLayouter.createWithOptions = function (options) {
        var layouter = new ListLayouter();
        return layouter.setOptions(options);
    };
    return ListLayouter;
}(layouter_1.Layouter));
exports.ListLayouter = ListLayouter;
;
layouter_1.LayouterFactory.register(TYPE, ListLayouter.createWithOptions);
/**
 * 列表布局器的参数。
 *
 * 如果父控件使用ListLayouter布局器，则子控件需要把layoutParam设置为ListLayouterParam。
 *
 */
var ListLayouterParam = (function (_super) {
    __extends(ListLayouterParam, _super);
    function ListLayouterParam(h, spacing) {
        var _this = _super.call(this, TYPE) || this;
        _this.h = h || 0;
        _this.spacing = spacing || 0;
        return _this;
    }
    ListLayouterParam.create = function (h, spacing) {
        return new ListLayouterParam(h, spacing);
    };
    ListLayouterParam.createWithOptions = function (opt) {
        var options = opt || {};
        return new ListLayouterParam(options.h || options.height, options.spacing);
    };
    return ListLayouterParam;
}(layouter_1.LayouterParam));
exports.ListLayouterParam = ListLayouterParam;
;
layouter_1.LayouterParamFactory.register(TYPE, ListLayouterParam.createWithOptions);
