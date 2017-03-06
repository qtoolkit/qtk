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
var widget_1 = require("../controls/widget");
var widget_factory_1 = require("../controls/widget-factory");
var widget_recyclable_creator_1 = require("../controls/widget-recyclable-creator");
/**
 * 表格左边的行序数项。
 */
var TableIndexItem = (function (_super) {
    __extends(TableIndexItem, _super);
    function TableIndexItem() {
        return _super.call(this, TableIndexItem.TYPE) || this;
    }
    TableIndexItem.create = function (options) {
        return TableIndexItem.recycleBin.create(options);
    };
    return TableIndexItem;
}(widget_1.Widget));
TableIndexItem.TYPE = "table-index-item";
TableIndexItem.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(TableIndexItem);
exports.TableIndexItem = TableIndexItem;
;
widget_factory_1.WidgetFactory.register(TableIndexItem.TYPE, TableIndexItem.create);
