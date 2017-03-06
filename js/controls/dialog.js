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
var window_1 = require("./window");
var widget_factory_1 = require("./widget-factory");
var widget_recyclable_creator_1 = require("./widget-recyclable-creator");
/**
 * 对话框。
 */
var Dialog = (function (_super) {
    __extends(Dialog, _super);
    function Dialog(type) {
        var _this = _super.call(this, type || Dialog.TYPE) || this;
        _this._windowType = window_1.WindowType.POPUP;
        return _this;
    }
    Dialog.create = function (options) {
        return Dialog.recycleBin.create(options);
    };
    return Dialog;
}(window_1.Window));
Dialog.TYPE = "dialog";
Dialog.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(Dialog);
exports.Dialog = Dialog;
;
widget_factory_1.WidgetFactory.register(Dialog.TYPE, Dialog.create);
