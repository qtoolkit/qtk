
import {Emitter} from "../emitter";

export class HtmlElement extends Emitter {
	public element : any;
	protected _tag : string;

	constructor() {
		super();
	}
	
	public get x() : number {
		return parseInt(this.element.style.left);
	}
	
	public get y() : number {
		return parseInt(this.element.style.top);
	}

	public get z() : number {
		return parseInt(this.element.style.zIndex);
	}

	public set z(value:number) {
		this.element.style.zIndex = value;
	}

	public get tag() : string {
		return this._tag;
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
	
	public set fontFamily(fontFamily:string) {
		this.element.style.fontFamily = fontFamily;
	}

	public show() : HtmlElement {
		this.element.style.visibility = 'visible';
		this.element.style.opacity = 1;
		this.element.style.display = 'block';
		
		return this;
	}

	public hide() : HtmlElement {
		this.element.style.opacity = 0;
		this.element.style.zIndex = -1;
		this.element.style.visibility = 'hidden';
		this.element.style.display = 'none';
		
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

	public destroy() {
		if(this.element) {
			document.body.removeChild(this.element);
			this.element = null;
		}
	}

	public create(tag:string) : HtmlElement {
		this.element = document.createElement(tag);
		document.body.appendChild(this.element);
		this._tag = tag;

		return this;
	}
};

