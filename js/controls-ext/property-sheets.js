"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Events = require("../events");
var scroll_view_1 = require("../controls/scroll-view");
var widget_factory_1 = require("../controls/widget-factory");
var title_content_1 = require("../controls/title-content");
var widget_recyclable_creator_1 = require("../controls/widget-recyclable-creator");
var collapsable_title_1 = require("../controls/collapsable-title");
var TitlePage = (function (_super) {
    __extends(TitlePage, _super);
    function TitlePage() {
        _super.apply(this, arguments);
    }
    TitlePage.prototype.onReset = function () {
        _super.prototype.onReset.call(this);
    };
    TitlePage.prototype.relayoutChildren = function () {
        var rect = _super.prototype.relayoutChildren.call(this);
        if (!this._collapsed) {
            this.contentH = this.contentWidget.h;
        }
        this.reComputeH();
        return rect;
    };
    TitlePage.create = function (options) {
        return TitlePage.rb.create(options);
    };
    TitlePage.TYPE = "title-page";
    TitlePage.rb = widget_recyclable_creator_1.WidgetRecyclableCreator.create(TitlePage);
    return TitlePage;
}(title_content_1.TitleContent));
exports.TitlePage = TitlePage;
;
widget_factory_1.WidgetFactory.register(TitlePage.TYPE, TitlePage.create);
/**
 * @class PropertySheets
 * @extends Widget
 * 管理多个页面，每个页面可以展开或折叠。
 */
var PropertySheets = (function (_super) {
    __extends(PropertySheets, _super);
    function PropertySheets() {
        _super.call(this, PropertySheets.TYPE);
    }
    Object.defineProperty(PropertySheets.prototype, "titleH", {
        get: function () {
            return this._titleHeight;
        },
        /**
         * titleH 标题控件的高度。
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
     * @param contentH 内容控件。
     * @returns 返回新增加的TitleContent。
     */
    PropertySheets.prototype.addPage = function (title, contentWidget) {
        var _this = this;
        var me = this;
        var titleWidget = collapsable_title_1.CollapsableTitle.create({ text: title });
        var titleContent = TitlePage.create({
            collapsed: true,
            titleWidget: titleWidget,
            contentWidget: contentWidget,
            titleH: this.titleH
        });
        titleWidget.onClickTrigger = function (collapsed) {
            titleContent.collapsed = !titleContent.collapsed;
            me.relayoutChildren();
        };
        this.addChild(titleContent);
        contentWidget.on(Events.CHANGE, function (evt) {
            _this.relayoutChildren();
        });
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
        this.contentH = this.computeDesireContentHeight();
        var r = this.getLayoutRect();
        var w = r.w;
        var x = r.x;
        var y = r.y;
        this.children.forEach(function (child) {
            child.moveResizeTo(x, y, w, 0, 0);
            child.relayoutChildren();
            y += child.h;
        });
        this.contentW = r.w + this.leftPadding + this.rightPadding;
        this.contentH = y + this.bottomPadding + 10;
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
        return PropertySheets.rBin.create(options);
    };
    PropertySheets.TYPE = "property-sheets";
    PropertySheets.rBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(PropertySheets);
    return PropertySheets;
}(scroll_view_1.ScrollView));
exports.PropertySheets = PropertySheets;
;
widget_factory_1.WidgetFactory.register(PropertySheets.TYPE, PropertySheets.create);
