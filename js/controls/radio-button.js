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
var check_button_1 = require("./check-button");
var widget_factory_1 = require("./widget-factory");
var widget_recyclable_creator_1 = require("./widget-recyclable-creator");
/**
 * 单选按钮。同一个父控件中，只有一个单选按钮被勾选。被勾选时value为true，否则为false。
 */
var RadioButton = (function (_super) {
    __extends(RadioButton, _super);
    function RadioButton(type) {
        return _super.call(this, type || RadioButton.TYPE) || this;
    }
    Object.defineProperty(RadioButton.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this.setValue(value, false, true);
        },
        enumerable: true,
        configurable: true
    });
    RadioButton.create = function (options) {
        return RadioButton.r.create(options);
    };
    return RadioButton;
}(check_button_1.CheckButton));
RadioButton.TYPE = "radio-button";
RadioButton.r = widget_recyclable_creator_1.WidgetRecyclableCreator.create(RadioButton);
exports.RadioButton = RadioButton;
;
widget_factory_1.WidgetFactory.register(RadioButton.TYPE, RadioButton.create);
