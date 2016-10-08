"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var title_edit_1 = require("./title-edit");
var title_label_1 = require("./title-label");
var title_range_1 = require("./title-range");
var title_vector_1 = require("./title-vector");
var widget_1 = require("../controls/widget");
var title_slider_1 = require("./title-slider");
var title_text_area_1 = require("./title-text-area");
var title_combo_box_1 = require("./title-combo-box");
var title_choosable_edit_1 = require("./title-choosable-edit");
var widget_factory_1 = require("../controls/widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
var linear_layouter_1 = require('../layouters/linear-layouter');
/**
 * 属性编辑页，包装了各种TitleValue。
 */
var PropertyPage = (function (_super) {
    __extends(PropertyPage, _super);
    function PropertyPage() {
        _super.call(this, PropertyPage.TYPE);
    }
    Object.defineProperty(PropertyPage.prototype, "itemH", {
        get: function () {
            return this._itemH;
        },
        set: function (value) {
            this._itemH = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyPage.prototype, "titleW", {
        get: function () {
            return this._titleW;
        },
        set: function (value) {
            this._titleW = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyPage.prototype, "valueW", {
        get: function () {
            return this._valueW;
        },
        set: function (value) {
            this._valueW = value;
        },
        enumerable: true,
        configurable: true
    });
    PropertyPage.prototype.addLabel = function (title, value) {
        var itemH = this.itemH;
        var widget = title_label_1.TitleLabel.create({
            name: title,
            title: title,
            titleW: this.titleW,
            valueW: this.valueW,
            layoutParam: linear_layouter_1.LinearLayouterParam.create({ h: itemH })
        });
        widget.value = value,
            this.addChild(widget, true);
        return widget;
    };
    PropertyPage.prototype.addRange = function (title, firstValue, secondValue) {
        var itemH = this.itemH;
        var widget = title_range_1.TitleRange.create({
            name: title,
            title: title,
            titleW: this.titleW,
            valueW: this.valueW,
            layoutParam: linear_layouter_1.LinearLayouterParam.create({ h: itemH })
        });
        widget.value = { first: firstValue, second: secondValue };
        this.addChild(widget, true);
        return widget;
    };
    PropertyPage.prototype.addVector2 = function (title, x, y) {
        var itemH = this.itemH;
        var widget = title_vector_1.TitleVector.create({
            d: 2,
            name: title,
            title: title,
            titleW: this.titleW,
            valueW: this.valueW,
            layoutParam: linear_layouter_1.LinearLayouterParam.create({ h: itemH })
        });
        widget.value = { x: x, y: y };
        this.addChild(widget, true);
        return widget;
    };
    PropertyPage.prototype.addVector3 = function (title, x, y, z) {
        var itemH = this.itemH;
        var widget = title_vector_1.TitleVector.create({
            d: 3,
            name: title,
            title: title,
            titleW: this.titleW,
            valueW: this.valueW,
            layoutParam: linear_layouter_1.LinearLayouterParam.create({ h: itemH })
        });
        widget.value = { x: x, y: y, z: z };
        this.addChild(widget, true);
        return widget;
    };
    PropertyPage.prototype.addEdit = function (title, value, inputTips, inputType, inputFilter) {
        var itemH = this.itemH;
        var valueW = inputType === "number" ? "50%" : this.valueW;
        var widget = title_edit_1.TitleEdit.create({
            name: title,
            title: title,
            valueW: valueW,
            titleW: this.titleW,
            inputType: inputType,
            inputTips: inputTips,
            inputFilter: inputFilter,
            layoutParam: linear_layouter_1.LinearLayouterParam.create({ h: itemH })
        });
        widget.value = value,
            this.addChild(widget, true);
        return widget;
    };
    PropertyPage.prototype.addChoosableEdit = function (title, value, inputTips) {
        var itemH = this.itemH;
        var widget = title_choosable_edit_1.TitleChoosableEdit.create({
            name: title,
            title: title,
            inputTips: inputTips,
            titleW: this.titleW,
            valueW: this.valueW,
            layoutParam: linear_layouter_1.LinearLayouterParam.create({ h: itemH })
        });
        widget.value = value,
            this.addChild(widget, true);
        return widget;
    };
    PropertyPage.prototype.addComboBox = function (title, value) {
        var itemH = this.itemH;
        var widget = title_combo_box_1.TitleComboBox.create({
            name: title,
            title: title,
            titleW: this.titleW,
            valueW: this.valueW,
            layoutParam: linear_layouter_1.LinearLayouterParam.create({ h: itemH })
        });
        widget.value = value,
            this.addChild(widget, true);
        return widget;
    };
    PropertyPage.prototype.addComboBoxEditable = function (title, value) {
        var itemH = this.itemH;
        var widget = title_combo_box_1.TitleComboBoxEditable.create({
            name: title,
            title: title,
            value: value,
            titleW: this.titleW,
            valueW: this.valueW,
            layoutParam: linear_layouter_1.LinearLayouterParam.create({ h: itemH })
        });
        widget.value = value,
            this.addChild(widget, true);
        return widget;
    };
    PropertyPage.prototype.addSlider = function (title, value) {
        var itemH = this.itemH;
        var widget = title_slider_1.TitleSlider.create({
            name: title,
            title: title,
            titleW: this.titleW,
            valueW: this.valueW,
            layoutParam: linear_layouter_1.LinearLayouterParam.create({ h: itemH })
        });
        widget.value = value,
            this.addChild(widget, true);
        return widget;
    };
    PropertyPage.prototype.addTextArea = function (title, value, h) {
        var itemH = h || (this.itemH * 4);
        var widget = title_text_area_1.TitleTextArea.create({
            name: title,
            title: title,
            titleW: this.titleW,
            valueW: this.valueW,
            layoutParam: linear_layouter_1.LinearLayouterParam.create({ h: itemH })
        });
        widget.value = value,
            this.addChild(widget, true);
        return widget;
    };
    PropertyPage.prototype.findByTitle = function (title) {
        return this.findChildByName(title);
    };
    PropertyPage.prototype.onReset = function () {
        _super.prototype.onReset.call(this);
        this.childrenLayouter = linear_layouter_1.LinearLayouter.createV({ spacing: 5 });
    };
    PropertyPage.prototype.getDefProps = function () {
        return PropertyPage.defProps;
    };
    PropertyPage.create = function (options) {
        return PropertyPage.rBin.create().reset(PropertyPage.TYPE, options);
    };
    PropertyPage.defProps = Object.assign({}, widget_1.Widget.defProps, { _itemH: 30, _titleW: "60px", _valueW: "100%" });
    PropertyPage.TYPE = "property-page";
    PropertyPage.rBin = new recyclable_creator_1.RecyclableCreator(function () { return new PropertyPage(); });
    return PropertyPage;
}(widget_1.Widget));
exports.PropertyPage = PropertyPage;
;
widget_factory_1.WidgetFactory.register(PropertyPage.TYPE, PropertyPage.create);
