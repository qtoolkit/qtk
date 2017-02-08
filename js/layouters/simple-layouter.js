"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var layouter_1 = require('./layouter');
var TYPE = "simple";
/**
 * 简单的布局器。
 */
var SimpleLayouter = (function (_super) {
    __extends(SimpleLayouter, _super);
    function SimpleLayouter() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(SimpleLayouter.prototype, "type", {
        get: function () {
            return TYPE;
        },
        enumerable: true,
        configurable: true
    });
    SimpleLayouter.prototype.layoutChildren = function (widget, children, rect) {
        var arr = widget.children;
        for (var i = 0, n = arr.length; i < n; i++) {
            this.layoutChild(arr[i], rect);
        }
        return rect;
    };
    SimpleLayouter.prototype.layoutChild = function (child, r) {
        var pw = r.w;
        var ph = r.h;
        var param = child.layoutParam;
        if (param && param.type === TYPE && child.visible) {
            var w = layouter_1.Layouter.evalValue(param.w, pw);
            var h = layouter_1.Layouter.evalValue(param.h, ph);
            if (param.minW >= 0) {
                w = Math.max(w, param.minW);
            }
            if (param.minH >= 0) {
                h = Math.max(h, param.minH);
            }
            if (param.maxW >= 0) {
                w = Math.min(w, param.maxW);
            }
            if (param.maxH >= 0) {
                h = Math.min(h, param.maxH);
            }
            var f = param.x[0];
            var x = (f === "c" || f === "m") ? (pw - w) >> 1 : layouter_1.Layouter.evalValue(param.x, pw);
            f = param.y[0];
            var y = (f === "c" || f === "m") ? (ph - h) >> 1 : layouter_1.Layouter.evalValue(param.y, ph);
            child.moveResizeTo(r.x + x, r.y + y, w, h);
            child.relayoutChildren();
        }
    };
    SimpleLayouter.prototype.createParam = function (options) {
        return SimpleLayouterParam.createWithOptions(options);
    };
    SimpleLayouter.create = function () {
        return SimpleLayouter.createWithOptions({});
    };
    SimpleLayouter.createWithOptions = function (options) {
        var layouter = new SimpleLayouter();
        return layouter.setOptions(options);
    };
    return SimpleLayouter;
}(layouter_1.Layouter));
exports.SimpleLayouter = SimpleLayouter;
;
layouter_1.LayouterFactory.register(TYPE, SimpleLayouter.createWithOptions);
/**
 * 简单的布局器的参数。
 *
 * 如果父控件使用SimpleLayouter布局器，则子控件需要把layoutParam设置为SimpleLayouterParam。
 *
 * 对于x/y/w/h参数：
 * *.如果以px结尾，则直接取它的值。
 * *.如果以%结尾，则表示父控件的宽度/高度的百分比。
 * *.如果以-开头，则表示父控件的宽度/高度的减去该值。
 *
 * x也可以为『center』，表示水平居中。
 * y也可以为『middle』，表示垂直居中。
 *
 * 示例：
 *
 * 父控件的宽度为800，高度为600:
 *
 * param.x = "10px"  则 x = 10;
 * param.x = "10%"   则 x = 80;
 * param.x = "-10%"  则 x = 720;
 * param.x = "-10px" 则 x = 790;
 *
 */
var SimpleLayouterParam = (function (_super) {
    __extends(SimpleLayouterParam, _super);
    function SimpleLayouterParam(x, y, w, h) {
        _super.call(this, TYPE);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.minW = -1;
        this.minH = -1;
        this.maxW = -1;
        this.maxH = -1;
    }
    SimpleLayouterParam.create = function (x, y, w, h) {
        return new SimpleLayouterParam(x.toString(), y.toString(), w.toString(), h.toString());
    };
    SimpleLayouterParam.createWithOptions = function (opts) {
        var options = opts || {};
        return new SimpleLayouterParam(options.x || '0px', options.y || 'center', options.w || '100%', options.h || '100%');
    };
    return SimpleLayouterParam;
}(layouter_1.LayouterParam));
exports.SimpleLayouterParam = SimpleLayouterParam;
;
layouter_1.LayouterParamFactory.register(TYPE, SimpleLayouterParam.createWithOptions);
