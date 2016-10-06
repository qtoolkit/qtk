"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pointer = require('json-pointer');
var emitter_1 = require("../emitter");
var Events = require("../events");
var ivalidation_rule_1 = require("./ivalidation-rule");
var iview_modal_1 = require("./iview-modal");
var ViewModalDefault = (function (_super) {
    __extends(ViewModalDefault, _super);
    function ViewModalDefault(data) {
        _super.call(this);
        this._commands = {};
        this._converters = {};
        this._data = data || {};
        this._validationRules = {};
        this.isCollection = false;
        this._ePropChange = Events.PropChangeEvent.create();
    }
    ViewModalDefault.prototype.getBindingMode = function () {
        return iview_modal_1.BindingMode.TWO_WAY;
    };
    ViewModalDefault.prototype.onChange = function (callback) {
        this.on(Events.PROP_DELETE, callback);
        this.on(Events.PROP_CHANGE, callback);
        return this;
    };
    ViewModalDefault.prototype.offChange = function (callback) {
        this.off(Events.PROP_DELETE, callback);
        this.off(Events.PROP_CHANGE, callback);
        return this;
    };
    ViewModalDefault.prototype.notifyChange = function (type, path, value) {
        this.dispatchEvent(this._ePropChange.init(type, { prop: path, value: value }));
    };
    ViewModalDefault.prototype.fixPath = function (path) {
        if (path && path.charAt(0) !== '/') {
            return '/' + path;
        }
        else {
            return path;
        }
    };
    ViewModalDefault.prototype.getProp = function (path, converterName) {
        var value = pointer.get(this._data, this.fixPath(path));
        return this.convert(converterName, value);
    };
    ViewModalDefault.prototype.delProp = function (path) {
        pointer.remove(this._data, path);
        this.notifyChange(Events.PROP_DELETE, this.fixPath(path), null);
        return this;
    };
    ViewModalDefault.prototype.setProp = function (path, v, converterName, validationRule) {
        var value = this.convertBack(converterName, v);
        var validateResult = this.isValueValid(validationRule, value);
        if (!validateResult.code) {
            pointer.set(this._data, path, value);
            this.notifyChange(Events.PROP_CHANGE, this.fixPath(path), value);
        }
        else {
            console.log("invalid value");
        }
        return validateResult;
        ;
    };
    ViewModalDefault.prototype.getCommand = function (name) {
        return this._commands[name];
    };
    ViewModalDefault.prototype.canExecute = function (name) {
        var ret = false;
        var cmd = this.getCommand(name);
        if (cmd && cmd.canExecute()) {
            ret = true;
        }
        return ret;
    };
    ViewModalDefault.prototype.execCommand = function (name, args) {
        var ret = false;
        var cmd = this.getCommand(name);
        if (cmd && cmd.canExecute()) {
            ret = cmd.execute(args);
        }
        return ret;
    };
    ViewModalDefault.prototype.registerCommand = function (name, cmd) {
        this._commands[name] = cmd;
        return this;
    };
    ViewModalDefault.prototype.unregisterCommand = function (name, cmd) {
        this._commands[name] = null;
        return this;
    };
    ViewModalDefault.prototype.getValueConverter = function (name) {
        return this._converters[name];
    };
    ViewModalDefault.prototype.registerValueConverter = function (name, converter) {
        this._converters[name] = converter;
        return this;
    };
    ViewModalDefault.prototype.unregisterValueConverter = function (name, converter) {
        this._converters[name] = null;
        return this;
    };
    ViewModalDefault.prototype.convert = function (converterName, value) {
        var converter = converterName ? this.getValueConverter(converterName) : null;
        return converter ? converter.convert(value) : value;
    };
    ViewModalDefault.prototype.convertBack = function (converterName, value) {
        var converter = converterName ? this.getValueConverter(converterName) : null;
        return converter ? converter.convertBack(value) : value;
    };
    ViewModalDefault.prototype.getValidationRule = function (name) {
        return this._validationRules[name];
    };
    ViewModalDefault.prototype.registerValidationRule = function (name, validationRule) {
        this._validationRules[name] = validationRule;
        return this;
    };
    ViewModalDefault.prototype.unregisterValidationRule = function (name, validationRule) {
        this._validationRules[name] = null;
        return this;
    };
    ViewModalDefault.prototype.isValueValid = function (ruleName, value) {
        var validationRule = ruleName ? this.getValidationRule(ruleName) : null;
        return validationRule ? validationRule.validate(value) : ivalidation_rule_1.ValidationResult.validResult;
    };
    return ViewModalDefault;
}(emitter_1.Emitter));
exports.ViewModalDefault = ViewModalDefault;
;
