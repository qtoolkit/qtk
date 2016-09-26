"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Events = require("./events");
var emitter_1 = require("./emitter");
/**
 * 负责渲染UI的主循环。为了省电，只有在调用requestRedraw之后，才会触发下一次渲染循环。
 * 每个渲染循环分为三个阶段：
 *
 * *.predraw 绘制前做一些工作，通常用于动画改变对象的属性。
 *
 * *.draw 绘制阶段。
 *
 * *.postdraw 绘制后一些收尾工作，如果绘制阶段只是生成命令队列，可以在此阶段提交。
 *
 */
var MainLoop = (function (_super) {
    __extends(MainLoop, _super);
    function MainLoop() {
        _super.call(this);
        this.pendingRedraw = 0;
        this.predrawEvent = Events.TickEvent.create(Events.PRETICK);
        this.drawEvent = Events.TickEvent.create(Events.TICK);
        this.postdrawEvent = Events.TickEvent.create(Events.POSTTICK);
    }
    MainLoop.prototype.requestRedraw = function () {
        var _this = this;
        if (!this.pendingRedraw++) {
            requestAnimationFrame(function (evt) {
                _this.exec();
            });
        }
    };
    MainLoop.prototype.exec = function () {
        var fps = 0;
        var time = Date.now();
        var deltaTime = performance.now();
        var detail = { fps: fps, time: time, deltaTime: deltaTime };
        this.drawEvent.init(Events.PRETICK, detail);
        this.predrawEvent.init(Events.TICK, detail);
        this.postdrawEvent.init(Events.POSTTICK, detail);
        this.pendingRedraw = 0;
        this.dispatchEvent(this.predrawEvent);
        this.dispatchEvent(this.drawEvent);
        this.dispatchEvent(this.postdrawEvent);
    };
    MainLoop.create = function () {
        return new MainLoop();
    };
    return MainLoop;
}(emitter_1.Emitter));
exports.MainLoop = MainLoop;
