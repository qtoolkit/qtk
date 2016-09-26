"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scroll_view_1 = require("./scroll-view");
var widget_factory_1 = require("./widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
var list_layouter_1 = require("../layouters/list-layouter");
var ListView = (function (_super) {
    __extends(ListView, _super);
    function ListView() {
        _super.call(this, ListView.TYPE);
    }
    Object.defineProperty(ListView.prototype, "itemSpacing", {
        get: function () {
            return this._itemSpacing;
        },
        set: function (value) {
            this._itemSpacing = value;
            var layouter = this._childrenLayouter;
            layouter.spacing = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListView.prototype, "itemHeight", {
        get: function () {
            return this._itemHeight;
        },
        set: function (value) {
            this._itemHeight = value;
            var layouter = this._childrenLayouter;
            layouter.h = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListView.prototype, "childrenLayouter", {
        get: function () {
            return this._childrenLayouter;
        },
        set: function (layouter) {
        },
        enumerable: true,
        configurable: true
    });
    ListView.prototype.doDrawChildren = function (ctx) {
        var top = this.offsetY;
        var bottom = top + this.h;
        this._children.forEach(function (child) {
            var visible = child.visible && child.y < bottom && (child.y + child.h) > top;
            if (visible) {
                child.draw(ctx);
            }
        });
        return this;
    };
    Object.defineProperty(ListView.prototype, "desireHeight", {
        get: function () {
            var itemHeight = this.itemHeight;
            var h = this.topPadding + this.bottomPadding;
            this.children.forEach(function (child) {
                var param = child.layoutParam;
                if (param) {
                    h += param.h || itemHeight;
                }
                else {
                    h += child.h || itemHeight;
                }
            });
            return h;
        },
        enumerable: true,
        configurable: true
    });
    ListView.prototype.relayoutChildren = function () {
        var r = _super.prototype.relayoutChildren.call(this);
        this.contentWidth = r.w + this.leftPadding + this.rightPadding;
        this.contentHeight = r.h + this.topPadding + this.bottomPadding + 10;
        return r;
    };
    ListView.prototype.reset = function (type) {
        _super.prototype.reset.call(this, type);
        this._itemSpacing = 0;
        this._itemHeight = 30;
        this.scrollerOptions.scrollingX = false;
        this._childrenLayouter = list_layouter_1.ListLayouter.create({ height: this.itemHeight, spacing: 0 });
        return this;
    };
    ListView.create = function (options) {
        return ListView.recycleBinListView.create().reset(ListView.TYPE).set(options);
    };
    ListView.TYPE = "list-view";
    ListView.recycleBinListView = new recyclable_creator_1.RecyclableCreator(function () { return new ListView(); });
    return ListView;
}(scroll_view_1.ScrollView));
exports.ListView = ListView;
;
widget_factory_1.WidgetFactory.register(ListView.TYPE, ListView.create);
