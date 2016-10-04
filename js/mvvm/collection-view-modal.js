"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var view_modal_default_1 = require("./view-modal-default");
var ItemViewModal = (function (_super) {
    __extends(ItemViewModal, _super);
    function ItemViewModal(collectionViewModal, index) {
        _super.call(this, collectionViewModal.collection[index]);
        this.isCollectionViewModal = false;
        this.index = index;
        this.collectionViewModal = collectionViewModal;
    }
    ItemViewModal.prototype.getCommand = function (name) {
        return this.collectionViewModal.getCommand(name);
    };
    ItemViewModal.prototype.execCommand = function (name, args) {
        if (args) {
            args.$index = this.index;
        }
        else {
            args = { $index: this.index };
        }
        return this.collectionViewModal.execCommand(name, args);
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
    ItemViewModal.create = function (collectionViewModal, index) {
        return new ItemViewModal(collectionViewModal, index);
    };
    return ItemViewModal;
}(view_modal_default_1.ViewModalDefault));
exports.ItemViewModal = ItemViewModal;
var CollectionViewModal = (function (_super) {
    __extends(CollectionViewModal, _super);
    function CollectionViewModal(data) {
        _super.call(this, data);
        this.isCollectionViewModal = true;
        this._collection = data;
        var n = data.length;
        var viewModalItems = [];
        for (var i = 0; i < n; i++) {
            viewModalItems.push(this.createItemViewModal(i));
        }
        this._current = 0;
        this._viewModalItems = viewModalItems;
    }
    CollectionViewModal.prototype.getProp = function (path) {
        return this.currentViewModal.getProp(path);
    };
    CollectionViewModal.prototype.delProp = function (path, trigger) {
        return this.currentViewModal.delProp(path, trigger);
    };
    CollectionViewModal.prototype.setProp = function (path, value, trigger) {
        this.currentViewModal.setProp(path, value, trigger);
        return this;
    };
    CollectionViewModal.prototype.addItem = function (data) {
        return this;
    };
    CollectionViewModal.prototype.removeItem = function (index) {
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
            this._current = Math.min(this._viewModalItems.length, Math.max(0, value));
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
