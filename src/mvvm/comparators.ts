import {IComparator} from "./icomparator";

/**
 * 数值比较器。
 */
export class NumberComparator implements IComparator {
	public compare(a:any, b:any) : number {
		return a - b;
	}
	
	public static create() : IComparator {
		return new NumberComparator();
	}
};

/**
 * 字符串比较器。
 */
export class StringComparator implements IComparator {
	public compare(a:any, b:any) : number {
		if(a > b) {
			return 1;
		}else if(a == b) {
			return 0;
		}else{
			return -1;
		}
	}
	
	public static create() : IComparator {
		return new StringComparator();
	}
};

/**
 * 反向比较器。
 */
export class RevertComparator implements IComparator {
	private comparator : IComparator;

	public compare(a:any, b:any) : number {
		var ret = this.comparator.compare(a, b);
		if(ret) {
			ret = -ret;
		}
		return ret;
	}

	public constructor(comparator:IComparator) {
		this.comparator = comparator;
	}

	public static create(comparator:IComparator):IComparator {
		return new RevertComparator(comparator);
	}
};

/**
 * 对象属性比较器。
 */
export class ObjectPropComparator implements IComparator {
	private prop : string;
	private comparator : IComparator;

	public compare(a:any, b:any) : number {
		var prop = this.prop;
		return this.comparator.compare(a[prop], b[prop]);
	}

	public constructor(comparator:IComparator, prop:string) {
		this.prop = prop;
		this.comparator = comparator;
	}

	public static create(comparator:IComparator, prop:string):IComparator {
		return new ObjectPropComparator(comparator, prop);
	}
};

