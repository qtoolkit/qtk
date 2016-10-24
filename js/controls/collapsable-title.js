"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var rect_1 = require("../rect");
var point_1 = require("../point");
var widget_1 = require("./widget");
var widget_recyclable_creator_1 = require("./widget-recyclable-creator");
/**
 * 可折叠的标题控件，点击折叠图片或双击时折叠或展开。
 * 只能用于TitleContent的titleWidget。
 *
 */
var CollapsableTitle = (function (_super) {
    __extends(CollapsableTitle, _super);
    function CollapsableTitle() {
        _super.call(this, CollapsableTitle.TYPE);
    }
    Object.defineProperty(CollapsableTitle.prototype, "collapsed", {
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
    CollapsableTitle.prototype.trigger = function () {
        var titleContent = this.parent;
        var collapsed = !titleContent.collapsed;
        if (this.onClickTrigger) {
            this.onClickTrigger(collapsed);
        }
    };
    CollapsableTitle.prototype.getFgImageRect = function (style) {
        var w = this.clientH;
        return rect_1.Rect.rect.init(this.leftPadding, this.topPadding, w, w);
    };
    CollapsableTitle.prototype.getTextRect = function (style) {
        var w = this.clientH;
        return rect_1.Rect.rect.init(this.leftPadding + w, this.topPadding, this.clientW - w, this.clientH);
    };
    CollapsableTitle.prototype.getStyleType = function () {
        return this._styleType || this.collapsed ? "collapsable-title.collapsed" : "collapsable-title.expanded";
    };
    CollapsableTitle.prototype.dispatchDblClick = function (evt) {
        _super.prototype.dispatchDblClick.call(this, evt);
        if (!this._enable || !this._sensitive) {
            return;
        }
        this.trigger();
    };
    CollapsableTitle.prototype.dispatchClick = function (evt) {
        _super.prototype.dispatchClick.call(this, evt);
        if (!this._enable || !this._sensitive) {
            return;
        }
        var p = this.toLocalPoint(point_1.Point.point.copy(evt));
        if (p.x < this.h) {
            this.trigger();
        }
    };
    CollapsableTitle.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.onClickTrigger = null;
    };
    CollapsableTitle.create = function (options) {
        return CollapsableTitle.rBin.create(options);
    };
    CollapsableTitle.TYPE = "collapsable-title";
    CollapsableTitle.rBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(CollapsableTitle);
    return CollapsableTitle;
}(widget_1.Widget));
exports.CollapsableTitle = CollapsableTitle;
;
