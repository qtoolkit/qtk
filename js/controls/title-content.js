"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var widget_1 = require("./widget");
var widget_factory_1 = require("./widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
var TitleContent = (function (_super) {
    __extends(TitleContent, _super);
    function TitleContent() {
        _super.call(this, TitleContent.TYPE);
    }
    Object.defineProperty(TitleContent.prototype, "titleHeight", {
        get: function () {
            return this._titleHeight;
        },
        set: function (value) {
            this._titleHeight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TitleContent.prototype, "movable", {
        get: function () {
            return this._movable;
        },
        set: function (value) {
            this._movable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TitleContent.prototype, "collapsed", {
        get: function () {
            return this._collapsed;
        },
        set: function (value) {
            if (this._inited) {
                if (!this._collapsed) {
                    this._saveH = this.h;
                }
                this._collapsed = value;
                this.relayoutChildren();
            }
            else {
                this._collapsed = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TitleContent.prototype, "titleWidget", {
        get: function () {
            return this._titleWidget;
        },
        set: function (value) {
            if (this._titleWidget) {
                this.removeChild(this._titleWidget);
            }
            if (value) {
                this.addChild(value);
            }
            this._titleWidget = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TitleContent.prototype, "contentWidget", {
        get: function () {
            return this._contentWidget;
        },
        set: function (value) {
            if (this._contentWidget) {
                this.removeChild(this._contentWidget);
            }
            if (value) {
                this.addChild(value);
            }
            this._contentWidget = value;
        },
        enumerable: true,
        configurable: true
    });
    TitleContent.prototype.onReset = function () {
        _super.prototype.onReset.call(this);
        this._saveH = 0;
        this._movable = false;
        this._titleHeight = 30;
        this._collapsed = false;
        this._titleWidget = null;
        this._contentWidget = null;
    };
    TitleContent.prototype.onInit = function () {
        _super.prototype.onInit.call(this);
        this._saveH = this.h;
        if (this._movable) {
            this._titleWidget.useBehavior("movable", { moveParent: true });
        }
    };
    TitleContent.prototype.relayoutChildren = function () {
        if (!this._saveH) {
            this._saveH = this.h;
        }
        this.h = this._collapsed ? (this.titleHeight + this.topPadding + this.bottomPadding) : this._saveH;
        this.requestRedraw();
        var r = this.getLayoutRect();
        var titleWidget = this._titleWidget;
        var contentWidget = this._contentWidget;
        var h = this.titleHeight;
        if (titleWidget) {
            titleWidget.moveResizeTo(r.x, r.y, r.w, h);
            titleWidget.relayoutChildren();
        }
        if (contentWidget) {
            if (this._collapsed) {
                contentWidget.visible = false;
            }
            else {
                var y = r.y + h;
                h = r.h - h;
                contentWidget.visible = true;
                contentWidget.moveResizeTo(r.x, y, r.w, h);
                contentWidget.relayoutChildren();
            }
        }
        return r;
    };
    TitleContent.create = function (options) {
        return TitleContent.recycleBin.create().reset(TitleContent.TYPE, options);
    };
    TitleContent.TYPE = "title-content";
    TitleContent.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new TitleContent(); });
    return TitleContent;
}(widget_1.Widget));
exports.TitleContent = TitleContent;
;
widget_factory_1.WidgetFactory.register(TitleContent.TYPE, TitleContent.create);
