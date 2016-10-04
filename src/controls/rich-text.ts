
import {Style} from "../style";
import {Widget} from "./widget";
import Events = require("../events");
import {MatrixStack} from "../matrix-stack";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";
import {ScrollView, ScrollerBarVisibility} from "./scroll-view";

var carota = require('carota');
var rect = carota.rect;
var createDoc = carota.document;

/**
 * 富文本显示控件。
 */
export class RichText extends ScrollView {
	protected _doc : any;
	protected _data : any;
    protected _verticalAlignment = 'top';

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
    
    protected getVerticalOffset() {
    	var h = this.h;
    	var doc = this._doc;
        var docHeight = doc.frame.bounds().h;
        if (docHeight < h) { 
            switch (this._verticalAlignment) {
                case 'middle':
                    return (h - docHeight) / 2;
                case 'bottom':
                    return h - docHeight;
            }
        }
        return 0;
    }

	protected doDrawChildren(ctx:any) : Widget{
		var doc = this._doc;
		var x = this.leftPadding;
		var y = this.topPadding;
		var w = this.w - this.leftPadding - this.rightPadding;
		var h = this.h - this.topPadding - this.bottomPadding;
       
       	if(this.isVScrollBarVisible()) {
			w -= this.scrollBarStyle.size;
		}

        if (doc.width() !== w) {
            doc.width(w);
        }

		ctx.save();
        ctx.translate(x, y);
        doc.draw(ctx, rect(0, this._oy, w, h));
        doc.drawSelection(ctx, this.hasFocus());
        ctx.restore();
    	
		return this;
	};

	protected adjustSize() {
		var doc = this._doc;
		var w = this.w - this.leftPadding - this.rightPadding;
		var h = this.h - this.topPadding - this.bottomPadding;

        doc.width(w);
        var r = doc.frame.bounds();
        if(r.h > h) {
        	w -= this.scrollBarStyle.size;
        	doc.width(w);
		}
        
        var r = doc.frame.bounds();
		this.contentWidth = r.w;
		this.contentH = r.h;
	}

	protected onInit() {
		this.dragToScroll = true;
		this.scrollerOptions.scrollingX = false;
		
		super.onInit();
		
		var doc = createDoc();
		doc.load(this._data);
		doc.toggleCaret();
        
        this._doc = doc;
        this.adjustSize();
	}

	public dispose(){
		this._doc = null;
		super.dispose();
	}

	public static TYPE = "rich-text";
	private static reBin = new RecyclableCreator<RichText>(function() {return new RichText()});
	public static create(options?:any) : RichText {
		return <RichText>RichText.reBin.create().reset(RichText.TYPE, options);
	}
};

WidgetFactory.register(RichText.TYPE, RichText.create);

