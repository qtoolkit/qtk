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
var widget_factory_1 = require("../controls/widget-factory");
var passive_scrollable_group_1 = require("./passive-scrollable-group");
var widget_recyclable_creator_1 = require("../controls/widget-recyclable-creator");
/**
 * 表格头
 */
var TableHeader = (function (_super) {
    __extends(TableHeader, _super);
    function TableHeader() {
        return _super.call(this, TableHeader.TYPE) || this;
    }
    TableHeader.create = function (options) {
        return TableHeader.recycleBin.create(options);
    };
    return TableHeader;
}(passive_scrollable_group_1.PassiveScrollableGroup));
TableHeader.TYPE = "table-header";
TableHeader.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(TableHeader);
exports.TableHeader = TableHeader;
;
widget_factory_1.WidgetFactory.register(TableHeader.TYPE, TableHeader.create);
