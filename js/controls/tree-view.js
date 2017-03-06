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
var tree_item_1 = require("./tree-item");
var list_view_1 = require("./list-view");
var tree_item_data_1 = require("./tree-item-data");
var widget_factory_1 = require("./widget-factory");
var widget_recyclable_creator_1 = require("./widget-recyclable-creator");
/**
 * 树形视图。
 */
var TreeView = (function (_super) {
    __extends(TreeView, _super);
    function TreeView() {
        var _this = _super.call(this) || this;
        _this.type = TreeView.TYPE;
        return _this;
    }
    Object.defineProperty(TreeView.prototype, "multiSelectable", {
        get: function () {
            return this._multiSelectable;
        },
        set: function (value) {
            this._multiSelectable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeView.prototype, "indention", {
        /**
         * 每一层缩减的距离。
         */
        get: function () {
            return this._indention || 30;
        },
        set: function (value) {
            this._indention = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 选中一个子项。
     */
    TreeView.prototype.setItemSelected = function (item, selected, exclude) {
        if (!this.multiSelectable || exclude) {
            this.children.forEach(function (child) {
                if (child === item) {
                    child.selected = selected;
                }
                else {
                    if (child.selected) {
                        child.selected = false;
                    }
                }
            });
        }
        else {
            item.selected = selected;
        }
        this.requestRedraw();
        return this;
    };
    TreeView.prototype.addItem = function (parentData, text, data, image) {
        parentData = parentData ? parentData : this._rootData;
        var itemData = parentData.addChild(text, image, data);
        this.reload();
        return itemData;
    };
    TreeView.prototype.removeAllItems = function () {
        this._rootData.children.length = 0;
        this.reload();
    };
    TreeView.prototype.removeItem = function (item, destroy) {
        var ret = item.parent.removeChild(item, destroy);
        this.reload();
        return ret;
    };
    TreeView.prototype.doLoad = function (data, parentItem, level) {
        var _this = this;
        var item = tree_item_1.TreeItem.create();
        var isLeaf = !data.children || !data.children.length;
        data.treeItem = item;
        item.set({ level: level, indention: this.indention, data: data, parentItem: parentItem });
        this.addChild(item, true);
        if (!isLeaf) {
            data.children.forEach(function (iter) {
                _this.doLoad(iter, item, level + 1);
            });
        }
    };
    TreeView.prototype.reload = function () {
        var _this = this;
        this.resetChilren();
        this._rootData.children.forEach(function (data) {
            _this.doLoad(data, null, 0);
        });
        this.relayoutChildren();
    };
    TreeView.prototype.loadData = function (data) {
        if (data.text === "%root%") {
            this._rootData = data;
        }
        else {
            this._rootData.children.length = 0;
            this._rootData.children.push(data);
        }
        this.reload();
        return this;
    };
    TreeView.prototype.getLayoutWidth = function () {
        var w = 0;
        this.children.forEach(function (child) {
            var desireWidth = child.desireWidth;
            if (desireWidth > w) {
                w = desireWidth;
            }
        });
        return Math.max(this.w, w + this.itemH * 2);
    };
    TreeView.prototype.resetChilren = function () {
        this.children.forEach(function (child) {
            child.deinit();
            child.dispose();
        });
        this.children.length = 0;
        return this;
    };
    TreeView.prototype.onReset = function () {
        _super.prototype.onReset.call(this);
        this._rootData = tree_item_data_1.TreeItemData.create("root", null, null);
        this.scrollerOptions.scrollingX = true;
    };
    TreeView.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this._rootData = null;
    };
    TreeView.create = function (options) {
        return TreeView.recycleBinTreeView.create(options);
    };
    return TreeView;
}(list_view_1.ListView));
TreeView.TYPE = "tree-view";
TreeView.recycleBinTreeView = widget_recyclable_creator_1.WidgetRecyclableCreator.create(TreeView);
exports.TreeView = TreeView;
;
widget_factory_1.WidgetFactory.register(TreeView.TYPE, TreeView.create);
