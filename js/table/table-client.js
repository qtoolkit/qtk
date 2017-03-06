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
var point_1 = require("../point");
var range_1 = require("../range");
var list_view_1 = require("../controls/list-view");
var widget_1 = require("../controls/widget");
var widget_factory_1 = require("../controls/widget-factory");
var widget_recyclable_creator_1 = require("../controls/widget-recyclable-creator");
/**
 * 表格内容区域
 */
var TableClient = (function (_super) {
    __extends(TableClient, _super);
    function TableClient() {
        return _super.call(this, TableClient.TYPE) || this;
    }
    Object.defineProperty(TableClient.prototype, "colsWidth", {
        get: function () {
            return this._colsWidth;
        },
        /**
         * 记录每一列的宽度，从TableHeader获取。
         */
        set: function (value) {
            this._colsWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableClient.prototype, "selectedRows", {
        get: function () {
            return this._selectedRows;
        },
        /**
         * 当前选择的行的范围。
         */
        set: function (value) {
            this._selectedRows.first = value.first;
            this._selectedRows.second = value.second;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableClient.prototype, "selectedCols", {
        get: function () {
            return this._selectedCols;
        },
        /**
         * 当前选择的列的范围。
         */
        set: function (value) {
            this._selectedCols.first = value.first;
            this._selectedCols.second = value.second;
        },
        enumerable: true,
        configurable: true
    });
    /*
     * 把X坐标转换成对应的列数。
     */
    TableClient.prototype.xToCol = function (x) {
        var xx = x;
        var col = -1;
        this.colsWidth.some(function (w, index) {
            xx -= w;
            col = index;
            return xx <= 0;
        });
        return col;
    };
    /*
     * 把Y坐标转换成对应的行数。
     */
    TableClient.prototype.yToRow = function (y) {
        return Math.floor(y / this.itemH);
    };
    /**
     * 计算选中的行列数对应的像素范围。
     */
    TableClient.prototype.calcSelectRect = function () {
        var left = 0;
        var right = 0;
        var selectedCols = this._selectedCols;
        var selectedRows = this._selectedRows;
        this.colsWidth.some(function (width, index) {
            if (index < selectedCols.first) {
                left += width;
            }
            if (index <= selectedCols.second) {
                right += width;
                return false;
            }
            else {
                return true;
            }
        });
        var x = left - this.offsetX;
        var w = right - left;
        var y = selectedRows.first * this.itemH - this.offsetY;
        var h = (selectedRows.second - selectedRows.first + 1) * this.itemH;
        var maxW = Math.min(this.getViewWidth(), this.contentW);
        var maxH = Math.min(this.getViewHeight(), this.contentH);
        if (x < 0) {
            w += x;
            x = 0;
        }
        if ((x + w) >= maxW) {
            w = maxW - x - 1;
        }
        if (y < 0) {
            h += y;
            y = 0;
        }
        if ((y + h) >= this.contentH) {
            h = maxH - y - 1;
        }
        return rect_1.Rect.rect.init(x, y, w, h);
    };
    TableClient.prototype.setSelectedRows = function (first, second) {
        this._selectedRows.first = Math.min(first, second);
        this._selectedRows.second = Math.max(first, second);
        return this;
    };
    TableClient.prototype.setSelectedCols = function (first, second) {
        this._selectedCols.first = Math.min(first, second);
        this._selectedCols.second = Math.max(first, second);
        return this;
    };
    TableClient.prototype.updateSelection = function (x, y, updateFirst, updateSecond) {
        var p = this.toLocalPoint(point_1.Point.point.init(this.offsetX + x, this.offsetY + y));
        var col = this.xToCol(p.x);
        var row = this.yToRow(p.y);
        var firstCol = col;
        var secondCol = col;
        var firstRow = row;
        var secondRow = row;
        if (!updateFirst) {
            firstCol = this._selectedCols.first;
            firstRow = this._selectedRows.first;
        }
        if (!updateSecond) {
            secondCol = this._selectedCols.second;
            secondRow = this._selectedRows.second;
        }
        this.setSelectedCols(firstCol, secondCol);
        this.setSelectedRows(firstRow, secondRow);
    };
    TableClient.prototype.dispatchPointerDown = function (evt) {
        _super.prototype.dispatchPointerDown.call(this, evt);
        if (!this._pointerInBar) {
            this.updateSelection(evt.x, evt.y, true, true);
        }
    };
    TableClient.prototype.dispatchPointerMove = function (evt) {
        _super.prototype.dispatchPointerMove.call(this, evt);
        if (!this._pointerInBar && evt.pointerDown) {
            this.updateSelection(evt.x, evt.y, false, true);
        }
    };
    TableClient.prototype.drawVLine = function (ctx, x, yStart, yEnd) {
        if (x >= this.w) {
            return;
        }
        ctx.moveTo(x, yStart);
        ctx.lineTo(x, yEnd);
    };
    TableClient.prototype.drawVLines = function (ctx) {
        var _this = this;
        var startCol = 0;
        var ox = this.offsetX;
        this.colsWidth.some(function (width, index) {
            if (ox > width) {
                ox -= width;
                return false;
            }
            else {
                startCol = index;
                ox = width - ox;
                return true;
            }
        });
        var y = this.topPadding;
        var x = this.leftPadding + ox;
        var b = this.topPadding + this.clientH;
        this.drawVLine(ctx, x, y, b);
        this.colsWidth.forEach(function (width, index) {
            if (index <= startCol) {
                return;
            }
            x += width;
            _this.drawVLine(ctx, x, y, b);
        });
    };
    TableClient.prototype.drawHLines = function (ctx) {
        var oy = this.offsetY;
        var itemH = this.itemH;
        var x = this.leftPadding;
        var b = this.topPadding + this.clientH;
        var r = this.leftPadding + this.clientW;
        var y = this.topPadding + (itemH - oy % itemH);
        while (y < b) {
            ctx.moveTo(x, y);
            ctx.lineTo(r, y);
            y += itemH;
        }
    };
    TableClient.prototype.drawGrid = function (ctx, style) {
        ctx.beginPath();
        this.drawVLines(ctx);
        this.drawHLines(ctx);
        ctx.lineWidth = 1;
        ctx.strokeStyle = style.lineColor;
        ctx.stroke();
    };
    TableClient.prototype.drawSelection = function (ctx, style) {
        var r = this.calcSelectRect();
        if (r.w > 0 && r.h > 0) {
            ctx.beginPath();
            ctx.rect(r.x, r.y, r.w, r.h);
            ctx.lineWidth = 2;
            ctx.strokeStyle = style.lineColor;
            ctx.stroke();
        }
    };
    TableClient.prototype.afterDrawChildren = function (ctx) {
        _super.prototype.afterDrawChildren.call(this, ctx);
        this.drawGrid(ctx, this.getStyleOfState(widget_1.WidgetState.NORMAL));
        this.drawSelection(ctx, this.getStyleOfState(widget_1.WidgetState.ACTIVE));
    };
    TableClient.prototype.getLayoutWidth = function () {
        var w = 0;
        this.colsWidth.forEach(function (width) {
            w += width;
        });
        return Math.max(w, this.clientW);
    };
    TableClient.prototype.onReset = function () {
        _super.prototype.onReset.call(this);
        this.dragToScroll = true;
        this.scrollerOptions.scrollingX = true;
        this._selectedCols = range_1.Range.create(0, 0);
        this._selectedRows = range_1.Range.create(0, 0);
    };
    TableClient.create = function (options) {
        return TableClient.rBin.create(options);
    };
    return TableClient;
}(list_view_1.ListView));
TableClient.TYPE = "table-client";
TableClient.rBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(TableClient);
exports.TableClient = TableClient;
;
widget_factory_1.WidgetFactory.register(TableClient.TYPE, TableClient.create);
