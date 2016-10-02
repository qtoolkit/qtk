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
var ViewModal = (function (_super) {
    __extends(ViewModal, _super);
    function ViewModal(data) {
        _super.call(this);
        this._commands = {};
        this._converters = {};
        this._data = data || {};
        this._validationRules = {};
        this._ePropChange = Events.PropChangeEvent.create();
    }
    ViewModal.prototype.getBindingMode = function () {
        return iview_modal_1.BindingMode.TWO_WAY;
    };
    ViewModal.prototype.onChange = function (callback) {
        this.on(Events.PROP_DELETE, callback);
        this.on(Events.PROP_CHANGE, callback);
    };
    ViewModal.prototype.offChange = function (callback) {
        this.off(Events.PROP_DELETE, callback);
        this.off(Events.PROP_CHANGE, callback);
    };
    ViewModal.prototype.notifyChange = function (type, path, value, trigger) {
        this.dispatchEvent(this._ePropChange.init(type, { prop: path, value: value, trigger: trigger }));
    };
    ViewModal.prototype.fixPath = function (path) {
        if (path && path.charAt(0) !== '/') {
            return '/' + path;
        }
        else {
            return path;
        }
    };
    ViewModal.prototype.getProp = function (path) {
        return pointer.get(this._data, this.fixPath(path));
    };
    ViewModal.prototype.delProp = function (path, trigger) {
        pointer.remove(this._data, path);
        this.notifyChange(Events.PROP_DELETE, this.fixPath(path), null, trigger);
        return this;
    };
    ViewModal.prototype.setProp = function (path, value, trigger) {
        pointer.set(this._data, path, value);
        this.notifyChange(Events.PROP_CHANGE, this.fixPath(path), value, trigger);
        return this;
    };
    ViewModal.prototype.getCommand = function (name) {
        return this._commands[name];
    };
    ViewModal.prototype.registerCommand = function (name, cmd) {
        this._commands[name] = cmd;
        return this;
    };
    ViewModal.prototype.unregisterCommand = function (name, cmd) {
        this._commands[name] = null;
        return this;
    };
    ViewModal.prototype.getValueConverter = function (name) {
        return this._converters[name];
    };
    ViewModal.prototype.registerValueConverter = function (name, converter) {
        this._converters[name] = converter;
        return this;
    };
    ViewModal.prototype.unregisterValueConverter = function (name, converter) {
        this._converters[name] = null;
        return this;
    };
    ViewModal.prototype.getValidationRule = function (name) {
        return this._validationRules[name];
    };
    ViewModal.prototype.registerValidationRule = function (name, validationRule) {
        this._validationRules[name] = validationRule;
        return this;
    };
    ViewModal.prototype.unregisterValidationRule = function (name, validationRule) {
        this._validationRules[name] = null;
        return this;
    };
    ViewModal.prototype.createCollectionViewModal = function (path) {
        return null;
    };
    ViewModal.create = function (data) {
        var viewModal = new ViewModal(data);
        return viewModal;
    };
    return ViewModal;
}(emitter_1.Emitter));
exports.ViewModal = ViewModal;
;
