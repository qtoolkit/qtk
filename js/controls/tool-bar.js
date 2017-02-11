"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var group_1 = require("./group");
var widget_1 = require("./widget");
var image_tile_1 = require("../image-tile");
var widget_recyclable_creator_1 = require("./widget-recyclable-creator");
var linear_layouter_1 = require("../layouters/linear-layouter");
var ToolBarItem = (function (_super) {
    __extends(ToolBarItem, _super);
    function ToolBarItem(type) {
        _super.call(this, ToolBarItem.TYPE);
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
    ToolBarItem.defProps = Object.assign({}, widget_1.Widget.defProps, { normalIconURL: null, disableIconURL: null });
    ToolBarItem.TYPE = "tool-bar-item";
    ToolBarItem.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(ToolBarItem);
    return ToolBarItem;
}(widget_1.Widget));
exports.ToolBarItem = ToolBarItem;
var ToolBar = (function (_super) {
    __extends(ToolBar, _super);
    function ToolBar() {
        _super.apply(this, arguments);
    }
    ToolBar.prototype.onInit = function () {
        _super.prototype.onInit.call(this);
        this.childrenLayouter = linear_layouter_1.LinearLayouter.createH(0);
    };
    ToolBar.prototype.addSpacer = function (width) {
        var size = this.h - 2;
        var item = group_1.Group.create({
            layoutParam: linear_layouter_1.LinearLayouterParam.create(width, size, 1)
        });
        this.addChild(item);
    };
    ToolBar.prototype.addItem = function (cmd, text, tips, normalIconURL, disableIconURL) {
        var size = this.h - 2;
        var item = ToolBarItem.create({
            tips: tips,
            normalIconURL: normalIconURL,
            disableIconURL: disableIconURL,
            layoutParam: linear_layouter_1.LinearLayouterParam.create(size, size, 1)
        });
        item.set({ dataBindingRule: { click: { command: cmd } } });
        this.addChild(item);
    };
    ToolBar.create = function (options) {
        return ToolBar.recycleBin.create(options);
    };
    ;
    ToolBar.TYPE = "tool-bar";
    ToolBar.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(ToolBar);
    return ToolBar;
}(widget_1.Widget));
exports.ToolBar = ToolBar;
