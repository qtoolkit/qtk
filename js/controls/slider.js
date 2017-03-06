"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Events = require("../events");
var button_1 = require("./button");
var graphics_1 = require("../graphics");
var widget_factory_1 = require("./widget-factory");
var widget_recyclable_creator_1 = require("./widget-recyclable-creator");
var progress_bar_1 = require("./progress-bar");
/**
 * 滑块控件。拖动滑块可以改变它的值。
 */
var Slider = (function (_super) {
    __extends(Slider, _super);
    function Slider(type) {
        return _super.call(this, type || Slider.TYPE) || this;
    }
    Object.defineProperty(Slider.prototype, "inputable", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Slider.prototype.onDraggerMoved = function (dragEnd) {
        var oldValue = this.dragger.userData;
        if (this.barType === progress_bar_1.ProgressBarType.V) {
            var h = this.dragger.h;
            var y = this.h - this.dragger.y;
            if (y < 2 * h) {
                y -= h;
            }
            else if (y < (this.h - h)) {
                y -= h >> 1;
            }
            else {
                //	y = y;
            }
            this._value = y / this.h;
        }
        else {
            var w = this.dragger.w;
            var x = this.dragger.x;
            if (x < w) {
                //	x = x;
            }
            else if (x < (this.w - 2 * w)) {
                x += w >> 1;
            }
            else {
                x += w;
            }
            this._value = x / this.w;
        }
        if (dragEnd) {
            this.eChangeEvent.init(Events.CHANGE, { newValue: this.value, oldValue: oldValue });
        }
        else {
            this.eChangeEvent.init(Events.CHANGING, { newValue: this.value, oldValue: null });
        }
        this.dispatchEvent(this.eChangeEvent);
        this.requestRedraw();
    };
    Slider.prototype.relayoutChildren = function () {
        var dragger = this.dragger;
        if (dragger) {
            if (this.barType === progress_bar_1.ProgressBarType.V) {
                dragger.w = this.w;
                dragger.h = this.w;
                dragger.x = 0;
                dragger.y = (1 - this.value) * this.h;
                dragger.useBehavior("movable", { xMovable: false, yLimit: true, yMin: 0, yMax: this.h - this.w });
            }
            else {
                dragger.w = this.h;
                dragger.h = this.h;
                dragger.y = 0;
                dragger.x = this.value * this.w;
                dragger.useBehavior("movable", { yMovable: false, xLimit: true, xMin: 0, xMax: this.w - this.h });
            }
        }
        return null;
    };
    Slider.prototype.onInit = function () {
        var _this = this;
        _super.prototype.onInit.call(this);
        var dragger = button_1.Button.create();
        this.addChild(dragger);
        dragger.styleType = "slider-dragger";
        dragger.on(Events.MOVING, function (evt) {
            _this.onDraggerMoved(false);
        });
        dragger.on(Events.MOVE_END, function (evt) {
            _this.onDraggerMoved(true);
        });
        dragger.on(Events.MOVE_BEGIN, function (evt) {
            dragger.userData = _this.value;
        });
        this.dragger = dragger;
    };
    Slider.prototype.setProp = function (prop, newValue, notify) {
        _super.prototype.setProp.call(this, prop, newValue, notify);
        if (prop === "w" || prop === "h" || prop === "value") {
            this.relayoutChildren();
        }
        return this;
    };
    Slider.prototype.drawColorBackground = function (ctx, style) {
        var x1 = 0;
        var y1 = 0;
        var x2 = 0;
        var y2 = 0;
        if (this.barType === progress_bar_1.ProgressBarType.V) {
            x1 = x2 = this.w >> 1;
            y1 = 0;
            y2 = this.h;
        }
        else {
            y1 = y2 = this.h >> 1;
            x1 = 0;
            x2 = this.w;
        }
        graphics_1.Graphics.drawLine(ctx, style.backGroundColor, style.lineWidth, x1, y1, x2, y2);
        return this;
    };
    Slider.prototype.drawColorForeGround = function (ctx, style) {
        var x1 = 0;
        var y1 = 0;
        var x2 = 0;
        var y2 = 0;
        if (this.barType === progress_bar_1.ProgressBarType.V) {
            x1 = x2 = this.w >> 1;
            y1 = this.h;
            y2 = this.h * (1 - this.value);
        }
        else {
            y1 = y2 = this.h >> 1;
            x1 = 0;
            x2 = this.w * this.value;
        }
        graphics_1.Graphics.drawLine(ctx, style.foreGroundColor, style.lineWidth, x1, y1, x2, y2);
        return this;
    };
    Slider.create = function (options) {
        return Slider.r.create(options);
    };
    return Slider;
}(progress_bar_1.ProgressBar));
Slider.TYPE = "slider";
Slider.r = widget_recyclable_creator_1.WidgetRecyclableCreator.create(Slider);
exports.Slider = Slider;
;
widget_factory_1.WidgetFactory.register(Slider.TYPE, Slider.create);
