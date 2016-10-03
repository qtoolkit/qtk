/// <reference path="../../typings/globals/scroller/index.d.ts"/>
/// <reference path="../../typings/globals/tween.js/index.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var rect_1 = require("../rect");
var point_1 = require("../point");
var scroller_1 = require("scroller");
var TWEEN = require("tween.js");
var Events = require("../events");
var graphics_1 = require("../graphics");
var widget_factory_1 = require("./widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
var widget_1 = require("./widget");
/**
 * 滚动视图，同时支持PC和Mobile风格，通过dragToScroll和slideToScroll参数控制。
 */
var ScrollView = (function (_super) {
    __extends(ScrollView, _super);
    function ScrollView(type) {
        _super.call(this, type ? type : ScrollView.TYPE);
        this.isScrollView = true;
    }
    Object.defineProperty(ScrollView.prototype, "scrollBarOpacity", {
        get: function () {
            return this._scrollBarOpacity;
        },
        /*
         * 滚动条的透明度。Mobile风格的滚动条，滚动完成时，以动画方式隐藏。
         */
        set: function (value) {
            this._scrollBarOpacity = value;
            this.requestRedraw();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollView.prototype, "dragToScroll", {
        get: function () {
            return this._dragToScroll;
        },
        /**
         * 启用滚动条拖动来实现滚动。
         */
        set: function (value) {
            this._dragToScroll = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollView.prototype, "slideToScroll", {
        get: function () {
            return this._slideToScroll;
        },
        /**
         * 启用手势滑动来实现滚动。
         */
        set: function (value) {
            this._slideToScroll = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollView.prototype, "scrollBarStyle", {
        get: function () {
            return this._scrollBarStyle;
        },
        /**
         * 滚动条的样式。
         */
        set: function (value) {
            this._scrollBarStyle = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 垂直滚动条是否可见。
     */
    ScrollView.prototype.isVScrollBarVisible = function () {
        var visibility = this.scrollBarStyle.vBarVisibility;
        switch (visibility) {
            case ScrollerBarVisibility.INVISIBLE: {
                return false;
            }
            case ScrollerBarVisibility.ALWAYS: {
                return true;
            }
            default: {
                return (this.h < this.contentHeight);
            }
        }
    };
    /**
     * 水平滚动条是否可见。
     */
    ScrollView.prototype.isHScrollBarVisible = function () {
        var visibility = this.scrollBarStyle.hBarVisibility;
        switch (visibility) {
            case ScrollerBarVisibility.INVISIBLE: {
                return false;
            }
            case ScrollerBarVisibility.ALWAYS: {
                return true;
            }
            default: {
                return (this.w < this.contentWidth);
            }
        }
    };
    Object.defineProperty(ScrollView.prototype, "validOffsetX", {
        /**
         * 设置水平方向上的偏移，并确保其值的有些性。
         */
        set: function (value) {
            this.setProp("ox", this.toValidOffsetX(value), true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollView.prototype, "validOffsetY", {
        /**
         * 设置垂直方向上的偏移，并确保其值的有些性。
         */
        set: function (value) {
            this.setProp("oy", this.toValidOffsetY(value), true);
        },
        enumerable: true,
        configurable: true
    });
    ScrollView.prototype.toValidOffsetX = function (value) {
        return Math.min(Math.max(0, value), Math.max(0, this._cw - this.w));
    };
    ScrollView.prototype.toValidOffsetY = function (value) {
        return Math.min(Math.max(0, value), Math.max(0, this._ch - this.h));
    };
    Object.defineProperty(ScrollView.prototype, "offsetX", {
        get: function () {
            return this._ox;
        },
        /**
         * 水平方向上的偏移。
         */
        set: function (value) {
            this.setProp("ox", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollView.prototype, "offsetY", {
        get: function () {
            return this._oy;
        },
        /**
         * 垂直方向上的偏移。
         */
        set: function (value) {
            this.setProp("oy", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollView.prototype, "contentWidth", {
        get: function () {
            return this._cw;
        },
        /**
         * 滚动视图所包含内容的宽度。
         */
        set: function (value) {
            this.setProp("cw", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollView.prototype, "contentHeight", {
        get: function () {
            return this._ch;
        },
        /**
         * 滚动视图所包含内容的高度。
         */
        set: function (value) {
            this.setProp("ch", value, true);
        },
        enumerable: true,
        configurable: true
    });
    ScrollView.prototype.selfHitTest = function (x, y, ctx) {
        return _super.prototype.selfHitTest.call(this, x - this._ox, y - this._oy, ctx);
    };
    /*
     * 在处理指针事件前，先加上滚动的偏移。
     */
    ScrollView.prototype.offsetPointerEvent = function (evt) {
        evt.x += this._ox;
        evt.y += this._oy;
    };
    /*
     * 在处理指针事件后，再减去滚动的偏移。
     */
    ScrollView.prototype.unOffsetPointerEvent = function (evt) {
        evt.x -= this._ox;
        evt.y -= this._oy;
    };
    /*
     * 把指针事件转换成touch，以便Scroller可以处理。
     */
    ScrollView.prototype.pointerEventToTouches = function (evt) {
        var touch = this._touches[0];
        touch.id = evt.id;
        touch.pageX = evt.x;
        touch.pageY = evt.y;
        return this._touches;
    };
    /*
     * 先处理滚动条的事件，再处理Scroller事件，最后发给子控件。
     */
    ScrollView.prototype.dispatchPointerDown = function (evt, ctx) {
        this._pointerInBar = false;
        if (this.dragToScroll) {
            this._saveOX = this._ox;
            this._saveOY = this._oy;
            var win = this.win;
            var p = this.eventPointToLocal(point_1.Point.point.copy(win.pointerPosition));
            if (p.isInRect(this._vScrollBarRect)) {
                if (p.isInRect(this._vScrollDraggerRect)) {
                    this._pointerInVScrollDraggerRect = true;
                }
                else {
                    if (p.y < this._vScrollDraggerRect.y) {
                        this._pointerInVScrollBarRectUp = true;
                    }
                    else {
                        this._pointerInVScrollBarRectDown = true;
                    }
                }
                this._pointerInBar = true;
            }
            if (p.isInRect(this._hScrollBarRect)) {
                if (p.isInRect(this._hScrollDraggerRect)) {
                    this._pointerInHScrollDraggerRect = true;
                }
                else {
                    if (p.x < this._hScrollDraggerRect.x) {
                        this._pointerInHScrollBarRectLeft = true;
                    }
                    else {
                        this._pointerInHScrollBarRectRight = true;
                    }
                }
                this._pointerInBar = true;
            }
        }
        if (this.slideToScroll) {
            if (!this._pointerInBar) {
                this._scrollBarOpacity = 1;
                this.scroller.doTouchStart(this.pointerEventToTouches(evt), evt.timeStamp);
            }
        }
        if (!this._pointerInBar) {
            this.offsetPointerEvent(evt);
            _super.prototype.dispatchPointerDown.call(this, evt, ctx);
            this.unOffsetPointerEvent(evt);
        }
    };
    ScrollView.prototype.dispatchPointerMove = function (evt, ctx) {
        if (evt.pointerDown) {
            var offsetX = this.offsetX;
            var offsetY = this.offsetY;
            if (this.dragToScroll) {
                if (this._pointerInVScrollDraggerRect) {
                    var dy = evt.y - evt.pointerDownY;
                    offsetY = this._saveOY + (dy / this.h) * this._ch;
                }
                if (this._pointerInHScrollDraggerRect) {
                    var dx = evt.x - evt.pointerDownX;
                    offsetX = this._saveOX + (dx / this.w) * this._cw;
                }
            }
            if (this.slideToScroll) {
                if (!this._pointerInBar) {
                    this.scroller.doTouchMove(this.pointerEventToTouches(evt), evt.timeStamp);
                }
                else {
                    this.scroller.scrollTo(this.toValidOffsetX(offsetX), this.toValidOffsetY(offsetY));
                }
            }
            else {
                this.validOffsetX = offsetX;
                this.validOffsetY = offsetY;
            }
        }
        if (!this._pointerInBar) {
            this.offsetPointerEvent(evt);
            _super.prototype.dispatchPointerMove.call(this, evt, ctx);
            this.unOffsetPointerEvent(evt);
        }
        this.requestRedraw();
    };
    ScrollView.prototype.dispatchPointerUp = function (evt) {
        if (this.dragToScroll) {
            if (this._pointerInVScrollBarRectUp) {
                this.validOffsetY = this.offsetY - this.h;
            }
            else if (this._pointerInVScrollBarRectDown) {
                this.validOffsetY = this.offsetY + this.h;
            }
            else if (this._pointerInHScrollBarRectLeft) {
                this.validOffsetX = this.offsetX - this.w;
            }
            else if (this._pointerInHScrollBarRectRight) {
                this.validOffsetX = this.offsetX + this.w;
            }
            this._pointerInVScrollBarRectUp = false;
            this._pointerInVScrollBarRectDown = false;
            this._pointerInHScrollBarRectLeft = false;
            this._pointerInHScrollBarRectRight = false;
            this._pointerInVScrollDraggerRect = false;
            this._pointerInHScrollDraggerRect = false;
        }
        if (this.slideToScroll) {
            if (!this._pointerInBar) {
                this.scroller.doTouchEnd(evt.timeStamp);
            }
            else {
                this.scroller.scrollTo(this.offsetX, this.offsetY);
                this.handleScrollDone();
            }
        }
        if (!this._pointerInBar) {
            this.offsetPointerEvent(evt);
            _super.prototype.dispatchPointerUp.call(this, evt);
            this.unOffsetPointerEvent(evt);
        }
        this._pointerInBar = false;
    };
    ScrollView.prototype.dispatchClick = function (evt) {
        if (!this._pointerInBar) {
            this.offsetPointerEvent(evt);
            _super.prototype.dispatchClick.call(this, evt);
            this.unOffsetPointerEvent(evt);
        }
    };
    ScrollView.prototype.dispatchDblClick = function (evt) {
        if (!this._pointerInBar) {
            this.offsetPointerEvent(evt);
            _super.prototype.dispatchDblClick.call(this, evt);
            this.unOffsetPointerEvent(evt);
        }
    };
    /*
     * 更新Scroller的参数。
     */
    ScrollView.prototype.updateScrollerDimensions = function (w, h, contentWidth, contentHeight) {
        if (this._slideToScroll) {
            this.scroller.setDimensions(w, h, contentWidth, contentHeight);
        }
    };
    Object.defineProperty(ScrollView.prototype, "scroller", {
        get: function () {
            return this._scroller;
        },
        enumerable: true,
        configurable: true
    });
    ScrollView.prototype.hideScrollBar = function () {
        if (!this.dragToScroll) {
            var tween = new TWEEN.Tween(this);
            tween.to({ scrollBarOpacity: 0 }, 300).start();
            tween.onComplete(function () {
                this.scrollBarOpacity = 0;
            });
            this.requestRedraw();
        }
    };
    ScrollView.prototype.handleScrolling = function (left, top) {
        this.offsetX = left;
        this.offsetY = top;
        this.dispatchEvent(this._scrollEvent.reset(Events.SCROLL, this, left, top));
    };
    ScrollView.prototype.handleScrollDone = function () {
        this.hideScrollBar();
        this.dispatchEvent(this._scrollEvent.reset(Events.SCROLL_DONE, this, this.offsetX, this.offsetY));
    };
    ScrollView.prototype.initScroller = function (options) {
        var _this = this;
        var me = this;
        options.scrollingComplete = function () {
            me.handleScrollDone();
        };
        this._scroller = new scroller_1.Scroller(function (left, top) {
            me.handleScrolling(left, top);
        }, options);
        this.on(Events.PROP_CHANGE, function (evt) {
            var prop = evt.prop;
            var value = evt.newValue;
            if (prop === "w" || prop === "h" || prop === "cw" || prop === "ch") {
                _this.updateScrollerDimensions(_this.w, _this.h, _this.contentWidth, _this.contentHeight);
            }
        });
        this.updateScrollerDimensions(this.w, this.h, this.contentWidth, this.contentHeight);
    };
    /*
     * 绘制垂直滚动条。
     */
    ScrollView.prototype.drawScrollBarV = function (ctx, hBarVisible) {
        var w = this.w;
        var h = this.h;
        var options = this.scrollBarStyle;
        var barY = 0;
        var barH = h;
        var barW = options.size;
        var barX = w - barW;
        var barColor = options.backGroundColor;
        var r = options.roundRadius;
        var draggerW = options.draggerSize;
        var draggerH = Math.max(draggerW, Math.min(h, h * h / this.contentHeight));
        var draggerX = barX + ((barW - draggerW) >> 1);
        var draggerY = Math.min(h - draggerH, (this.offsetY / this.contentHeight) * h);
        var draggerColor = options.foreGroundColor;
        if (hBarVisible) {
            draggerY = Math.min(draggerY, h - barW - draggerH);
        }
        var win = this.win;
        if (this._pointerInVScrollDraggerRect) {
            draggerColor = options.foreGroundOverColor;
        }
        this._vScrollBarRect.init(barX, barY, barW, barH);
        this._vScrollDraggerRect.init(draggerX, draggerY, draggerW, draggerH);
        graphics_1.Graphics.drawRect(ctx, barColor, null, 0, barX, barY, barW, barH);
        graphics_1.Graphics.drawRoundRect(ctx, draggerColor, null, 0, draggerX, draggerY, draggerW, draggerH, r);
        var lineColor = options.lineColor;
        var lineWidth = options.lineWidth;
        graphics_1.Graphics.drawLine(ctx, lineColor, lineWidth, barX, barY, barX, hBarVisible ? barH - barW : barH);
    };
    /*
     * 绘制水平滚动条。
     */
    ScrollView.prototype.drawScrollBarH = function (ctx, vBarVisible) {
        var w = this.w;
        var h = this.h;
        var options = this.scrollBarStyle;
        var barX = 0;
        var barW = w;
        var barH = options.size;
        var barY = h - barH;
        var barColor = options.backGroundColor;
        var r = options.roundRadius;
        var draggerH = options.draggerSize;
        var draggerW = Math.max(draggerH, Math.min(w, w * w / this.contentWidth));
        var draggerY = barY + ((barH - draggerH) >> 1);
        var draggerX = Math.min(w - draggerW, (this.offsetX / this.contentWidth) * w);
        var draggerColor = options.foreGroundColor;
        if (vBarVisible) {
            draggerX = Math.min(draggerX, w - barH - draggerW);
        }
        var win = this.win;
        if (this._pointerInHScrollDraggerRect) {
            draggerColor = options.foreGroundOverColor;
        }
        this._hScrollBarRect.init(barX, barY, barW, barH);
        this._hScrollDraggerRect.init(draggerX, draggerY, draggerW, draggerH);
        graphics_1.Graphics.drawRect(ctx, barColor, null, 0, barX, barY, barW, barH);
        graphics_1.Graphics.drawRoundRect(ctx, draggerColor, null, 0, draggerX, draggerY, draggerW, draggerH, r);
        var lineColor = options.lineColor;
        var lineWidth = options.lineWidth;
        graphics_1.Graphics.drawLine(ctx, lineColor, lineWidth, barX, barY, vBarVisible ? barW - barH : barW, barY);
    };
    /*
     * 绘制滚动条。
     */
    ScrollView.prototype.drawScrollBar = function (ctx) {
        var hBarVisible = this.isHScrollBarVisible();
        var vBarVisible = this.isVScrollBarVisible();
        if (this._scrollBarOpacity > 0) {
            var opacity = ctx.globalAlpha;
            ctx.globalAlpha = this._scrollBarOpacity;
            if (vBarVisible) {
                this.drawScrollBarV(ctx, hBarVisible);
            }
            if (hBarVisible) {
                this.drawScrollBarH(ctx, vBarVisible);
            }
            ctx.globalAlpha = opacity;
        }
    };
    /*
     * 绘制子控件。
     */
    ScrollView.prototype.doDrawChildren = function (ctx) {
        _super.prototype.drawChildren.call(this, ctx);
    };
    ScrollView.prototype.drawChildren = function (ctx) {
        var ox = this._ox;
        var oy = this._oy;
        var x = this.leftPadding;
        var y = this.topPadding;
        var w = this.w - x - this.rightPadding;
        var h = this.h - y - this.bottomPadding;
        ctx.save();
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.clip();
        ctx.translate(-ox, -oy);
        this.doDrawChildren(ctx);
        ctx.restore();
        this.drawScrollBar(ctx);
        return this;
    };
    /**
     * 滚动到指定的位置。
     */
    ScrollView.prototype.scrollTo = function (offsetX, offsetY, duration) {
        if (duration > 0) {
            var tween = new TWEEN.Tween(this);
            tween.to({ offsetX: offsetX, offsetY: offsetY }, duration).start();
            return tween;
        }
        else {
            this.offsetX = offsetX;
            this.offsetY = offsetY;
            return null;
        }
    };
    ScrollView.prototype.onWheel = function (evt) {
        this.validOffsetY = this.offsetY - evt.delta / 10;
        if (this.slideToScroll) {
            this.scroller.scrollTo(this.offsetX, this.offsetY);
            this.handleScrollDone();
        }
    };
    Object.defineProperty(ScrollView.prototype, "scrollerOptions", {
        get: function () {
            return this._scrollerOptions;
        },
        enumerable: true,
        configurable: true
    });
    ScrollView.prototype.getLayoutWidth = function () {
        return this.w - this.leftPadding - this.rightPadding;
    };
    ScrollView.prototype.getLayoutHeight = function () {
        return this.h - this.topPadding - this.bottomPadding;
    };
    ScrollView.prototype.getLayoutRect = function () {
        var w = this.getLayoutWidth();
        var h = this.getLayoutHeight();
        if (this.dragToScroll) {
            if (this.isVScrollBarVisible()) {
                w -= this._scrollBarStyle.size;
            }
            if (this.isHScrollBarVisible()) {
                h -= this._scrollBarStyle.size;
            }
        }
        return this.layoutRect.init(this.leftPadding, this.topPadding, w, h);
    };
    ScrollView.prototype.onInit = function () {
        _super.prototype.onInit.call(this);
        this.initScroller(this._scrollerOptions);
        this._scrollBarOpacity = this.dragToScroll ? 1 : 0;
    };
    ScrollView.prototype.onReset = function () {
        var _this = this;
        _super.prototype.onReset.call(this);
        this._ox = 0;
        this._oy = 0;
        this._cw = 0;
        this._ch = 0;
        this._scrollerOptions = {
            scrollingX: true,
            scrollingY: true,
            decelerationRate: 0.95,
            penetrationAcceleration: 0.08
        };
        this._scroller = null;
        this._scrollBarStyle = new ScrollBarStyle();
        this._touches = [{ pageX: 0, pageY: 0, id: 0 }];
        this._hScrollBarRect = rect_1.Rect.create(0, 0, 0, 0);
        this._vScrollBarRect = rect_1.Rect.create(0, 0, 0, 0);
        this._hScrollDraggerRect = rect_1.Rect.create(0, 0, 0, 0);
        this._vScrollDraggerRect = rect_1.Rect.create(0, 0, 0, 0);
        this.on(Events.WHEEL, function (evt) {
            _this.onWheel(evt);
        });
        this._scrollEvent = Events.ScrollEvent.create();
    };
    ScrollView.prototype.getDefProps = function () {
        return ScrollView.defProps;
    };
    ScrollView.create = function (options) {
        return ScrollView.recycleBin.create().reset(ScrollView.TYPE, options);
    };
    ScrollView.defProps = Object.assign({}, widget_1.Widget.defProps, { _lp: 2, _tp: 2, _rp: 2, _bp: 2 });
    ScrollView.TYPE = "scroll-view";
    ScrollView.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new ScrollView(); });
    return ScrollView;
}(widget_1.Widget));
exports.ScrollView = ScrollView;
;
(function (ScrollerBarVisibility) {
    ScrollerBarVisibility[ScrollerBarVisibility["INVISIBLE"] = 0] = "INVISIBLE";
    ScrollerBarVisibility[ScrollerBarVisibility["AUTO"] = 1] = "AUTO";
    ScrollerBarVisibility[ScrollerBarVisibility["ALWAYS"] = 2] = "ALWAYS";
})(exports.ScrollerBarVisibility || (exports.ScrollerBarVisibility = {}));
var ScrollerBarVisibility = exports.ScrollerBarVisibility;
;
var ScrollBarStyle = (function () {
    function ScrollBarStyle() {
        this.size = 12;
        this.draggerSize = 8;
        this.roundRadius = 4;
        this.lineColor = "#E7E7E7";
        this.lineColor = "#E0E0E0";
        this.lineWidth = 0.5;
        this.backGroundColor = "#FAFAFA";
        this.foreGroundColor = "#c1c1c1";
        this.foreGroundOverColor = "#818181";
        this.hBarVisibility = ScrollerBarVisibility.AUTO;
        this.vBarVisibility = ScrollerBarVisibility.AUTO;
    }
    return ScrollBarStyle;
}());
exports.ScrollBarStyle = ScrollBarStyle;
;
widget_factory_1.WidgetFactory.register(ScrollView.TYPE, ScrollView.create);
