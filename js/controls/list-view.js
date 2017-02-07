"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var widget_1 = require("./widget");
var scroll_view_1 = require("./scroll-view");
var widget_factory_1 = require("./widget-factory");
var widget_recyclable_creator_1 = require("./widget-recyclable-creator");
var list_layouter_1 = require("../layouters/list-layouter");
var ListView = (function (_super) {
    __extends(ListView, _super);
    function ListView(type) {
        _super.call(this, type || ListView.TYPE);
    }
    Object.defineProperty(ListView.prototype, "itemSpacing", {
        get: function () {
            return this._is;
        },
        set: function (value) {
            this._is = value;
            var layouter = this._childrenLayouter;
            layouter.spacing = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListView.prototype, "itemH", {
        get: function () {
            return this._ih;
        },
        set: function (value) {
            this._ih = value;
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
    ListView.prototype.beforeDrawChildren = function (ctx) {
        _super.prototype.beforeDrawChildren.call(this, ctx);
    };
    ListView.prototype.afterDrawChildren = function (ctx) {
        _super.prototype.afterDrawChildren.call(this, ctx);
    };
    ListView.prototype.doDrawChildren = function (ctx) {
        var top = this.offsetY;
        var bottom = top + this.h;
        this._children.forEach(function (child) {
            var visible = child.visible && child.y < bottom && (child.y + child.h) > top;
            if (visible) {
                child.draw(ctx);
            }
        });
    };
    Object.defineProperty(ListView.prototype, "desireHeight", {
        get: function () {
            var itemH = this.itemH;
            var h = this.topPadding + this.bottomPadding;
            this.children.forEach(function (child) {
                var param = child.layoutParam;
                if (param) {
                    h += param.h || itemH;
                }
                else {
                    h += child.h || itemH;
                }
            });
            return h;
        },
        enumerable: true,
        configurable: true
    });
    ListView.prototype.relayoutChildren = function () {
        var r = _super.prototype.relayoutChildren.call(this);
        this.contentW = r.w + this.leftPadding + this.rightPadding;
        this.contentH = r.h + this.topPadding + this.bottomPadding;
        return r;
    };
    ListView.prototype.onReset = function () {
        _super.prototype.onReset.call(this);
        this.scrollerOptions.scrollingX = false;
        this._childrenLayouter = list_layouter_1.ListLayouter.createWithOptions({ height: this.itemH, spacing: 0 });
    };
    ListView.prototype.getDefProps = function () {
        return ListView.defProps;
    };
    ListView.create = function (options) {
        return ListView.recycleBinListView.create(options);
    };
    ListView.defProps = Object.assign({}, widget_1.Widget.defProps, { _ih: 30, _is: 0 });
    ListView.TYPE = "list-view";
    ListView.recycleBinListView = widget_recyclable_creator_1.WidgetRecyclableCreator.create(ListView);
    return ListView;
}(scroll_view_1.ScrollView));
exports.ListView = ListView;
;
widget_factory_1.WidgetFactory.register(ListView.TYPE, ListView.create);
