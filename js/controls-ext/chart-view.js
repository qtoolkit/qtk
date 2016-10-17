"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
require("chart.js");
var point_1 = require("../point");
var Events = require("../events");
var widget_1 = require("../controls/widget");
var widget_factory_1 = require("../controls/widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
Chart.helpers.getRelativePosition = function (evt, chart) {
    return { x: evt.clientX, y: evt.clientY };
};
Chart.helpers.getMaximumWidth = function (domNode) {
    return domNode.width;
};
Chart.helpers.getMaximumHeight = function (domNode) {
    return domNode.height;
};
/**
 * 图表视图。对chart.js的封装。
 */
var ChartView = (function (_super) {
    __extends(ChartView, _super);
    function ChartView() {
        _super.call(this, ChartView.TYPE);
    }
    Object.defineProperty(ChartView.prototype, "config", {
        get: function () {
            return this._chartConfig;
        },
        /**
         * Chart需要的数据和配置。请在窗口open之前设置好。
         */
        set: function (value) {
            this._chartConfig = value;
            if (value && value.options) {
                value.options.responsive = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 数据和配置变化时，需要调用此函数请求图表更新。
     */
    ChartView.prototype.update = function () {
        this._chart.update();
        return this;
    };
    /**
     * 把事件转发给隐藏的Canvas处理。
     */
    ChartView.prototype.forwardPointerEvent = function (type, x, y) {
        var p = this.toLocalPoint(point_1.Point.point.init(x, y));
        var e = document.createEvent('MouseEvent');
        e.initMouseEvent(type, true, true, window, 0, 0, 0, p.x, p.y, false, false, false, false, 0, null);
        this._chartCanvas.dispatchEvent(e);
    };
    ChartView.prototype.dispatchPointerDown = function (evt, ctx) {
        _super.prototype.dispatchPointerDown.call(this, evt, ctx);
        this.forwardPointerEvent("mousedown", evt.x, evt.y);
    };
    ChartView.prototype.dispatchPointerMove = function (evt, ctx) {
        _super.prototype.dispatchPointerMove.call(this, evt, ctx);
        this.forwardPointerEvent("mousemove", evt.x, evt.y);
    };
    ChartView.prototype.dispatchPointerUp = function (evt) {
        _super.prototype.dispatchPointerUp.call(this, evt);
        this.forwardPointerEvent("mouseup", evt.x, evt.y);
    };
    ChartView.prototype.syncCavnas = function () {
        var canvas = this._chartCanvas;
        canvas.width = this.w;
        canvas.height = this.h;
    };
    ChartView.prototype.drawImage = function (ctx, style) {
        var w = this.w;
        var h = this.h;
        var sw = this._chartCanvas.width;
        var sh = this._chartCanvas.height;
        ctx.drawImage(this._chartCanvas, 0, 0, sw, sh, 0, 0, w, h);
        return this;
    };
    ChartView.prototype.onInit = function () {
        var _this = this;
        _super.prototype.onInit.call(this);
        this._chartCanvas = document.createElement("canvas");
        this.syncCavnas();
        var ctx = this._chartCanvas.getContext("2d");
        var me = this;
        ctx.oFill = ctx.fill;
        ctx.oStroke = ctx.stroke;
        ctx.fill = function () {
            ctx.oFill();
            me.requestRedraw();
        };
        ctx.stroke = function () {
            ctx.oStroke();
            me.requestRedraw();
        };
        this._chart = new Chart(ctx, this.config);
        var me = this;
        var chart = this._chart;
        var canvas = this._chartCanvas;
        this.on(Events.PROP_CHANGE, function (evt) {
            var prop = evt.prop;
            var value = evt.newValue;
            if (prop === "w" || prop === "h") {
                canvas.width = _this.w;
                canvas.height = _this.h;
                chart.resize();
            }
        });
    };
    ChartView.prototype.onDeinit = function () {
        _super.prototype.onDeinit.call(this);
        this._chart = null;
        this._chartCanvas = null;
        this._chartConfig = null;
    };
    ChartView.create = function (options) {
        return ChartView.recycleBin.create().reset(ChartView.TYPE, options);
    };
    ChartView.TYPE = "chart-view";
    ChartView.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new ChartView(); });
    return ChartView;
}(widget_1.Widget));
exports.ChartView = ChartView;
;
widget_factory_1.WidgetFactory.register(ChartView.TYPE, ChartView.create);
