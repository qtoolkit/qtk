"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var window_1 = require("./window");
var widget_factory_1 = require("./widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
var Dialog = (function (_super) {
    __extends(Dialog, _super);
    function Dialog(type) {
        _super.call(this, type || Dialog.TYPE);
    }
    Dialog.prototype.moveToCenter = function () {
        if (this.app) {
            var vp = this.app.getViewPort();
            this.x = (vp.w - this.w) >> 1;
            this.y = (vp.h - this.h) >> 1;
        }
        return this;
    };
    Dialog.create = function (options) {
        return Dialog.recycleBin.create().reset(Dialog.TYPE).set(options);
    };
    Dialog.TYPE = "dialog";
    Dialog.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new Dialog(); });
    return Dialog;
}(window_1.Window));
exports.Dialog = Dialog;
;
widget_factory_1.WidgetFactory.register(Dialog.TYPE, Dialog.create);
