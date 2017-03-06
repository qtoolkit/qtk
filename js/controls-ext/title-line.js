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
var title_value_1 = require("./title-value");
var color_tile_1 = require("../controls/color-tile");
var widget_factory_1 = require("../controls/widget-factory");
var widget_recyclable_creator_1 = require("../controls/widget-recyclable-creator");
/**
 * @class TitleLine
 * @extends Widget
 * 带标题的直线，用于属性的分组。
 */
var TitleLine = (function (_super) {
    __extends(TitleLine, _super);
    function TitleLine(type) {
        return _super.call(this, type || TitleLine.TYPE) || this;
    }
    TitleLine.prototype.createValueWidget = function (options) {
        return color_tile_1.ColorLine.create({ styleType: "title.line" });
    };
    TitleLine.create = function (options) {
        return TitleLine.recycleBin.create(options);
    };
    return TitleLine;
}(title_value_1.TitleValue));
TitleLine.TYPE = "title-line";
TitleLine.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(TitleLine);
exports.TitleLine = TitleLine;
;
widget_factory_1.WidgetFactory.register(TitleLine.TYPE, TitleLine.create);
