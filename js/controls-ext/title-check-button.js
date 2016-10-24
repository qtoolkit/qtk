"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var title_value_1 = require("./title-value");
var check_button_1 = require("../controls/check-button");
var widget_factory_1 = require("../controls/widget-factory");
var widget_recyclable_creator_1 = require("../controls/widget-recyclable-creator");
var TitleCheckButton = (function (_super) {
    __extends(TitleCheckButton, _super);
    function TitleCheckButton(type) {
        _super.call(this, type || TitleCheckButton.TYPE);
    }
    TitleCheckButton.prototype.createValueWidget = function (options) {
        return check_button_1.CheckButton.create(options);
    };
    TitleCheckButton.create = function (options) {
        return TitleCheckButton.recycleBin.create(options);
    };
    TitleCheckButton.TYPE = "title-check-button";
    TitleCheckButton.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(TitleCheckButton);
    return TitleCheckButton;
}(title_value_1.TitleValue));
exports.TitleCheckButton = TitleCheckButton;
;
widget_factory_1.WidgetFactory.register(TitleCheckButton.TYPE, TitleCheckButton.create);
