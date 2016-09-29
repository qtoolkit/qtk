"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var check_button_1 = require("./check-button");
var widget_factory_1 = require("./widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
var RadioButton = (function (_super) {
    __extends(RadioButton, _super);
    function RadioButton(type) {
        _super.call(this, type || RadioButton.TYPE);
    }
    Object.defineProperty(RadioButton.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this.setValue(value, true, true);
        },
        enumerable: true,
        configurable: true
    });
    RadioButton.create = function (options) {
        return RadioButton.r.create().reset(RadioButton.TYPE, options);
    };
    RadioButton.TYPE = "radio-button";
    RadioButton.r = new recyclable_creator_1.RecyclableCreator(function () { return new RadioButton(); });
    return RadioButton;
}(check_button_1.CheckButton));
exports.RadioButton = RadioButton;
;
widget_factory_1.WidgetFactory.register(RadioButton.TYPE, RadioButton.create);
