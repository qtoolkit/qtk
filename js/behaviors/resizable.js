"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var point_1 = require("../point");
var Events = require("../events");
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
    function Resizable(widget, options, type) {
        _super.call(this, type || Resizable.TYPE, widget, options);
        this.resizingEvent = { type: Events.RESIZING };
        this.resizeEndEvent = { type: Events.RESIZE_END };
        this.resizeBeginEvent = { type: Events.RESIZE_BEGIN };
        this.resizeCancelEvent = { type: Events.RESIZE_CANCEL };
        this.border = 5;
    }
    Resizable.prototype.init = function (options) {
        this.options = new ResizableOptions(options);
    };
    Resizable.prototype.onCancelled = function () {
        var _this = this;
        var widget = this.widget;
        var duration = this.options.animateDuration;
        widget.requestRedraw();
        document.body.style.cursor = "default";
        var tween = this.widget.moveResizeTo(this.x, this.y, this.w, this.h, duration);
        if (tween) {
            tween.onComplete(function (evt) {
                widget.dispatchEvent(_this.resizeCancelEvent);
            });
            tween.onUpdate(function (evt) {
                widget.dispatchEvent(_this.resizingEvent);
            });
        }
        else {
            widget.dispatchEvent(this.resizeCancelEvent);
        }
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
            var widget = this.widget;
            this.x = widget.x;
            this.y = widget.y;
            this.w = widget.w;
            this.h = widget.h;
            this.resizing = true;
            this.pointerDownArea = result;
            document.body.style.cursor = result + "-resize";
            widget.dispatchEvent(this.resizeBeginEvent);
        }
        else {
            document.body.style.cursor = "default";
        }
    };
    Resizable.prototype.onPointerUp = function (evt) {
        if (this.resizing) {
            this.widget.dispatchEvent(this.resizeEndEvent);
        }
        this.resizing = false;
        this.pointerDownArea = null;
        document.body.style.cursor = "default";
    };
    Resizable.prototype.testPointerPosition = function (evt) {
        var border = this.border;
        var w = this.widget.w;
        var h = this.widget.h;
        var right = w - border;
        var bottom = h - border;
        var options = this.options;
        var p = this.widget.toLocalPoint(point_1.Point.point.init(evt.x, evt.y));
        var southResizable = options.southWest || options.southEast || options.south;
        var northResizable = options.northWest || options.northEast || options.north;
        if (p.y >= 0 && p.y <= border) {
            if (p.x >= 0 && p.x <= border && northResizable) {
                return "nw";
            }
            else if (p.x > border && p.x < right && options.north) {
                return "n";
            }
            else if (p.x >= right && p.x <= w && options.northEast) {
                return "ne";
            }
        }
        else if (p.y > border && p.y < bottom) {
            if (p.x >= 0 && p.x <= border && options.west) {
                return "w";
            }
            else if (p.x >= right && p.x <= w && options.east) {
                return "e";
            }
        }
        else if (p.y >= bottom && p.y <= h && southResizable) {
            if (p.x >= 0 && p.x <= border) {
                return "sw";
            }
            else if (p.x > border && p.x < right && options.south) {
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
            var dx = evt.dx;
            var dy = evt.dy;
            var widget = this.widget;
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
            widget.dispatchEvent(this.resizingEvent);
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
