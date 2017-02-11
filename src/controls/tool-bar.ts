import {Group} from "./group";
import {Point} from "../point";
import {Style} from "../style";
import Events = require("../events");
import {Widget, WidgetState} from "./widget";
import {WidgetFactory} from "./widget-factory";
import {ImageTile, ImageDrawType} from "../image-tile";
import {WidgetRecyclableCreator} from "./widget-recyclable-creator";
import {LinearLayouter, LinearLayouterParam} from "../layouters/linear-layouter";

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

export class ToolBar extends Widget {
    protected onInit() {
        super.onInit();
        this.childrenLayouter = LinearLayouter.createH(0);
    }

    public addSpacer(width:number) {
        var size = this.h - 2;
        var item = Group.create({
            layoutParam : LinearLayouterParam.create(width, size, 1)
        });

       this.addChild(item);
    }

    public addItem(cmd:string, text:string, tips:string, normalIconURL:string, disableIconURL:string) {
        var size = this.h - 2;
        var item = ToolBarItem.create({
            tips:tips,
            normalIconURL:normalIconURL,
            disableIconURL:disableIconURL,
            layoutParam : LinearLayouterParam.create(size, size, 1)
        });

       item.set({dataBindingRule:{click:{command:cmd}}}); 
       
       this.addChild(item);
    }

    public static TYPE = "tool-bar";
    
    private static recycleBin = WidgetRecyclableCreator.create(ToolBar);
    public static create(options?:any) : ToolBar {
        return <ToolBar>ToolBar.recycleBin.create(options);
    };
}

