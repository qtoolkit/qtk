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
var utils_1 = require("../utils");
var emitter_1 = require("../emitter");
var image_tile_1 = require("../image-tile");
/**
 * TreeItem对应的数据信息。
 */
var TreeItemData = (function (_super) {
    __extends(TreeItemData, _super);
    function TreeItemData(text, iconURL, userData) {
        var _this = _super.call(this) || this;
        _this.userData = userData;
        _this.text = text;
        if (iconURL) {
            _this.icon = image_tile_1.ImageTile.create(iconURL, function (evt) {
            });
        }
        else {
            _this.icon = null;
        }
        _this.children = [];
        return _this;
    }
    /**
     * 从子节点数组中删除指定的子节点。
     * @param data 子节点。
     * @param destroy 是否销毁该子节点。
     * @returns 成功返回true失败返回false。
     */
    TreeItemData.prototype.removeChild = function (data, destroy) {
        if (utils_1.aRemove(this.children, data)) {
            data.parent = null;
            if (destroy) {
                data.dispose();
            }
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * 增加一个子节点。
     * @param text 文本
     * @param icon 图标
     * @param data 数据
     * @returns 成功返回新增的子节点，失败返回null。
     */
    TreeItemData.prototype.addChild = function (text, icon, userData) {
        var itemData = TreeItemData.create(text, icon, userData);
        this.children.push(itemData);
        itemData.parent = this;
        return itemData;
    };
    TreeItemData.prototype.dispose = function () {
        this.userData = null;
        this.text = null;
        this.icon = null;
        this.parent = null;
        this.children.forEach(function (child) {
            child.dispose();
        });
        this.children = null;
    };
    TreeItemData.prototype.reset = function () {
        this.userData = null;
        this.text = null;
        this.icon = null;
        this.children = [];
        this.parent = null;
        return this;
    };
    TreeItemData.create = function (text, icon, userData) {
        return new TreeItemData(text, icon, userData);
    };
    return TreeItemData;
}(emitter_1.Emitter));
exports.TreeItemData = TreeItemData;
