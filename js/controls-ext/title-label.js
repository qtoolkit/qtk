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
var label_1 = require("../controls/label");
var title_value_1 = require("./title-value");
var widget_factory_1 = require("../controls/widget-factory");
var widget_recyclable_creator_1 = require("../controls/widget-recyclable-creator");
/**
 * @class TitleLabel
 * @extends Widget
 * 带标题的文本。
 */
var TitleLabel = (function (_super) {
    __extends(TitleLabel, _super);
    function TitleLabel(type) {
        return _super.call(this, type || TitleLabel.TYPE) || this;
    }
    TitleLabel.prototype.createValueWidget = function (options) {
        return label_1.Label.create(options);
    };
    TitleLabel.create = function (options) {
        return TitleLabel.recycleBin.create(options);
    };
    return TitleLabel;
}(title_value_1.TitleValue));
TitleLabel.TYPE = "title-label";
TitleLabel.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(TitleLabel);
exports.TitleLabel = TitleLabel;
;
widget_factory_1.WidgetFactory.register(TitleLabel.TYPE, TitleLabel.create);
