
import {Group} from "./group";
import {Dialog} from "./dialog";
import {Label} from "./label";
import {Edit} from "./edit";
import {Image} from "./image";
import {Button} from "./button";
import TWEEN = require("tween.js");
import Events = require("../events");
import {Graphics} from "../graphics";
import {ListView} from "./list-view";
import {ProgressBar} from "./progress-bar";
import {Application} from "../application";
import {IApplication} from "../iapplication";
import {Widget, WidgetState} from "./widget";
import {WidgetFactory} from "./widget-factory";
import {Direction, Orientation} from "../consts";
import {WidgetRecyclableCreator} from "./widget-recyclable-creator";
import {ImageTile, ImageDrawType} from "../image-tile";
import {ListItem, ListItemCheckable} from "./list-item";
import {DockLayouter, DockLayouterParam} from "../layouters/dock-layouter";
import {LinearLayouter, LinearLayouterParam} from "../layouters/linear-layouter";
import {GridLayouter, GridLayouterParam} from "../layouters/grid-layouter";
import {SimpleLayouter, SimpleLayouterParam} from "../layouters/simple-layouter";

export class TitleOptions {
	public h : number;
	public text : string;
	public draggable : boolean;
	public iconStyleType : string;
	public hasCloseButton : boolean;

	constructor(text:string, iconStyleType:string, hasCloseButton:boolean) {
		this.h = 0;
		this.text = text;
		this.draggable = true;
		this.iconStyleType = iconStyleType;
		this.hasCloseButton = hasCloseButton;
	}
};

export class ButtonOption {
	public text : string;
	public styleType : string;
	public onClick : Function;
}

export class ButtonsOptions {
	public h : number;
	public buttons : Array<ButtonOption>; 

	public get buttonCount() : number {
		return this.buttons.length;
	}

	public constructor() {
		this.buttons = [];
	}
};

export class MessageBox extends Dialog {
	protected _title : Group;		
	protected _content : Group;		
	protected _buttons : Group;	
	protected _contentPadding = 10;

	public get title() : Group {
		return this._title;
	}

	public get content() : Group {
		return this._content;
	}

	public get buttons() : Group {
		return this._buttons;
	}

	constructor(type?:string) {
		super(type||MessageBox.TYPE);
	}

	protected initTitle(titleOptions:TitleOptions) {
		var w = this.w;
		var win = this;
		if(titleOptions) {
			var title = Group.create({styleType:"dialog.title-bg"});
			var titleH = titleOptions.h || MessageBox.TITLE_H;
			title.layoutParam = DockLayouterParam.create({position:Direction.TOP, size:titleH});
			title.childrenLayouter = LinearLayouter.createH();
			
			this.addChild(title);

			if(titleOptions.draggable) {
				title.useBehavior("movable", {moveParent:true});
			}

			if(titleOptions.iconStyleType) {
				var icon = Button.create({name:"icon", styleType:titleOptions.iconStyleType});
				icon.layoutParam = LinearLayouterParam.create({position:1, h:"100%", w:title.h});
				title.addChild(icon);
			}

			if(titleOptions.text) {
				var label = Label.create({name:"text", text:titleOptions.text, styleType:"dialog.title-text"});
				label.layoutParam = LinearLayouterParam.create({position:2, h:"100%", w:w-titleH*2});
				title.addChild(label);
			}

			if(titleOptions.hasCloseButton) {
				var button = Button.create({name:"close", styleType:"messagebox.button.close"});
				button.layoutParam = LinearLayouterParam.create({position:-1, h:"100%", w:titleH});
				title.addChild(button);
				button.on(Events.CLICK, function(evt) {
					win.animateClose();
				});
			}

			this._title = title;
		}
	}

	protected initButtons(buttonsOptions:ButtonsOptions) {
		var w = this.w;
		var win = this;
		
		if(buttonsOptions && buttonsOptions.buttons) {
			var buttons = Group.create();
			var n = buttonsOptions.buttons.length;
			var buttonsH = buttonsOptions.h || MessageBox.BUTTONS_H;

			var margin = n <2 ? w/(4*n) : w/(8*n);
			buttons.layoutParam = DockLayouterParam.create({position:Direction.BOTTOM, size:buttonsH});
			buttons.childrenLayouter = GridLayouter.create({
				topMargin:5,
				bottomMargin:5,
				leftMargin : margin,
				rightMargin: margin,
				rows:1, 
				cols:n
			});
			
			this.addChild(buttons);

			buttonsOptions.buttons.forEach((iter:ButtonOption) => {
				var b = Button.create({text:iter.text, styleType:iter.styleType});
				b.on(Events.CLICK, evt => {
					if(iter.onClick) { 
					   iter.onClick();
					}
					win.animateClose();
				});

				buttons.addChild(b);	
			});

			this._buttons = buttons;
		}

		return this;
	}
		
