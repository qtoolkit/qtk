
import {Style} from "../style";
import {Widget} from "./widget";
import Events = require("../events");
import {MatrixStack} from "../matrix-stack";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";
var carota = require('carota');
var rect = carota.rect;
var createDoc = carota.document;

export class RichText extends Widget {
	protected _doc : any;
	protected _data : any;

	protected hasFocus() : boolean {
		return false;
	}

	public set data(data:any) {
		this._data = data;
		if(this._doc) {
			this._doc.load(data);
		}
	}

	constructor(type?:string) {
		super(type||RichText.TYPE);
	}

	protected drawText(ctx:any, style:Style) : Widget {
		var w = this.w;
		var h = this.h;
		var doc = this._doc;
        var availableWidth = w;
        if (doc.width() !== availableWidth) {
            doc.width(availableWidth);
        }

        var logicalHeight = h;
        var docHeight = doc.frame.bounds().h;
        var logicalWidth = Math.max(doc.frame.actualWidth(), w);
        
		ctx.save();
        ctx.clearRect(0, 0, logicalWidth, logicalHeight);
        doc.draw(ctx, rect(0, 0, logicalWidth, logicalHeight));
        doc.drawSelection(ctx, this.hasFocus());
        ctx.restore();
    	
		return this;
	};

	protected onInit() {
		super.onInit();
		this._doc = createDoc();
		this._doc.load(this._data);
		this._doc.toggleCaret();
	}

	public dispose(){
		this._doc = null;
		super.dispose();
	}

	public static TYPE = "rich-text";
	private static recycleBin = new RecyclableCreator<RichText>(function() {return new RichText()});
	public static create(options?:any) : RichText {
		return <RichText>RichText.recycleBin.create().reset(RichText.TYPE).set(options);
	}
};

WidgetFactory.register(RichText.TYPE, RichText.create);

