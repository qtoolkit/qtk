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
        this.filters = {};
        this.comparators = {};
        this._current = 0;
        this._collection = data;
        this.needUpdateViewModalItems = true;
    }
    Object.defineProperty(CollectionViewModal.prototype, "collection", {
        /**
         * 原始的数据。
         */
        get: function () {
            return this._collection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionViewModal.prototype, "current", {
        get: function () {
            return this._current;
        },
        /**
         * 当前数据项的序号。
         */
        set: function (value) {
            var viewModalItems = this.viewModalItems;
            this._current = Math.min(viewModalItems.length - 1, Math.max(0, value));
            this.notifyChange(Events.PROP_CHANGE, "/", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionViewModal.prototype, "total", {
        get: function () {
            return this.viewModalItems.length;
        },
        /**
         * 过滤之后总的项数。
         */
        set: function (value) {
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionViewModal.prototype, "viewModalItems", {
        /**
         * 子项目的ViewModal
         */
        get: function () {
            if (this.needUpdateViewModalItems) {
                this.updateViewModalItems();
            }
            return this._viewModalItems;
        },
        enumerable: true,
        configurable: true
    });
    /*
     * 对于属性操作，都是针对当前项的ViewModal的操作。
     */
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
    Object.defineProperty(CollectionViewModal.prototype, "currentViewModal", {
        /**
         * 当前项的ViewModal
         */
        get: function () {
            return this.viewModalItems[this._current];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 注册子项的增加删除的变化事件。
     */
    CollectionViewModal.prototype.onItemsChange = function (callback) {
        this.on(Events.ITEMS_CHANGE, callback);
        return this;
    };
    /**
     * 注销子项的增加删除的变化事件。
     */
    CollectionViewModal.prototype.offItemsChange = function (callback) {
        this.off(Events.ITEMS_CHANGE, callback);
        return this;
    };
    /**
     * 增加一个数据项。
     */
    CollectionViewModal.prototype.addItem = function (data, index) {
        var n = this._collection.length;
        var index = index < n ? index : n;
        this._collection.splice(index, 0, data);
        this.updateViewModalItems(true);
        return this;
    };
    /**
     * 删除一个数据项。
     */
    CollectionViewModal.prototype.removeItem = function (index) {
        this._collection.splice(index, 1);
        this.updateViewModalItems(true);
        return this;
    };
    /**
     * 获取指定序号的子ViewModal
     */
    CollectionViewModal.prototype.getItemViewModal = function (index) {
        var i = (index >= 0 && index < this.total) ? index : this._current;
        return this.viewModalItems[i];
    };
    CollectionViewModal.prototype.getItemData = function (index) {
        var i = (index >= 0 && index < this.total) ? index : this._current;
        return this._filteredSortedCollection[i];
    };
    /*
     * 获取过滤并排序之后的集合。
     */
    CollectionViewModal.prototype.getFilteredSortedCollection = function () {
        var collection = this._collection;
        var filteredSortedCollection = null;
        var filter = this.filters && this.filter ? this.filters[this.filter] : null;
        if (filter) {
            filteredSortedCollection = collection.filter(function (item) {
                return filter.check(item);
            });
        }
        else {
            filteredSortedCollection = collection.slice();
        }
        var comparator = this.comparators && this.comparator ? this.comparators[this.comparator] : null;
        if (comparator) {
            filteredSortedCollection.sort(function (a, b) {
                return comparator.compare(a, b);
            });
        }
        this._filteredSortedCollection = filteredSortedCollection;
        return filteredSortedCollection;
    };
    /**
     * 获取排序过滤集合中的序数对应于原始集合中的序数。
     */
    CollectionViewModal.prototype.getRawIndexOf = function (index) {
        if ((this.comparators && this.comparator) || (this.filters && this.filter)) {
            var obj = this._filteredSortedCollection[index];
            return this.collection.indexOf(obj);
        }
        else {
            return index;
        }
    };
    /*
     * 创建一个子ViewModal。
     */
    CollectionViewModal.prototype.createItemViewModal = function (index, data) {
        return ItemViewModal.create(this, index, data);
    };
    /*
     * 重新创建ViewModalItems。
     */
    CollectionViewModal.prototype.updateViewModalItems = function (force) {
        var _this = this;
        if (force || this.needUpdateViewModalItems) {
            this.needUpdateViewModalItems = false;
            console.time("filter and sort");
            var collection = this.getFilteredSortedCollection();
            var n = collection.length;
            if (this.current >= n) {
                this.current = n - 1;
            }
            if (this._viewModalItems) {
                this._viewModalItems.forEach(function (item) {
                    item.dispose();
                });
            }
            this._viewModalItems = collection.map(function (data, i) {
                return _this.createItemViewModal(i, data);
            });
            console.timeEnd("filter and sort");
            setTimeout(function (evt) {
                console.time("notify ITEMS_CHANGE");
                _this.notifyChange(Events.ITEMS_CHANGE, "/", null);
                console.timeEnd("notify ITEMS_CHANGE");
            }, 0);
        }
    };
    /**
     * 注册过滤器。
     */
    CollectionViewModal.prototype.registerFilter = function (name, filter) {
        this.filters[name] = filter;
        return this;
    };
    /**
     * 注销过滤器。
     */
    CollectionViewModal.prototype.unregisterFilter = function (name) {
        delete this.filters[name];
        return this;
    };
    Object.defineProperty(CollectionViewModal.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        /**
         * 当前的过滤器器。
         */
        set: function (name) {
            this._filter = name;
            this.needUpdateViewModalItems = true;
            this.updateViewModalItems();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 注册排序用的比较器。
     */
    CollectionViewModal.prototype.registerComparator = function (name, comparator) {
        this.comparators[name] = comparator;
        return this;
    };
    /**
     * 注销排序用的比较器。
     */
    CollectionViewModal.prototype.unregisterComparator = function (name) {
        delete this.comparators[name];
        return this;
    };
    Object.defineProperty(CollectionViewModal.prototype, "comparator", {
        get: function () {
            return this._comparator;
        },
        /**
         * 设置当前的比较器。
         */
        set: function (name) {
            this._comparator = name;
            this.needUpdateViewModalItems = true;
            this.updateViewModalItems();
        },
        enumerable: true,
        configurable: true
    });
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
    function ItemViewModal() {
        _super.call(this, null);
        this.isCollection = false;
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
        this.registerCommand("activate", delegate_command_1.DelegateCommand.create(function (args) {
            _this.collectionViewModal.current = _this.index;
        }));
        this.registerCommand("remove", delegate_command_1.DelegateCommand.create(function (args) {
            _this.collectionViewModal.removeItem(_this.collectionViewModal.getRawIndexOf(_this.index));
        }));
    };
    ItemViewModal.prototype.init = function (collectionViewModal, index, data) {
        this.collectionViewModal = collectionViewModal;
        this.index = index;
        this.data = data;
        return this;
    };
    ItemViewModal.prototype.dispose = function () {
        ItemViewModal.cache.push(this);
    };
    ItemViewModal.create = function (collectionViewModal, index, data) {
        var vm = ItemViewModal.cache.length > 0 ? ItemViewModal.cache.pop() : (new ItemViewModal());
        return vm.init(collectionViewModal, index, data);
    };
    ItemViewModal.cache = [];
    return ItemViewModal;
}(view_modal_default_1.ViewModalDefault));
exports.ItemViewModal = ItemViewModal;
