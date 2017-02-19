"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Events = require("../events");
var title_link_1 = require("./title-link");
var title_line_1 = require("./title-line");
var title_edit_1 = require("./title-edit");
var title_label_1 = require("./title-label");
var title_range_1 = require("./title-range");
var title_vector_1 = require("./title-vector");
var widget_1 = require("../controls/widget");
var title_slider_1 = require("./title-slider");
var title_text_area_1 = require("./title-text-area");
var title_check_button_1 = require("./title-check-button");
var widget_factory_1 = require("../controls/widget-factory");
var title_choosable_edit_1 = require("./title-choosable-edit");
var props_desc_1 = require("./props-desc");
var title_combo_box_1 = require("./title-combo-box");
var widget_recyclable_creator_1 = require("../controls/widget-recyclable-creator");
var html_element_1 = require("../html/html-element");
var iview_model_1 = require("../mvvm/iview-model");
var props_desc_2 = require("./props-desc");
var props_desc_3 = require("./props-desc");
var props_desc_4 = require("./props-desc");
/**
 * @class PropertyPage
 * @extends Widget
 * 属性编辑页，包装了各种TitleValue，可以直接通过JSON创建属性页。
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
        /**
         * @property {number} itemH
         * 每一项的高度。
         */
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
        /**
         * @property {number} titleW
         * 属性的标题的宽度。
         */
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
        /**
         * @property {number} valueW
         * 属性的Value的宽度。
         */
        set: function (value) {
            this._valueW = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @method addLabel
     * 增加一个文本控件。
     * @param {string} title 标题。
     * @param {string} label 文本内容。
     * @return {TitleLabel} 返回新创建的TitleLabel控件。
     */
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
    /**
     * @method addCheckButton
     * 增加一个CheckButton控件。
     * @param {string} title 标题。
     * @param {string} value CheckButton的值。
     * @return {TitleCheckButton} 返回新创建的TitleCheckButton控件。
     */
    PropertyPage.prototype.addCheckButton = function (title, value) {
        var itemH = this.itemH;
        var widget = title_check_button_1.TitleCheckButton.create({
            h: itemH,
            name: title,
            titleW: this.titleW,
            valueW: this.valueW
        });
        var valueWidget = widget.valueWidget;
        valueWidget.text = title;
        widget.value = value,
            this.addChild(widget, true);
        return widget;
    };
    /**
     * @method addLink
     * 增加一个超链接控件。
     * @param {string} title 标题。
     * @param {string} value URL。
     * @return {TitleLink} 返回新创建的TitleLink控件。
     */
    PropertyPage.prototype.addLink = function (title, value) {
        var itemH = this.itemH;
        var widget = title_link_1.TitleLink.create({
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
    /**
     * @method addGroupBegin
     * 增加一个分组开始控件。
     * @param {string} title 标题。
     * @return {TitleLine} 返回新创建的TitleLine控件。
     */
    PropertyPage.prototype.addGroupBegin = function (title) {
        var itemH = this.itemH;
        var widget = title_line_1.TitleLine.create({
            h: itemH,
            name: title,
            title: title,
            titleW: this.titleW,
            valueW: this.valueW
        });
        this.addChild(widget, true);
        return widget;
    };
    /**
     * @method addGroupEnd
     * 增加一个分组结束控件。
     * @return {TitleLine} 返回新创建的TitleLine控件。
     */
    PropertyPage.prototype.addGroupEnd = function () {
        var itemH = this.itemH;
        var widget = title_line_1.TitleLine.create({
            h: itemH,
            titleW: this.titleW,
            valueW: this.valueW
        });
        this.addChild(widget, true);
        return widget;
    };
    /**
     * @method addRange
     * 增加一个范围控件。
     * @param {string} title 标题。
     * @param {number} firstValue 起始值
     * @param {number} secondValue 结束值
     * @return {TitleRange} 返回新创建的TitleRange控件。
     */
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
    /**
     * @method addVector2
     * 增加一个二维向量控件。
     * @param {string} title 标题。
     * @param {number} x X分量。
     * @param {number} y Y分量。
     * @param {string} xTitle X分量标题。
     * @param {string} yTitle X分量标题。
     * @return {TitleVector} 返回新创建的TitleVector控件。
     */
    PropertyPage.prototype.addVector2 = function (title, x, y, xTitle, yTitle) {
        var itemH = this.itemH * 2;
        var widget = title_vector_1.TitleVector.create({
            d: 2,
            h: itemH,
            name: title,
            title: title,
            titleW: this.titleW,
            valueW: this.valueW
        });
        var valueWidget = widget.valueWidget;
        valueWidget.set({ xTitle: xTitle, yTitle: yTitle });
        widget.value = { x: x, y: y };
        this.addChild(widget, true);
        return widget;
    };
    /**
     * @method addVector3
     * 增加一个三维向量控件。
     * @param {string} title 标题。
     * @param {number} x X分量。
     * @param {number} y Y分量。
     * @param {number} z Z分量。
     * @param {string} xTitle X分量标题。
     * @param {string} yTitle X分量标题。
     * @param {string} zTitle Z分量标题。
     * @return {TitleVector} 返回新创建的TitleVector控件。
     */
    PropertyPage.prototype.addVector3 = function (title, x, y, z, xTitle, yTitle, zTitle) {
        var itemH = this.itemH * 2;
        var widget = title_vector_1.TitleVector.create({
            d: 3,
            h: itemH,
            name: title,
            title: title,
            titleW: this.titleW,
            valueW: this.valueW
        });
        var valueWidget = widget.valueWidget;
        valueWidget.set({ xTitle: xTitle, yTitle: yTitle, zTitle: zTitle });
        widget.value = { x: x, y: y, z: z };
        this.addChild(widget, true);
        return widget;
    };
    /**
     * @method addVector4
     * 增加一个四维向量控件。
     * @param {string} title 标题。
     * @param {number} x X分量。
     * @param {number} y Y分量。
     * @param {number} z Z分量。
     * @param {number} w W分量。
     * @param {string} xTitle X分量标题。
     * @param {string} yTitle X分量标题。
     * @param {string} zTitle Z分量标题。
     * @param {string} wTitle W分量标题。
     * @return {TitleVector} 返回新创建的TitleVector控件。
     */
    PropertyPage.prototype.addVector4 = function (title, x, y, z, w, xTitle, yTitle, zTitle, wTitle) {
        var itemH = this.itemH * 2;
        var widget = title_vector_1.TitleVector.create({
            d: 4,
            h: itemH,
            name: title,
            title: title,
            titleW: this.titleW,
            valueW: this.valueW
        });
        var valueWidget = widget.valueWidget;
        valueWidget.set({ xTitle: xTitle, yTitle: yTitle, zTitle: zTitle, wTitle: wTitle });
        widget.value = { x: x, y: y, z: z, w: w };
        this.addChild(widget, true);
        return widget;
    };
    /**
     * @method addEdit
     * 增加一个编辑控件。
     * @param {string} title 标题。
     * @param {string} value 编辑器的值。
     * @param {string} inputTips 输入提示。
     * @param {string} inputType 输入类型，"text"为文本，"number"为数字。
     * @param {Function} inputFilter输入过滤器，对输入的值进行过滤。
     * @return {TitleEdit} 返回新创建的TitleEdit控件。
     */
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
    /**
     * @method addColorEdit
     * 增加一个颜色编辑控件。
     * @param {string} title 标题。
     * @param {string} value 编辑器的值。
     * @param {string} inputTips 输入提示。
     * @return {TitleChoosableEdit} 返回新创建的TitleChoosableEdit控件。
     */
    PropertyPage.prototype.addColorEdit = function (title, value, inputTips) {
        var choosableEdit = this.addChoosableEdit(title, value, inputTips);
        choosableEdit.onChoose = function () {
            html_element_1.HtmlElement.showColocPicker(value || "#FFFFFF", function (newValue) {
                choosableEdit.value = newValue;
                console.log("new color" + newValue);
            });
        };
        return choosableEdit;
    };
    /**
     * @method addChoosableEdit
     * 增加一个可选择的编辑控件。
     * @param {string} title 标题。
     * @param {string} value 编辑器的值。
     * @param {string} inputTips 输入提示。
     * @return {TitleChoosableEdit} 返回新创建的TitleChoosableEdit控件。
     */
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
    /**
     * @method addComboBox
     * 增加一个下拉选择控件。
     * @param {string} title 标题。
     * @param {string} value 值。
     * @return {TitleComboBox} 返回新创建的TitleComboBox控件。
     */
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
    /**
     * @method addComboBoxEditable
     * 增加一个可编辑的下拉选择控件。
     * @param {string} title 标题。
     * @param {string} value 值。
     * @return {TitleComboBoxEditable} 返回新创建的TitleComboBoxEditable控件。
     */
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
    /**
     * @method addSlider
     * 增加一个滑块控件。
     * @param {string} title 标题。
     * @param {string} value 值。
     * @return {TitleSlider} 返回新创建的TitleSlider控件。
     */
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
    /**
     * @method addTextArea
     * 增加一个多行编辑器。
     * @param {string} title 标题。
     * @param {string} value 值。
     * @param {number} h高度。
     * @return {TitleTextArea} 返回新创建的TitleTextArea控件。
     */
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
    /**
     * @method findByTitle
     * 通过标题查找指定的子控件。
     * @param {string} title 标题。
     * @return {Widget} 返回子控件或null。
     */
    PropertyPage.prototype.findByTitle = function (title) {
        return this.findChildByName(title);
    };
    PropertyPage.prototype.addWithPropDesc = function (item) {
        var titleValue = null;
        if (item.type === props_desc_3.NumberPropDesc.TYPE) {
            titleValue = this.addEdit(item.name, item.value, item.desc, "number");
        }
        else if (item.type === props_desc_3.TextPropDesc.TYPE) {
            titleValue = this.addEdit(item.name, item.value, item.desc, "text");
        }
        else if (item.type === props_desc_2.ColorPropDesc.TYPE) {
            titleValue = this.addColorEdit(item.name, item.value, item.desc);
        }
        else if (item.type === props_desc_2.ReadonlyTextPropDesc.TYPE) {
            titleValue = this.addLabel(item.name, item.value);
        }
        else if (item.type === props_desc_4.SliderPropDesc.TYPE) {
            titleValue = this.addSlider(item.name, item.value);
        }
        else if (item.type === props_desc_1.LinkPropDesc.TYPE) {
            titleValue = this.addLink(item.name, item.value);
        }
        else if (item.type === props_desc_1.BoolPropDesc.TYPE) {
            titleValue = this.addCheckButton(item.name, item.value);
        }
        else if (item.type === props_desc_1.LinePropDesc.TYPE) {
            if (item.name) {
                titleValue = this.addGroupBegin(item.name);
            }
            else {
                titleValue = this.addGroupEnd();
            }
        }
        else if (item.type === props_desc_4.RangePropDesc.TYPE) {
            var value = item.value || { first: 0, second: 0 };
            titleValue = this.addRange(item.name, value.first, value.second);
        }
        else if (item.type === props_desc_4.Vector2PropDesc.TYPE) {
            var p2 = item;
            var value = item.value || { x: 0, y: 0 };
            titleValue = this.addVector2(item.name, value.x, value.y, p2.xTitle, p2.yTitle);
        }
        else if (item.type === props_desc_4.OptionsPropDesc.TYPE) {
            var value = item.value || { x: 0, y: 0 };
            var propDesc = item;
            titleValue = this.addComboBox(item.name, value);
            if (propDesc.options) {
                var comboBox = titleValue.valueWidget;
                comboBox.optionsJson = propDesc.options;
            }
        }
        else if (item.type === props_desc_4.Vector3PropDesc.TYPE) {
            var p3 = item;
            var value = item.value || { x: 0, y: 0, z: 0 };
            titleValue = this.addVector3(item.name, value.x, value.y, value.z, p3.xTitle, p3.yTitle, p3.zTitle);
        }
        else if (item.type === props_desc_2.Vector4PropDesc.TYPE) {
            var p4 = item;
            var value = item.value || { x: 0, y: 0, z: 0, w: 0 };
            titleValue = this.addVector4(item.name, value.x, value.y, value.z, value.w, p4.xTitle, p4.yTitle, p4.zTitle, p4.wTitle);
        }
        if (titleValue && item.path) {
            var valueWidget = titleValue.valueWidget;
            var bindRule = {
                value: {
                    path: item.path,
                    converter: item.converter,
                    validationRule: item.validationRule,
                    updateTiming: iview_model_1.toUpdateTiming(item.updateTiming)
                }
            };
            valueWidget.dataBindingRule = bindRule;
            if (item.titleW) {
                titleValue.titleW = item.titleW;
            }
            if (item.valueW) {
                titleValue.valueW = item.valueW;
            }
        }
    };
    /**
     * 通过propsDesc初始化。
     */
    PropertyPage.prototype.initWithPropsDesc = function (propsDesc) {
        var _this = this;
        this.removeAllChildren();
        propsDesc.forEach(function (item) {
            _this.addWithPropDesc(item);
        });
        propsDesc.once(Events.CHANGE, function (evt) {
            console.log("reload changed");
            _this.initWithPropsDesc(propsDesc);
        });
        var viewModel = this._viewModel;
        if (viewModel) {
            this.children.forEach(function (child) {
                child.bindData(viewModel);
            });
        }
        this.relayoutChildren();
        this.dispatchEvent(Events.ChangeEvent.create().init(Events.CHANGE, {}));
    };
    /**
     * 通过JSON初始化。
     */
    PropertyPage.prototype.initWithJson = function (json) {
        var propsDesc = props_desc_3.PropsDesc.create(json);
        this.initWithPropsDesc(propsDesc);
    };
    PropertyPage.prototype.onAddChild = function (child) {
        this.recomputeHeight();
    };
    PropertyPage.prototype.onRemoveChild = function (child) {
        this.recomputeHeight();
    };
    /*
     * 根据子控件重新计算本身的高度。
     */
    PropertyPage.prototype.recomputeHeight = function () {
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
        return PropertyPage.rBin.create(options);
    };
    PropertyPage.defProps = Object.assign({}, widget_1.Widget.defProps, { _bp: 5, _itemH: 30, _titleW: "80px", _valueW: "100%" });
    PropertyPage.TYPE = "property-page";
    PropertyPage.rBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(PropertyPage);
    return PropertyPage;
}(widget_1.Widget));
exports.PropertyPage = PropertyPage;
;
widget_factory_1.WidgetFactory.register(PropertyPage.TYPE, PropertyPage.create);
