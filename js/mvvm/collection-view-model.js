"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Events = require("../events");
var delegate_command_1 = require("./delegate-command");
var ivalidation_rule_1 = require("./ivalidation-rule");
var iview_model_1 = require("./iview-model");
var view_model_default_1 = require("./view-model-default");
/**
 * 集合ViewModel。delProp/getProp/setProp操作当前的项。
 */
var CollectionViewModel = (function (_super) {
    __extends(CollectionViewModel, _super);
    function CollectionViewModel(data) {
        _super.call(this, data);
        this.isCollection = true;
        this.filters = {};
        this.comparators = {};
        this._current = 0;
        this._collection = data;
        this.needUpdateViewModelItems = true;
    }
    Object.defineProperty(CollectionViewModel.prototype, "collection", {
        /**
         * 原始的数据。
         */
        get: function () {
            return this._collection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionViewModel.prototype, "current", {
        get: function () {
            return this._current;
        },
        /**
         * 当前数据项的序号。
         */
        set: function (value) {
            var viewModelItems = this.viewModelItems;
            this._current = Math.min(viewModelItems.length - 1, Math.max(0, value));
            this.notifyChange(Events.PROP_CHANGE, "/", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionViewModel.prototype, "total", {
        get: function () {
            return this.viewModelItems.length;
        },
        /**
         * 过滤之后总的项数。
         */
        set: function (value) {
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionViewModel.prototype, "viewModelItems", {
        /**
         * 子项目的ViewModel
         */
        get: function () {
            if (this.needUpdateViewModelItems) {
                this.updateViewModelItems();
            }
            return this._viewModelItems;
        },
        enumerable: true,
        configurable: true
    });
    /*
     * 对于属性操作，都是针对当前项的ViewModel的操作。
     */
    CollectionViewModel.prototype.getProp = function (path, converterName) {
        var vm = this.currentViewModel;
        return vm ? vm.getProp(path, converterName) : null;
    };
    CollectionViewModel.prototype.delProp = function (path) {
        var vm = this.currentViewModel;
        return vm ? vm.delProp(path) : this;
    };
    CollectionViewModel.prototype.setProp = function (path, value, converterName, validationRule) {
        var vm = this.currentViewModel;
        return vm ? vm.setProp(path, value, converterName, validationRule) : ivalidation_rule_1.ValidationResult.invalidResult;
    };
    Object.defineProperty(CollectionViewModel.prototype, "currentViewModel", {
        /**
         * 当前项的ViewModel
         */
        get: function () {
            return this.viewModelItems[this._current];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 注册子项的增加删除的变化事件。
     */
    CollectionViewModel.prototype.onItemsChange = function (callback) {
        this.on(Events.ITEMS_CHANGE, callback);
        return this;
    };
    /**
     * 注销子项的增加删除的变化事件。
     */
    CollectionViewModel.prototype.offItemsChange = function (callback) {
        this.off(Events.ITEMS_CHANGE, callback);
        return this;
    };
    /**
     * 增加一个数据项。
     */
    CollectionViewModel.prototype.addItem = function (data, index) {
        var n = this._collection.length;
        var index = index < n ? index : n;
        this._collection.splice(index, 0, data);
        this.updateViewModelItems(true);
        return this;
    };
    /**
     * 删除一个数据项。
     */
    CollectionViewModel.prototype.removeItem = function (index) {
        this._collection.splice(index, 1);
        this.updateViewModelItems(true);
        return this;
    };
    /**
     * 删除指定规则的数据项。
     */
    CollectionViewModel.prototype.removeItems = function (func) {
        var _this = this;
        var collection = this._collection.filter(function (item, index, arr) {
            return !func(item, index, arr);
        });
        this._collection.length = 0;
        collection.forEach(function (item) {
            _this._collection.push(item);
        });
        this.updateViewModelItems(true);
        return this;
    };
    /**
     * 是否存在指定条件的项。
     */
    CollectionViewModel.prototype.hasItems = function (func, filtered) {
        var arr = filtered ? this._filteredSortedCollection : this._collection;
        return arr.some(func);
    };
    /**
     * 获取指定序号的子ViewModel
     */
    CollectionViewModel.prototype.getItemViewModel = function (index) {
        var i = (index >= 0 && index < this.total) ? index : this._current;
        return this.viewModelItems[i];
    };
    CollectionViewModel.prototype.getItemData = function (index) {
        var i = (index >= 0 && index < this.total) ? index : this._current;
        return this._filteredSortedCollection[i];
    };
    /*
     * 获取过滤并排序之后的集合。
     */
    CollectionViewModel.prototype.getFilteredSortedCollection = function () {
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
    CollectionViewModel.prototype.getRawIndexOf = function (index) {
        if ((this.comparators && this.comparator) || (this.filters && this.filter)) {
            var obj = this._filteredSortedCollection[index];
            return this.collection.indexOf(obj);
        }
        else {
            return index;
        }
    };
    /*
     * 创建一个子ViewModel。
     */
    CollectionViewModel.prototype.createItemViewModel = function (index, data) {
        return ItemViewModel.create(this, index, data);
    };
    /*
     * 重新创建ViewModelItems。
     */
    CollectionViewModel.prototype.updateViewModelItems = function (force) {
        var _this = this;
        if (force || this.needUpdateViewModelItems) {
            this.needUpdateViewModelItems = false;
            console.time("filter and sort");
            var collection = this.getFilteredSortedCollection();
            var n = collection.length;
            if (this.current >= n) {
                this._current = n - 1;
            }
            if (this._viewModelItems) {
                this._viewModelItems.forEach(function (item) {
                    item.dispose();
                });
            }
            this._viewModelItems = collection.map(function (data, i) {
                return _this.createItemViewModel(i, data);
            });
            console.timeEnd("filter and sort");
            console.time("notify ITEMS_CHANGE");
            this.notifyChange(Events.PROP_CHANGE, "/", null);
            this.notifyChange(Events.ITEMS_CHANGE, "/", null);
            console.timeEnd("notify ITEMS_CHANGE");
        }
    };
    /**
     * 注册过滤器。
     */
    CollectionViewModel.prototype.registerFilter = function (name, filter) {
        this.filters[name] = filter;
        return this;
    };
    /**
     * 注销过滤器。
     */
    CollectionViewModel.prototype.unregisterFilter = function (name) {
        delete this.filters[name];
        return this;
    };
    Object.defineProperty(CollectionViewModel.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        /**
         * 当前的过滤器器。
         */
        set: function (name) {
            this._filter = name;
            this.needUpdateViewModelItems = true;
            this.updateViewModelItems();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 注册排序用的比较器。
     */
    CollectionViewModel.prototype.registerComparator = function (name, comparator) {
        this.comparators[name] = comparator;
        return this;
    };
    /**
     * 注销排序用的比较器。
     */
    CollectionViewModel.prototype.unregisterComparator = function (name) {
        delete this.comparators[name];
        return this;
    };
    Object.defineProperty(CollectionViewModel.prototype, "comparator", {
        get: function () {
            return this._comparator;
        },
        /**
         * 设置当前的比较器。
         */
        set: function (name) {
            this._comparator = name;
            this.needUpdateViewModelItems = true;
            this.updateViewModelItems();
        },
        enumerable: true,
        configurable: true
    });
    CollectionViewModel.create = function (data) {
        var viewModel = new CollectionViewModel(data);
        return viewModel;
    };
    return CollectionViewModel;
}(view_model_default_1.ViewModelDefault));
exports.CollectionViewModel = CollectionViewModel;
;
/**
 * 表示集合ViewModel中的单项ViewModel。
 *
 */
var ItemViewModel = (function (_super) {
    __extends(ItemViewModel, _super);
    function ItemViewModel() {
        _super.call(this, null);
        this.isCollection = false;
        this.initCommands();
    }
    ItemViewModel.prototype.getCommand = function (name) {
        var cmd = _super.prototype.getCommand.call(this, name);
        if (!cmd) {
            cmd = this.collectionViewModel.getCommand(name);
        }
        return cmd;
    };
    ItemViewModel.prototype.canExecute = function (name) {
        if (_super.prototype.canExecute.call(this, name)) {
            return true;
        }
        else {
            return this.collectionViewModel.canExecute(name);
        }
    };
    ItemViewModel.prototype.execCommand = function (name, args) {
        var cmd = _super.prototype.getCommand.call(this, name);
        if (cmd) {
            return _super.prototype.execCommand.call(this, name, args);
        }
        else {
            if (args == undefined) {
                args = this.index;
            }
            return this.collectionViewModel.execCommand(name, args);
        }
    };
    ItemViewModel.prototype.convert = function (converterName, value) {
        return this.collectionViewModel.convert(converterName, value);
    };
    ItemViewModel.prototype.convertBack = function (converterName, value) {
        return this.collectionViewModel.convertBack(converterName, value);
    };
    ItemViewModel.prototype.isValueValid = function (ruleName, value) {
        return this.collectionViewModel.isValueValid(ruleName, value);
    };
    ItemViewModel.prototype.getValueConverter = function (name) {
        return this.collectionViewModel.getValueConverter(name);
    };
    ItemViewModel.prototype.getValidationRule = function (name) {
        return this.collectionViewModel.getValidationRule(name);
    };
    ItemViewModel.prototype.isCurrent = function () {
        return this.collectionViewModel.current === this.index;
    };
    ItemViewModel.prototype.notifyChange = function (type, path, value) {
        var collectionViewModel = this.collectionViewModel;
        if (collectionViewModel.bindingMode === iview_model_1.BindingMode.ONE_WAY) {
            return;
        }
        if (collectionViewModel.comparator || collectionViewModel.filter) {
            collectionViewModel.updateViewModelItems(true);
        }
        else {
            if (this.isCurrent) {
                collectionViewModel.notifyChange(type, path, value);
            }
            _super.prototype.notifyChange.call(this, type, path, value);
        }
    };
    ItemViewModel.prototype.initCommands = function () {
        var _this = this;
        this.registerCommand("activate", delegate_command_1.DelegateCommand.create(function (args) {
            _this.collectionViewModel.current = _this.index;
        }));
        this.registerCommand("remove", delegate_command_1.DelegateCommand.create(function (args) {
            _this.collectionViewModel.removeItem(_this.collectionViewModel.getRawIndexOf(_this.index));
        }));
    };
    ItemViewModel.prototype.init = function (collectionViewModel, index, data) {
        this.collectionViewModel = collectionViewModel;
        this.index = index;
        this.setData(data, false);
        this.bindingMode = collectionViewModel.bindingMode;
        return this;
    };
    ItemViewModel.prototype.dispose = function () {
        this.index = -1;
        this.removeAllListeners();
        this.collectionViewModel = null;
        ItemViewModel.cache.push(this);
    };
    ItemViewModel.create = function (collectionViewModel, index, data) {
        var vm = ItemViewModel.cache.length > 0 ? ItemViewModel.cache.pop() : (new ItemViewModel());
        return vm.init(collectionViewModel, index, data);
    };
    ItemViewModel.cache = [];
    return ItemViewModel;
}(view_model_default_1.ViewModelDefault));
exports.ItemViewModel = ItemViewModel;
