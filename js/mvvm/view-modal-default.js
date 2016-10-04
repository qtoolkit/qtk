"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pointer = require('json-pointer');
var emitter_1 = require("../emitter");
var Events = require("../events");
var iview_modal_1 = require("./iview-modal");
var ViewModalDefault = (function (_super) {
    __extends(ViewModalDefault, _super);
    function ViewModalDefault(data) {
        _super.call(this);
        this.isCollectionViewModal = false;
        this._commands = {};
        this._converters = {};
        this._data = data || {};
        this._validationRules = {};
        this._ePropChange = Events.PropChangeEvent.create();
    }
    ViewModalDefault.prototype.getBindingMode = function () {
        return iview_modal_1.BindingMode.TWO_WAY;
    };
    ViewModalDefault.prototype.onChange = function (callback) {
        this.on(Events.PROP_DELETE, callback);
        this.on(Events.PROP_CHANGE, callback);
    };
    ViewModalDefault.prototype.offChange = function (callback) {
        this.off(Events.PROP_DELETE, callback);
        this.off(Events.PROP_CHANGE, callback);
    };
    ViewModalDefault.prototype.notifyChange = function (type, path, value, trigger) {
        this.dispatchEvent(this._ePropChange.init(type, { prop: path, value: value, trigger: trigger }));
    };
    ViewModalDefault.prototype.fixPath = function (path) {
        if (path && path.charAt(0) !== '/') {
            return '/' + path;
        }
        else {
            return path;
        }
    };
    ViewModalDefault.prototype.getProp = function (path) {
        return pointer.get(this._data, this.fixPath(path));
    };
    ViewModalDefault.prototype.delProp = function (path, trigger) {
        pointer.remove(this._data, path);
        this.notifyChange(Events.PROP_DELETE, this.fixPath(path), null, trigger);
        return this;
    };
    ViewModalDefault.prototype.setProp = function (path, value, trigger) {
        pointer.set(this._data, path, value);
        this.notifyChange(Events.PROP_CHANGE, this.fixPath(path), value, trigger);
        return this;
    };
    ViewModalDefault.prototype.getCommand = function (name) {
        return this._commands[name];
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
    return ViewModalDefault;
}(emitter_1.Emitter));
exports.ViewModalDefault = ViewModalDefault;
;
