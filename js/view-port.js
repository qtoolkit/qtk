/// <reference path="../typings/globals/eventemitter3/index.d.ts"/>
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
var emitter_1 = require("./emitter");
var Events = require("./events");
/**
 * 表示屏幕大小和密度。
 */
var ViewPort = (function (_super) {
    __extends(ViewPort, _super);
    function ViewPort() {
        return _super.call(this) || this;
    }
    ViewPort.prototype.getScaleValues = function () {
        var scale = (1 / (this.density)).toString();
        var str = "initial-scale=SS, minimum-scale=SS, maximum-scale=SS, user-scalable=0";
        return "target-densitydpi=device-dpi, width=device-width, " + str.replace(/SS/g, scale);
    };
    ViewPort.prototype.updateHeadViewportMeta = function (value) {
        var meta = null;
        var head = document.getElementsByTagName('head')[0];
        var arr = document.getElementsByTagName('meta');
        for (var i = 0; i < arr.length; i++) {
            var iter = arr[i];
            if (iter.name === "viewport") {
                meta = iter;
                break;
            }
        }
        if (!meta) {
            meta = document.createElement('meta');
            head.appendChild(meta);
        }
        meta.name = 'viewport';
        meta.content = value;
    };
    ViewPort.prototype.init = function (width, height, density) {
        var _this = this;
        this._density = density || window.devicePixelRatio;
        this.updateHeadViewportMeta(this.getScaleValues());
        this._width = width || window.innerWidth;
        this._height = height || window.innerHeight;
        window.addEventListener(Events.RESIZE, function (evt) {
            _this._width = window.innerWidth;
            _this._height = window.innerHeight;
            _this.dispatchEvent({ type: "resize" });
        });
    };
    Object.defineProperty(ViewPort.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewPort.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewPort.prototype, "w", {
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewPort.prototype, "h", {
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewPort.prototype, "density", {
        get: function () {
            return this._density;
        },
        enumerable: true,
        configurable: true
    });
    ViewPort.create = function (width, height, density) {
        var vp = new ViewPort();
        vp.init(width, height, density);
        return vp;
    };
    return ViewPort;
}(emitter_1.Emitter));
exports.ViewPort = ViewPort;
