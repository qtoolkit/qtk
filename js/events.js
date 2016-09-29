"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 常见事件名称的定义。
 */
exports.WHEEL = "qtk-wheel";
exports.KEYUP = "qtk-keyup";
exports.KEYDOWN = "qtk-keydown";
exports.CONTEXT_MENU = "qtk-context-menu";
exports.POINTER_DOWN = "qtk-pointer-down";
exports.POINTER_MOVE = "qtk-pointer-move";
exports.POINTER_UP = "qtk-pointer-up";
exports.POINTER_OUT = "qtk-pointer-out";
exports.POINTER_OVER = "qtk-pointer-over";
exports.POINTER_ENTER = "qtk-pointer-enter";
exports.POINTER_LEAVE = "qtk-pointer-leave";
exports.CLICK = "qtk-click";
exports.DBLCLICK = "qtk-dblclick";
exports.CHANGE = "change";
exports.PROGRESS = "progress";
exports.CHANGING = "changing";
exports.PROP_CHANGE = "prop-change";
exports.DISPOSE = "dispose";
exports.RUN = "run";
exports.QUIT = "quit";
exports.SHOW = "show";
exports.HIDE = "hide";
exports.MOVE = "move";
exports.MOVING = "moving";
exports.CHOOSE = "choose";
exports.OPEN = "open";
exports.INIT = "init";
exports.FOCUS = "focus";
exports.BLUR = "blur";
exports.DEINIT = "deinit";
exports.CLOSE = "close";
exports.RESIZE = "resize";
exports.READY = "ready";
exports.TICK = "tick";
exports.PRETICK = "pretick";
exports.POSTTICK = "posttick";
exports.LOAD = "load";
exports.BEFORE_DRAW = "before-draw";
exports.AFTER_DRAW = "after-draw";
exports.BEFORE_APPLY_TRANSFORM = "before-apply-transform";
exports.AFTER_APPLY_TRANSFORM = "after-apply-transform";
exports.SCROLL = "scroll";
exports.SCROLL_DONE = "scroll-done";
exports.DRAG = "drag";
exports.DROP = "drop";
exports.DRAGEND = "dragend";
exports.DRAGENTER = "dragenter";
exports.DRAGEXIT = "dragexit";
exports.DRAGLEAVE = "dragleave";
exports.DRAGOVER = "dragover";
exports.DRAGSTART = "dragstart";
var Event = (function () {
    function Event() {
    }
    Event.prototype.init = function (type, detail) {
        this._type = type;
        this._target = null;
        this._propagationStopped = false;
        return this;
    };
    Object.defineProperty(Event.prototype, "propagationStopped", {
        get: function () {
            return this._propagationStopped;
        },
        enumerable: true,
        configurable: true
    });
    Event.prototype.stopPropagation = function () {
        this._propagationStopped = true;
    };
    Object.defineProperty(Event.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "target", {
        get: function () {
            return this._target;
        },
        set: function (value) {
            this._target = value;
        },
        enumerable: true,
        configurable: true
    });
    Event.prototype.dispose = function () {
    };
    return Event;
}());
exports.Event = Event;
;
var InputEvent = (function (_super) {
    __extends(InputEvent, _super);
    function InputEvent() {
        _super.apply(this, arguments);
    }
    InputEvent.prototype.init = function (type, detail) {
        _super.prototype.init.call(this, type);
        this.altKey = detail.altKey;
        this.ctrlKey = detail.ctrlKey;
        this.shiftKey = detail.shiftKey;
        this.commandKey = detail.commandKey;
        return this;
    };
    return InputEvent;
}(Event));
exports.InputEvent = InputEvent;
;
var PointerEvent = (function (_super) {
    __extends(PointerEvent, _super);
    function PointerEvent() {
        _super.apply(this, arguments);
    }
    PointerEvent.prototype.init = function (type, detail) {
        _super.prototype.init.call(this, type, detail);
        this.id = detail.id;
        this.x = detail.x;
        this.y = detail.y;
        this.timeStamp = detail.timeStamp;
        this.pointerDown = detail.pointerDown;
        this.pointerDownX = detail.pointerDownX;
        this.pointerDownY = detail.pointerDownY;
        this.pointerDownTime = detail.pointerDownTime;
        return this;
    };
    PointerEvent.create = function (type, detail) {
        var e = new PointerEvent();
        return e.init(type, detail);
    };
    return PointerEvent;
}(InputEvent));
exports.PointerEvent = PointerEvent;
var WheelEvent = (function (_super) {
    __extends(WheelEvent, _super);
    function WheelEvent() {
        _super.apply(this, arguments);
    }
    WheelEvent.prototype.init = function (type, detail) {
        _super.prototype.init.call(this, type, detail);
        this.delta = detail.delta;
        this.timeStamp = detail.timeStamp;
        return this;
    };
    WheelEvent.create = function (detail) {
        var e = new WheelEvent();
        return e.init(exports.WHEEL, detail);
    };
    return WheelEvent;
}(InputEvent));
exports.WheelEvent = WheelEvent;
var KeyEvent = (function (_super) {
    __extends(KeyEvent, _super);
    function KeyEvent() {
        _super.apply(this, arguments);
    }
    KeyEvent.prototype.init = function (type, detail) {
        _super.prototype.init.call(this, type, detail);
        this.keyCode = detail.keyCode;
        this.timeStamp = detail.timeStamp;
        return this;
    };
    KeyEvent.create = function (type, detail) {
        var e = new KeyEvent();
        return e.init(type, detail);
    };
    return KeyEvent;
}(InputEvent));
exports.KeyEvent = KeyEvent;
var TickEvent = (function (_super) {
    __extends(TickEvent, _super);
    function TickEvent() {
        _super.apply(this, arguments);
    }
    TickEvent.prototype.init = function (type, detail) {
        _super.prototype.init.call(this, type);
        this.fps = detail.fps;
        this.time = detail.time;
        this.deltaTime = detail.deltaTime;
        return this;
    };
    TickEvent.create = function (type) {
        var e = new TickEvent();
        return e.init(type, {});
    };
    return TickEvent;
}(Event));
exports.TickEvent = TickEvent;
;
var ChangeEvent = (function (_super) {
    __extends(ChangeEvent, _super);
    function ChangeEvent() {
        _super.apply(this, arguments);
    }
    ChangeEvent.prototype.init = function (type, detail) {
        _super.prototype.init.call(this, type);
        this.value = detail.newValue;
        this.oldValue = detail.oldValue;
        this.newValue = detail.newValue;
        return this;
    };
    ChangeEvent.create = function () {
        var e = new ChangeEvent();
        return e;
    };
    return ChangeEvent;
}(Event));
exports.ChangeEvent = ChangeEvent;
;
var PropChangeEvent = (function (_super) {
    __extends(PropChangeEvent, _super);
    function PropChangeEvent() {
        _super.apply(this, arguments);
    }
    PropChangeEvent.prototype.init = function (type, detail) {
        _super.prototype.init.call(this, type, detail);
        this.prop = detail.prop;
        return this;
    };
    PropChangeEvent.create = function () {
        var e = new PropChangeEvent();
        return e;
    };
    return PropChangeEvent;
}(ChangeEvent));
exports.PropChangeEvent = PropChangeEvent;
;
var DataTransfer = (function () {
    function DataTransfer() {
        this.data = {};
        this.dragImage = null;
        this.dropEffect = "move";
    }
    DataTransfer.prototype.clearData = function (format) {
        if (format) {
            delete this.data[format];
        }
        else {
            this.data = {};
        }
    };
    DataTransfer.prototype.getData = function (format) {
        return this.data[format];
    };
    DataTransfer.prototype.setData = function (format, data) {
        this.data[format] = data;
    };
    DataTransfer.prototype.setDragImage = function (dragImage) {
        this.dragImage = dragImage;
    };
    return DataTransfer;
}());
exports.DataTransfer = DataTransfer;
;
var DragEvent = (function (_super) {
    __extends(DragEvent, _super);
    function DragEvent() {
        _super.call(this);
        this.dataTransfer = new DataTransfer();
    }
    DragEvent.prototype.init = function (type, detail) {
        _super.prototype.init.call(this, type, detail);
        return this;
    };
    Object.defineProperty(DragEvent, "isDragging", {
        get: function () {
            return DragEvent._isDragging;
        },
        set: function (isDragging) {
            DragEvent._isDragging = isDragging;
        },
        enumerable: true,
        configurable: true
    });
    DragEvent.get = function (type) {
        var e = DragEvent.event;
        return e.init(type);
    };
    DragEvent._isDragging = false;
    DragEvent.event = new DragEvent();
    return DragEvent;
}(Event));
exports.DragEvent = DragEvent;
;
var DrawEvent = (function (_super) {
    __extends(DrawEvent, _super);
    function DrawEvent() {
        _super.apply(this, arguments);
    }
    DrawEvent.prototype.reset = function (type, ctx, widget) {
        _super.prototype.init.call(this, type);
        this.ctx = ctx;
        this.widget = widget;
        return this;
    };
    DrawEvent.get = function () {
        return DrawEvent.event;
    };
    DrawEvent.event = new DrawEvent();
    return DrawEvent;
}(Event));
exports.DrawEvent = DrawEvent;
;
var ApplyTransformEvent = (function (_super) {
    __extends(ApplyTransformEvent, _super);
    function ApplyTransformEvent() {
        _super.apply(this, arguments);
    }
    ApplyTransformEvent.prototype.reset = function (type, ctx, widget) {
        _super.prototype.init.call(this, type);
        this.ctx = ctx;
        this.widget = widget;
        return this;
    };
    ApplyTransformEvent.get = function () {
        return ApplyTransformEvent.event;
    };
    ApplyTransformEvent.event = new ApplyTransformEvent();
    return ApplyTransformEvent;
}(Event));
exports.ApplyTransformEvent = ApplyTransformEvent;
;
var ScrollEvent = (function (_super) {
    __extends(ScrollEvent, _super);
    function ScrollEvent() {
        _super.apply(this, arguments);
    }
    ScrollEvent.prototype.reset = function (type, widget, offsetX, offsetY) {
        _super.prototype.init.call(this, type);
        this.widget = widget;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        return this;
    };
    ScrollEvent.create = function () {
        return new ScrollEvent();
    };
    return ScrollEvent;
}(Event));
exports.ScrollEvent = ScrollEvent;
;
