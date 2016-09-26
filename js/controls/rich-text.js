"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var widget_factory_1 = require("./widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
var scroll_view_1 = require("./scroll-view");
var carota = require('carota');
var rect = carota.rect;
var createDoc = carota.document;
var RichText = (function (_super) {
    __extends(RichText, _super);
    function RichText(type) {
        _super.call(this, type || RichText.TYPE);
        this._verticalAlignment = 'top';
    }
    RichText.prototype.hasFocus = function () {
        return false;
    };
    Object.defineProperty(RichText.prototype, "data", {
        set: function (data) {
            this._data = data;
            if (this._doc) {
                this._doc.load(data);
            }
        },
        enumerable: true,
        configurable: true
    });
    RichText.prototype.getVerticalOffset = function () {
        var h = this.h;
        var doc = this._doc;
        var docHeight = doc.frame.bounds().h;
        if (docHeight < h) {
            switch (this._verticalAlignment) {
                case 'middle':
                    return (h - docHeight) / 2;
                case 'bottom':
                    return h - docHeight;
            }
        }
        return 0;
    };
    RichText.prototype.doDrawChildren = function (ctx) {
        var doc = this._doc;
        var x = this.leftPadding;
        var y = this.topPadding;
        var w = this.w - this.leftPadding - this.rightPadding;
        var h = this.h - this.topPadding - this.bottomPadding;
        if (this.isVScrollBarVisible()) {
            w -= this.scrollBarStyle.size;
        }
        if (doc.width() !== w) {
            doc.width(w);
        }
        ctx.save();
        ctx.translate(x, y);
        doc.draw(ctx, rect(0, this._oy, w, h));
        doc.drawSelection(ctx, this.hasFocus());
        ctx.restore();
        return this;
    };
    ;
    RichText.prototype.adjustSize = function () {
        var doc = this._doc;
        var w = this.w - this.leftPadding - this.rightPadding;
        var h = this.h - this.topPadding - this.bottomPadding;
        doc.width(w);
        var r = doc.frame.bounds();
        if (r.h > h) {
            w -= this.scrollBarStyle.size;
            doc.width(w);
        }
        var r = doc.frame.bounds();
        this.contentWidth = r.w;
        this.contentHeight = r.h;
    };
    RichText.prototype.onInit = function () {
        this.dragToScroll = true;
        this.scrollerOptions.scrollingX = false;
        _super.prototype.onInit.call(this);
        var doc = createDoc();
        doc.load(this._data);
        doc.toggleCaret();
        this._doc = doc;
        this.adjustSize();
    };
    RichText.prototype.dispose = function () {
        this._doc = null;
        _super.prototype.dispose.call(this);
    };
    RichText.create = function (options) {
        return RichText.reBin.create().reset(RichText.TYPE).set(options);
    };
    RichText.TYPE = "rich-text";
    RichText.reBin = new recyclable_creator_1.RecyclableCreator(function () { return new RichText(); });
    return RichText;
}(scroll_view_1.ScrollView));
exports.RichText = RichText;
;
widget_factory_1.WidgetFactory.register(RichText.TYPE, RichText.create);
