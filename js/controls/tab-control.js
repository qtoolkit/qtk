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
var rect_1 = require("../rect");
var pages_1 = require("./pages");
var widget_1 = require("./widget");
var tab_page_1 = require("./tab-page");
var Events = require("../events");
var tab_button_1 = require("./tab-button");
var tab_button_group_1 = require("./tab-button-group");
var widget_factory_1 = require("./widget-factory");
var widget_recyclable_creator_1 = require("./widget-recyclable-creator");
/**
 * @class TabControl
 * @extends Widget
 * 标签控件。
 */
var TabControl = (function (_super) {
    __extends(TabControl, _super);
    function TabControl() {
        return _super.call(this, TabControl.TYPE) || this;
    }
    Object.defineProperty(TabControl.prototype, "value", {
        get: function () {
            return this._pages.value;
        },
        /**
         * @property {number} value
         * 标签控件的值代表当前标签页的索引。可以修改value来指定当前的标签页，也可以用activePage来指定当前的标签页。
         */
        set: function (value) {
            var oldValue = this.value;
            this._value = value;
            this._pages.value = value;
            this.buttonGroup.value = value;
            if (value !== oldValue) {
                this.notifyChange(oldValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabControl.prototype, "activePage", {
        get: function () {
            return (this.pages.children[this.value]);
        },
        /**
         * @property {TabPage} activePage
         * 当前的标签页。
         */
        set: function (tabPage) {
            var value = this.pages.indexOfChild(tabPage);
            if (value >= 0) {
                this.value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabControl.prototype, "pages", {
        /**
         * @property {Pages} pages
         * 标签页的集合。
         */
        get: function () {
            return this._pages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabControl.prototype, "buttonGroup", {
        /**
         * @property {TabButtonGroup} buttonGroup
         * 标签按钮的集合。
         */
        get: function () {
            return this._buttonGroup;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabControl.prototype, "expandButton", {
        get: function () {
            return this.buttonGroup.autoExpand;
        },
        /**
         * @property {boolean} expandButton
         * 是否扩展标签按钮的宽度。如果为false，则根据当前的标题和图标计算标签按钮的宽度，否则所有标签按钮平分button group的宽度。
         */
        set: function (value) {
            this.buttonGroup.autoExpand = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabControl.prototype, "buttonGroupAtTop", {
        get: function () {
            return this._bgAtTop;
        },
        /**
         * @property {boolean} buttonGroupAtTop
         * true表示标签按钮组的位置在顶部，否则在底部。
         */
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
        /**
         * @property {number} buttonGroupHeight
         * 标签按钮组的高度。
         */
        set: function (value) {
            this._bgh = value;
            this.relayoutChildren();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @method setPageTitle
     * 设置指定TabPage的标题。
     * return {TabControl} 控件本身。
     */
    TabControl.prototype.setPageTitle = function (tabPage, title) {
        var index = this.pages.indexOfChild(tabPage);
        if (index >= 0) {
            var button = this.buttonGroup.children[index];
            button.text = title;
        }
        return this;
    };
    /**
     * @method getPageTitle
     * 获取指定TabPage的标题。
     */
    TabControl.prototype.getPageTitle = function (tabPage) {
        var index = this.pages.indexOfChild(tabPage);
        if (index >= 0) {
            var button = this.buttonGroup.children[index];
            return button.text;
        }
        return null;
    };
    /**
     * @method onClosePage
     * 在点击标签按钮上的关闭按钮时会调用此函数，子类可以重载本函数，以提供关闭确认之类的功能。
     */
    TabControl.prototype.onClosePage = function (tabPage) {
        this.removePage(tabPage, true);
    };
    /**
     * @method removePage
     * 移除指定的标签页，相应的标签按钮也会移出。
     * @param {TabPage} tabPage 要移出的标签页。
     * @param {boolean} destroy 是否移出该标签页。
     *
     * return {TabControl} 控件本身。
     */
    TabControl.prototype.removePage = function (tabPage, destroy) {
        if (tabPage) {
            var tabButton = tabPage.tabButton;
            this.pages.removeChild(tabPage, false, destroy);
            this.buttonGroup.removeChild(tabButton, false, destroy);
            this.value--;
        }
        return this;
    };
    /**
     * @method addPage
     * 向标签控件中增加一个标签页。
     * @param {string} title 标题，作为标签按钮的文本。
     * @param {string} normalIconURL 正常时的图标的URL。
     * @param {string} currentIconURL 处于当前页时的图标的URL。
     * @param {boolean} closable 是否显示关闭按钮。
     * @param {boolean} closeButtonAtLeft 如果显示关闭按钮，关闭按钮是否显示在左边。
     *
     * @return {TabPage} 返回被创建的TabPage。
     */
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
            tabControl.activePage = this.tabPage;
            if (closable && this.target && this.target === this.closeButton) {
                tabControl.onClosePage(this.tabPage);
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
        return TabControl.r.create(options);
    };
    return TabControl;
}(widget_1.Widget));
TabControl.defProps = Object.assign({}, widget_1.Widget.defProps, { _bgh: 30, _bgAtTop: false });
TabControl.TYPE = "tab-control";
TabControl.r = widget_recyclable_creator_1.WidgetRecyclableCreator.create(TabControl);
exports.TabControl = TabControl;
;
widget_factory_1.WidgetFactory.register(TabControl.TYPE, TabControl.create);
