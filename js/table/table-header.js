"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var recyclable_creator_1 = require("../recyclable-creator");
var widget_factory_1 = require("../controls/widget-factory");
var passive_scrollable_group_1 = require("./passive-scrollable-group");
/**
 * 表格头
 */
var TableHeader = (function (_super) {
    __extends(TableHeader, _super);
    function TableHeader() {
        _super.call(this, TableHeader.TYPE);
    }
    TableHeader.create = function (options) {
        return TableHeader.recycleBin.create().reset(TableHeader.TYPE, options);
    };
    TableHeader.TYPE = "table-header";
    TableHeader.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new TableHeader(); });
    return TableHeader;
}(passive_scrollable_group_1.PassiveScrollableGroup));
exports.TableHeader = TableHeader;
;
widget_factory_1.WidgetFactory.register(TableHeader.TYPE, TableHeader.create);
