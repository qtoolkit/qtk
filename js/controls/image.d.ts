import { Style } from "../style";
import { WidgetState, Widget } from "./widget";
import { ImageTile, ImageDrawType } from "../image-tile";
/**
 * 图片控件。
 */
export declare class Image extends Widget {
    private _style;
    constructor();
    image: ImageTile;
    drawType: ImageDrawType;
    value: string;
    protected onToJson(json: any): void;
    onFromJson(json: any): void;
    setStyle(state: WidgetState, style: Style): Widget;
    protected onReset(): void;
    getStyle(): Style;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): Image;
}
