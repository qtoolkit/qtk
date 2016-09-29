"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var widget_1 = require("./widget");
var widget_factory_1 = require("./widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
var Group = (function (_super) {
    __extends(Group, _super);
    function Group() {
        _super.call(this, Group.TYPE);
    }
    Group.create = function (options) {
        return Group.recycleBin.create().reset(Group.TYPE, options);
    };
    Group.TYPE = "group";
    Group.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new Group(); });
    return Group;
}(widget_1.Widget));
exports.Group = Group;
;
widget_factory_1.WidgetFactory.register(Group.TYPE, Group.create);
