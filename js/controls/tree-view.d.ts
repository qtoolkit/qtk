import { Widget } from "./widget";
import { TreeItem } from "./tree-item";
import { ListView } from "./list-view";
import { TreeItemData } from "./tree-item-data";
/**
 * 树形视图。
 */
export declare class TreeView extends ListView {
    multiSelectable: boolean;
    /**
     * 每一层缩减的距离。
     */
    indention: number;
    /**
     * 选中一个子项。
     */
    setItemSelected(item: TreeItem, selected: boolean, exclude: boolean): Widget;
    addItem(parentData: TreeItemData, text: string, data: any, image: string): TreeItemData;
    removeAllItems(): void;
    removeItem(item: TreeItemData, destroy?: boolean): boolean;
    protected doLoad(data: TreeItemData, parentItem: TreeItem, level: number): void;
    reload(): void;
    loadData(data: TreeItemData): Widget;
    protected getLayoutWidth(): number;
    private resetChilren();
    protected _indention: number;
    protected _multiSelectable: boolean;
    protected _rootData: TreeItemData;
    constructor();
    protected onReset(): void;
    dispose(): void;
    static TYPE: string;
    private static recycleBinTreeView;
    static create(options?: any): TreeView;
}
