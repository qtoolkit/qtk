
export enum LayoutUnit {
	PX = 0,
	PERCENT	
};

export class LayoutParam {
	public xAttr : LayoutUnit;
	public yAttr : LayoutUnit;
	public wAttr : LayoutUnit;
	public hAttr : LayoutUnit;
	public xValue : number;
	public yValue : number;
	public wValue : number;
	public hValue : number;

	constructor() {
		this.xAttr = LayoutUnit.PX;
		this.yAttr = LayoutUnit.PX;
		this.wAttr = LayoutUnit.PX;
		this.hAttr = LayoutUnit.PX;

		this.xValue = 0;
		this.yValue = 0;
		this.wValue = 0;
		this.hValue = 0;
	}
};

