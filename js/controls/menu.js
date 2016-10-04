"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var rect_1 = require("../rect");
var point_1 = require("../point");
var dialog_1 = require("./dialog");
var graphics_1 = require("../graphics");
var list_view_1 = require("./list-view");
var Events = require("../events");
var widget_1 = require("./widget");
var widget_factory_1 = require("./widget-factory");
var image_tile_1 = require("../image-tile");
var recyclable_creator_1 = require("../recyclable-creator");
var list_layouter_1 = require("../layouters/list-layouter");
var simple_layouter_1 = require("../layouters/simple-layouter");
var Menu = (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        _super.call(this, Menu.TYPE);
    }
    Object.defineProperty(Menu.prototype, "openedMenu", {
        get: function () {
            return this._openedMenu;
        },
        set: function (value) {
            var _this = this;
            this._openedMenu = value;
            if (value) {
                value.on(Events.CLOSE, function (evt) {
                    _this._openedMenu = null;
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Menu.prototype.hasItems = function () {
        return this._listView.children.length > 0;
    };
    Object.defineProperty(Menu.prototype, "itemH", {
        get: function () {
            return this._listView.itemH;
        },
        set: function (value) {
            this._listView.itemH = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Menu.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        /**
         * owner代表上级菜单或菜单条。
         */
        set: function (owner) {
            this._owner = owner;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Menu.prototype, "trigger", {
        get: function () {
            return this._trigger;
        },
        /**
         * 触发该菜单的MenuBarItem或MenuItem。
         */
        set: function (trigger) {
            this._trigger = trigger;
            this.app = trigger.app;
        },
        enumerable: true,
        configurable: true
    });
    Menu.prototype.onItemEnter = function (child) {
        var openedMenu = this._openedMenu;
        if (child.onInitSubMenu) {
            if (!openedMenu) {
                child.openSubMenu();
            }
            else if (openedMenu.trigger !== child) {
                child.reopenSubMenu(openedMenu);
            }
        }
        else if (openedMenu) {
            openedMenu.close();
        }
    };
    Menu.prototype.dispatchPointerMove = function (evt, ctx) {
        var owner = this.owner;
        /*
         * 如果事件在当前菜单外，把事件转发给owner处理。
         */
        if (!evt.pointerDown && owner) {
            var hitTestResult = this.selfHitTest(evt.x, evt.y, ctx);
            if (!hitTestResult) {
                ctx.save();
                ctx.identity();
                var x = this.x;
                var y = this.y;
                evt.x += x;
                evt.y += y;
                evt.x -= owner.x;
                evt.y -= owner.y;
                owner.dispatchPointerMove(evt, ctx);
                evt.x += owner.x;
                evt.y += owner.y;
                evt.x -= x;
                evt.y -= y;
                ctx.restore();
            }
        }
        _super.prototype.dispatchPointerMove.call(this, evt, ctx);
    };
    Menu.prototype.clearContent = function () {
        this._listView.removeAllChildren();
        return this;
    };
    Menu.prototype.resizeToContent = function () {
        var w = this.w || 200;
        var listView = this._listView;
        var h = listView.desireHeight + this.topPadding + this.bottomPadding;
        this.resizeTo(w, h);
        this.relayoutChildren();
        return this;
    };
    Menu.prototype.open = function () {
        this.resizeToContent();
        _super.prototype.open.call(this);
        this.grab();
        return this;
    };
    Menu.prototype.dispatchClick = function (evt) {
        _super.prototype.dispatchClick.call(this, evt);
        if (!this.hitTestResult) {
            this.close();
        }
    };
    Menu.prototype.addSpace = function () {
        var item = this.addItemExt("-", null);
        item.styleType = item.type + ".space";
        return item;
    };
    Menu.prototype.addCheckableItem = function (text, onClick, value, shortcut) {
        var item = this.addItemExt(text, null, shortcut, null);
        item.set({ checkable: true, value: value });
        item.styleType = item.type + ".checkable";
        item.on(Events.CLICK, onClick);
        return item;
    };
    Menu.prototype.addItem = function (text, onClick, iconURL, shortcut) {
        var item = this.addItemExt(text, iconURL, shortcut, null);
        item.on(Events.CLICK, onClick);
        return item;
    };
    Menu.prototype.addFolderItem = function (text, onInitSubMenu) {
        var item = this.addItemExt(text, null, null, onInitSubMenu);
        item.styleType = item.type + ".folder";
        return item;
    };
    Menu.prototype.addItemExt = function (text, iconURL, shortcut, onInitSubMenu) {
        var _this = this;
        var listView = this._listView;
        if (!listView.app) {
            listView.app = this.app;
        }
        var item = MenuItem.create();
        var h = text === "-" ? this.itemH >> 1 : this.itemH;
        item.set({ iconURL: iconURL, text: text, shortcut: shortcut, onInitSubMenu: onInitSubMenu });
        item.layoutParam = list_layouter_1.ListLayouterParam.create({ h: h });
        listView.addChild(item);
        item.on(Events.POINTER_ENTER, function (evt) {
            _this.onItemEnter(item);
        });
        return item;
    };
    Menu.prototype.onReset = function () {
        _super.prototype.onReset.call(this);
        this.hasOwnCanvas = true;
        this.styleType = "widget.transparent";
        this.childrenLayouter = simple_layouter_1.SimpleLayouter.create();
        var listView = list_view_1.ListView.create();
        listView.padding = 0;
        listView.itemH = 25;
        listView.styleType = "menu";
        listView.dragToScroll = false;
        listView.slideToScroll = false;
        listView.bottomPadding = 4;
        listView.layoutParam = simple_layouter_1.SimpleLayouterParam.create({ x: "0", y: "0px", w: "100%", h: "100%" });
        this.addChild(listView);
        this.target = listView;
        this._listView = listView;
        this.topPadding = 0;
        this.bottomPadding = 4;
        this.leftPadding = 2;
        this.rightPadding = 2;
    };
    Menu.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this._trigger = null;
        this._listView = null;
        this._openedMenu = null;
    };
    Menu.create = function (options) {
        return Menu.r.create().reset(Menu.TYPE, options);
    };
    Menu.TYPE = "menu";
    Menu.r = new recyclable_creator_1.RecyclableCreator(function () { return new Menu(); });
    return Menu;
}(dialog_1.Dialog));
exports.Menu = Menu;
;
var MenuItem = (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem() {
        _super.call(this, MenuItem.TYPE);
    }
    Object.defineProperty(MenuItem.prototype, "iconURL", {
        set: function (value) {
            var _this = this;
            if (value) {
                this._icon = image_tile_1.ImageTile.create(value, function (evt) {
                    _this.requestRedraw();
                });
            }
            else {
                this._icon = null;
            }
            this._iconURL = value;
        },
        enumerable: true,
        configurable: true
    });
    MenuItem.prototype.dispatchClick = function (evt) {
        _super.prototype.dispatchClick.call(this, evt);
        if (!this.onInitSubMenu) {
            this.closeMenu();
        }
    };
    MenuItem.prototype.drawImage = function (ctx, style) {
        var icon = this._icon;
        var y = this.topPadding;
        var x = this.leftPadding;
        var h = this.h - this.topPadding - this.bottomPadding;
        var w = h;
        if (this.checkable && this.value || this.onInitSubMenu) {
            icon = style.foreGroundImage;
            if (this.onInitSubMenu) {
                x = this.w - this.rightPadding - w;
            }
        }
        if (icon) {
            icon.draw(ctx, image_tile_1.ImageDrawType.ICON, x, y, w, h);
        }
        return this;
    };
    MenuItem.prototype.drawText = function (ctx, style) {
        var text = this.getLocaleText();
        ;
        var h = this.h - this.topPadding - this.bottomPadding;
        var x = this.leftPadding + h;
        var y = this.topPadding;
        var w = this.w - x - this.rightPadding;
        if (text) {
            if (text === "-") {
                y = this.h >> 1;
                w = this.w;
                graphics_1.Graphics.drawLine(ctx, style.lineColor, 1, 0, y, w, y);
            }
            else {
                graphics_1.Graphics.drawTextSL(ctx, text, style, rect_1.Rect.rect.init(x, y, w, h));
            }
        }
        if (this.shortcut) {
            if (!this._shortCutStyle) {
                this._shortCutStyle = style.clone();
                this._shortCutStyle.textAlign = "right";
            }
            text = this.shortcut;
            graphics_1.Graphics.drawTextSL(ctx, text, this._shortCutStyle, rect_1.Rect.rect.init(x, y, w, h));
        }
        return this;
    };
    MenuItem.prototype.reopenSubMenu = function (menu) {
        var ownerMenu = this.win;
        menu.clearContent();
        this.onInitSubMenu(menu);
        menu.set({ trigger: this });
        var p = this.toViewPoint(point_1.Point.point.init(this.w, 0));
        var x = p.x - menu.leftPadding;
        var y = p.y - menu.topPadding;
        menu.moveTo(x, y);
        menu.resizeToContent();
    };
    MenuItem.prototype.openSubMenu = function () {
        var ownerMenu = this.win;
        var menu = Menu.create();
        menu.set({ trigger: this, owner: ownerMenu });
        this.onInitSubMenu(menu);
        if (menu.hasItems()) {
            var p = this.toViewPoint(point_1.Point.point.init(this.w, 0));
            var x = p.x - menu.leftPadding;
            var y = p.y - menu.topPadding;
            menu.moveTo(x, y);
            ownerMenu.openedMenu = menu;
            menu.open();
        }
        else {
            menu.dispose();
        }
    };
    MenuItem.prototype.closeMenu = function () {
        var menu = this.win;
        while (menu) {
            var owner = menu.owner;
            menu.close();
            if (owner.type === Menu.TYPE) {
                menu = owner;
            }
            else {
                break;
            }
        }
    };
    MenuItem.prototype.onReset = function () {
        _super.prototype.onReset.call(this);
        this._icon = null;
        this.onInitSubMenu = null;
    };
    MenuItem.prototype.getDefProps = function () {
        return MenuItem.defProps;
    };
    MenuItem.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this._icon = null;
        this.onInitSubMenu = null;
    };
    MenuItem.create = function (options) {
        return MenuItem.recycleBin.create().reset(MenuItem.TYPE, options);
    };
    MenuItem.defProps = Object.assign({}, widget_1.Widget.defProps, { _iconURL: null,
        checkable: false, shortcut: null, _lp: 2, _rp: 4
    });
    MenuItem.TYPE = "menu-item";
    MenuItem.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new MenuItem(); });
    return MenuItem;
}(widget_1.Widget));
exports.MenuItem = MenuItem;
;
widget_factory_1.WidgetFactory.register(Menu.TYPE, Menu.create);
widget_factory_1.WidgetFactory.register(MenuItem.TYPE, MenuItem.create);
