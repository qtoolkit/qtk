"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var point_1 = require("../point");
var key_event_1 = require("../key-event");
var behavior_1 = require("./behavior");
/**
 * Resizable Behavior的初始化参数。
 */
var ResizableOptions = (function () {
    function ResizableOptions(options) {
        this.north = options.north || options.all || false;
        this.south = options.south || options.all || false;
        this.west = options.west || options.all || false;
        this.east = options.east || options.all || false;
        this.northWest = options.northWest || options.all || false;
        this.northEast = options.northEast || options.all || false;
        this.southWest = options.southWest || options.all || false;
        this.southEast = options.southEast || options.all || false;
        this.animateDuration = options.animateDuration >= 0 ? options.animateDuration : 500;
    }
    return ResizableOptions;
}());
exports.ResizableOptions = ResizableOptions;
;
/**
 * 让Widget具有可以Resizable的特性。
 * 当鼠标移动到Widget对应的位置，如四角和四边时，鼠标的指针会提示在此处按下鼠标可以resize Widget。
 *
 * Resize的过程中，按下ESCAPE键，Widget将恢复原来的位置与大小。
 */
var Resizable = (function (_super) {
    __extends(Resizable, _super);
    function Resizable(widget, options) {
        _super.call(this, Resizable.TYPE, widget, options);
    }
    Resizable.prototype.init = function (options) {
        this.options = new ResizableOptions(options);
    };
    Resizable.prototype.onCancelled = function () {
        this.widget.requestRedraw();
        document.body.style.cursor = "default";
        this.widget.moveResizeTo(this.x, this.y, this.w, this.h, this.options.animateDuration);
    };
    Resizable.prototype.onKeyDownGlobal = function (evt) {
        var keyCode = evt.detail.keyCode;
        if (keyCode === key_event_1.KeyEvent.VK_ESCAPE && this.resizing) {
            this.resizing = false;
            this.onCancelled();
        }
    };
    Resizable.prototype.onPointerDown = function (evt) {
        var result = this.testPointerPosition(evt);
        if (result) {
            this.x = this.widget.x;
            this.y = this.widget.y;
            this.w = this.widget.w;
            this.h = this.widget.h;
            this.resizing = true;
            this.pointerDownArea = result;
            document.body.style.cursor = result + "-resize";
        }
        else {
            document.body.style.cursor = "default";
        }
    };
    Resizable.prototype.onPointerUp = function (evt) {
        this.resizing = false;
        document.body.style.cursor = "default";
    };
    Resizable.prototype.testPointerPosition = function (evt) {
        var delta = 3;
        var w = this.widget.w;
        var h = this.widget.h;
        var p = this.widget.toLocalPoint(point_1.Point.point.init(evt.x, evt.y));
        var right = w - delta;
        var bottom = h - delta;
        var options = this.options;
        if (p.y >= 0 && p.y <= delta) {
            if (p.x >= 0 && p.x <= delta && options.northWest) {
                return "nw";
            }
            else if (p.x > delta && p.x < right && options.north) {
                return "n";
            }
            else if (p.x >= right && p.x <= w && options.northEast) {
                return "ne";
            }
        }
        else if (p.y > delta && p.y < bottom) {
            if (p.x >= 0 && p.x <= delta && options.west) {
                return "w";
            }
            else if (p.x >= right && p.x <= w && options.east) {
                return "e";
            }
        }
        else if (p.y >= bottom && p.y <= h && options.southWest) {
            if (p.x >= 0 && p.x <= delta) {
                return "sw";
            }
            else if (p.x > delta && p.x < right && options.south) {
                return "s";
            }
            else if (p.x >= right && p.x <= w && options.southEast) {
                return "se";
            }
        }
        return null;
    };
    Resizable.prototype.onPointerMove = function (evt) {
        if (this.resizing) {
            var widget = this.widget;
            var dx = evt.x - evt.pointerDownX;
            var dy = evt.y - evt.pointerDownY;
            switch (this.pointerDownArea) {
                case "n": {
                    widget.moveResizeTo(this.x, this.y + dy, this.w, this.h - dy);
                    break;
                }
                case "ne": {
                    widget.moveResizeTo(this.x, this.y + dy, this.w + dx, this.h - dy);
                    break;
                }
                case "nw": {
                    widget.moveResizeTo(this.x + dx, this.y + dy, this.w - dx, this.h - dy);
                    break;
                }
                case "w": {
                    widget.moveResizeTo(this.x + dx, this.y, this.w - dx, this.h);
                    break;
                }
                case "e": {
                    widget.moveResizeTo(this.x, this.y, this.w + dx, this.h);
                    break;
                }
                case "s": {
                    widget.moveResizeTo(this.x, this.y, this.w, this.h + dy);
                    break;
                }
                case "se": {
                    widget.moveResizeTo(this.x, this.y, this.w + dx, this.h + dy);
                    break;
                }
                case "sw": {
                    widget.moveResizeTo(this.x + dx, this.y, this.w - dx, this.h + dy);
                    break;
                }
            }
        }
        else {
            var result = this.testPointerPosition(evt);
            if (result) {
                document.body.style.cursor = result + "-resize";
            }
            else {
                document.body.style.cursor = "default";
            }
        }
    };
    Resizable.TYPE = "resizable";
    return Resizable;
}(behavior_1.Behavior));
exports.Resizable = Resizable;
behavior_1.BehaviorFactory.register(Resizable.TYPE, function (widget, options) {
    return new Resizable(widget, options);
});
