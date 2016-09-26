"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var consts_1 = require('../consts');
var utils_1 = require("../utils");
var layouter_1 = require('./layouter');
var TYPE_H = "linear-h";
var TYPE_V = "linear-v";
/**
 * 线性布局器。可以设置为水平和垂直两个方向。
 */
var LinearLayouter = (function (_super) {
    __extends(LinearLayouter, _super);
    function LinearLayouter() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(LinearLayouter.prototype, "type", {
        get: function () {
            return this.orientation === consts_1.Orientation.V ? TYPE_V : TYPE_H;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 设置参数。
     */
    LinearLayouter.prototype.setOptions = function (options) {
        this.spacing = options.spacing || 0;
        this.orientation = options.orientation || consts_1.Orientation.V;
        return this;
    };
    LinearLayouter.prototype.layoutChildren = function (widget, children, rect) {
        var _this = this;
        var r = rect.clone();
        var defParam = this.type === TYPE_H ? LinearLayouterParam.defParamH : LinearLayouterParam.defParamV;
        var arr = children.filter(function (child) {
            var param = child.layoutParam || defParam;
            return param.position > 0;
        });
        utils_1.stableSort(arr, function (a, b) {
            var ap = a.layoutParam || defParam;
            var bp = b.layoutParam || defParam;
            return ap.position - bp.position;
        });
        arr.forEach(function (child) {
            if (r.w > 0 && r.h > 0) {
                _this.layoutChild(child, r);
            }
        });
        arr = children.filter(function (child) {
            var param = child.layoutParam || defParam;
            return !param.position;
        });
        arr.forEach(function (child) {
            if (r.w > 0 && r.h > 0) {
                _this.layoutChild(child, r);
            }
        });
        arr = children.filter(function (child) {
            var param = child.layoutParam || defParam;
            return param.position < 0;
        });
        utils_1.stableSort(arr, function (a, b) {
            var ap = a.layoutParam || defParam;
            var bp = b.layoutParam || defParam;
            return bp.position - ap.position;
        });
        arr.forEach(function (child) {
            if (r.w > 0 && r.h > 0) {
                _this.layoutChild(child, r);
            }
        });
        r.dispose();
        return rect;
    };
    LinearLayouter.prototype.layoutChild = function (child, r) {
        var x = 0;
        var y = 0;
        var w = 0;
        var h = 0;
        var defParam = this.type === TYPE_H ? LinearLayouterParam.defParamH : LinearLayouterParam.defParamV;
        var param = child.layoutParam || defParam;
        var position = param.position;
        if (param && param.type.indexOf("linear") >= 0 && child.visible) {
            var spacing = param.spacing || this.spacing;
            h = Math.min(r.h, param.h ? layouter_1.Layouter.evalValue(param.h, r.h) : child.h);
            w = Math.min(r.w, param.w ? layouter_1.Layouter.evalValue(param.w, r.w) : child.w);
            if (this.orientation === consts_1.Orientation.V) {
                switch (param.align) {
                    case consts_1.Align.LEFT: {
                        x = r.x;
                        break;
                    }
                    case consts_1.Align.RIGHT: {
                        x = r.x + r.w - w;
                        break;
                    }
                    default: {
                        x = r.x + ((r.w - w) >> 1);
                        break;
                    }
                }
                var spacingH = spacing + h;
                if (position >= 0) {
                    y = r.y + spacing;
                    r.y += spacingH;
                }
                else {
                    y = r.y + r.h - spacingH;
                }
                r.h -= spacingH;
            }
            else {
                switch (param.align) {
                    case consts_1.Align.TOP: {
                        y = r.y;
                        break;
                    }
                    case consts_1.Align.BOTTOM: {
                        y = r.y + r.h - h;
                        break;
                    }
                    default: {
                        y = r.y + ((r.h - h) >> 1);
                        break;
                    }
                }
                var spacingW = spacing + w;
                if (position >= 0) {
                    x = r.x + spacing;
                    r.x += spacingW;
                }
                else {
                    x = r.x + r.w - spacingW;
                }
                r.w -= spacingW;
            }
            child.moveResizeTo(x, y, w, h);
            child.relayoutChildren();
        }
    };
    LinearLayouter.prototype.createParam = function (options) {
        return LinearLayouterParam.createWithType(this.type, options);
    };
    LinearLayouter.createV = function (options) {
        var layouter = new LinearLayouter();
        layouter.setOptions(options);
        layouter.orientation = consts_1.Orientation.V;
        return layouter;
    };
    LinearLayouter.createH = function (options) {
        var layouter = new LinearLayouter();
        layouter.setOptions(options || {});
        layouter.orientation = consts_1.Orientation.H;
        return layouter;
    };
    return LinearLayouter;
}(layouter_1.Layouter));
exports.LinearLayouter = LinearLayouter;
;
layouter_1.LayouterFactory.register(TYPE_H, LinearLayouter.createH);
layouter_1.LayouterFactory.register(TYPE_V, LinearLayouter.createV);
/**
 * Linear布局器的参数。
 *
 * 如果父控件使用LinearLayouter布局器，则子控件需要把layoutParam设置为LinearLayouterParam。
 *
 * 对于w参数：
 * *.如果以px结尾，则直接取它的值。
 * *.如果以%结尾，则表示剩余空间的宽度/高度的百分比。
 *
 */
var LinearLayouterParam = (function () {
    function LinearLayouterParam(type, w, h, spacing, align, position) {
        this.type = type || TYPE_V;
        this.w = w;
        this.h = h;
        this.align = align;
        this.spacing = spacing;
        this.position = position;
    }
    LinearLayouterParam.createWithType = function (type, opts) {
        var options = opts || {};
        return new LinearLayouterParam(type, options.w || options.width, options.h || options.height, options.spacing || 0, options.align || consts_1.Align.C, options.position === undefined ? 1 : options.position);
    };
    LinearLayouterParam.create = function (opts) {
        return this.createWithType(TYPE_H, opts);
    };
    LinearLayouterParam.defParamV = LinearLayouterParam.createWithType(TYPE_V, null);
    LinearLayouterParam.defParamH = LinearLayouterParam.createWithType(TYPE_H, null);
    return LinearLayouterParam;
}());
exports.LinearLayouterParam = LinearLayouterParam;
;
