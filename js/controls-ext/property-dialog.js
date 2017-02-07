"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var application_1 = require("../application");
var property_page_1 = require("./property-page");
var view_model_1 = require("../mvvm/view-model");
var widget_recyclable_creator_1 = require("../controls/widget-recyclable-creator");
var widget_factory_1 = require("../controls/widget-factory");
var message_box_1 = require("../controls/message-box");
var simple_layouter_1 = require("../layouters/simple-layouter");
/**
 * 属性对话框。
 */
var PropertyDialog = (function (_super) {
    __extends(PropertyDialog, _super);
    function PropertyDialog() {
        _super.apply(this, arguments);
    }
    PropertyDialog.prototype.createChildren = function (titleOptions, buttonsOptions, content) {
        _super.prototype.createChildren.call(this, titleOptions, buttonsOptions, content);
    };
    PropertyDialog.show = function (pagePropsDesc, data, onYes, onNo, w) {
        var app = application_1.Application.get();
        var vp = app.getViewPort();
        var rw = Math.min(vp.w, w || 300);
        var dataCopy = onNo ? JSON.parse(JSON.stringify(data)) : data;
        var page = property_page_1.PropertyPage.create({ layoutParam: simple_layouter_1.SimpleLayouterParam.createWithOptions({ w: "100%", h: "100%" }) });
        page.initWithPropsDesc(pagePropsDesc.propsDesc);
        var h = page.h + message_box_1.MessageBox.TITLE_H + message_box_1.MessageBox.BUTTONS_H + 20;
        var messageBox = PropertyDialog.create({ app: app, styleType: message_box_1.MessageBox.TYPE, w: rw, h: h });
        var titleOptions = new message_box_1.TitleOptions(pagePropsDesc.title, "messagebox.info.icon", false);
        var buttonsOption = new message_box_1.ButtonsOptions();
        if (onNo) {
            buttonsOption.buttons.push({ styleType: "button.cancel", text: "Cancel", onClick: function () {
                    if (onNo) {
                        onNo(data);
                    }
                } });
        }
        buttonsOption.buttons.push({ styleType: "button.ok", text: onNo ? "Yes" : "OK", onClick: function () {
                if (onYes) {
                    onYes(dataCopy);
                }
            } });
        messageBox.createChildren(titleOptions, buttonsOption, null);
        var group = messageBox.content.set({ padding: 5, childrenLayouter: simple_layouter_1.SimpleLayouter.createWithOptions() });
        group.addChild(page);
        var vm = view_model_1.ViewModel.create(dataCopy);
        page.bindData(vm);
        messageBox.open();
    };
    PropertyDialog.create = function (options) {
        return PropertyDialog.rb.create(options);
    };
    PropertyDialog.TYPE = "property-dialog";
    PropertyDialog.rb = widget_recyclable_creator_1.WidgetRecyclableCreator.create(PropertyDialog);
    return PropertyDialog;
}(message_box_1.MessageBox));
exports.PropertyDialog = PropertyDialog;
widget_factory_1.WidgetFactory.register(PropertyDialog.TYPE, PropertyDialog.create);
