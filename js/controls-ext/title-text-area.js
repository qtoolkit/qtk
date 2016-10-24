"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var edit_1 = require("../controls/edit");
var title_value_1 = require("./title-value");
var widget_factory_1 = require("../controls/widget-factory");
var widget_recyclable_creator_1 = require("../controls/widget-recyclable-creator");
var TitleTextArea = (function (_super) {
    __extends(TitleTextArea, _super);
    function TitleTextArea(type) {
        _super.call(this, type || TitleTextArea.TYPE);
    }
    Object.defineProperty(TitleTextArea.prototype, "inputTips", {
        get: function () {
            return this._inputTips;
        },
        set: function (value) {
            this._inputTips = value;
            if (this._valueWidget) {
                this._valueWidget.set({ inputTips: value });
            }
        },
        enumerable: true,
        configurable: true
    });
    TitleTextArea.prototype.createValueWidget = function (options) {
        var opts = options || {};
        if (this._inputTips) {
            opts.inputTips = this._inputTips;
        }
        opts.multiLines = true;
        return edit_1.Edit.create(opts);
    };
    TitleTextArea.create = function (options) {
        return TitleTextArea.recycleBin.create(options);
    };
    TitleTextArea.TYPE = "title-text-area";
    TitleTextArea.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(TitleTextArea);
    return TitleTextArea;
}(title_value_1.TitleValue));
exports.TitleTextArea = TitleTextArea;
;
widget_factory_1.WidgetFactory.register(TitleTextArea.TYPE, TitleTextArea.create);
