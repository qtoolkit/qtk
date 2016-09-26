"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var rect_1 = require('../rect');
var layouter_1 = require('./layouter');
var TYPE = "grid";
/**
 * 网格布局器。
 */
var GridLayouter = (function (_super) {
    __extends(GridLayouter, _super);
    function GridLayouter() {
        _super.call(this);
        this.rect = rect_1.Rect.create(0, 0, 0, 0);
    }
    Object.defineProperty(GridLayouter.prototype, "type", {
        get: function () {
            return TYPE;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 设置参数。
     */
    GridLayouter.prototype.setOptions = function (options) {
        this.cols = options.cols || 0;
        this.rows = options.rows || 0;
        this.colWidth = options.colWidth || 0;
        this.rowHeight = options.rowHeight || 0;
        this.leftMargin = options.leftMargin || options.margin || 0;
        this.rightMargin = options.rightMargin || options.margin || 0;
        this.topMargin = options.topMargin || options.margin || 0;
        this.bottomMargin = options.bottomMargin || options.margin || 0;
        if (!this.cols && !this.colWidth) {
            this.cols = 3;
        }
        if (!this.rows && !this.rowHeight) {
            this.rows = 3;
        }
        return this;
    };
    GridLayouter.prototype.layoutChildren = function (widget, children, r) {
        var leftMargin = this.leftMargin;
        var rightMargin = this.rightMargin;
        var topMargin = this.topMargin;
        var bottomMargin = this.bottomMargin;
        var defParam = new GridLayouterParam(-1, 1, -1, 1);
        var row = 0;
        var col = 0;
        var spanCols = 0;
        var spanRows = 0;
        var arr = widget.children;
        var n = widget.children.length;
        var cols = this.cols;
        var rows = this.rows;
        if (!cols && !rows) {
            cols = Math.floor(r.w / this.colWidth);
        }
        var iw = cols > 0 ? r.w / cols : this.colWidth;
        var ih = rows > 0 ? r.h / rows : this.rowHeight;
        var ret = this.rect.copy(r);
        for (var i = 0; i < n; i++) {
            var child = arr[i];
            var param = child.layoutParam || defParam;
            if (!child.visible) {
                continue;
            }
            if (cols > 0) {
                col = i % cols;
                row = Math.floor(i / cols);
            }
            else if (rows > 0) {
                row = i % rows;
                col = Math.floor(i / rows);
            }
            if (param.col >= 0) {
                col = param.col;
            }
            if (param.row >= 0) {
                row = param.row;
            }
            spanRows = Math.max(param.spanRows, 1);
            spanCols = Math.max(param.spanCols, 1);
            var x = col * iw + leftMargin + r.x;
            var y = row * ih + topMargin + r.y;
            var w = iw * spanCols - leftMargin - rightMargin;
            var h = ih * spanRows - topMargin - bottomMargin;
            child.moveResizeTo(x, y, w, h);
            child.relayoutChildren();
            ret.w = Math.max(x + w - r.x, r.w);
            ret.h = Math.max(y + h - r.y, r.h);
        }
        return ret;
    };
    GridLayouter.prototype.createParam = function (options) {
        return GridLayouterParam.create(options);
    };
    GridLayouter.create = function (options) {
        var layouter = new GridLayouter();
        return layouter.setOptions(options);
    };
    return GridLayouter;
}(layouter_1.Layouter));
exports.GridLayouter = GridLayouter;
;
layouter_1.LayouterFactory.register(TYPE, GridLayouter.create);
/**
 * 网格布局器的参数。
 *
 * 如果父控件使用GridLayouter布局器，则子控件需要把layoutParam设置为GridLayouterParam。
 *
 */
var GridLayouterParam = (function () {
    function GridLayouterParam(row, spanRows, col, spanCols) {
        this.type = TYPE;
        this.row = row >= 0 ? row : -1;
        this.col = col >= 0 ? col : -1;
        this.spanRows = spanRows || 1;
        this.spanCols = spanCols || 1;
    }
    GridLayouterParam.create = function (opts) {
        var options = opts || {};
        return new GridLayouterParam(options.row, options.spanRows, options.col, options.spanCols);
    };
    return GridLayouterParam;
}());
exports.GridLayouterParam = GridLayouterParam;
;
