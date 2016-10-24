"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var widget_1 = require("./widget");
var widget_factory_1 = require("./widget-factory");
var widget_recyclable_creator_1 = require("./widget-recyclable-creator");
var title_content_1 = require("./title-content");
var collapsable_title_1 = require("./collapsable-title");
/**
 * 手风琴控件。它有多个页面，在每一时刻只展开一个。
 */
var Accordion = (function (_super) {
    __extends(Accordion, _super);
    function Accordion() {
        _super.call(this, Accordion.TYPE);
    }
    Object.defineProperty(Accordion.prototype, "titleH", {
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
    /**
     * 增加一个页面。
     * @param title 标题文本。
     * @param contentH 内容控件。
     * @returns 返回新增加的TitleContent。
     */
    Accordion.prototype.addPage = function (title, contentWidget) {
        var me = this;
        var titleWidget = collapsable_title_1.CollapsableTitle.create({ text: title });
        var titleContent = title_content_1.TitleContent.create({
            collapsed: true,
            titleWidget: titleWidget,
            contentWidget: contentWidget,
            titleH: this.titleH
        });
        titleWidget.onClickTrigger = function (collapsed) {
            me.setActivePage(titleContent, collapsed, 300);
        };
        this.addChild(titleContent);
        return titleContent;
    };
    /**
     * 展开或折叠指定的页面。
     * @param titleContent 要展开或折叠的页面。
     * @param collapsed 展开或折叠。
     * @param duration 动画的时间。
     * @returns 返回当前控件。
     */
    Accordion.prototype.setActivePage = function (titleContent, collapsed, duration) {
        var _this = this;
        this.children.forEach(function (child) {
            if (titleContent === child) {
                child.triggerCollapsed(duration, function (evt) {
                    _this.relayoutChildren();
                });
            }
            else {
                if (!child.collapsed) {
                    child.triggerCollapsed(duration, function (evt) {
                        _this.relayoutChildren();
                    });
                }
            }
        });
        this.relayoutChildren();
        return this;
    };
    Accordion.prototype.relayoutChildren = function () {
        var r = this.getLayoutRect();
        var x = this.leftPadding;
        var y = this.topPadding;
        var w = this.clientW;
        var n = this.children.length;
        var titleH = this.titleH;
        var contentH = this.clientH - n * this.titleH;
        this.children.forEach(function (child) {
            child.titleH = titleH;
            child.contentH = contentH;
            child.moveResizeTo(x, y, w, child.h, 0);
            child.relayoutChildren();
            y += child.h;
        });
        return r;
    };
    Accordion.prototype.getDefProps = function () {
        return Accordion.defProps;
    };
    Accordion.create = function (options) {
        return Accordion.recycleBin.create(options);
    };
    Accordion.defProps = Object.assign({}, widget_1.Widget.defProps, { _titleHeight: 30 });
    Accordion.TYPE = "accordion";
    Accordion.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(Accordion);
    return Accordion;
}(widget_1.Widget));
exports.Accordion = Accordion;
;
widget_factory_1.WidgetFactory.register(Accordion.TYPE, Accordion.create);
