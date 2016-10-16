"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var title_value_1 = require("./title-value");
var check_box_1 = require("../controls/check-box");
var widget_factory_1 = require("../controls/widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
var TitleCheckBox = (function (_super) {
    __extends(TitleCheckBox, _super);
    function TitleCheckBox(type) {
        _super.call(this, type || TitleCheckBox.TYPE);
    }
    TitleCheckBox.prototype.createValueWidget = function (options) {
        return check_box_1.CheckBox.create(options);
    };
    TitleCheckBox.create = function (options) {
        return TitleCheckBox.recycleBin.create().reset(TitleCheckBox.TYPE, options);
    };
    TitleCheckBox.TYPE = "title-check-box";
    TitleCheckBox.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new TitleCheckBox(); });
    return TitleCheckBox;
}(title_value_1.TitleValue));
exports.TitleCheckBox = TitleCheckBox;
;
widget_factory_1.WidgetFactory.register(TitleCheckBox.TYPE, TitleCheckBox.create);