	protected initContent(data?:string) {
		var content = Group.create();
		content.layoutParam = DockLayouterParam.create({position:Direction.BOTTOM, size:"100%"});
		this.addChild(content);
		
		if(data) {
			content.childrenLayouter = SimpleLayouter.create();
			var label = Label.create({text:data, multiLineMode:true, padding:this._contentPadding});
			label.layoutParam = SimpleLayouterParam.create({w:"100%", h:"100%"});
			content.addChild(label);
		}

		this._content = content;
	}

	protected createChildren(titleOptions:TitleOptions, buttonsOptions:ButtonsOptions, content?:string) {
		var vp = this.app.getViewPort();
		var style = this._themeManager.get("messagebox.content", this.stateToString(WidgetState.NORMAL));
		
		if(this.w <= 10) {
			var textW = Graphics.measureText(content, style.font);
			var padding = this.leftPadding + this.rightPadding + this._contentPadding * 2;
			var w = Math.min(vp.width, Math.max(60, textW + padding));
			if(buttonsOptions) {
				w = Math.max(w, buttonsOptions.buttonCount * 128)
			}
			this.w = w;
		}

		if(this.h < 10) {
			var lines = Graphics.layoutText(content, this.w, style.font);
			var n = lines ? lines.length : 0;
			var padding = this.topPadding + this.bottomPadding + this._contentPadding * 2;
			var h = n * style.fontSize * 1.5 + padding;

			if(titleOptions) {
				h += titleOptions.h || MessageBox.TITLE_H;
			}
			if(buttonsOptions) {
				h += buttonsOptions.h || MessageBox.BUTTONS_H;
			}
			this.h = h;
		}
			
		this.initTitle(titleOptions);
		this.initButtons(buttonsOptions);
		this.initContent(content);
	}

	protected onReset() {
		super.onReset();
		this.padding = 1;
		this.childrenLayouter = DockLayouter.create();
	}

	public dispose() {
		super.dispose();
		this._title = null;
		this._content = null;
		this._buttons = null;
	}

	public open() : Widget {
		super.open();
		this.grab();
		this.moveToCenter();

		return this;
	}

	public animateClose() {
		this.opacityTo(0, 300).onComplete(evt => {
			this.close();
		});
	}

	public static showMessage(msg:string, onClose:Function, w?:number) {
		var app = Application.get();
		var vp = app.getViewPort();
		var rw = Math.min(vp.w, w || 0);
		var messageBox = MessageBox.create({app:app, w:rw, h:0});

		var buttonsOption = new ButtonsOptions();
		buttonsOption.buttons.push({styleType: "button.ok", text:"Close", onClick : null});

		var titleOptions = new TitleOptions("Infomation", "messagebox.info.icon", true);
		messageBox.createChildren(titleOptions, buttonsOption, msg);
		messageBox.on(Events.CLOSE, onClose);

		messageBox.open();
	}
	
	public static showConfirm(msg:string, onYes:Function, onNo:Function, w?:number) {
		var app = Application.get();
		var vp = app.getViewPort();
		var rw = Math.min(vp.w, w || 0);
		var messageBox = MessageBox.create({app:app, w:rw, h:0});

		var buttonsOption = new ButtonsOptions();
		buttonsOption.buttons.push({styleType: "button.cancel", text:"Cancel", onClick : onNo});
		buttonsOption.buttons.push({styleType: "button.ok", text:"Yes", onClick : onYes});

		var titleOptions = new TitleOptions("Question", "messagebox.question.icon", false);

		messageBox.createChildren(titleOptions, buttonsOption, msg);

		messageBox.open();
	}
	
	public static showToast(msg:string, duration:number, w?:number) {
		var app = Application.get();
		var vp = app.getViewPort();
		var rw = Math.min(vp.w, w || 0);
		var messageBox = MessageBox.create({app:app, styleType:"messagebox.toast", w:rw, h:0});

		messageBox.createChildren(null, null, msg);
		messageBox.on(Events.POINTER_UP, function(evt) {
			if(messageBox) {
				this.animateClose();
				messageBox = null;
			}
		});
		
		setTimeout(evt => {
			if(messageBox) {
				messageBox.animateClose();
				messageBox = null;
			}
		}, duration || 3000);

		messageBox.open();
	}
	
