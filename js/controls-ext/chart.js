"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
require("chart.js");
var widget_1 = require("../controls/widget");
var widget_factory_1 = require("../controls/widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
var ChartView = (function (_super) {
    __extends(ChartView, _super);
    function ChartView() {
        _super.call(this, ChartView.TYPE);
    }
    Object.defineProperty(ChartView.prototype, "config", {
        get: function () {
            return this._chartConfig;
        },
        set: function (value) {
            this._chartConfig = value;
        },
        enumerable: true,
        configurable: true
    });
    ChartView.prototype.syncCavnas = function () {
        var canvas = this._chartCanvas;
        canvas.width = this.w;
        canvas.height = this.h;
    };
    ChartView.prototype.drawImage = function (ctx, style) {
        ctx.draw(this._chartCanvas, 0, 0);
        return this;
    };
    ChartView.prototype.onInit = function () {
        _super.prototype.onInit.call(this);
        this._chartCanvas = document.createElement("canvas");
        this.syncCavnas();
        var ctx = this._chartCanvas.getContext("2d");
        this._chart = new Chart(ctx, this.config);
    };
    ChartView.create = function (options) {
        return ChartView.recycleBin.create().reset(ChartView.TYPE, options);
    };
    ChartView.TYPE = "chart";
    ChartView.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new ChartView(); });
    return ChartView;
}(widget_1.Widget));
exports.ChartView = ChartView;
;
widget_factory_1.WidgetFactory.register(ChartView.TYPE, ChartView.create);
