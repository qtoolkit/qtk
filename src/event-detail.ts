/**
 * 输入事件的详细信息。
 */
export class InputEventDetail {
	/**
	 * alt键是否按下。
	 */
	public altKey   : boolean;
	/**
	 * ctrl键是否按下。
	 */
	public ctrlKey  : boolean;
	/**
	 * shift键是否按下。
	 */
	public shiftKey : boolean;
	/**
	 * command键是否按下。
	 */
	public commandKey : boolean;

	constructor(altKey?:boolean, ctrlKey?:boolean, shiftKey?:boolean, commandKey?:boolean) {
		this.altKey = altKey;
		this.ctrlKey = ctrlKey;
		this.shiftKey = shiftKey;
		this.commandKey = commandKey;
	}
};
	
/**
 * 指针事件的详细信息。
 */
export class PointerEventDetail extends InputEventDetail {
	/**
	 * 指针事件的ID。
	 */
	public id : number;
	/**
	 * 指针事件的x坐标。
	 */
	public x : number;
	/**
	 * 指针事件的y坐标。
	 */
	public y : number;
	/**
	 * 指针是否按下。
	 */
	public pointerDown : boolean;
	/**
	 * 如果指针按下，按下时的x坐标。
	 */
	public pointerDownX : number;
	/**
	 * 如果指针按下，按下时的y坐标。
	 */
	public pointerDownY : number;
	/**
	 * 如果指针按下，按下时的时间。
	 */
	public pointerDownTime : number;

	constructor(id:number, x:number, y:number, 
				altKey?:boolean, ctrlKey?:boolean, shiftKey?:boolean, commandKey?:boolean) {
		super(altKey, ctrlKey, shiftKey, commandKey);
		this.id = id;
		this.x = x;
		this.y = y;
		this.pointerDown = false;
		this.pointerDownX = 0;
		this.pointerDownY = 0;
		this.pointerDownTime = 0;
	}

	/**
	 * 设置指针按下的状态。
	 */
	public setPointerDown(pointerDown:boolean, x?:number, y?:number, t?:number) {
		this.pointerDownX = x;
		this.pointerDownY = y;
		this.pointerDownTime = t;
		this.pointerDown = pointerDown;
	}

	public dispose() {
	}

	public static create(id:number, x:number, y:number,
						altKey?:boolean, ctrlKey?:boolean, shiftKey?:boolean, commandKey?:boolean) {
		var detail = new PointerEventDetail(id, x, y, altKey, ctrlKey, shiftKey, commandKey);

		return detail;
	}
};

/**
 * 按键事件的详细信息。
 */
export class KeyEventDetail extends InputEventDetail {
	/**
	 * 键值。
	 */
	public keyCode : number;
	
	constructor(keyCode:number, altKey?:boolean, ctrlKey?:boolean, shiftKey?:boolean, commandKey?:boolean) {
		super(altKey, ctrlKey, shiftKey, commandKey);
		this.keyCode = keyCode;
	}

	public dispose() {
	}
	
	public static create(keyCode:number,
			altKey?:boolean, ctrlKey?:boolean, shiftKey?:boolean, commandKey?:boolean) {
	
		var detail = new KeyEventDetail(keyCode, altKey, ctrlKey, shiftKey, commandKey);

		return detail;
	}
};

/**
 * 滚轮事件的详细信息。
 */
export class WheelEventDetail extends InputEventDetail {
	/**
	 * 滚动的间隔。
	 */
	public delta : number;
	
	constructor(delta:number, altKey?:boolean, ctrlKey?:boolean, shiftKey?:boolean, commandKey?:boolean) {
		super(altKey, ctrlKey, shiftKey, commandKey);
		this.delta = delta;
	}

	public dispose() {
	}
	
	public static create(delta:number,
			altKey?:boolean, ctrlKey?:boolean, shiftKey?:boolean, commandKey?:boolean) : WheelEventDetail {
	
		var detail = new WheelEventDetail(delta, altKey, ctrlKey, shiftKey, commandKey);

		return detail;
	}
};

/**
 * 绘制事件的详细信息。
 */
export class DrawEventDetail  {
	/**
	 * 当前时间。
	 */
	public time : number;
	/**
	 * 间隔时间。
	 */
	public deltaTime : number;
	/**
	 * 帧率。
	 */
	public fps : number;

	public static create() {
		return new DrawEventDetail();
	}
}

/**
 * 属性改变事件的详细信息。
 */
export class ChangeEventDetail {
	/**
	 * 属性名。
	 */
	public attr : string;
	/**
	 * 属性的旧值。
	 */
	public oldValue : any;
	/**
	 * 属性的新值。
	 */
	public newValue : any;

	constructor(attr:string, oldValue:any, newValue:any) {
		this.attr = attr;
		this.oldValue = oldValue;
		this.newValue = newValue;
	}

	public static create(attr:string, oldValue:any, newValue:any) {
		return new ChangeEventDetail(attr, oldValue, newValue);
	}
}
