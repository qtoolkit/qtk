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
var key_event_1 = require("../key-event");
var behavior_1 = require("./behavior");
/**
 * Movable Behavior的初始化参数。
 */
var MovableOptions = (function () {
    function MovableOptions(opts) {
        var options = opts || {};
        this.xMin = options.xMin || 0;
        this.yMin = options.yMin || 0;
        this.xMax = options.xMax || 0;
        this.yMax = options.yMax || 0;
        this.xLimit = options.xLimit || false;
        this.yLimit = options.yLimit || false;
        this.xMovable = options.xMovable !== undefined ? options.xMovable : true;
        this.yMovable = options.yMovable !== undefined ? options.yMovable : true;
        this.moveParent = options.moveParent || false;
        this.animateDuration = options.animateDuration >= 0 ? options.animateDuration : 500;
    }
    return MovableOptions;
}());
exports.MovableOptions = MovableOptions;
;
/**
 * 让Widget具有可以Movable的特性，按住鼠标可以拖动控件。
 *
 * move的过程中，按下ESCAPE键，Widget将恢复原来的位置。
 */
var Movable = (function (_super) {
    __extends(Movable, _super);
    function Movable(widget, options) {
        var _this = _super.call(this, Movable.TYPE, widget, options) || this;
        _this.movingEvent = { type: Events.MOVING };
        _this.moveEndEvent = { type: Events.MOVE_END };
        _this.moveBeginEvent = { type: Events.MOVE_BEGIN };
        _this.moveCancelEvent = { type: Events.MOVE_CANCEL };
        return _this;
    }
    Movable.prototype.init = function (options) {
        this.options = new MovableOptions(options);
    };
    Movable.prototype.moveWidget = function (x, y, end) {
        var options = this.options;
        var moveParent = options.moveParent;
        var widget = moveParent ? this.widget.parent : this.widget;
        if (!options.xMovable) {
            x = widget.x;
        }
        if (!options.yMovable) {
            y = widget.y;
        }
        if (options.xLimit) {
            x = Math.min(options.xMax, Math.max(options.xMin, x));
        }
        if (options.yLimit) {
            y = Math.min(options.yMax, Math.max(options.yMin, y));
        }
        widget.moveTo(x, y);
        if (end) {
            widget.dispatchEvent(this.moveEndEvent);
        }
        else {
            widget.dispatchEvent(this.movingEvent);
        }
    };
    Movable.prototype.onCancelled = function () {
        var _this = this;
        var animate = true;
        var widget = this.widget;
        var duration = this.options.animateDuration;
        widget.requestRedraw();
        document.body.style.cursor = "default";
        var tween = widget.moveTo(this.x, this.y, duration);
        if (tween) {
            tween.onComplete(function (evt) {
                widget.dispatchEvent(_this.moveCancelEvent);
            });
            tween.onUpdate(function (evt) {
                widget.dispatchEvent(_this.movingEvent);
            });
            return;
        }
    };
    Movable.prototype.onKeyDownGlobal = function (evt) {
        var keyCode = evt.detail.keyCode;
        if (keyCode === key_event_1.KeyEvent.VK_ESCAPE && this.dragging) {
            this.dragging = false;
            this.onCancelled();
        }
    };
    Movable.prototype.onPointerDown = function (evt) {
        var moveParent = this.options.moveParent;
        var widget = moveParent ? this.widget.parent : this.widget;
        this.x = widget.x;
        this.y = widget.y;
        this.dragging = true;
        widget.dispatchEvent(this.moveBeginEvent);
        document.body.style.cursor = "move";
    };
    Movable.prototype.onPointerUp = function (evt) {
        document.body.style.cursor = "default";
        if (this.dragging) {
            this.dragging = false;
            var dx = evt.dx;
            var dy = evt.dy;
            this.moveWidget(this.x + dx, this.y + dy, true);
        }
    };
    Movable.prototype.onPointerMove = function (evt) {
        if (this.dragging) {
            var dx = evt.dx;
            var dy = evt.dy;
            this.moveWidget(this.x + dx, this.y + dy, false);
        }
    };
    ;
    return Movable;
}(behavior_1.Behavior));
Movable.TYPE = "movable";
exports.Movable = Movable;
behavior_1.BehaviorFactory.register(Movable.TYPE, function (widget, options) {
    return new Movable(widget, options);
});
