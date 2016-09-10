
import {Emitter} from "../emitter";

export class HtmlElement extends Emitter {
	public element : any;
	protected _z : number = 10;

	constructor() {
		super();
	}

	public set z(value:number) {
		this._z = value;
	}

	public get z() {
		return this._z;
	}

	public set textColor(color:string) {
		this.element.style.color = color;
	}
	
	public set backgroundColor(color:string) {
		this.element.style.background = color;
	}

	public set fontSize(fontSize:number) {
		this.element.style.fontSize = fontSize + "px";
	}

	public show() : HtmlElement {
		this.element.style.visibility = 'visible';
		this.element.style.zIndex = this.z;
		this.element.style.opacity = 1;
		
		return this;
	}

	public hide() : HtmlElement {
		this.element.style.opacity = 0;
		this.element.style.zIndex = 0;
		this.element.style.visibility = 'hidden';
		
		return this;
	}

	public move(x:number, y:number) : HtmlElement {
		this.element.style.position = "absolute";
		this.element.style.left = x + "px";
		this.element.style.top = y + "px";
		
		return this;
	}

	public resize(w:number, h:number) : HtmlElement  {
		this.element.style.width = w + "px";
		this.element.style.height = (h-4) + "px";
		
		return this;
	}

	public create(tag?:string) : HtmlElement {
		this.element = document.createElement(tag||"div");
		document.body.appendChild(this.element);
		
		return this;
	}
};

