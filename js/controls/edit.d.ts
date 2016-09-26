import { Style } from "../style";
import { Label } from "./label";
import { Widget } from "./widget";
import { HtmlEdit } from "../html/html-edit";
export declare class Edit extends Label {
    protected _input: HtmlEdit;
    protected _isEditing: boolean;
    protected _inputType: string;
    protected _inputTips: string;
    inputTips: string;
    inputType: string;
    draw(ctx: any): void;
    relayoutText(): Widget;
    protected drawText(ctx: any, style: Style): Widget;
    protected getStyleType(): string;
    protected showEditor(): void;
    constructor();
    protected dispatchClick(evt: any): void;
    static TYPE: string;
    private static r;
    static create(options?: any): Edit;
}
