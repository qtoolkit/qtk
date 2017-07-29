import {Group} from "./group";
import {Point} from "../base/point";
import {Style} from "../base/style";
import Events = require("../base/events");
import {Widget, WidgetState} from "./widget";
import {WidgetFactory} from "./widget-factory";
import {ImageTile, ImageDrawType} from "../base/image-tile";
import {WidgetRecyclableCreator} from "./widget-recyclable-creator";
import {LinearLayouter, LinearLayouterParam} from "../layouters/linear-layouter";

/**
 * @class ToolBarItem
 * @extends Widget
 * 工具条上的图标按钮。一般不需直接创建，而是调用ToolBar的addItem函数。
 */
export class ToolBarItem extends Widget {
    constructor(type?:string) {
        super(ToolBarItem.TYPE);
    }

    protected drawImage(ctx:any, style:Style) : Widget {
        var icon = this.enable ? this.normalIcon : this.disableIcon;
        if(icon) {
            var r = this.getFgImageRect(style);
            icon.draw(ctx, ImageDrawType.ICON, r.x, r.y, r.w, r.h);
        }

        return this;
    }

    protected onCreated() {
        super.onCreated();
        if(this.normalIconURL && this.disableIconURL) {
            this.normalIcon = ImageTile.create(this.normalIconURL);
            this.disableIcon = ImageTile.create(this.disableIconURL);
        }
    }

    protected normalIconURL : string;
    protected disableIconURL : string;
    protected normalIcon : ImageTile;
    protected disableIcon : ImageTile;

    protected static defProps = Object.assign({}, Widget.defProps, {normalIconURL:null, disableIconURL:null});
    protected getDefProps() : any {
        return ToolBarItem.defProps;
    }

    public static TYPE = "tool-bar-item";
    private static recycleBin = WidgetRecyclableCreator.create(ToolBarItem);
    public static create(options?:any) : ToolBarItem {
        return <ToolBarItem>ToolBarItem.recycleBin.create(options);
    };
}

/**
 * @class ToolBar
 * @extends Widget
 * 工具条。一般显示在主菜单下方，为用户提供一种便捷的操作。
 */
export class ToolBar extends Widget {
    protected onInit() {
        super.onInit();
        this.childrenLayouter = LinearLayouter.createH(0);
    }

    /**
     * @method addSpacer
     * 向ToolBar中增加一个占位符。
     * @param {number} width 宽度。
     * 
     * return {Widget} 返回增加的控件。
     */
    public addSpacer(width:number) : Widget{
        var size = this.h - 2;
        var item = Group.create({
            layoutParam : LinearLayouterParam.create(width, size, 1)
        });

       return this.addChild(item);
    }

    /**
     * @method addItem
     * 向ToolBar中增加一个按钮。
     * @param {string} cmd 命令名称。
     * @param {string} text 文字。
     * @param {string} tips 提示。
     * @param {normalIconURL} 图标URL。
     * @param {disableIconURL} 禁用时的图标URL。
     * 
     * return {Widget} 返回增加的控件。
     */
    public addItem(cmd:string, text:string, tips:string, normalIconURL:string, disableIconURL:string)  : Widget {
        var size = this.h - 2;
        var item = ToolBarItem.create({
            tips:tips,
            normalIconURL:normalIconURL,
            disableIconURL:disableIconURL,
            layoutParam : LinearLayouterParam.create(size, size, 1)
        });

       item.set({dataBindingRule:{click:{command:cmd}}}); 
       
       return this.addChild(item);
    }

    public static TYPE = "tool-bar";
    
    private static recycleBin = WidgetRecyclableCreator.create(ToolBar);
    public static create(options?:any) : ToolBar {
        return <ToolBar>ToolBar.recycleBin.create(options);
    };
}

