"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var widget_1 = require("./widget");
var widget_factory_1 = require("./widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        _super.call(this, Button.TYPE);
    }
    Button.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        Button.recyclbale.recycle(this);
    };
    Button.create = function () {
        return Button.recyclbale.create().reset(Button.TYPE);
    };
    Button.TYPE = "button";
    Button.recyclbale = new recyclable_creator_1.RecyclableCreator(function () { return new Button(); });
    return Button;
}(widget_1.Widget));
exports.Button = Button;
;
widget_factory_1.WidgetFactory.register(Button.TYPE, Button.create);
