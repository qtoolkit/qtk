"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var consts_1 = require('../consts');
var layouter_1 = require('./layouter');
var TYPE = "dock";
/**
 * Dock布局器。
 */
var DockLayouter = (function (_super) {
    __extends(DockLayouter, _super);
    function DockLayouter() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(DockLayouter.prototype, "type", {
        get: function () {
            return TYPE;
        },
        enumerable: true,
        configurable: true
    });
    DockLayouter.prototype.layoutChildren = function (widget, children, rect) {
        var _this = this;
        var r = rect.clone();
        var arr = widget.children.forEach(function (child) {
            if (r.w > 0 && r.h > 0) {
                _this.layoutChild(child, r);
            }
        });
        r.dispose();
        return rect;
    };
    DockLayouter.prototype.layoutChild = function (child, r) {
        var x = 0;
        var y = 0;
        var w = 0;
        var h = 0;
        var param = child.layoutParam;
        if (param && param.type === TYPE && child.visible) {
            switch (param.position) {
                case consts_1.Direction.LEFT: {
                    x = r.x;
                    y = r.y;
                    h = r.h;
                    w = Math.min(r.w, param.size ? layouter_1.Layouter.evalValue(param.size, r.w) : child.w);
                    r.x += w;
                    r.w -= w;
                    break;
                }
                case consts_1.Direction.RIGHT: {
                    y = r.y;
                    h = r.h;
                    w = Math.min(r.w, param.size ? layouter_1.Layouter.evalValue(param.size, r.w) : child.w);
                    x = r.x + r.w - w;
                    r.w -= w;
                    break;
                }
                case consts_1.Direction.BOTTOM: {
                    x = r.x;
                    w = r.w;
                    h = Math.min(r.h, param.size ? layouter_1.Layouter.evalValue(param.size, r.h) : child.h);
                    y = r.y + r.h - h;
                    r.h -= h;
                    break;
                }
                default: {
                    x = r.x;
                    y = r.y;
                    w = r.w;
                    h = Math.min(r.h, param.size ? layouter_1.Layouter.evalValue(param.size, r.h) : child.h);
                    r.h -= h;
                    r.y += h;
                    break;
                }
            }
            child.moveResizeTo(x, y, w, h);
            child.relayoutChildren();
        }
    };
    DockLayouter.prototype.createParam = function (options) {
        return DockLayouterParam.create(options);
    };
    DockLayouter.create = function (options) {
        var layouter = new DockLayouter();
        return layouter.setOptions(options);
    };
    return DockLayouter;
}(layouter_1.Layouter));
exports.DockLayouter = DockLayouter;
;
layouter_1.LayouterFactory.register(TYPE, DockLayouter.create);
/**
 * Dock布局器的参数。
 *
 * 如果父控件使用DockLayouter布局器，则子控件需要把layoutParam设置为DockLayouterParam。
 *
 * 对于size参数：
 * *.如果以px结尾，则直接取它的值。
 * *.如果以%结尾，则表示剩余空间的宽度/高度的百分比。
 *
 */
var DockLayouterParam = (function () {
    function DockLayouterParam(position, size) {
        this.type = TYPE;
        this.size = size;
        this.position = position;
    }
    DockLayouterParam.create = function (opts) {
        var options = opts || {};
        return new DockLayouterParam(options.position, options.size || "");
    };
    return DockLayouterParam;
}());
exports.DockLayouterParam = DockLayouterParam;
;
