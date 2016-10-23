"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var rect_1 = require("../rect");
var point_1 = require("../point");
var range_1 = require("../range");
var list_view_1 = require("../controls/list-view");
var widget_1 = require("../controls/widget");
var widget_factory_1 = require("../controls/widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
/**
 * 表格内容区域
 */
var TableClient = (function (_super) {
    __extends(TableClient, _super);
    function TableClient() {
        _super.call(this, TableClient.TYPE);
    }
    Object.defineProperty(TableClient.prototype, "colsWidth", {
        get: function () {
            return this._colsWidth;
        },
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
        set: function (value) {
            this._selectedCols.first = value.first;
            this._selectedCols.second = value.second;
        },
        enumerable: true,
        configurable: true
    });
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
    TableClient.prototype.yToRow = function (y) {
        return Math.floor(y / this.itemH);
    };
    TableClient.prototype.calcSelectRect = function () {
        var selectedCols = this._selectedCols;
        var selectedRows = this._selectedRows;
        var left = 0;
        var right = 0;
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
        return rect_1.Rect.rect.init(x, y, w, h);
    };
    TableClient.prototype.setSelectedRows = function (first, second) {
        this._selectedRows.first = first;
        this._selectedRows.second = second;
        return this;
    };
    TableClient.prototype.setSelectedCols = function (first, second) {
        this._selectedCols.first = first;
        this._selectedCols.second = second;
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
    TableClient.prototype.dispatchPointerDown = function (evt, ctx) {
        _super.prototype.dispatchPointerDown.call(this, evt, ctx);
        if (!this._pointerInBar) {
            this.updateSelection(evt.x, evt.y, true, true);
        }
    };
    TableClient.prototype.dispatchPointerMove = function (evt, ctx) {
        _super.prototype.dispatchPointerMove.call(this, evt, ctx);
        if (!this._pointerInBar && evt.pointerDown) {
            this.updateSelection(evt.x, evt.y, false, true);
        }
    };
    TableClient.prototype.drawGrid = function (ctx, style) {
        var itemH = this.itemH;
        var ox = this.offsetX;
        var oy = this.offsetY;
        var w = this.clientW;
        var h = this.clientH;
        var b = this.topPadding + h;
        var r = this.leftPadding + w;
        var itemW = this.colsWidth[0];
        var y = this.topPadding;
        var x = this.leftPadding;
        ctx.beginPath();
        this.colsWidth.forEach(function (width, index) {
            ctx.moveTo(x, y);
            ctx.lineTo(x, b);
            x += width;
        });
        x = this.leftPadding;
        y = this.topPadding + (itemH - oy % itemH);
        while (y < b) {
            ctx.moveTo(x, y);
            ctx.lineTo(r, y);
            y += itemH;
        }
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
        var style = this.getStyleOfState(widget_1.WidgetState.NORMAL);
        this.drawGrid(ctx, style);
        style = this.getStyleOfState(widget_1.WidgetState.ACTIVE);
        this.drawSelection(ctx, style);
    };
    TableClient.prototype.onReset = function () {
        _super.prototype.onReset.call(this);
        this.dragToScroll = true;
        this._selectedCols = range_1.Range.create(0, 0);
        this._selectedRows = range_1.Range.create(0, 0);
    };
    TableClient.create = function (options) {
        return TableClient.rBin.create().reset(TableClient.TYPE, options);
    };
    TableClient.TYPE = "table-client";
    TableClient.rBin = new recyclable_creator_1.RecyclableCreator(function () { return new TableClient(); });
    return TableClient;
}(list_view_1.ListView));
exports.TableClient = TableClient;
;
widget_factory_1.WidgetFactory.register(TableClient.TYPE, TableClient.create);
