"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var group_1 = require("./group");
var dialog_1 = require("./dialog");
var label_1 = require("./label");
var edit_1 = require("./edit");
var button_1 = require("./button");
var Events = require("../events");
var graphics_1 = require("../graphics");
var list_view_1 = require("./list-view");
var progress_bar_1 = require("./progress-bar");
var application_1 = require("../application");
var widget_1 = require("./widget");
var widget_factory_1 = require("./widget-factory");
var consts_1 = require("../consts");
var widget_recyclable_creator_1 = require("./widget-recyclable-creator");
var list_item_1 = require("./list-item");
var dock_layouter_1 = require("../layouters/dock-layouter");
var linear_layouter_1 = require("../layouters/linear-layouter");
var grid_layouter_1 = require("../layouters/grid-layouter");
var simple_layouter_1 = require("../layouters/simple-layouter");
var TitleOptions = (function () {
    function TitleOptions(text, iconStyleType, hasCloseButton) {
        this.h = 0;
        this.text = text;
        this.draggable = true;
        this.iconStyleType = iconStyleType;
        this.hasCloseButton = hasCloseButton;
    }
    return TitleOptions;
}());
exports.TitleOptions = TitleOptions;
;
var ButtonOption = (function () {
    function ButtonOption() {
    }
    return ButtonOption;
}());
exports.ButtonOption = ButtonOption;
var ButtonsOptions = (function () {
    function ButtonsOptions() {
        this.buttons = [];
    }
    Object.defineProperty(ButtonsOptions.prototype, "buttonCount", {
        get: function () {
            return this.buttons.length;
        },
        enumerable: true,
        configurable: true
    });
    return ButtonsOptions;
}());
exports.ButtonsOptions = ButtonsOptions;
;
var MessageBox = (function (_super) {
    __extends(MessageBox, _super);
    function MessageBox(type) {
        _super.call(this, type || MessageBox.TYPE);
        this._contentPadding = 10;
    }
    Object.defineProperty(MessageBox.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MessageBox.prototype, "content", {
        get: function () {
            return this._content;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MessageBox.prototype, "buttons", {
        get: function () {
            return this._buttons;
        },
        enumerable: true,
        configurable: true
    });
    MessageBox.prototype.initTitle = function (titleOptions) {
        var w = this.w;
        var win = this;
        if (titleOptions) {
            var title = group_1.Group.create({ styleType: "dialog.title-bg" });
            var titleH = titleOptions.h || MessageBox.TITLE_H;
            title.layoutParam = dock_layouter_1.DockLayouterParam.create({ position: consts_1.Direction.TOP, size: titleH });
            title.childrenLayouter = linear_layouter_1.LinearLayouter.createH();
            this.addChild(title);
            if (titleOptions.draggable) {
                title.useBehavior("movable", { moveParent: true });
            }
            if (titleOptions.iconStyleType) {
                var icon = button_1.Button.create({ name: "icon", styleType: titleOptions.iconStyleType });
                icon.layoutParam = linear_layouter_1.LinearLayouterParam.create({ position: 1, h: "100%", w: title.h });
                title.addChild(icon);
            }
            if (titleOptions.text) {
                var label = label_1.Label.create({ name: "text", text: titleOptions.text, styleType: "dialog.title-text" });
                label.layoutParam = linear_layouter_1.LinearLayouterParam.create({ position: 2, h: "100%", w: w - titleH * 2 });
                title.addChild(label);
            }
            if (titleOptions.hasCloseButton) {
                var button = button_1.Button.create({ name: "close", styleType: "messagebox.button.close" });
                button.layoutParam = linear_layouter_1.LinearLayouterParam.create({ position: -1, h: "100%", w: titleH });
                title.addChild(button);
                button.on(Events.CLICK, function (evt) {
                    win.animateClose();
                });
            }
            this._title = title;
        }
    };
    MessageBox.prototype.initButtons = function (buttonsOptions) {
        var w = this.w;
        var win = this;
        if (buttonsOptions && buttonsOptions.buttons) {
            var buttons = group_1.Group.create();
            var n = buttonsOptions.buttons.length;
            var buttonsH = buttonsOptions.h || MessageBox.BUTTONS_H;
            var margin = n < 2 ? w / (4 * n) : w / (8 * n);
            buttons.layoutParam = dock_layouter_1.DockLayouterParam.create({ position: consts_1.Direction.BOTTOM, size: buttonsH });
            buttons.childrenLayouter = grid_layouter_1.GridLayouter.create({
                topMargin: 5,
                bottomMargin: 5,
                leftMargin: margin,
                rightMargin: margin,
                rows: 1,
                cols: n
            });
            this.addChild(buttons);
            buttonsOptions.buttons.forEach(function (iter) {
                var b = button_1.Button.create({ text: iter.text, styleType: iter.styleType });
                b.on(Events.CLICK, function (evt) {
                    if (iter.onClick) {
                        iter.onClick();
                    }
                    win.animateClose();
                });
                buttons.addChild(b);
            });
            this._buttons = buttons;
        }
        return this;
    };
    MessageBox.prototype.initContent = function (data) {
        var content = group_1.Group.create();
        content.layoutParam = dock_layouter_1.DockLayouterParam.create({ position: consts_1.Direction.BOTTOM, size: "100%" });
        this.addChild(content);
        if (data) {
            content.childrenLayouter = simple_layouter_1.SimpleLayouter.create();
            var label = label_1.Label.create({ text: data, multiLineMode: true, padding: this._contentPadding });
            label.layoutParam = simple_layouter_1.SimpleLayouterParam.create({ w: "100%", h: "100%" });
            content.addChild(label);
        }
        this._content = content;
    };
    MessageBox.prototype.createChildren = function (titleOptions, buttonsOptions, content) {
        var vp = this.app.getViewPort();
        var style = this._themeManager.get("messagebox.content", this.stateToString(widget_1.WidgetState.NORMAL));
        if (this.w <= 10) {
            var textW = graphics_1.Graphics.measureText(content, style.font);
            var padding = this.leftPadding + this.rightPadding + this._contentPadding * 2;
            var w = Math.min(vp.width, Math.max(60, textW + padding));
            if (buttonsOptions) {
                w = Math.max(w, buttonsOptions.buttonCount * 128);
            }
            this.w = w;
        }
        if (this.h < 10) {
            var lines = graphics_1.Graphics.layoutText(content, this.w, style.font);
            var n = lines ? lines.length : 0;
            var padding = this.topPadding + this.bottomPadding + this._contentPadding * 2;
            var h = n * style.fontSize * 1.5 + padding;
            if (titleOptions) {
                h += titleOptions.h || MessageBox.TITLE_H;
            }
            if (buttonsOptions) {
                h += buttonsOptions.h || MessageBox.BUTTONS_H;
            }
            this.h = h;
        }
        this.initTitle(titleOptions);
        this.initButtons(buttonsOptions);
        this.initContent(content);
    };
    MessageBox.prototype.onReset = function () {
        _super.prototype.onReset.call(this);
        this.padding = 1;
        this.childrenLayouter = dock_layouter_1.DockLayouter.create();
    };
    MessageBox.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this._title = null;
        this._content = null;
        this._buttons = null;
    };
    MessageBox.prototype.open = function () {
        _super.prototype.open.call(this);
        this.grab();
        this.moveToCenter();
        return this;
    };
    MessageBox.prototype.animateClose = function () {
        var _this = this;
        this.opacityTo(0, 300).onComplete(function (evt) {
            _this.close();
        });
    };
    MessageBox.showMessage = function (msg, onClose, w) {
        var app = application_1.Application.get();
        var vp = app.getViewPort();
        var rw = Math.min(vp.w, w || 0);
        var messageBox = MessageBox.create({ app: app, w: rw, h: 0 });
        var buttonsOption = new ButtonsOptions();
        buttonsOption.buttons.push({ styleType: "button.ok", text: "Close", onClick: null });
        var titleOptions = new TitleOptions("Infomation", "messagebox.info.icon", true);
        messageBox.createChildren(titleOptions, buttonsOption, msg);
        messageBox.on(Events.CLOSE, onClose);
        messageBox.open();
    };
    MessageBox.showConfirm = function (msg, onYes, onNo, w) {
        var app = application_1.Application.get();
        var vp = app.getViewPort();
        var rw = Math.min(vp.w, w || 0);
        var messageBox = MessageBox.create({ app: app, w: rw, h: 0 });
        var buttonsOption = new ButtonsOptions();
        buttonsOption.buttons.push({ styleType: "button.cancel", text: "Cancel", onClick: onNo });
        buttonsOption.buttons.push({ styleType: "button.ok", text: "Yes", onClick: onYes });
        var titleOptions = new TitleOptions("Question", "messagebox.question.icon", false);
        messageBox.createChildren(titleOptions, buttonsOption, msg);
        messageBox.open();
    };
    MessageBox.showToast = function (msg, duration, w) {
        var app = application_1.Application.get();
        var vp = app.getViewPort();
        var rw = Math.min(vp.w, w || 0);
        var messageBox = MessageBox.create({ app: app, styleType: "messagebox.toast", w: rw, h: 0 });
        messageBox.createChildren(null, null, msg);
        messageBox.on(Events.POINTER_UP, function (evt) {
            if (messageBox) {
                this.animateClose();
                messageBox = null;
            }
        });
        setTimeout(function (evt) {
            if (messageBox) {
                messageBox.animateClose();
                messageBox = null;
            }
        }, duration || 3000);
        messageBox.open();
    };
    MessageBox.showProgress = function (msg, taskStart, onDone, w) {
        var app = application_1.Application.get();
        var vp = app.getViewPort();
        var rw = Math.min(vp.w, w || 0) || 200;
        var rh = MessageBox.TITLE_H + MessageBox.BUTTONS_H + 50;
        var messageBox = MessageBox.create({ app: app, w: rw, h: rh });
        var buttonsOption = new ButtonsOptions();
        buttonsOption.buttons.push({ styleType: "button.ok", text: "Close", onClick: null });
        var titleOptions = new TitleOptions(msg, "messagebox.info.icon", false);
        messageBox.createChildren(titleOptions, buttonsOption, null);
        var group = messageBox.content;
        var progressBar = progress_bar_1.ProgressBar.create();
        group.padding = 10;
        group.topPadding = 20;
        group.childrenLayouter = simple_layouter_1.SimpleLayouter.create();
        progressBar.layoutParam = simple_layouter_1.SimpleLayouterParam.create({ x: "center", y: "middle", w: "100%", h: "20px" });
        var closeButton = messageBox.buttons.children[0];
        closeButton.enable = false;
        function onProgress(value) {
            progressBar.value = value;
            progressBar.requestRedraw();
            if (value >= 1) {
                onDone();
                closeButton.enable = true;
            }
        }
        group.addChild(progressBar);
        messageBox.open();
        taskStart(onProgress);
    };
    MessageBox.showInput = function (title, inputTips, value, isValueValid, onDone, inputType, w) {
        var app = application_1.Application.get();
        var vp = app.getViewPort();
        var rw = Math.min(vp.w, w || 0) || 200;
        var rh = MessageBox.TITLE_H + MessageBox.BUTTONS_H + 50;
        var messageBox = MessageBox.create({ app: app, w: rw, h: rh });
        var buttonsOption = new ButtonsOptions();
        buttonsOption.buttons.push({ styleType: "button.cancel", text: "Cancel", onClick: null });
        buttonsOption.buttons.push({ styleType: "button.ok", text: "OK", onClick: onOK });
        var titleOptions = new TitleOptions(title, "messagebox.info.icon", false);
        messageBox.createChildren(titleOptions, buttonsOption, null);
        var group = messageBox.content;
        var edit = edit_1.Edit.create({ inputTips: inputTips, value: value, inputType: inputType || "text" });
        group.padding = 10;
        group.topPadding = 15;
        group.childrenLayouter = simple_layouter_1.SimpleLayouter.create();
        edit.layoutParam = simple_layouter_1.SimpleLayouterParam.create({ x: "center", y: "middle", w: "100%", h: "25px" });
        function onOK() {
            onDone(edit.text);
        }
        edit.on(Events.CHANGING, function (evt) {
            okButton.enable = isValueValid(evt.value);
        });
        var okButton = messageBox.buttons.children[1];
        okButton.enable = isValueValid(value);
        group.addChild(edit);
        messageBox.open();
    };
    MessageBox.showChoice = function (title, data, multiple, onDone, w, h) {
        var itemH = 30;
        var app = application_1.Application.get();
        var vp = app.getViewPort();
        var contentH = Math.min(8, data.length) * itemH;
        var rw = Math.min(vp.w, w || 0) || 300;
        var rh = Math.min(vp.h, h || 0) || MessageBox.TITLE_H + MessageBox.BUTTONS_H + contentH + 30;
        var messageBox = MessageBox.create({ app: app, w: rw, h: rh });
        var buttonsOption = new ButtonsOptions();
        buttonsOption.buttons.push({ styleType: "button.cancel", text: "Cancel", onClick: null });
        buttonsOption.buttons.push({ styleType: "button.ok", text: "OK", onClick: onOK });
        var titleOptions = new TitleOptions(title, "messagebox.info.icon", false);
        messageBox.createChildren(titleOptions, buttonsOption, null);
        var group = messageBox.content;
        var listView = list_view_1.ListView.create({ itemH: itemH, dragToScroll: true });
        group.padding = 5;
        group.topPadding = 5;
        group.childrenLayouter = simple_layouter_1.SimpleLayouter.create();
        listView.layoutParam = simple_layouter_1.SimpleLayouterParam.create({ x: "center", y: "middle", w: "100%", h: "100%" });
        data.forEach(function (iter) {
            var item = list_item_1.ListItemCheckable.create({
                multiCheckable: multiple,
                iconURL: iter.iconURL,
                text: iter.text,
                userData: iter,
                leftPadding: 2
            });
            listView.addChild(item, true);
        });
        listView.relayoutChildren();
        function onOK() {
            var ret = [];
            listView.children.forEach(function (iter) {
                if (iter.value) {
                    ret.push(iter.userData);
                }
            });
            onDone(ret);
        }
        group.addChild(listView);
        messageBox.open();
    };
    MessageBox.create = function (options) {
        return MessageBox.rBin.create(options);
    };
    MessageBox.TITLE_H = 25;
    MessageBox.BUTTONS_H = 40;
    MessageBox.MSG_FONT_SIZE = 12;
    MessageBox.TYPE = "messagebox";
    MessageBox.rBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(MessageBox);
    return MessageBox;
}(dialog_1.Dialog));
exports.MessageBox = MessageBox;
;
widget_factory_1.WidgetFactory.register(MessageBox.TYPE, MessageBox.create);
