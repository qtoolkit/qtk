import { PagePropsDesc } from "../controls-ext/props-desc";
export declare class PropsInfo {
    w: number;
    data: any;
    mutable: boolean;
    pagePropsDesc: PagePropsDesc;
    constructor(pagePropsDesc: PagePropsDesc, data: any, mutable: boolean, w?: number);
    static create(pagePropsDesc: PagePropsDesc, data: any, mutable?: boolean, w?: number): PropsInfo;
}
