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
/**
 * 常见事件名称的定义。
 */
exports.WHEEL = "qtk-wheel";
exports.KEYUP = "qtk-keyup";
exports.KEYDOWN = "qtk-keydown";
exports.CONFIRM = "confirm";
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
exports.PROP_DELETE = "prop-delete";
exports.ITEMS_CHANGE = "items-change";
exports.DISPOSE = "dispose";
exports.RUN = "run";
exports.QUIT = "quit";
exports.SHOW = "show";
exports.HIDE = "hide";
exports.MOVE = "move-end";
exports.MOVING = "moving";
exports.MOVE_END = "move-end";
exports.MOVE_BEGIN = "move-begin";
exports.MOVE_CANCEL = "move-cancel";
exports.CHOOSE = "choose";
exports.WINDOW_OPEN = "window-open";
exports.WINDOW_CLOSE = "window-close";
exports.WINDOW_CREATE = "window-create";
exports.WINDOW_CREATED = "window-created";
exports.INIT = "init";
exports.FOCUS = "focus";
exports.BLUR = "blur";
exports.DEINIT = "deinit";
exports.RESIZE = "resize";
exports.RESIZING = "resizing";
exports.RESIZE_END = "resize-end";
exports.RESIZE_BEGIN = "resize-begin";
exports.RESIZE_CANCEL = "resize-cancel";
exports.READY = "ready";
exports.TICK = "tick";
exports.PRETICK = "pretick";
exports.POSTTICK = "posttick";
exports.LOAD = "load";
exports.EXPAND = "expand";
exports.COLLAPSE = "collapse";
exports.BEFORE_DRAW = "before-draw";
exports.AFTER_DRAW = "after-draw";
exports.BEFORE_APPLY_TRANSFORM = "before-apply-transform";
exports.AFTER_APPLY_TRANSFORM = "after-apply-transform";
exports.SORT = "sort";
exports.SCROLL = "scroll";
exports.SCROLL_DONE = "scroll-done";
exports.DRAG = "drag";
exports.DROP = "drop";
exports.DRAGEND = "dragend";
exports.DRAGENTER = "dragenter";
exports.DRAGCANCEL = "dragcancel";
exports.DRAGLEAVE = "dragleave";
exports.DRAGOVER = "dragover";
exports.DRAGSTART = "dragstart";
exports.SHORTCUT = "shortcut";
exports.INTERACTION_REQUEST = "interaction-request";
var Event = (function () {
    function Event() {
    }
    Event.prototype.init = function (type, detail) {
        this._type = type;
        this._target = null;
        this._preventedDefault = false;
        this._propagationStopped = false;
        return this;
    };
    Event.prototype.preventDefault = function () {
        this._preventedDefault = true;
    };
    Object.defineProperty(Event.prototype, "defaultPrevented", {
        get: function () {
            return this._preventedDefault;
        },
        enumerable: true,
        configurable: true
    });
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
var AnyEvent = (function (_super) {
    __extends(AnyEvent, _super);
    function AnyEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnyEvent.prototype.init = function (type, payload) {
        _super.prototype.init.call(this, type);
        this.payload = payload;
        return this;
    };
    AnyEvent.create = function (type, payload) {
        var e = new AnyEvent();
        return e.init(type, payload);
    };
    return AnyEvent;
}(Event));
exports.AnyEvent = AnyEvent;
;
/**
 * View Model请求显示指定的视图或跳转到指定的视图。
 */
var InteractionRequestEvent = (function (_super) {
    __extends(InteractionRequestEvent, _super);
    function InteractionRequestEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ;
    InteractionRequestEvent.prototype.returnResult = function () {
        if (this._callback) {
            this._callback(this.payload);
        }
    };
    InteractionRequestEvent.prototype.init = function (type, detail) {
        _super.prototype.init.call(this, type);
        this.name = detail.name;
        this.payload = detail.payload;
        this._callback = detail.callback;
        return this;
    };
    InteractionRequestEvent.create = function (type, detail) {
        var e = new InteractionRequestEvent();
        return e.init(type, detail);
    };
    return InteractionRequestEvent;
}(Event));
exports.InteractionRequestEvent = InteractionRequestEvent;
;
var InputEvent = (function (_super) {
    __extends(InputEvent, _super);
    function InputEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PointerEvent.prototype.init = function (type, detail) {
        _super.prototype.init.call(this, type, detail);
        this.id = detail.id;
        this.x = detail.x;
        this.y = detail.y;
        this.localX = detail.x;
        this.localY = detail.y;
        this.timeStamp = detail.timeStamp;
        this.pointerDown = detail.pointerDown;
        this.pointerDownX = detail.pointerDownX;
        this.pointerDownY = detail.pointerDownY;
        this.pointerDownTime = detail.pointerDownTime;
        this.dx = detail.x - detail.pointerDownX;
        this.dy = detail.y - detail.pointerDownY;
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
        return _super !== null && _super.apply(this, arguments) || this;
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
        return _super !== null && _super.apply(this, arguments) || this;
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
var ShortcutEvent = (function (_super) {
    __extends(ShortcutEvent, _super);
    function ShortcutEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShortcutEvent.prototype.init = function (type, keys) {
        _super.prototype.init.call(this, type, {});
        this.keys = keys;
        return this;
    };
    ShortcutEvent.create = function (type, keys) {
        var e = new ShortcutEvent();
        return e.init(type, keys);
    };
    return ShortcutEvent;
}(Event));
exports.ShortcutEvent = ShortcutEvent;
var TickEvent = (function (_super) {
    __extends(TickEvent, _super);
    function TickEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChangeEvent.prototype.init = function (type, detail) {
        _super.prototype.init.call(this, type);
        var value = detail.newValue === undefined ? detail.value : detail.newValue;
        this.value = value;
        this.newValue = value;
        this.oldValue = detail.oldValue;
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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PropChangeEvent.prototype.init = function (type, detail) {
        _super.prototype.init.call(this, type, detail);
        this.prop = detail.prop;
        this.trigger = detail.trigger;
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
        var _this = _super.call(this) || this;
        _this.dataTransfer = new DataTransfer();
        return _this;
    }
    DragEvent.prototype.init = function (type, detail) {
        _super.prototype.init.call(this, type, detail);
        this.x = detail.x;
        this.y = detail.y;
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
    DragEvent.get = function (type, x, y) {
        var e = DragEvent.event;
        return e.init(type, { x: x, y: y });
    };
    return DragEvent;
}(Event));
DragEvent._isDragging = false;
DragEvent.event = new DragEvent();
exports.DragEvent = DragEvent;
;
var DrawEvent = (function (_super) {
    __extends(DrawEvent, _super);
    function DrawEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
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
    return DrawEvent;
}(Event));
DrawEvent.event = new DrawEvent();
exports.DrawEvent = DrawEvent;
;
var ApplyTransformEvent = (function (_super) {
    __extends(ApplyTransformEvent, _super);
    function ApplyTransformEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
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
    return ApplyTransformEvent;
}(Event));
ApplyTransformEvent.event = new ApplyTransformEvent();
exports.ApplyTransformEvent = ApplyTransformEvent;
;
var ScrollEvent = (function (_super) {
    __extends(ScrollEvent, _super);
    function ScrollEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
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
var WindowEvent = (function (_super) {
    __extends(WindowEvent, _super);
    function WindowEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WindowEvent.prototype.reset = function (type, widget) {
        _super.prototype.init.call(this, type);
        this.widget = widget;
        return this;
    };
    WindowEvent.create = function () {
        return new WindowEvent();
    };
    return WindowEvent;
}(Event));
exports.WindowEvent = WindowEvent;
;
var ProgressEvent = (function (_super) {
    __extends(ProgressEvent, _super);
    function ProgressEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressEvent.prototype.reset = function (progress, total, done) {
        _super.prototype.init.call(this, exports.PROGRESS);
        this.done = done;
        this.total = total;
        this.progress = progress;
        return this;
    };
    ProgressEvent.create = function () {
        return new ProgressEvent();
    };
    return ProgressEvent;
}(Event));
exports.ProgressEvent = ProgressEvent;
;
/**
 * 排序事件
 */
var SortEvent = (function (_super) {
    __extends(SortEvent, _super);
    function SortEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SortEvent.prototype.init = function (key, isDec) {
        _super.prototype.init.call(this, exports.SORT);
        this.key = key;
        this.isDec = isDec;
        return this;
    };
    SortEvent.create = function (key, isDec) {
        var e = new SortEvent();
        return e.init(key, isDec);
    };
    return SortEvent;
}(Event));
exports.SortEvent = SortEvent;
;
function createAnyEvent(type, payload) {
    return AnyEvent.create(type, payload);
}
exports.createAnyEvent = createAnyEvent;
var eventsMapToType = {
    click: exports.CLICK,
    keydown: exports.KEYDOWN,
    keyup: exports.KEYUP,
    confirm: exports.CONFIRM,
    change: exports.CHANGE,
    chaning: exports.CHANGING,
    dblclick: exports.DBLCLICK,
    pointerup: exports.POINTER_UP,
    pointermove: exports.POINTER_MOVE,
    pointerdown: exports.POINTER_DOWN,
    pointerenter: exports.POINTER_ENTER,
    pointerleave: exports.POINTER_LEAVE
};
function mapToEvent(name) {
    return eventsMapToType[name];
}
exports.mapToEvent = mapToEvent;
