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
var edit_1 = require("../controls/edit");
var title_value_1 = require("./title-value");
var widget_factory_1 = require("../controls/widget-factory");
var widget_recyclable_creator_1 = require("../controls/widget-recyclable-creator");
/**
 * @class TitleTextArea
 * @extends Widget
 * 带标题的多行编辑器。
 */
var TitleTextArea = (function (_super) {
    __extends(TitleTextArea, _super);
    function TitleTextArea(type) {
        return _super.call(this, type || TitleTextArea.TYPE) || this;
    }
    Object.defineProperty(TitleTextArea.prototype, "inputTips", {
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
    TitleTextArea.prototype.relayoutChildren = function () {
        this.requestRedraw();
        var titleWidget = this.titleWidget;
        var valueWidget = this.valueWidget;
        var w = this.w - this.leftPadding - this.topPadding;
        if (titleWidget && valueWidget) {
            titleWidget.x = this.leftPadding;
            titleWidget.y = this.topPadding;
            titleWidget.w = w;
            titleWidget.h = 20;
            valueWidget.x = this.leftPadding;
            valueWidget.y = titleWidget.y + titleWidget.h;
            valueWidget.w = w;
            this.h = valueWidget.y + valueWidget.h + this.bottomPadding;
        }
        return this.getLayoutRect();
    };
    TitleTextArea.prototype.onCreated = function () {
        _super.prototype.onCreated.call(this);
        this.valueWidget.h = this.h;
    };
    TitleTextArea.prototype.createValueWidget = function (options) {
        var opts = options || {};
        if (this._inputTips) {
            opts.inputTips = this._inputTips;
        }
        opts.multiLineMode = true;
        return edit_1.Edit.create(opts);
    };
    TitleTextArea.create = function (options) {
        return TitleTextArea.recycleBin.create(options);
    };
    return TitleTextArea;
}(title_value_1.TitleValue));
TitleTextArea.TYPE = "title-text-area";
TitleTextArea.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(TitleTextArea);
exports.TitleTextArea = TitleTextArea;
;
widget_factory_1.WidgetFactory.register(TitleTextArea.TYPE, TitleTextArea.create);
