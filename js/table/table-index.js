"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var widget_factory_1 = require("../controls/widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
var passive_scrollable_group_1 = require("./passive-scrollable-group");
/**
 * 表格左边的索引序数。
 */
var TableIndex = (function (_super) {
    __extends(TableIndex, _super);
    function TableIndex() {
        _super.call(this, TableIndex.TYPE);
    }
    TableIndex.create = function (options) {
        return TableIndex.recycleBin.create().reset(TableIndex.TYPE, options);
    };
    TableIndex.TYPE = "table-index";
    TableIndex.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new TableIndex(); });
    return TableIndex;
}(passive_scrollable_group_1.PassiveScrollableGroup));
exports.TableIndex = TableIndex;
;
widget_factory_1.WidgetFactory.register(TableIndex.TYPE, TableIndex.create);
