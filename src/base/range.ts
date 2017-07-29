
export class Range {
	public first : number;
	public second : number;
	
	constructor(first:number, second:number) {
		this.first = first;
		this.second = second;
	}

	public dispose() {
	}

	public init(first:number, second:number) : Range {
		this.first = first;
		this.second = second;

		return this;
	}
	
	public static create(first?:number, second?:number) : Range {
		return new Range(first, second);
	}

	public static range = Range.create(0, 0);
};


