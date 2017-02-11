"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var page_1 = require("./page");
var widget_factory_1 = require("./widget-factory");
var widget_recyclable_creator_1 = require("./widget-recyclable-creator");
/**
 * @class TabPage
 * @extends Widget
 * 标签控件上的标签页。它只是一个普通容器控件，需要自己向其中添加子控件。
 */
var TabPage = (function (_super) {
    __extends(TabPage, _super);
    function TabPage() {
        _super.call(this, TabPage.TYPE);
    }
    TabPage.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.tabButton = null;
    };
    TabPage.create = function (options) {
        return TabPage.r.create(options);
    };
    TabPage.TYPE = "page";
    TabPage.r = widget_recyclable_creator_1.WidgetRecyclableCreator.create(TabPage);
    return TabPage;
}(page_1.Page));
exports.TabPage = TabPage;
;
widget_factory_1.WidgetFactory.register(TabPage.TYPE, TabPage.create);
