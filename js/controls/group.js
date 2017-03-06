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
var widget_1 = require("./widget");
var widget_factory_1 = require("./widget-factory");
var widget_recyclable_creator_1 = require("./widget-recyclable-creator");
var Group = (function (_super) {
    __extends(Group, _super);
    function Group() {
        return _super.call(this, Group.TYPE) || this;
    }
    Group.create = function (options) {
        return Group.recycleBin.create(options);
    };
    return Group;
}(widget_1.Widget));
Group.TYPE = "group";
Group.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(Group);
exports.Group = Group;
;
widget_factory_1.WidgetFactory.register(Group.TYPE, Group.create);
