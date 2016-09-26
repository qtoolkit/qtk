import { Style } from "../style";
import { Widget, WidgetState } from "./widget";
import { TextLine } from "../graphics";
export declare class Label extends Widget {
    protected _multiLines: boolean;
    protected _textLines: Array<TextLine>;
    multiLines: boolean;
    value: string;
    setStyle(state: WidgetState, style: Style): Widget;
    protected drawTextSL(ctx: any, text: string, style: Style): Widget;
    protected drawTextML(ctx: any, style: Style): Widget;
    protected drawText(ctx: any, style: Style): Widget;
    relayoutText(): Widget;
    protected setProp(prop: string, newValue: any, notify: boolean): Widget;
    constructor(type?: string);
    protected onInit(): void;
    reset(type: string): Widget;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): Label;
}
