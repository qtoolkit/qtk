import { PagePropsDesc } from "../controls-ext/props-desc";
/**
 * @class PropsInfo
 * InteractionRequest.props的参数。
 */
export declare class PropsInfo {
    w: number;
    data: any;
    mutable: boolean;
    pagePropsDesc: PagePropsDesc;
    constructor(pagePropsDesc: PagePropsDesc, data: any, mutable: boolean, w?: number);
    /**
     * @method create
     * @static
     * 创建PropsInfo对象。
     *
     * @param {PagePropsDesc} pagePropsDesc 属性描述对象。
     * @param {any} data 与pagePropsDesc对应的数据。
     * @param {boolean} mutable修改原始数据还是拷贝一份新的。
     * @param {number} w 宽度（单位为像素）。
     *
     * @return {PropsInfo}
     */
    static create(pagePropsDesc: PagePropsDesc, data: any, mutable?: boolean, w?: number): PropsInfo;
}
