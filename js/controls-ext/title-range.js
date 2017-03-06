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
var range_edit_1 = require("./range-edit");
var title_value_1 = require("./title-value");
var widget_factory_1 = require("../controls/widget-factory");
var widget_recyclable_creator_1 = require("../controls/widget-recyclable-creator");
/**
 * @class TitleRange
 * @extends Widget
 * 带标题的范围的编辑器。
 */
var TitleRange = (function (_super) {
    __extends(TitleRange, _super);
    function TitleRange(type) {
        return _super.call(this, type || TitleRange.TYPE) || this;
    }
    TitleRange.prototype.createValueWidget = function (options) {
        return range_edit_1.RangeEdit.create(options);
    };
    TitleRange.create = function (options) {
        return TitleRange.recycleBin.create(options);
    };
    return TitleRange;
}(title_value_1.TitleValue));
TitleRange.TYPE = "title-range";
TitleRange.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(TitleRange);
exports.TitleRange = TitleRange;
;
widget_factory_1.WidgetFactory.register(TitleRange.TYPE, TitleRange.create);
