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
var group_1 = require("./group");
var widget_1 = require("./widget");
var image_tile_1 = require("../image-tile");
var widget_recyclable_creator_1 = require("./widget-recyclable-creator");
var linear_layouter_1 = require("../layouters/linear-layouter");
/**
 * @class ToolBarItem
 * @extends Widget
 * 工具条上的图标按钮。一般不需直接创建，而是调用ToolBar的addItem函数。
 */
var ToolBarItem = (function (_super) {
    __extends(ToolBarItem, _super);
    function ToolBarItem(type) {
        return _super.call(this, ToolBarItem.TYPE) || this;
    }
    ToolBarItem.prototype.drawImage = function (ctx, style) {
        var icon = this.enable ? this.normalIcon : this.disableIcon;
        if (icon) {
            var r = this.getFgImageRect(style);
            icon.draw(ctx, image_tile_1.ImageDrawType.ICON, r.x, r.y, r.w, r.h);
        }
        return this;
    };
    ToolBarItem.prototype.onCreated = function () {
        _super.prototype.onCreated.call(this);
        if (this.normalIconURL && this.disableIconURL) {
            this.normalIcon = image_tile_1.ImageTile.create(this.normalIconURL);
            this.disableIcon = image_tile_1.ImageTile.create(this.disableIconURL);
        }
    };
    ToolBarItem.prototype.getDefProps = function () {
        return ToolBarItem.defProps;
    };
    ToolBarItem.create = function (options) {
        return ToolBarItem.recycleBin.create(options);
    };
    ;
    return ToolBarItem;
}(widget_1.Widget));
ToolBarItem.defProps = Object.assign({}, widget_1.Widget.defProps, { normalIconURL: null, disableIconURL: null });
ToolBarItem.TYPE = "tool-bar-item";
ToolBarItem.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(ToolBarItem);
exports.ToolBarItem = ToolBarItem;
/**
 * @class ToolBar
 * @extends Widget
 * 工具条。一般显示在主菜单下方，为用户提供一种便捷的操作。
 */
var ToolBar = (function (_super) {
    __extends(ToolBar, _super);
    function ToolBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolBar.prototype.onInit = function () {
        _super.prototype.onInit.call(this);
        this.childrenLayouter = linear_layouter_1.LinearLayouter.createH(0);
    };
    /**
     * @method addSpacer
     * 向ToolBar中增加一个占位符。
     * @param {number} width 宽度。
     *
     * return {Widget} 返回增加的控件。
     */
    ToolBar.prototype.addSpacer = function (width) {
        var size = this.h - 2;
        var item = group_1.Group.create({
            layoutParam: linear_layouter_1.LinearLayouterParam.create(width, size, 1)
        });
        return this.addChild(item);
    };
    /**
     * @method addItem
     * 向ToolBar中增加一个按钮。
     * @param {string} cmd 命令名称。
     * @param {string} text 文字。
     * @param {string} tips 提示。
     * @param {normalIconURL} 图标URL。
     * @param {disableIconURL} 禁用时的图标URL。
     *
     * return {Widget} 返回增加的控件。
     */
    ToolBar.prototype.addItem = function (cmd, text, tips, normalIconURL, disableIconURL) {
        var size = this.h - 2;
        var item = ToolBarItem.create({
            tips: tips,
            normalIconURL: normalIconURL,
            disableIconURL: disableIconURL,
            layoutParam: linear_layouter_1.LinearLayouterParam.create(size, size, 1)
        });
        item.set({ dataBindingRule: { click: { command: cmd } } });
        return this.addChild(item);
    };
    ToolBar.create = function (options) {
        return ToolBar.recycleBin.create(options);
    };
    ;
    return ToolBar;
}(widget_1.Widget));
ToolBar.TYPE = "tool-bar";
ToolBar.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(ToolBar);
exports.ToolBar = ToolBar;
