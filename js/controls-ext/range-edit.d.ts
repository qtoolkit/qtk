import { Rect } from "../rect";
import { Label } from "../controls/label";
import { Edit } from "../controls/edit";
import { Widget } from "../controls/widget";
import Events = require("../events");
/**
 * 范围编辑器。
 */
export declare class RangeEdit extends Widget {
    protected _firstEditor: Edit;
    protected _secondEditor: Edit;
    protected _label: Label;
    readonly inputable: boolean;
    readonly firstEditor: Edit;
    readonly secondEditor: Edit;
    value: any;
    protected onToJson(json: any): void;
    relayoutChildren(): Rect;
    dispose(): void;
    protected forwardChangeEvent(evt: Events.ChangeEvent): void;
    protected onReset(): void;
    constructor();
    static TYPE: string;
    private static rBin;
    static create(options?: any): RangeEdit;
}
