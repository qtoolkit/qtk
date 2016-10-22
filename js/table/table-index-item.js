"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var widget_1 = require("../controls/widget");
var widget_factory_1 = require("../controls/widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
/**
 * 表格左边的序数项。
 */
var TableIndexItem = (function (_super) {
    __extends(TableIndexItem, _super);
    function TableIndexItem() {
        _super.call(this, TableIndexItem.TYPE);
    }
    TableIndexItem.prototype.onReset = function () {
        _super.prototype.onReset.call(this);
    };
    TableIndexItem.create = function (options) {
        return TableIndexItem.recycleBin.create().reset(TableIndexItem.TYPE, options);
    };
    TableIndexItem.TYPE = "table-index-item";
    TableIndexItem.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new TableIndexItem(); });
    return TableIndexItem;
}(widget_1.Widget));
exports.TableIndexItem = TableIndexItem;
;
widget_factory_1.WidgetFactory.register(TableIndexItem.TYPE, TableIndexItem.create);
