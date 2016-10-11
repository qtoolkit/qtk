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
var props_desc_1 = require("./props-desc");
var props_desc_2 = require("./props-desc");
var title_combo_box_1 = require("./title-combo-box");
var title_choosable_edit_1 = require("./title-choosable-edit");
var widget_factory_1 = require("../controls/widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
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
            h: itemH,
            name: title,
            title: title,
            titleW: this.titleW,
            valueW: this.valueW
        });
        widget.value = value,
            this.addChild(widget, true);
        return widget;
    };
    PropertyPage.prototype.addRange = function (title, firstValue, secondValue) {
        var itemH = this.itemH;
        var widget = title_range_1.TitleRange.create({
            h: itemH,
            name: title,
            title: title,
            titleW: this.titleW,
            valueW: this.valueW
        });
        widget.value = { first: firstValue, second: secondValue };
        this.addChild(widget, true);
        return widget;
    };
    PropertyPage.prototype.addVector2 = function (title, x, y) {
        var itemH = this.itemH * 2;
        var widget = title_vector_1.TitleVector.create({
            d: 2,
            h: itemH,
            name: title,
            title: title,
            titleW: this.titleW,
            valueW: this.valueW
        });
        widget.value = { x: x, y: y };
        this.addChild(widget, true);
        return widget;
    };
    PropertyPage.prototype.addVector3 = function (title, x, y, z) {
        var itemH = this.itemH * 2;
        var widget = title_vector_1.TitleVector.create({
            d: 3,
            h: itemH,
            name: title,
            title: title,
            titleW: this.titleW,
            valueW: this.valueW
        });
        widget.value = { x: x, y: y, z: z };
        this.addChild(widget, true);
        return widget;
    };
    PropertyPage.prototype.addEdit = function (title, value, inputTips, inputType, inputFilter) {
        var itemH = this.itemH;
        var valueW = inputType === "number" ? "50%" : this.valueW;
        var widget = title_edit_1.TitleEdit.create({
            h: itemH,
            name: title,
            title: title,
            valueW: valueW,
            titleW: this.titleW,
            inputType: inputType,
            inputTips: inputTips,
            inputFilter: inputFilter
        });
        widget.value = value,
            this.addChild(widget, true);
        return widget;
    };
    PropertyPage.prototype.addChoosableEdit = function (title, value, inputTips) {
        var itemH = this.itemH;
        var widget = title_choosable_edit_1.TitleChoosableEdit.create({
            h: itemH,
            name: title,
            title: title,
            inputTips: inputTips,
            titleW: this.titleW,
            valueW: this.valueW
        });
        widget.value = value,
            this.addChild(widget, true);
        return widget;
    };
    PropertyPage.prototype.addComboBox = function (title, value) {
        var itemH = this.itemH;
        var widget = title_combo_box_1.TitleComboBox.create({
            h: itemH,
            name: title,
            title: title,
            titleW: this.titleW,
            valueW: this.valueW
        });
        widget.value = value,
            this.addChild(widget, true);
        return widget;
    };
    PropertyPage.prototype.addComboBoxEditable = function (title, value) {
        var itemH = this.itemH;
        var widget = title_combo_box_1.TitleComboBoxEditable.create({
            h: itemH,
            name: title,
            title: title,
            value: value,
            titleW: this.titleW,
            valueW: this.valueW
        });
        widget.value = value,
            this.addChild(widget, true);
        return widget;
    };
    PropertyPage.prototype.addSlider = function (title, value) {
        var itemH = this.itemH;
        var widget = title_slider_1.TitleSlider.create({
            h: itemH,
            name: title,
            title: title,
            titleW: this.titleW,
            valueW: this.valueW
        });
        widget.value = value,
            this.addChild(widget, true);
        return widget;
    };
    PropertyPage.prototype.addTextArea = function (title, value, h) {
        var itemH = h || (this.itemH * 4);
        var widget = title_text_area_1.TitleTextArea.create({
            h: itemH,
            name: title,
            title: title,
            titleW: this.titleW,
            valueW: this.valueW
        });
        widget.value = value,
            this.addChild(widget, true);
        return widget;
    };
    PropertyPage.prototype.findByTitle = function (title) {
        return this.findChildByName(title);
    };
    PropertyPage.prototype.addWithPropDesc = function (item) {
        var titleValue = null;
        if (item.type === props_desc_1.NumberPropDesc.TYPE) {
            titleValue = this.addEdit(item.name, item.value, item.desc, "number");
        }
        else if (item.type === props_desc_1.TextPropDesc.TYPE) {
            titleValue = this.addEdit(item.name, item.value, item.desc, "text");
        }
        else if (item.type === props_desc_1.ReadonlyTextPropDesc.TYPE) {
            titleValue = this.addLabel(item.name, item.value);
        }
        else if (item.type === props_desc_2.SliderPropDesc.TYPE) {
            titleValue = this.addSlider(item.name, item.value);
        }
        else if (item.type === props_desc_2.RangePropDesc.TYPE) {
            var value = item.value || { first: 0, second: 0 };
            titleValue = this.addRange(item.name, value.first, value.second);
        }
        else if (item.type === props_desc_2.Vector2PropDesc.TYPE) {
            var value = item.value || { x: 0, y: 0 };
            titleValue = this.addVector2(item.name, value.x, value.y);
        }
        else if (item.type === props_desc_2.OptionsPropDesc.TYPE) {
            var value = item.value || { x: 0, y: 0 };
            var propDesc = item;
            titleValue = this.addComboBox(item.name, value);
            if (propDesc.options) {
                var comboBox = titleValue.valueWidget;
                comboBox.optionsJson = propDesc.options;
            }
        }
        else if (item.type === props_desc_2.Vector3PropDesc.TYPE) {
            var value = item.value || { x: 0, y: 0, z: 0 };
            titleValue = this.addVector3(item.name, value.x, value.y, value.z);
        }
        if (titleValue && item.path) {
            var valueWidget = titleValue.valueWidget;
            var bindRule = {
                value: {
                    path: item.path,
                    converter: item.converter,
                    validationRule: item.validationRule
                }
            };
            valueWidget.dataBindingRule = bindRule;
        }
    };
    PropertyPage.prototype.initWithPropsDesc = function (json) {
        var _this = this;
        var propsDesc = props_desc_1.PropsDesc.create(json);
        propsDesc.forEach(function (item) {
            _this.addWithPropDesc(item);
        });
    };
    PropertyPage.prototype.onAddChild = function (child) {
        this.reComputeH();
    };
    PropertyPage.prototype.onRemoveChild = function (child) {
        this.reComputeH();
    };
    PropertyPage.prototype.reComputeH = function () {
        var h = this.topPadding + this.bottomPadding;
        this.children.forEach(function (child) {
            h += child.h;
        });
        this.h = h;
        return this;
    };
    PropertyPage.prototype.relayoutChildren = function () {
        var r = this.getLayoutRect();
        var y = r.y;
        this.children.forEach(function (child) {
            child.moveResizeTo(r.x, y, r.w, child.h, 0);
            child.relayoutChildren();
            y += child.h;
        });
        this.h = this.bottomPadding + y;
        this.requestRedraw();
        return r;
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
