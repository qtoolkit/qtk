"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var title_value_1 = require("./title-value");
var color_tile_1 = require("../controls/color-tile");
var widget_factory_1 = require("../controls/widget-factory");
var widget_recyclable_creator_1 = require("../controls/widget-recyclable-creator");
var TitleLine = (function (_super) {
    __extends(TitleLine, _super);
    function TitleLine(type) {
        _super.call(this, type || TitleLine.TYPE);
    }
    TitleLine.prototype.createValueWidget = function (options) {
        return color_tile_1.ColorLine.create({ styleType: "title.line" });
    };
    TitleLine.create = function (options) {
        return TitleLine.recycleBin.create(options);
    };
    TitleLine.TYPE = "title-line";
    TitleLine.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(TitleLine);
    return TitleLine;
}(title_value_1.TitleValue));
exports.TitleLine = TitleLine;
;
widget_factory_1.WidgetFactory.register(TitleLine.TYPE, TitleLine.create);
