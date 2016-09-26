/// <reference path="../typings/globals/eventemitter3/index.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EventEmitter = require("eventemitter3");
var EmitterImpl = (function (_super) {
    __extends(EmitterImpl, _super);
    function EmitterImpl() {
        _super.call(this);
    }
    return EmitterImpl;
}(EventEmitter));
function toCaptureEventName(name) {
    return name + ".capture";
}
/**
 * 事件分发器。
 */
var Emitter = (function () {
    function Emitter() {
        this.emitter = new EmitterImpl();
    }
    /***
     * 注册事件处理函数。
     * @param type 事件的名称。
     * @param callback 回调函数。
     * @param useCapture 是否注册为capture阶段的处理函数。
     */
    Emitter.prototype.on = function (type, callback, useCapture) {
        this.addEventListener(type, callback, useCapture);
    };
    /***
     * 注册事件处理函数(只执行一次)。
     * @param type 事件的名称。
     * @param callback 回调函数。
     * @param useCapture 是否注册为capture阶段的处理函数。
     */
    Emitter.prototype.once = function (type, callback) {
        this.emitter.once(type, callback, this);
    };
    /***
     * 注消事件处理函数。
     * @param type 事件的名称。
     * @param callback 回调函数。
     * @param useCapture 是否注消capture阶段的处理函数。
     */
    Emitter.prototype.off = function (type, callback, useCapture) {
        this.removeEventListener(type, callback, useCapture);
    };
    /***
     * 注册事件处理函数。
     * @param type 事件的名称。
     * @param callback 回调函数。
     * @param useCapture 是否注册为capture阶段的处理函数。
     */
    Emitter.prototype.addEventListener = function (type, callback, useCapture) {
        if (useCapture) {
            this.emitter.addListener(toCaptureEventName(type), callback, this);
        }
        else {
            this.emitter.addListener(type, callback, this);
        }
    };
    /***
     * 注消事件处理函数。
     * @param type 事件的名称。
     * @param callback 回调函数。
     * @param useCapture 是否注消capture阶段的处理函数。
     */
    Emitter.prototype.removeEventListener = function (type, callback, useCapture) {
        if (useCapture) {
            this.emitter.removeListener(toCaptureEventName(type), callback, this);
        }
        else {
            this.emitter.removeListener(type, callback, this);
        }
    };
    /***
     * 分发异步事件。
     * @param evt 事件。
     * @param useCapture 是否触发capture阶段的处理函数。
     */
    Emitter.prototype.dispatchEventAsync = function (evt, useCapture) {
        var _this = this;
        setTimeout(function (e) {
            _this.dispatchEvent(evt, useCapture);
        }, 0);
    };
    /***
     * 分发事件。
     * @param evt 事件。
     * @param useCapture 是否触发capture阶段的处理函数。
     */
    Emitter.prototype.dispatchEvent = function (evt, useCapture) {
        if (evt.propagationStopped) {
            console.log("evt.propagationStopped = true;");
            return;
        }
        var emitter = this.emitter;
        if (useCapture) {
            emitter.emit(toCaptureEventName(evt.type), evt);
        }
        else {
            emitter.emit(evt.type, evt);
        }
    };
    Emitter.prototype.removeAllListeners = function (event) {
        this.emitter.removeAllListeners(event);
    };
    return Emitter;
}());
exports.Emitter = Emitter;
