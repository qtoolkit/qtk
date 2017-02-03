"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Events = require("../events");
var key_event_1 = require("../key-event");
var behavior_1 = require("./behavior");
/**
 * 让Widget具有拖放功能的拖动功能。
 *
 */
var Draggable = (function (_super) {
    __extends(Draggable, _super);
    function Draggable(widget, options) {
        _super.call(this, Draggable.TYPE, widget, options);
    }
    Draggable.prototype.init = function (options) {
        this.onDrawDragging = function (evt) {
            var ctx = evt.ctx;
            var win = evt.widget;
            var p = win.pointerPosition;
            var e = Events.DragEvent.get(Events.DRAGSTART, p.x, p.y);
            var image = e.dataTransfer.dragImage;
            if (image) {
                if (image.draw) {
                    image.draw(ctx, p.x, p.y);
                }
            }
            else {
                ctx.fillStyle = "green";
                ctx.fillRect(p.x, p.y, 10, 10);
            }
        };
    };
    Draggable.prototype.onCancelled = function () {
        var widget = this.widget;
        var p = widget.win.pointerPosition;
        widget.win.requestRedraw();
        Events.DragEvent.isDragging = false;
        widget.win.off(Events.AFTER_DRAW, this.onDrawDragging);
        widget.dispatchEvent(Events.DragEvent.get(Events.DRAGEND, p.x, p.y));
    };
    Draggable.prototype.onKeyDownGlobal = function (evt) {
        var keyCode = evt.detail.keyCode;
        if (keyCode === key_event_1.KeyEvent.VK_ESCAPE && this.dragging) {
            this.dragging = false;
            this.onCancelled();
        }
    };
    Draggable.prototype.onPointerDown = function (evt) {
        this.widget.win.on(Events.AFTER_DRAW, this.onDrawDragging);
    };
    Draggable.prototype.onPointerUp = function (evt) {
        if (this.dragging) {
            this.dragging = false;
            Events.DragEvent.isDragging = false;
            this.widget.dispatchEvent(Events.DragEvent.get(Events.DRAGEND, evt.x, evt.y));
            this.widget.win.off(Events.AFTER_DRAW, this.onDrawDragging);
        }
    };
    Draggable.prototype.onPointerMove = function (evt) {
        if (evt.pointerDown && !this.dragging) {
            this.dragging = true;
            Events.DragEvent.isDragging = true;
            this.widget.dispatchEvent(Events.DragEvent.get(Events.DRAGSTART, evt.x, evt.y));
        }
        if (evt.pointerDown) {
            this.widget.win.requestRedraw();
        }
    };
    ;
    Draggable.TYPE = "draggable";
    return Draggable;
}(behavior_1.Behavior));
exports.Draggable = Draggable;
behavior_1.BehaviorFactory.register(Draggable.TYPE, function (widget, options) {
    return new Draggable(widget, options);
});
