"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scroll_view_1 = require("../controls/scroll-view");
var widget_factory_1 = require("../controls/widget-factory");
var title_content_1 = require("../controls/title-content");
var recyclable_creator_1 = require("../recyclable-creator");
var collapsable_title_1 = require("../controls/collapsable-title");
/**
 * 管理多个页面，每个页面可以展开或折叠。
 */
var PropertySheets = (function (_super) {
    __extends(PropertySheets, _super);
    function PropertySheets() {
        _super.call(this, PropertySheets.TYPE);
    }
    Object.defineProperty(PropertySheets.prototype, "titleHeight", {
        get: function () {
            return this._titleHeight;
        },
        /**
         * titleHeight 标题控件的高度。
         */
        set: function (value) {
            this._titleHeight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertySheets.prototype, "childrenLayouter", {
        get: function () {
            return this._childrenLayouter;
        },
        set: function (layouter) {
            console.log("set childrenLayouter not work for me.");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 增加一个页面。
     * @param title 标题文本。
     * @param contentHeight 内容控件。
     * @returns 返回新增加的TitleContent。
     */
    PropertySheets.prototype.addPage = function (title, contentWidget) {
        var me = this;
        var titleWidget = collapsable_title_1.CollapsableTitle.create({ text: title });
        var titleContent = title_content_1.TitleContent.create({
            collapsed: true,
            titleWidget: titleWidget,
            contentWidget: contentWidget,
            titleHeight: this.titleHeight
        });
        titleWidget.onClickTrigger = function (collapsed) {
            titleContent.collapsed = !titleContent.collapsed;
            me.relayoutChildren();
        };
        this.addChild(titleContent);
        return titleContent;
    };
    PropertySheets.prototype.computeDesireContentHeight = function () {
        var h = 0;
        this.children.forEach(function (child) {
            if (child.visible) {
                h += child.h;
            }
        });
        return h;
    };
    PropertySheets.prototype.relayoutChildren = function () {
        this.contentHeight = this.computeDesireContentHeight();
        var r = this.getLayoutRect();
        var w = r.w;
        var x = r.x;
        var y = r.y;
        this.children.forEach(function (child) {
            child.moveResizeTo(x, y, w, 0, 0);
            child.relayoutChildren();
            y += child.h;
        });
        this.contentWidth = r.w + this.leftPadding + this.rightPadding;
        this.contentHeight = y + this.bottomPadding + 10;
        return r;
    };
    PropertySheets.prototype.onReset = function () {
        _super.prototype.onReset.call(this);
        this._titleHeight = 30;
        this.dragToScroll = true;
        this.slideToScroll = true;
        this.scrollerOptions.scrollingX = false;
    };
    PropertySheets.create = function (options) {
        return PropertySheets.rBin.create().reset(PropertySheets.TYPE, options);
    };
    PropertySheets.TYPE = "property-sheets";
    PropertySheets.rBin = new recyclable_creator_1.RecyclableCreator(function () { return new PropertySheets(); });
    return PropertySheets;
}(scroll_view_1.ScrollView));
exports.PropertySheets = PropertySheets;
;
widget_factory_1.WidgetFactory.register(PropertySheets.TYPE, PropertySheets.create);
