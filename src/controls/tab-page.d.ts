import { Page } from "./page";
import { TabButton } from "./tab-button";
export declare class TabPage extends Page {
    protected _tabButton: TabButton;
    tabButton: TabButton;
    constructor();
    dispose(): void;
    static TYPE: string;
    private static r;
    static create(options?: any): TabPage;
}
