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
var widget_factory_1 = require("../controls/widget-factory");
var widget_recyclable_creator_1 = require("../controls/widget-recyclable-creator");
var combo_box_1 = require("../controls/combo-box");
var TitleComboBoxBase = (function (_super) {
    __extends(TitleComboBoxBase, _super);
    function TitleComboBoxBase(type) {
        return _super.call(this, type) || this;
    }
    Object.defineProperty(TitleComboBoxBase.prototype, "itemH", {
        get: function () {
            var comboBox = this._valueWidget;
            return comboBox.itemH;
        },
        set: function (value) {
            var comboBox = this._valueWidget;
            comboBox.itemH = value;
        },
        enumerable: true,
        configurable: true
    });
    TitleComboBoxBase.prototype.resetOptions = function () {
        var comboBox = this._valueWidget;
        comboBox.resetOptions();
        return this;
    };
    TitleComboBoxBase.prototype.addOption = function (text, value, imageURL, color) {
        var comboBox = this._valueWidget;
        comboBox.addOption(text, value, imageURL, color);
        return this;
    };
    return TitleComboBoxBase;
}(title_value_1.TitleValue));
exports.TitleComboBoxBase = TitleComboBoxBase;
/**
 * @class TitleComboBox
 * @extends Widget
 * 带标题的下拉框。
 */
var TitleComboBox = (function (_super) {
    __extends(TitleComboBox, _super);
    function TitleComboBox(type) {
        return _super.call(this, type || TitleComboBox.TYPE) || this;
    }
    TitleComboBox.prototype.createValueWidget = function (options) {
        return combo_box_1.ComboBox.create(options);
    };
    TitleComboBox.create = function (options) {
        return TitleComboBox.recycleBin.create(options);
    };
    return TitleComboBox;
}(TitleComboBoxBase));
TitleComboBox.TYPE = "title-combo-box";
TitleComboBox.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(TitleComboBox);
exports.TitleComboBox = TitleComboBox;
;
widget_factory_1.WidgetFactory.register(TitleComboBox.TYPE, TitleComboBox.create);
/**
 * @class TitleComboBoxEditable
 * @extends Widget
 * 带标题的可编辑的下拉框。
 */
var TitleComboBoxEditable = (function (_super) {
    __extends(TitleComboBoxEditable, _super);
    function TitleComboBoxEditable(type) {
        return _super.call(this, type || TitleComboBoxEditable.TYPE) || this;
    }
    TitleComboBoxEditable.prototype.createValueWidget = function (options) {
        return combo_box_1.ComboBoxEditable.create(options);
    };
    TitleComboBoxEditable.create = function (options) {
        return TitleComboBoxEditable.recycleBin.create(options);
    };
    return TitleComboBoxEditable;
}(TitleComboBoxBase));
TitleComboBoxEditable.TYPE = "title-combo-box-editable";
TitleComboBoxEditable.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(TitleComboBoxEditable);
exports.TitleComboBoxEditable = TitleComboBoxEditable;
;
widget_factory_1.WidgetFactory.register(TitleComboBoxEditable.TYPE, TitleComboBoxEditable.create);
