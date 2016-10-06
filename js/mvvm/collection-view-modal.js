"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Events = require("../events");
var delegate_command_1 = require("./delegate-command");
var ivalidation_rule_1 = require("./ivalidation-rule");
var view_modal_default_1 = require("./view-modal-default");
/**
 * 集合ViewModal。delProp/getProp/setProp操作当前的项。
 */
var CollectionViewModal = (function (_super) {
    __extends(CollectionViewModal, _super);
    function CollectionViewModal(data) {
        _super.call(this, data);
        this.isCollection = true;
        this._collection = data;
        var n = data.length;
        var viewModalItems = [];
        for (var i = 0; i < n; i++) {
            viewModalItems.push(this.createItemViewModal(i));
        }
        this._current = 0;
        this._viewModalItems = viewModalItems;
    }
    CollectionViewModal.prototype.getProp = function (path, converterName) {
        var vm = this.currentViewModal;
        return vm ? vm.getProp(path, converterName) : null;
    };
    CollectionViewModal.prototype.delProp = function (path) {
        var vm = this.currentViewModal;
        return vm ? vm.delProp(path) : this;
    };
    CollectionViewModal.prototype.setProp = function (path, value, converterName, validationRule) {
        var vm = this.currentViewModal;
        return vm ? vm.setProp(path, value, converterName, validationRule) : ivalidation_rule_1.ValidationResult.invalidResult;
    };
    CollectionViewModal.prototype.onItemsChange = function (callback) {
        this.on(Events.ITEM_ADD, callback);
        this.on(Events.ITEM_DELETE, callback);
        return this;
    };
    CollectionViewModal.prototype.offItemsChange = function (callback) {
        this.off(Events.ITEM_ADD, callback);
        this.off(Events.ITEM_DELETE, callback);
        return this;
    };
    CollectionViewModal.prototype.fixState = function () {
        var n = this._collection.length;
        if (this.current >= n) {
            this.current = n - 1;
        }
        this._viewModalItems.forEach(function (item, index) {
            item.index = index;
        });
    };
    CollectionViewModal.prototype.addItem = function (data, index) {
        var n = this._collection.length;
        var index = index < n ? index : n;
        this._collection.splice(index, 0, data);
        this._viewModalItems.splice(index, 0, this.createItemViewModal(index));
        this.fixState();
        this.notifyChange(Events.ITEM_ADD, "/", index);
        return this;
    };
    CollectionViewModal.prototype.removeItem = function (index) {
        this._collection.splice(index, 1);
        this._viewModalItems.splice(index, 1);
        this.fixState();
        this.notifyChange(Events.ITEM_DELETE, "/", index);
        return this;
    };
    Object.defineProperty(CollectionViewModal.prototype, "collection", {
        get: function () {
            return this._collection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionViewModal.prototype, "currentViewModal", {
        get: function () {
            return this._viewModalItems[this._current];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionViewModal.prototype, "total", {
        get: function () {
            return this._viewModalItems.length;
        },
        set: function (value) {
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionViewModal.prototype, "current", {
        get: function () {
            return this._current;
        },
        set: function (value) {
            this._current = Math.min(this._viewModalItems.length - 1, Math.max(0, value));
            this.notifyChange(Events.PROP_CHANGE, "/", value);
        },
        enumerable: true,
        configurable: true
    });
    CollectionViewModal.prototype.getItemViewModal = function (index) {
        var i = (index >= 0 && index < this._viewModalItems.length) ? index : this._current;
        return this._viewModalItems[i];
    };
    CollectionViewModal.prototype.createItemViewModal = function (index) {
        return ItemViewModal.create(this, index);
    };
    CollectionViewModal.create = function (data) {
        var viewModal = new CollectionViewModal(data);
        return viewModal;
    };
    return CollectionViewModal;
}(view_modal_default_1.ViewModalDefault));
exports.CollectionViewModal = CollectionViewModal;
;
/**
 * 表示集合ViewModal中的单项ViewModal。
 *
 */
var ItemViewModal = (function (_super) {
    __extends(ItemViewModal, _super);
    function ItemViewModal(collectionViewModal, index) {
        _super.call(this, collectionViewModal.collection[index]);
        this.isCollection = false;
        this.index = index;
        this.collectionViewModal = collectionViewModal;
        this.initCommands();
    }
    ItemViewModal.prototype.getCommand = function (name) {
        var cmd = _super.prototype.getCommand.call(this, name);
        if (!cmd) {
            cmd = this.collectionViewModal.getCommand(name);
        }
        return cmd;
    };
    ItemViewModal.prototype.canExecute = function (name) {
        if (_super.prototype.canExecute.call(this, name)) {
            return true;
        }
        else {
            return this.collectionViewModal.canExecute(name);
        }
    };
    ItemViewModal.prototype.execCommand = function (name, args) {
        var cmd = _super.prototype.getCommand.call(this, name);
        if (cmd) {
            return _super.prototype.execCommand.call(this, name, args);
        }
        else {
            if (args) {
                args.$index = this.index;
            }
            else {
                args = { $index: this.index };
            }
            return this.collectionViewModal.execCommand(name, args);
        }
    };
    ItemViewModal.prototype.convert = function (converterName, value) {
        return this.collectionViewModal.convert(converterName, value);
    };
    ItemViewModal.prototype.convertBack = function (converterName, value) {
        return this.collectionViewModal.convertBack(converterName, value);
    };
    ItemViewModal.prototype.isValueValid = function (ruleName, value) {
        return this.collectionViewModal.isValueValid(ruleName, value);
    };
    ItemViewModal.prototype.getValueConverter = function (name) {
        return this.collectionViewModal.getValueConverter(name);
    };
    ItemViewModal.prototype.getValidationRule = function (name) {
        return this.collectionViewModal.getValidationRule(name);
    };
    ItemViewModal.prototype.isCurrent = function () {
        return this.collectionViewModal.current === this.index;
    };
    ItemViewModal.prototype.notifyChange = function (type, path, value) {
        if (this.isCurrent) {
            this.collectionViewModal.notifyChange(type, path, value);
        }
        _super.prototype.notifyChange.call(this, type, path, value);
    };
    ItemViewModal.prototype.initCommands = function () {
        var _this = this;
        var collectionViewModal = this.collectionViewModal;
        this.registerCommand("activate", delegate_command_1.DelegateCommand.create(function (args) {
            collectionViewModal.current = _this.index;
        }));
        this.registerCommand("remove", delegate_command_1.DelegateCommand.create(function (args) {
            collectionViewModal.removeItem(collectionViewModal.current);
        }));
    };
    ItemViewModal.create = function (collectionViewModal, index) {
        return new ItemViewModal(collectionViewModal, index);
    };
    return ItemViewModal;
}(view_modal_default_1.ViewModalDefault));
exports.ItemViewModal = ItemViewModal;
