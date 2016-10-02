import { Style } from "../style";
import { Label } from "./label";
import { Widget } from "./widget";
import { HtmlEdit } from "../html/html-edit";
export declare class Edit extends Label {
    protected _input: HtmlEdit;
    protected _isEditing: boolean;
    protected _inputType: string;
    protected _inputTips: string;
    protected _inputFilter: Function;
    readonly inputable: boolean;
    inputFilter: (value: string) => string;
    inputTips: string;
    inputType: string;
    draw(ctx: any): void;
    relayoutText(): Widget;
    protected drawText(ctx: any, style: Style): Widget;
    protected getStyleType(): string;
    protected filterText(value: string): string;
    protected showEditor(): void;
    constructor();
    dispose(): void;
    protected dispatchClick(evt: any): void;
    static TYPE: string;
    private static r;
    static create(options?: any): Edit;
}
