import { Rect } from "../rect";
import { Label } from "../controls/label";
import { Edit } from "../controls/edit";
import { Widget } from "../controls/widget";
import Events = require("../events");
/**
 * @class  RangeEdit
 * @extends Widget
 * 范围编辑器。范围包括first和second两个值。
 */
export declare class RangeEdit extends Widget {
    protected _firstEditor: Edit;
    protected _secondEditor: Edit;
    protected _label: Label;
    readonly inputable: boolean;
    /**
     * @property {Edit} firstEditor
     * 第一个编辑器。
     */
    readonly firstEditor: Edit;
    /**
     * @property {Edit} secondEditor
     * 第二个编辑器。
     */
    readonly secondEditor: Edit;
    value: {
        first: number;
        second: number;
    };
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
