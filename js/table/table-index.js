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
 * 表格左边的行序数。
 */
var TableIndex = (function (_super) {
    __extends(TableIndex, _super);
    function TableIndex() {
        return _super.call(this, TableIndex.TYPE) || this;
    }
    TableIndex.create = function (options) {
        return TableIndex.recycleBin.create(options);
    };
    return TableIndex;
}(passive_scrollable_group_1.PassiveScrollableGroup));
TableIndex.TYPE = "table-index";
TableIndex.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(TableIndex);
exports.TableIndex = TableIndex;
;
widget_factory_1.WidgetFactory.register(TableIndex.TYPE, TableIndex.create);
