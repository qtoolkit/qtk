
/**
 * @class Rect
 * 用左上角坐标、宽度和高度来描述一个矩形区域。
 */
export class Rect {
	/**
	 * @property {number} x 
	 * 左上角X坐标。
	 */
	public x : number;
	
	/**
	 * @property {number} y 
	 * 左上角Y坐标。
	 */
	public y : number;
	
	/**
	 * @property {number} w 
	 * 宽度。
	 */
	public w : number;
	
	/**
	 * @property {number} h 
	 * 高度。
	 */
	public h : number;

	constructor(x:number, y:number, w:number, h:number) {
		this.init(x, y, w, h);
	}

	/**
	 * @method init
	 * 初始化Rect。
	 * @param {number} x 左上角X坐标。
	 * @param {number} y 左上角Y坐标。
	 * @param {number} w 宽度。
	 * @param {number} h 高度。
	 * 
	 * return {Rect} Rect自己。
	 */	
	init(x:number, y:number, w:number, h:number):Rect {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;

		return this;
	}
	
	public dispose() {
	}

	/**
	 * @method clone
	 * 克隆。
	 */
	public clone() : Rect {
		return Rect.create(this.x, this.y, this.w, this.h);
	}

	/**
	 * @method equal
	 * 判断两个Rect的区域是否相同。
	 */
	public equal(other:Rect) : boolean {
		return this.x === other.x && this.y === other.y && this.w === other.w && this.h === other.h;
	}

	/**
	 * @method copy
	 * 拷贝另外一个Rect的属性到当前的Rect。
	 */
	public copy(other:Rect) : Rect {
		return this.init(other.x, other.y, other.w, other.h);
	}
	
	/**
	 * @method merge 
	 * 扩展当前的Rect去包含指定的Rect。
	 * 
	 * @return {Rect} Rect本身。
	 */
	public merge(other:Rect) : Rect {
		var x = Math.min(this.x, other.x);
		var y = Math.min(this.y, other.y);

		this.w = Math.max(this.x+this.w, other.x+other.w) - x;
		this.h = Math.max(this.y+this.h, other.y+other.h) - y;
		this.x = x;
		this.y = y;

		return this;
	}

	/**
	 * @method containsPoint
	 * 判断Rect是否包含指定的点。
	 */
	public containsPoint(x:number, y:number) : boolean {
		return x >= this.x && x < (this.x + this.w) && y >= this.y && y < (this.y + this.h); 
	}

	/**
	 * @method normalize
	 * 规范化Rect，让w/h总是非负的，但表示的区域不变。
	 * @param {Rect} out 保存规范化之后的Rect，如果为空，则直接修改Rect本身。
	 * @return {Rect} 规范化之后的Rect。
	 */
	public normalize(out:Rect) : Rect {
		var x = this.w > 0 ? this.x : (this.x + this.w);
		var y = this.h > 0 ? this.y : (this.y + this.h);
		var w = Math.abs(this.w);
		var h = Math.abs(this.h);

		if(!out) {
			out = this;
		}
		out.init(x, y, w, h);

		return out;
	}

	public static create(x?:number, y?:number, w?:number, h?:number) {
		var r = new Rect(x || 0, y || 0, w || 0, h || 0);
		
		return r;
	}

	public static rect = Rect.create(0, 0, 0, 0);
};
