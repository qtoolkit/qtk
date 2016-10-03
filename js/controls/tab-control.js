"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var rect_1 = require("../rect");
var pages_1 = require("./pages");
var widget_1 = require("./widget");
var tab_page_1 = require("./tab-page");
var Events = require("../events");
var tab_button_1 = require("./tab-button");
var tab_button_group_1 = require("./tab-button-group");
var widget_factory_1 = require("./widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
var TabControl = (function (_super) {
    __extends(TabControl, _super);
    function TabControl() {
        _super.call(this, TabControl.TYPE);
    }
    Object.defineProperty(TabControl.prototype, "value", {
        get: function () {
            return this._pages.value;
        },
        set: function (value) {
            this._pages.value = value;
            this.buttonGroup.value = value;
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabControl.prototype, "pages", {
        get: function () {
            return this._pages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabControl.prototype, "buttonGroup", {
        get: function () {
            return this._buttonGroup;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabControl.prototype, "buttonGroupAtTop", {
        get: function () {
            return this._bgAtTop;
        },
        set: function (value) {
            this._bgAtTop = value;
            this.relayoutChildren();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabControl.prototype, "buttonGroupHeight", {
        get: function () {
            return this._bgh;
        },
        set: function (value) {
            this._bgh = value;
            this.relayoutChildren();
        },
        enumerable: true,
        configurable: true
    });
    TabControl.prototype.removePage = function (tabPage, destroy) {
        if (tabPage) {
            var tabButton = tabPage.tabButton;
            this.pages.removeChild(tabPage, false, destroy);
            this.buttonGroup.removeChild(tabButton, false, destroy);
            this.value--;
        }
    };
    TabControl.prototype.addPage = function (title, normalIconURL, currentIconURL, closable, closeButtonAtLeft) {
        if (!this.pages.app) {
            this.pages.app = this.app;
        }
        if (!this.buttonGroup.app) {
            this.buttonGroup.app = this.app;
        }
        var tabButton = tab_button_1.TabButton.create();
        tabButton.setIcons(normalIconURL, currentIconURL);
        tabButton.set({ text: title, closable: closable, closeButtonAtLeft: closeButtonAtLeft });
        var tabPage = tab_page_1.TabPage.create();
        tabButton.tabPage = tabPage;
        tabPage.tabButton = tabButton;
        this.pages.addChild(tabPage);
        this.buttonGroup.addChild(tabButton);
        var tabControl = this;
        tabButton.on(Events.CLICK, function (evt) {
            tabControl.pages.setValueByPage(this.tabPage);
            if (closable && this.target && this.target === this.closeButton) {
                tabControl.removePage(this.tabPage);
            }
        });
        this.value = this._value;
        this.relayoutChildren();
        return tabPage;
    };
    TabControl.prototype.relayoutChildren = function () {
        var x = this.leftPadding;
        var y = this.topPadding;
        var buttonGroupHeight = this.buttonGroupHeight;
        var h = this.h - this.topPadding - this.bottomPadding;
        var w = this.w - this.leftPadding - this.rightPadding;
        var pages = this._pages;
        var buttonGroup = this._buttonGroup;
        if (this.buttonGroupAtTop) {
            if (buttonGroup) {
                buttonGroup.moveResizeTo(x, y, w, buttonGroupHeight);
                buttonGroup.relayoutChildren();
            }
            y += buttonGroupHeight;
            h -= buttonGroupHeight;
        }
        else {
            if (buttonGroup) {
                buttonGroup.moveResizeTo(x, this.h - buttonGroupHeight - this.bottomPadding, w, buttonGroupHeight);
                buttonGroup.relayoutChildren();
            }
            h -= buttonGroupHeight;
        }
        if (pages) {
            pages.moveResizeTo(x, y, w, h);
            pages.relayoutChildren();
        }
        return rect_1.Rect.rect.init(0, 0, this.w, this.h);
    };
    TabControl.prototype.onReset = function () {
        this._value = 0;
        this._pages = pages_1.Pages.create();
        this.addChild(this._pages, true);
        this._buttonGroup = tab_button_group_1.TabButtonGroup.create();
        this.addChild(this._buttonGroup, true);
    };
    TabControl.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this._pages = null;
        this._buttonGroup = null;
    };
    TabControl.prototype.getDefProps = function () {
        return TabControl.defProps;
    };
    TabControl.create = function (options) {
        return TabControl.r.create().reset(TabControl.TYPE, options);
    };
    TabControl.defProps = Object.assign({}, widget_1.Widget.defProps, { _bgh: 30, _bgAtTop: false });
    TabControl.TYPE = "tab-control";
    TabControl.r = new recyclable_creator_1.RecyclableCreator(function () { return new TabControl(); });
    return TabControl;
}(widget_1.Widget));
exports.TabControl = TabControl;
;
widget_factory_1.WidgetFactory.register(TabControl.TYPE, TabControl.create);
