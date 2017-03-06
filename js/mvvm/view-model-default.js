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
var pointer = require('json-pointer');
var emitter_1 = require("../emitter");
var Events = require("../events");
var ivalidation_rule_1 = require("./ivalidation-rule");
var iview_model_1 = require("./iview-model");
var ViewModelDefault = (function (_super) {
    __extends(ViewModelDefault, _super);
    function ViewModelDefault(data) {
        var _this = _super.call(this) || this;
        _this._commands = {};
        _this._converters = {};
        _this._data = data || {};
        _this._validationRules = {};
        _this.isCollection = false;
        _this._bindingMode = iview_model_1.BindingMode.TWO_WAY;
        _this._ePropChange = Events.PropChangeEvent.create();
        return _this;
    }
    Object.defineProperty(ViewModelDefault.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this.setData(value, true);
        },
        enumerable: true,
        configurable: true
    });
    ViewModelDefault.prototype.setData = function (value, notify) {
        this._data = value;
        if (notify) {
            this.notifyChange(Events.PROP_CHANGE, "/", null);
        }
        return this;
    };
    Object.defineProperty(ViewModelDefault.prototype, "bindingMode", {
        get: function () {
            return this._bindingMode;
        },
        set: function (value) {
            this._bindingMode = value;
        },
        enumerable: true,
        configurable: true
    });
    ViewModelDefault.prototype.onChange = function (callback) {
        this.on(Events.PROP_DELETE, callback);
        this.on(Events.PROP_CHANGE, callback);
        return this;
    };
    ViewModelDefault.prototype.offChange = function (callback) {
        this.off(Events.PROP_DELETE, callback);
        this.off(Events.PROP_CHANGE, callback);
        return this;
    };
    ViewModelDefault.prototype.notifyChange = function (type, path, value) {
        this.dispatchEvent(this._ePropChange.init(type, { prop: path, value: value }));
    };
    ViewModelDefault.prototype.fixPath = function (path) {
        if (path && path.charAt(0) !== '/') {
            return '/' + path;
        }
        else {
            return path;
        }
    };
    ViewModelDefault.prototype.getProp = function (path, converterName) {
        var value = pointer.get(this._data, this.fixPath(path));
        return this.convert(converterName, value);
    };
    ViewModelDefault.prototype.delProp = function (path) {
        pointer.remove(this._data, path);
        this.notifyChange(Events.PROP_DELETE, this.fixPath(path), null);
        return this;
    };
    ViewModelDefault.prototype.setPropEx = function (source, value, oldValue) {
        var path = source.path;
        var converterName = source.converter;
        var validationRule = source.validationRule;
        return this.setProp(path, value, converterName, validationRule);
    };
    ViewModelDefault.prototype.setProp = function (path, v, converterName, validationRule) {
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
    ViewModelDefault.prototype.getCommand = function (name) {
        return this._commands[name];
    };
    ViewModelDefault.prototype.canExecute = function (name) {
        var ret = false;
        var cmd = this.getCommand(name);
        if (cmd && cmd.canExecute()) {
            ret = true;
        }
        return ret;
    };
    ViewModelDefault.prototype.execCommand = function (name, args) {
        var ret = false;
        var cmd = this.getCommand(name);
        if (cmd && cmd.canExecute()) {
            ret = cmd.execute(args);
        }
        return ret;
    };
    ViewModelDefault.prototype.registerCommand = function (name, cmd) {
        this._commands[name] = cmd;
        return this;
    };
    ViewModelDefault.prototype.unregisterCommand = function (name) {
        this._commands[name] = null;
        return this;
    };
    ViewModelDefault.prototype.getValueConverter = function (name) {
        return this._converters[name];
    };
    ViewModelDefault.prototype.registerValueConverter = function (name, converter) {
        this._converters[name] = converter;
        return this;
    };
    ViewModelDefault.prototype.unregisterValueConverter = function (name) {
        this._converters[name] = null;
        return this;
    };
    ViewModelDefault.prototype.convert = function (converterName, value) {
        var converter = converterName ? this.getValueConverter(converterName) : null;
        return converter ? converter.convert(value) : value;
    };
    ViewModelDefault.prototype.convertBack = function (converterName, value) {
        var converter = converterName ? this.getValueConverter(converterName) : null;
        return converter ? converter.convertBack(value) : value;
    };
    ViewModelDefault.prototype.getValidationRule = function (name) {
        return this._validationRules[name];
    };
    ViewModelDefault.prototype.registerValidationRule = function (name, validationRule) {
        this._validationRules[name] = validationRule;
        return this;
    };
    ViewModelDefault.prototype.unregisterValidationRule = function (name) {
        this._validationRules[name] = null;
        return this;
    };
    ViewModelDefault.prototype.isValueValid = function (ruleName, value) {
        var validationRule = ruleName ? this.getValidationRule(ruleName) : null;
        return validationRule ? validationRule.validate(value) : ivalidation_rule_1.ValidationResult.validResult;
    };
    return ViewModelDefault;
}(emitter_1.Emitter));
exports.ViewModelDefault = ViewModelDefault;
;
