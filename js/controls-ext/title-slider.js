"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var slider_1 = require("../controls/slider");
var title_value_1 = require("./title-value");
var widget_factory_1 = require("../controls/widget-factory");
var widget_recyclable_creator_1 = require("../controls/widget-recyclable-creator");
var TitleSlider = (function (_super) {
    __extends(TitleSlider, _super);
    function TitleSlider(type) {
        _super.call(this, type || TitleSlider.TYPE);
    }
    TitleSlider.prototype.createValueWidget = function (options) {
        return slider_1.Slider.create(options);
    };
    TitleSlider.create = function (options) {
        return TitleSlider.recycleBin.create(options);
    };
    TitleSlider.TYPE = "title-slider";
    TitleSlider.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(TitleSlider);
    return TitleSlider;
}(title_value_1.TitleValue));
exports.TitleSlider = TitleSlider;
;
widget_factory_1.WidgetFactory.register(TitleSlider.TYPE, TitleSlider.create);
