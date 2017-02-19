"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var title_value_1 = require("./title-value");
var choosable_edit_1 = require("./choosable-edit");
var widget_factory_1 = require("../controls/widget-factory");
var widget_recyclable_creator_1 = require("../controls/widget-recyclable-creator");
/**
 * @class TitleChoosableEdit
 * @extends Widget
 * 带标题的编辑器，同时提供一个选择按钮，用来实现颜色选择和文件选择等功能。
 */
var TitleChoosableEdit = (function (_super) {
    __extends(TitleChoosableEdit, _super);
    function TitleChoosableEdit(type) {
        _super.call(this, type || TitleChoosableEdit.TYPE);
    }
    Object.defineProperty(TitleChoosableEdit.prototype, "onChoose", {
        get: function () {
            var edit = this._valueWidget;
            return edit.onChoose;
        },
        /**
         * @property {Function} onChoose
         * 点击选择按钮时的回调函数。
         */
        set: function (value) {
            var edit = this._valueWidget;
            edit.onChoose = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TitleChoosableEdit.prototype, "inputTips", {
        get: function () {
            return this._inputTips;
        },
        /**
         * @property {string} inputTips
         * 输入提示。
         */
        set: function (value) {
            this._inputTips = value;
            if (this._valueWidget) {
                this._valueWidget.set({ inputTips: value });
            }
        },
        enumerable: true,
        configurable: true
    });
    TitleChoosableEdit.prototype.createValueWidget = function (options) {
        return choosable_edit_1.ChoosableEdit.create();
    };
    TitleChoosableEdit.create = function (options) {
        return TitleChoosableEdit.recycleBin.create(options);
    };
    TitleChoosableEdit.TYPE = "title-choosable-edit";
    TitleChoosableEdit.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(TitleChoosableEdit);
    return TitleChoosableEdit;
}(title_value_1.TitleValue));
exports.TitleChoosableEdit = TitleChoosableEdit;
;
widget_factory_1.WidgetFactory.register(TitleChoosableEdit.TYPE, TitleChoosableEdit.create);
