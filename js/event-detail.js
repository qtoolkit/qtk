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
 * 输入事件的详细信息。
 */
var InputEventDetail = (function () {
    function InputEventDetail(altKey, ctrlKey, shiftKey, commandKey) {
        this.altKey = altKey;
        this.ctrlKey = ctrlKey;
        this.shiftKey = shiftKey;
        this.commandKey = commandKey;
    }
    return InputEventDetail;
}());
exports.InputEventDetail = InputEventDetail;
;
/**
 * 指针事件的详细信息。
 */
var PointerEventDetail = (function (_super) {
    __extends(PointerEventDetail, _super);
    function PointerEventDetail(id, x, y, altKey, ctrlKey, shiftKey, commandKey) {
        var _this = _super.call(this, altKey, ctrlKey, shiftKey, commandKey) || this;
        _this.id = id;
        _this.x = x;
        _this.y = y;
        _this.pointerDown = false;
        _this.pointerDownX = 0;
        _this.pointerDownY = 0;
        _this.pointerDownTime = 0;
        return _this;
    }
    /**
     * 设置指针按下的状态。
     */
    PointerEventDetail.prototype.setPointerDown = function (pointerDown, x, y, t) {
        this.pointerDownX = x;
        this.pointerDownY = y;
        this.pointerDownTime = t;
        this.pointerDown = pointerDown;
    };
    PointerEventDetail.prototype.dispose = function () {
    };
    PointerEventDetail.create = function (id, x, y, altKey, ctrlKey, shiftKey, commandKey) {
        var detail = new PointerEventDetail(id, x, y, altKey, ctrlKey, shiftKey, commandKey);
        return detail;
    };
    return PointerEventDetail;
}(InputEventDetail));
exports.PointerEventDetail = PointerEventDetail;
;
/**
 * 按键事件的详细信息。
 */
var KeyEventDetail = (function (_super) {
    __extends(KeyEventDetail, _super);
    function KeyEventDetail(keyCode, altKey, ctrlKey, shiftKey, commandKey) {
        var _this = _super.call(this, altKey, ctrlKey, shiftKey, commandKey) || this;
        _this.keyCode = keyCode;
        return _this;
    }
    KeyEventDetail.prototype.dispose = function () {
    };
    KeyEventDetail.create = function (keyCode, altKey, ctrlKey, shiftKey, commandKey) {
        var detail = new KeyEventDetail(keyCode, altKey, ctrlKey, shiftKey, commandKey);
        return detail;
    };
    return KeyEventDetail;
}(InputEventDetail));
exports.KeyEventDetail = KeyEventDetail;
;
/**
 * 滚轮事件的详细信息。
 */
var WheelEventDetail = (function (_super) {
    __extends(WheelEventDetail, _super);
    function WheelEventDetail(delta, altKey, ctrlKey, shiftKey, commandKey) {
        var _this = _super.call(this, altKey, ctrlKey, shiftKey, commandKey) || this;
        _this.delta = delta;
        return _this;
    }
    WheelEventDetail.prototype.dispose = function () {
    };
    WheelEventDetail.create = function (delta, altKey, ctrlKey, shiftKey, commandKey) {
        var detail = new WheelEventDetail(delta, altKey, ctrlKey, shiftKey, commandKey);
        return detail;
    };
    return WheelEventDetail;
}(InputEventDetail));
exports.WheelEventDetail = WheelEventDetail;
;
