"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var rect_1 = require("../rect");
var point_1 = require("../point");
var widget_1 = require("./widget");
var title_content_1 = require("./title-content");
var widget_factory_1 = require("./widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
var AccordionTitle = (function (_super) {
    __extends(AccordionTitle, _super);
    function AccordionTitle() {
        _super.call(this, AccordionTitle.TYPE);
    }
    Object.defineProperty(AccordionTitle.prototype, "collapsed", {
        get: function () {
            var titleContent = this.parent;
            return titleContent.collapsed;
        },
        set: function (value) {
            var titleContent = this.parent;
            titleContent.collapsed = value;
        },
        enumerable: true,
        configurable: true
    });
    AccordionTitle.prototype.trigger = function () {
        var titleContent = this.parent;
        titleContent.collapsed = !titleContent.collapsed;
        if (this.onClickTrigger) {
            this.onClickTrigger(titleContent.collapsed);
        }
    };
    AccordionTitle.prototype.getFgImageRect = function (style) {
        var w = this.clientH;
        return rect_1.Rect.rect.init(this.leftPadding, this.topPadding, w, w);
    };
    AccordionTitle.prototype.getTextRect = function (style) {
        var w = this.clientH;
        return rect_1.Rect.rect.init(this.leftPadding + w, this.topPadding, this.clientW - w, this.clientH);
    };
    AccordionTitle.prototype.getStyleType = function () {
        return this._styleType || this.collapsed ? "accordion-title.collapsed" : "accordion-title.expanded";
    };
    AccordionTitle.prototype.dispatchDblClick = function (evt) {
        _super.prototype.dispatchDblClick.call(this, evt);
        if (!this._enable || !this._sensitive) {
            return;
        }
        this.trigger();
    };
    AccordionTitle.prototype.dispatchClick = function (evt) {
        _super.prototype.dispatchClick.call(this, evt);
        if (!this._enable || !this._sensitive) {
            return;
        }
        var p = this.toLocalPoint(point_1.Point.point.copy(evt));
        if (p.x < this.h) {
            this.trigger();
        }
    };
    AccordionTitle.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.onClickTrigger = null;
    };
    AccordionTitle.create = function (options) {
        return AccordionTitle.recycleBin.create().reset(AccordionTitle.TYPE, options);
    };
    AccordionTitle.TYPE = "accordion-title";
    AccordionTitle.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new AccordionTitle(); });
    return AccordionTitle;
}(widget_1.Widget));
exports.AccordionTitle = AccordionTitle;
;
var Accordion = (function (_super) {
    __extends(Accordion, _super);
    function Accordion() {
        _super.call(this, Accordion.TYPE);
    }
    Object.defineProperty(Accordion.prototype, "titleHeight", {
        get: function () {
            return this._titleHeight;
        },
        set: function (value) {
            this._titleHeight = value;
        },
        enumerable: true,
        configurable: true
    });
    Accordion.prototype.onReset = function () {
        _super.prototype.onReset.call(this);
        this._titleHeight = 30;
    };
    Accordion.prototype.setActivePanel = function (titleContent, collapsed) {
        this.children.forEach(function (child) {
            child.collapsed = titleContent === child ? collapsed : true;
        });
        this.relayoutChildren();
    };
    Accordion.prototype.relayoutChildren = function () {
        var r = this.getLayoutRect();
        var x = this.leftPadding;
        var y = this.topPadding;
        var w = this.clientW;
        var n = this.children.length;
        var collapseH = this.titleHeight;
        var expandH = this.titleHeight + this.clientH - n * this.titleHeight;
        this.children.forEach(function (child) {
            var h = child.collapsed ? collapseH : expandH;
            child.moveResizeTo(x, y, w, h, 0);
            child.relayoutChildren();
            y += h;
        });
        return r;
    };
    Accordion.prototype.addPanel = function (title, contentWidget) {
        var me = this;
        var titleWidget = AccordionTitle.create({ text: title });
        var titleContent = title_content_1.TitleContent.create({
            titleHeight: this.titleHeight,
            titleWidget: titleWidget,
            contentWidget: contentWidget,
            collapsed: true
        });
        titleWidget.onClickTrigger = function (collapsed) {
            me.setActivePanel(titleContent, collapsed);
        };
        this.addChild(titleContent);
        return titleContent;
    };
    Accordion.create = function (options) {
        return Accordion.recycleBin.create().reset(Accordion.TYPE, options);
    };
    Accordion.TYPE = "accordion";
    Accordion.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new Accordion(); });
    return Accordion;
}(widget_1.Widget));
exports.Accordion = Accordion;
;
widget_factory_1.WidgetFactory.register(Accordion.TYPE, Accordion.create);
