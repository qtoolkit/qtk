import { Emitter } from "../emitter";
import { TreeItem } from "./tree-item";
import { ImageTile } from "../image-tile";
/**
 * TreeItem对应的数据信息。
 */
export declare class TreeItemData extends Emitter {
    /**
     * TreeItem上的用户数据，与具体的应用场景有关。
     */
    userData: any;
    /**
     * 用于显示的文本。
     */
    text: string;
    /**
     * 用于查找的名称。
     */
    name: string;
    /**
     * 用于显示的图标。
     */
    icon: ImageTile;
    /**
     * 当前项是否展开。
     */
    expanded: boolean;
    /**
     * 当前项是否被选中。
     */
    selected: boolean;
    /**
     * 当前项对应的TreeItem。
     */
    treeItem: TreeItem;
    /**
     * 当前项的父节点。
     */
    parent: TreeItemData;
    /**
     * 当前项的子节点。
     */
    children: Array<TreeItemData>;
    /**
     * 从子节点数组中删除指定的子节点。
     * @param data 子节点。
     * @param destroy 是否销毁该子节点。
     * @returns 成功返回true失败返回false。
     */
    removeChild(data: TreeItemData, destroy: boolean): boolean;
    /**
     * 增加一个子节点。
     * @param text 文本
     * @param icon 图标
     * @param data 数据
     * @returns 成功返回新增的子节点，失败返回null。
     */
    addChild(text: string, icon: string, userData: any): TreeItemData;
    dispose(): void;
    reset(): TreeItemData;
    constructor(text: string, iconURL: string, userData: any);
    static create(text: string, icon: string, userData: any): TreeItemData;
}
