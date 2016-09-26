import { Widget } from "./widget";
import { ScrollView } from "./scroll-view";
export declare class RichText extends ScrollView {
    protected _doc: any;
    protected _data: any;
    protected _verticalAlignment: string;
    protected hasFocus(): boolean;
    data: any;
    constructor(type?: string);
    protected getVerticalOffset(): number;
    protected doDrawChildren(ctx: any): Widget;
    protected adjustSize(): void;
    protected onInit(): void;
    dispose(): void;
    static TYPE: string;
    private static reBin;
    static create(options?: any): RichText;
}