	public static showProgress(msg:string, taskStart:Function, onDone:Function, w?:number) {
		var app = Application.get();
		var vp = app.getViewPort();
		var rw = Math.min(vp.w, w || 0) || 200;
		var rh = MessageBox.TITLE_H + MessageBox.BUTTONS_H + 50;

		var messageBox = MessageBox.create({app:app, w:rw, h:rh});

		var buttonsOption = new ButtonsOptions();
		buttonsOption.buttons.push({styleType: "button.ok", text:"Close", onClick : null});

		var titleOptions = new TitleOptions(msg, "messagebox.info.icon", false);
		messageBox.createChildren(titleOptions, buttonsOption, null);
		
		var group = messageBox.content;
		var progressBar = ProgressBar.create();
		group.padding = 10;
		group.topPadding = 20;
		group.childrenLayouter = SimpleLayouter.create();
		progressBar.layoutParam = SimpleLayouterParam.create({x:"center", y:"middle", w:"100%", h:"20px"});

		var closeButton = messageBox.buttons.children[0];
		closeButton.enable = false;
		function onProgress(value:number) {
			progressBar.value = value;
			progressBar.requestRedraw();
			if(value>= 1) {
				onDone();
				closeButton.enable = true;
			}
		}

		group.addChild(progressBar);
		messageBox.open();

		taskStart(onProgress);
	}
	
	public static showInput(title:string, inputTips:string, value:string, 
						isValueValid:Function, onDone:Function, inputType?:string, w?:number) {
		var app = Application.get();
		var vp = app.getViewPort();
		var rw = Math.min(vp.w, w || 0) || 200;
		var rh = MessageBox.TITLE_H + MessageBox.BUTTONS_H + 50;

		var messageBox = MessageBox.create({app:app, w:rw, h:rh});

		var buttonsOption = new ButtonsOptions();
		buttonsOption.buttons.push({styleType: "button.cancel", text:"Cancel", onClick : null});
		buttonsOption.buttons.push({styleType: "button.ok", text:"OK", onClick : onOK});

		var titleOptions = new TitleOptions(title, "messagebox.info.icon", false);
		messageBox.createChildren(titleOptions, buttonsOption, null);
		
		var group = messageBox.content;
		var edit = Edit.create({inputTips:inputTips, value:value, inputType:inputType||"text"});
		group.padding = 10;
		group.topPadding = 15;
		group.childrenLayouter = SimpleLayouter.create();
		edit.layoutParam = SimpleLayouterParam.create({x:"center", y:"middle", w:"100%", h:"25px"});

		function onOK() {
			onDone(edit.text);
		}

		edit.on(Events.CHANGING, function(evt) {
			okButton.enable = isValueValid(evt.value);
		});

		var okButton = messageBox.buttons.children[1];
		okButton.enable = isValueValid(value);

		group.addChild(edit);
		messageBox.open();
	}
	
	public static showChoice(title:string, data:Array<any>, multiple:boolean, 
							 onDone:Function, w?:number, h?:number) {
		var itemH = 30;
		var app = Application.get();
		var vp = app.getViewPort();
		var contentH = Math.min(8, data.length) * itemH;
		var rw = Math.min(vp.w, w || 0) || 300;
		var rh = Math.min(vp.h, h || 0) || MessageBox.TITLE_H + MessageBox.BUTTONS_H + contentH + 30;

		var messageBox = MessageBox.create({app:app, w:rw, h:rh});

		var buttonsOption = new ButtonsOptions();
		buttonsOption.buttons.push({styleType: "button.cancel", text:"Cancel", onClick : null});
		buttonsOption.buttons.push({styleType: "button.ok", text:"OK", onClick : onOK});

		var titleOptions = new TitleOptions(title, "messagebox.info.icon", false);
		messageBox.createChildren(titleOptions, buttonsOption, null);
		
		var group = messageBox.content;
		var listView = ListView.create({itemH:itemH, dragToScroll:true});
		group.padding = 5;
		group.topPadding = 5;
		group.childrenLayouter = SimpleLayouter.create();
		listView.layoutParam = SimpleLayouterParam.create({x:"center", y:"middle", w:"100%", h:"100%"});

		data.forEach(iter => {
			var item = ListItemCheckable.create({
				multiCheckable:multiple, 
				iconURL:iter.iconURL,
				text:iter.text,
				userData:iter,
				leftPadding:2
			});
			listView.addChild(item, true);	
		});
		listView.relayoutChildren();

		function onOK() {
			var ret = [];
			listView.children.forEach((iter:ListItemCheckable)=> {
				if(iter.value) {
					ret.push(iter.userData);
				}
			});
			onDone(ret);
		}

		group.addChild(listView);
		messageBox.open();
	}

	public static TITLE_H = 25;
	public static BUTTONS_H = 40;
	public static MSG_FONT_SIZE = 12;
	public static TYPE = "messagebox";
	private static rBin = WidgetRecyclableCreator.create(MessageBox);
	public static create(options?:any) : MessageBox {
		return <MessageBox>MessageBox.rBin.create(options);
	}
};

WidgetFactory.register(MessageBox.TYPE, MessageBox.create);
