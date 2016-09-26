"use strict";
var Events = require("../events");
var inputEventAdapter = require("../input-event-adapter");
/**
 * Behavior代表控件的一种行为特性，比如Resizable/Movable/Draggable/Droppable等。
 * 把这些行为特性抽象出来单独实现，一方面可以避免让Widget变得太复杂，另一方面可以最大限度的重用这些行为特性。
 *
 * 任何一个Widget，都可以使用useBehavior来启用某种Behavior。比如下面的代码让image具有Resizable的特性:
 *
 * ```
 * image.useBehavior("resizable", {all:true});
 * ```
 */
var Behavior = (function () {
    /**
     * 构造函数。主要是注册一些事件，把这些事件映射在成员函数上，子类只需要重载这些成员函数即可。
     * @param type 类型名。
     * @param widget Behavior作用的Widget。
     * @param options 初始化参数，与具体的Behavior有关。
     */
    function Behavior(type, widget, options) {
        this.type = type;
        this.widget = widget;
        this.keyDownGlobalFunc = this.onKeyDownGlobal.bind(this);
        this.keyUpGlobalFunc = this.onKeyUpGlobal.bind(this);
        this.pointerEnterFunc = this.onPointerEnter.bind(this);
        this.pointerLeaveFunc = this.onPointerLeave.bind(this);
        this.pointerDownFunc = this.onPointerDown.bind(this);
        this.pointerMoveFunc = this.onPointerMove.bind(this);
        this.pointerUpFunc = this.onPointerUp.bind(this);
        this.keyDownFunc = this.onKeyDown.bind(this);
        this.keyUpFunc = this.onKeyUp.bind(this);
        inputEventAdapter.on(Events.KEYDOWN, this.keyDownGlobalFunc);
        inputEventAdapter.on(Events.KEYUP, this.keyUpGlobalFunc);
        widget.on(Events.POINTER_ENTER, this.pointerEnterFunc);
        widget.on(Events.POINTER_LEAVE, this.pointerLeaveFunc);
        widget.on(Events.POINTER_DOWN, this.pointerDownFunc);
        widget.on(Events.POINTER_MOVE, this.pointerMoveFunc);
        widget.on(Events.DISPOSE, this.dispose.bind(this));
        widget.on(Events.POINTER_UP, this.pointerUpFunc);
        widget.on(Events.KEYDOWN, this.keyDownFunc);
        widget.on(Events.KEYUP, this.keyUpFunc);
        this.init(options || {});
    }
    /**
     * 初始化。在具体的Behavior的实现中，可以重载此函数做些初始化的工作。
     * @param options 初始化参数，与具体的Behavior有关。
     */
    Behavior.prototype.init = function (options) {
        return this;
    };
    Behavior.prototype.setOptions = function (options) {
        this.init(options);
    };
    /**
     * 析构函数。 主要是注销事件的处理函数。
     */
    Behavior.prototype.dispose = function () {
        var widget = this.widget;
        inputEventAdapter.off(Events.KEYDOWN, this.keyDownGlobalFunc);
        inputEventAdapter.off(Events.KEYUP, this.keyUpGlobalFunc);
        widget.off(Events.POINTER_ENTER, this.pointerEnterFunc);
        widget.off(Events.POINTER_LEAVE, this.pointerLeaveFunc);
        widget.off(Events.POINTER_DOWN, this.pointerDownFunc);
        widget.off(Events.POINTER_MOVE, this.pointerMoveFunc);
        widget.off(Events.POINTER_UP, this.pointerUpFunc);
        widget.off(Events.KEYDOWN, this.keyDownFunc);
        widget.off(Events.KEYUP, this.keyUpFunc);
        this.widget = null;
    };
    /**
     * 子类重载此函数，可以处理Widget的按键按下事件。
     */
    Behavior.prototype.onKeyDown = function (evt) {
    };
    /**
     * 子类重载此函数，可以处理Widget的按键抬起事件。
     */
    Behavior.prototype.onKeyUp = function (evt) {
    };
    /**
     * 子类重载此函数，可以处理全局的按键按下事件。
     */
    Behavior.prototype.onKeyDownGlobal = function (evt) {
    };
    /**
     * 子类重载此函数，可以处理全局的按键抬起事件。
     */
    Behavior.prototype.onKeyUpGlobal = function (evt) {
    };
    /**
     * 子类重载此函数，可以处理Widget的PointerEnter事件。
     */
    Behavior.prototype.onPointerEnter = function (evt) {
    };
    /**
     * 子类重载此函数，可以处理Widget的PointerLeave事件。
     */
    Behavior.prototype.onPointerLeave = function (evt) {
    };
    /**
     * 子类重载此函数，可以处理Widget的PointerDown事件。
     */
    Behavior.prototype.onPointerDown = function (evt) {
    };
    /**
     * 子类重载此函数，可以处理Widget的PointerMove事件。
     */
    Behavior.prototype.onPointerMove = function (evt) {
    };
    /**
     * 子类重载此函数，可以处理Widget的PointerUp事件。
     */
    Behavior.prototype.onPointerUp = function (evt) {
    };
    return Behavior;
}());
exports.Behavior = Behavior;
/**
 * Behavior工厂类。
 *
 * 具体的Behavior需要调用BehaviorFactory.register注册自己，useBehavior才能找到对应的Behavior。
 */
var BehaviorFactory = (function () {
    function BehaviorFactory() {
    }
    /**
     * 注册Behavior
     * @param type Behavior的类型名。
     * @param creator Behavior创建函数。
     */
    BehaviorFactory.register = function (type, creator) {
        BehaviorFactory.creators[type] = creator;
    };
    /**
     * 创建Behavior。目前只在useBehavior中会用到。
     * @param type Behavior的类型名。
     * @param widget Behavior作用的Widget。
     * @param options Behavior的初始化参数。
     */
    BehaviorFactory.create = function (type, widget, options) {
        var create = BehaviorFactory.creators[type];
        return create ? create(widget, options) : null;
    };
    BehaviorFactory.creators = {};
    return BehaviorFactory;
}());
exports.BehaviorFactory = BehaviorFactory;
