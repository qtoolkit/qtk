"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var widget_1 = require("./widget");
var Events = require("../events");
var widget_factory_1 = require("./widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
/**
 * 一个用来显示标题和内容的控件。通常用于Accordion和PropertySheets的子控件。
 */
var TitleContent = (function (_super) {
    __extends(TitleContent, _super);
    function TitleContent() {
        _super.call(this, TitleContent.TYPE);
    }
    Object.defineProperty(TitleContent.prototype, "titleHeight", {
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
    Object.defineProperty(TitleContent.prototype, "contentHeight", {
        get: function () {
            return this._contentHeight;
        },
        /**
         * titleHeight 内容控件的高度。
         */
        set: function (value) {
            this._contentHeight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TitleContent.prototype, "movable", {
        get: function () {
            return this._movable;
        },
        /**
         * movable 决定是否能通过拖动标题控件来拖动整个TitleContent控件。
         */
        set: function (value) {
            this._movable = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 折叠或展开控件。
     * @param duration 动画时间(可选)。
     * @param onStep 动画执行期间单步的回调函数(可选)。
     * @returns 返回控件本身。
     */
    TitleContent.prototype.triggerCollapsed = function (duration, onStep) {
        var _this = this;
        var value = !this._collapsed;
        if (this._inited) {
            if (duration > 0) {
                var minH = this.topPadding + this.bottomPadding + this.titleHeight;
                var maxH = minH + this.contentHeight;
                var h = value ? minH : maxH;
                this._collapsed = false;
                this.relayoutChildren();
                this._animating = true;
                this.h = value ? maxH : minH;
                this.resizeTo(this.w, h, duration).onComplete(function (evt) {
                    _this.collapsed = value;
                    _this._animating = false;
                }).onUpdate(function () {
                    if (onStep) {
                        onStep();
                    }
                });
            }
            else {
                this.collapsed = value;
                this.relayoutChildren();
            }
        }
        else {
            this._collapsed = value;
        }
        return this;
    };
    Object.defineProperty(TitleContent.prototype, "collapsed", {
        get: function () {
            return this._collapsed;
        },
        /**
         * collapsed 控件当前折叠或展开的状态。
         */
        set: function (value) {
            if (this._inited) {
                if (this._collapsed !== value) {
                    this._collapsed = value;
                    if (value) {
                        this.dispatchEvent(Events.createAnyEvent(Events.COLLAPSE));
                    }
                    else {
                        this.dispatchEvent(Events.createAnyEvent(Events.EXPAND));
                    }
                }
            }
            else {
                this._collapsed = value;
            }
            this.reComputeH();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TitleContent.prototype, "titleWidget", {
        /**
         * 标题控件。
         */
        get: function () {
            return this._titleWidget;
        },
        set: function (value) {
            if (this._titleWidget) {
                this.removeChild(this._titleWidget);
            }
            if (value) {
                this.addChild(value);
                if (!this._titleHeight) {
                    this._titleHeight = value.h;
                }
            }
            this._titleWidget = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TitleContent.prototype, "contentWidget", {
        /**
         * 内容控件。
         */
        get: function () {
            return this._contentWidget;
        },
        set: function (value) {
            if (this._contentWidget) {
                this.removeChild(this._contentWidget);
            }
            if (value) {
                this.addChild(value);
                if (!this._contentHeight) {
                    this._contentHeight = value.h;
                }
            }
            this._contentWidget = value;
        },
        enumerable: true,
        configurable: true
    });
    TitleContent.prototype.drawChildren = function (ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, 0, this.w, this.h);
        ctx.clip();
        _super.prototype.drawChildren.call(this, ctx);
        ctx.restore();
        return this;
    };
    TitleContent.prototype.onReset = function () {
        _super.prototype.onReset.call(this);
        this._movable = false;
        this._titleHeight = 30;
        this._collapsed = false;
        this._titleWidget = null;
        this._contentWidget = null;
        this._contentHeight = 0;
    };
    TitleContent.prototype.onInit = function () {
        _super.prototype.onInit.call(this);
        if (this._movable) {
            this._titleWidget.useBehavior("movable", { moveParent: true });
        }
    };
    TitleContent.prototype.reComputeH = function () {
        var contentHeight = (!this._collapsed ? this.contentHeight : 0);
        this.h = contentHeight + this.titleHeight + this.topPadding + this.bottomPadding;
    };
    TitleContent.prototype.relayoutChildren = function () {
        this.requestRedraw();
        if (this._animating) {
            return this.getLayoutRect();
        }
        if (this._contentHeight < 1) {
            this._contentHeight = this.h - this.topPadding - this.bottomPadding - this.titleHeight;
        }
        this.reComputeH();
        var r = this.getLayoutRect();
        var titleWidget = this._titleWidget;
        var contentWidget = this._contentWidget;
        if (titleWidget) {
            titleWidget.moveResizeTo(r.x, r.y, r.w, this.titleHeight);
            titleWidget.relayoutChildren();
        }
        if (contentWidget) {
            if (this._collapsed) {
                contentWidget.visible = false;
            }
            else {
                var y = r.y + this.titleHeight;
                contentWidget.visible = true;
                contentWidget.moveResizeTo(r.x, y, r.w, this.contentHeight);
                contentWidget.relayoutChildren();
            }
        }
        return r;
    };
    TitleContent.create = function (options) {
        return TitleContent.rBin.create().reset(TitleContent.TYPE, options);
    };
    TitleContent.TYPE = "title-content";
    TitleContent.rBin = new recyclable_creator_1.RecyclableCreator(function () { return new TitleContent(); });
    return TitleContent;
}(widget_1.Widget));
exports.TitleContent = TitleContent;
;
widget_factory_1.WidgetFactory.register(TitleContent.TYPE, TitleContent.create);
