import {Widget} from './widget';
import {Layouter, LayouterFactory} from './layouter';

const TYPE = "SimpleLayouter";

/**
 * 简单的布局器。
 */
export class SimpleLayouter extends Layouter {
	public get type() : string {
		return TYPE;
	}

	public layoutChildren(widget:Widget, children:Array<Widget>) {
		var pw = widget.w;
		var ph = widget.h;
		var arr = widget.children;
		for(var i = 0, n = arr.length; i < n; i++) {
			this.layoutChild(arr[i], pw, ph);
		}
	}

	public layoutChild(child:Widget, pw:number, ph:number) {
		var param = <SimpleLayouterParam>child.layoutParam;
		if(param && param.type === TYPE && child.visible) {
			var w = getValueOf(param.w, pw);
			var h = getValueOf(param.h, ph);
			if(param.minW >= 0) {
				w = Math.max(w, param.minW);
			}
			
			if(param.minH >= 0) {
				h = Math.max(h, param.minH);
			}

			if(param.maxW >= 0) {
				w = Math.min(w, param.maxW);
			}
			
			if(param.maxH >= 0) {
				h = Math.min(h, param.maxH);
			}

			var f = param.x[0];
			var x = (f === "c" || f === "m") ? (pw - w) >> 1 : getValueOf(param.x, pw);
			f = param.y[0];
			var y = (f === "c" || f === "m") ? (ph - h) >> 1 : getValueOf(param.y, ph);

			child.moveResizeTo(x, y, w, h);
		}
	}

	static create(options:any) : SimpleLayouter {
		var layouter = new SimpleLayouter();

		return layouter.setOptions(options);
	}
};

LayouterFactory.register(TYPE, SimpleLayouter.create);

/**
 * 简单的布局器的参数。
 * 
 * 如果父控件使用SimpleLayouter布局器，则子控件需要把layoutParam设置为SimpleLayouter。
 * 
 * 对于x/y/w/h参数：
 * *.如果以px结尾，则直接取它的值。
 * *.如果以%结尾，则表示父控件的宽度/高度的百分比。
 * *.如果以-开头，则表示父控件的宽度/高度的减去该值。
 * 
 * x也可以为『center』，表示水平居中。
 * y也可以为『middle』，表示垂直居中。
 * 
 * 示例：
 *
 * 父控件的宽度为800，高度为600:
 *
 * param.x = "10px"  则 x = 10;
 * param.x = "10%"   则 x = 80;
 * param.x = "-10%"  则 x = 720;
 * param.x = "-10px" 则 x = 790;
 *
 */
export class SimpleLayouterParam {
	public type : string;
	public x : string;
	public y : string;
	public w : string;
	public h : string;
	public minW : number;
	public maxW : number;
	public minH : number;
	public maxH : number;

	constructor(x:string, y:string, w:string, h:string) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.minW = -1;
		this.minH = -1;
		this.maxW = -1;
		this.maxH = -1;
		this.type = TYPE;
	}

	static create(x:string, y:string, w:string, h:string) {
		return new SimpleLayouterParam(x || '0px', y||'0px', w||'0px', h||'0px');
	}
};

function getValueOf(value:string, total:number) {
	var v = parseFloat(value);
	if(value.indexOf("%") > 0) {
		v = total*v/100;
	}

	if(v < 0) {
		v = total + v;
	}

	return v;
}

