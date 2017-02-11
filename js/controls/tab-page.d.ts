import { Page } from "./page";
import { TabButton } from "./tab-button";
/**
 * @class TabPage
 * @extends Widget
 * 标签控件上的标签页。它只是一个普通容器控件，需要自己向其中添加子控件。
 */
export declare class TabPage extends Page {
    /**
     * @property {TabButton} tabButton
     * 与之关联标签按钮。
     */
    tabButton: TabButton;
    constructor();
    dispose(): void;
    static TYPE: string;
    private static r;
    static create(options?: any): TabPage;
}
