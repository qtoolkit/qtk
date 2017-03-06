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
var slider_1 = require("../controls/slider");
var title_value_1 = require("./title-value");
var widget_factory_1 = require("../controls/widget-factory");
var widget_recyclable_creator_1 = require("../controls/widget-recyclable-creator");
/**
 * @class TitleSlider
 * @extends Widget
 * 带标题的滑块。
 */
var TitleSlider = (function (_super) {
    __extends(TitleSlider, _super);
    function TitleSlider(type) {
        return _super.call(this, type || TitleSlider.TYPE) || this;
    }
    TitleSlider.prototype.createValueWidget = function (options) {
        return slider_1.Slider.create(options);
    };
    TitleSlider.create = function (options) {
        return TitleSlider.recycleBin.create(options);
    };
    return TitleSlider;
}(title_value_1.TitleValue));
TitleSlider.TYPE = "title-slider";
TitleSlider.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(TitleSlider);
exports.TitleSlider = TitleSlider;
;
widget_factory_1.WidgetFactory.register(TitleSlider.TYPE, TitleSlider.create);
