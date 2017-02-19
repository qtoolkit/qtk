"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Events = require("../events");
var label_1 = require("../controls/label");
var title_value_1 = require("./title-value");
var widget_factory_1 = require("../controls/widget-factory");
var widget_recyclable_creator_1 = require("../controls/widget-recyclable-creator");
/**
 * @class TitleLink
 * @extends Widget
 * 带标题的超链接。
 */
var TitleLink = (function (_super) {
    __extends(TitleLink, _super);
    function TitleLink(type) {
        _super.call(this, type || TitleLink.TYPE);
    }
    TitleLink.prototype.createValueWidget = function (options) {
        var link = label_1.Label.create(options);
        link.styleType = "link";
        link.on(Events.CLICK, function (evt) {
            window.open(this.text, "_blank");
        });
        link.on(Events.POINTER_ENTER, function (evt) {
            document.body.style.cursor = "pointer";
        });
        link.on(Events.POINTER_LEAVE, function (evt) {
            document.body.style.cursor = "default";
        });
        return link;
    };
    TitleLink.create = function (options) {
        return TitleLink.recycleBin.create(options);
    };
    TitleLink.TYPE = "title-link";
    TitleLink.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(TitleLink);
    return TitleLink;
}(title_value_1.TitleValue));
exports.TitleLink = TitleLink;
;
widget_factory_1.WidgetFactory.register(TitleLink.TYPE, TitleLink.create);
