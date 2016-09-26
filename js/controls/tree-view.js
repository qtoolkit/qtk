"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tree_item_1 = require("./tree-item");
var list_view_1 = require("./list-view");
var tree_item_data_1 = require("./tree-item-data");
var widget_factory_1 = require("./widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
/**
 * 树形视图。
 */
var TreeView = (function (_super) {
    __extends(TreeView, _super);
    function TreeView() {
        _super.call(this);
        this.type = TreeView.TYPE;
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
        return Math.max(this.w, w + this.itemHeight * 2);
    };
    TreeView.prototype.resetChilren = function () {
        this.children.forEach(function (child) {
            child.deinit();
            child.dispose();
        });
        this.children.length = 0;
        return this;
    };
    TreeView.prototype.reset = function (type) {
        _super.prototype.reset.call(this, type);
        this._rootData = tree_item_data_1.TreeItemData.create("root", null, null);
        this.scrollerOptions.scrollingX = true;
        return this;
    };
    TreeView.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this._rootData = null;
    };
    TreeView.create = function (options) {
        return TreeView.recycleBinTreeView.create().reset(TreeView.TYPE).set(options);
    };
    TreeView.TYPE = "tree-view";
    TreeView.recycleBinTreeView = new recyclable_creator_1.RecyclableCreator(function () { return new TreeView(); });
    return TreeView;
}(list_view_1.ListView));
exports.TreeView = TreeView;
;
widget_factory_1.WidgetFactory.register(TreeView.TYPE, TreeView.create);
