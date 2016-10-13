import {PagePropsDesc} from "../controls-ext/props-desc";

export class PropsInfo {
	public w : number;
	public data : any;
	public mutable : boolean;
	public pagePropsDesc:PagePropsDesc;

	constructor(pagePropsDesc:PagePropsDesc, data:any, mutable:boolean,  w?:number) {
		this.w = w;
		this.data = data;
		this.mutable = mutable;
		this.pagePropsDesc = pagePropsDesc;
	}

	public static create(pagePropsDesc:PagePropsDesc, data:any, mutable?:boolean,  w?:number) {
		return new PropsInfo(pagePropsDesc, data, mutable, w);
	}
};
