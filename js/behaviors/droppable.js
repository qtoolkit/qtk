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
 * 让Widget可作为拖放功能的Drop目标。
 *
 */
var Droppable = (function (_super) {
    __extends(Droppable, _super);
    function Droppable(widget, options) {
        return _super.call(this, Droppable.TYPE, widget, options) || this;
    }
    Droppable.prototype.onPointerEnter = function (evt) {
        if (Events.DragEvent.isDragging) {
            this.dragging = true;
            this.widget.dispatchEvent(Events.DragEvent.get(Events.DRAGENTER, evt.localX, evt.localY));
        }
    };
    Droppable.prototype.onPointerLeave = function (evt) {
        if (Events.DragEvent.isDragging) {
            this.widget.dispatchEvent(Events.DragEvent.get(Events.DRAGLEAVE, evt.localX, evt.localY));
            this.dragging = false;
        }
    };
    Droppable.prototype.onPointerUp = function (evt) {
        if (Events.DragEvent.isDragging) {
            this.widget.dispatchEvent(Events.DragEvent.get(Events.DROP, evt.localX, evt.localY));
            Events.DragEvent.isDragging = false;
            this.dragging = false;
        }
    };
    Droppable.prototype.onPointerMove = function (evt) {
        if (Events.DragEvent.isDragging) {
            this.widget.dispatchEvent(Events.DragEvent.get(Events.DRAGOVER, evt.localX, evt.localY));
        }
    };
    Droppable.prototype.onCancelled = function () {
        var p = this.widget.win.pointerPosition;
        this.widget.dispatchEvent(Events.DragEvent.get(Events.DRAGCANCEL, p.x, p.y));
        this.dragging = false;
    };
    Droppable.prototype.onKeyDownGlobal = function (evt) {
        var keyCode = evt.detail.keyCode;
        if (keyCode === key_event_1.KeyEvent.VK_ESCAPE && this.dragging) {
            this.onCancelled();
        }
    };
    ;
    return Droppable;
}(behavior_1.Behavior));
Droppable.TYPE = "droppable";
exports.Droppable = Droppable;
behavior_1.BehaviorFactory.register(Droppable.TYPE, function (widget, options) {
    return new Droppable(widget, options);
});
