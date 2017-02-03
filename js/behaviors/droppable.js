"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Events = require("../events");
var behavior_1 = require("./behavior");
/**
 * 让Widget可作为拖放功能的Drop目标。
 *
 */
var Droppable = (function (_super) {
    __extends(Droppable, _super);
    function Droppable(widget, options) {
        _super.call(this, Droppable.TYPE, widget, options);
    }
    Droppable.prototype.onPointerEnter = function (evt) {
        if (Events.DragEvent.isDragging) {
            this.widget.dispatchEvent(Events.DragEvent.get(Events.DRAGENTER, evt.x, evt.y));
        }
    };
    Droppable.prototype.onPointerLeave = function (evt) {
        if (Events.DragEvent.isDragging) {
            this.widget.dispatchEvent(Events.DragEvent.get(Events.DRAGLEAVE, evt.x, evt.y));
        }
    };
    Droppable.prototype.onPointerUp = function (evt) {
        if (Events.DragEvent.isDragging) {
            this.widget.dispatchEvent(Events.DragEvent.get(Events.DROP, evt.x, evt.y));
        }
    };
    Droppable.prototype.onPointerMove = function (evt) {
        if (Events.DragEvent.isDragging) {
            this.widget.dispatchEvent(Events.DragEvent.get(Events.DRAGOVER, evt.x, evt.y));
        }
    };
    ;
    Droppable.TYPE = "droppable";
    return Droppable;
}(behavior_1.Behavior));
exports.Droppable = Droppable;
behavior_1.BehaviorFactory.register(Droppable.TYPE, function (widget, options) {
    return new Droppable(widget, options);
});
