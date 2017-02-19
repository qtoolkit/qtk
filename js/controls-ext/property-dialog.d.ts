import { PagePropsDesc } from "./props-desc";
import { MessageBox, TitleOptions, ButtonsOptions } from "../controls/message-box";
/**
 * @class PropertyDialog
 * @extends Widget
 * 属性对话框。
 */
export declare class PropertyDialog extends MessageBox {
    protected createChildren(titleOptions: TitleOptions, buttonsOptions: ButtonsOptions, content?: string): void;
    static show(pagePropsDesc: PagePropsDesc, data: any, onYes: Function, onNo?: Function, w?: number): void;
    static TYPE: string;
    private static rb;
    static create(options?: any): PropertyDialog;
}
