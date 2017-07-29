
import {Emitter} from "../base/emitter";

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

	public get borderWidth() : number {
		var borderWidth = 0;
		if(window.getComputedStyle) {
			borderWidth = parseInt(window.getComputedStyle(this.element).borderWidth);
		}

		return borderWidth;
	}

	public resize(w:number, h:number) : HtmlElement  {
		var borderWidth = this.borderWidth * 2;	
		var ww = w - borderWidth;
		var hh = h - borderWidth;
		this.element.style.width = ww + "px";
		this.element.style.height = hh + "px";
		
		return this;
	}

	public destroy() {
		if(this.element) {
			document.body.removeChild(this.element);
			this.element = null;
		}
	}

	public static showColocPicker(value, onChange) {
		var input:any = document.getElementById("color-picker"); 
		
		if(!input) {
			input = document.createElement("input");
			input.id = "color-picker"
			input.type = "color";
			input.style.position = "absolute";;
			input.style.left = "-100px";
			input.style.top = "-100px";
			document.body.appendChild(input);
		}

		input.value = value;
		input.oninput = function() {
			onChange(this.value);
		}
		input.click();
	}

	public static showFilePicker(onChoose:Function, multiple?:boolean) {
		var input:any = document.createElement("input");
		input.type = "file";
        input.multiple = multiple || false;
		
		input.onchange = function(e) {
            if(input.files && this.files.length) {
                onChoose(input.files);
            }
        }

        input.click();
	}

	public create(tag:string) : HtmlElement {
		this.element = document.createElement(tag);
		document.body.appendChild(this.element);
		this._tag = tag;

		return this;
	}
};

