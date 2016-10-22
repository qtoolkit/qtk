"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var rect_1 = require("../rect");
var Events = require("../events");
var widget_1 = require("../controls/widget");
var widget_factory_1 = require("../controls/widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
/**
 * 表格头的一项。
 */
var TableHeaderItem = (function (_super) {
    __extends(TableHeaderItem, _super);
    function TableHeaderItem() {
        _super.call(this, TableHeaderItem.TYPE);
    }
    Object.defineProperty(TableHeaderItem.prototype, "sortable", {
        get: function () {
            return this._sortable;
        },
        set: function (value) {
            this._sortable = value;
        },
        enumerable: true,
        configurable: true
    });
    TableHeaderItem.prototype.getFgImageRect = function (style) {
        var x = this.w - this.h;
        var y = this.topPadding;
        var w = this.clientH;
        var h = this.clientH;
        return rect_1.Rect.rect.init(x, y, w, h);
    };
    TableHeaderItem.prototype.getStyleType = function () {
        var styleType = this._styleType || this.type;
        if (!this._sortable || !this._sortStatus) {
            return styleType;
        }
        return styleType + "." + this._sortStatus;
    };
    TableHeaderItem.prototype.onReset = function () {
        _super.prototype.onReset.call(this);
        this._sortStatus = null;
        this.on(Events.CLICK, this.triggerSortStatus.bind(this));
    };
    TableHeaderItem.prototype.triggerSortStatus = function () {
        if (this._sortable) {
            if (this._sortStatus === TableHeaderItem.SORT_INC) {
                this._sortStatus = TableHeaderItem.SORT_DEC;
            }
            else {
                this._sortStatus = TableHeaderItem.SORT_INC;
            }
        }
    };
    TableHeaderItem.create = function (options) {
        return TableHeaderItem.recycleBin.create().reset(TableHeaderItem.TYPE, options);
    };
    TableHeaderItem.SORT_INC = "inc";
    TableHeaderItem.SORT_DEC = "dec";
    TableHeaderItem.TYPE = "table-header-item";
    TableHeaderItem.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new TableHeaderItem(); });
    return TableHeaderItem;
}(widget_1.Widget));
exports.TableHeaderItem = TableHeaderItem;
;
widget_factory_1.WidgetFactory.register(TableHeaderItem.TYPE, TableHeaderItem.create);
