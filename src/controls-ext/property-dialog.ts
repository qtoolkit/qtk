
import {Application} from "../application";
import {PropertyPage} from "./property-page";
import {ViewModel}  from "../mvvm/view-model";
import {PagePropsDesc, PropsDesc} from "./props-desc"
import {WidgetRecyclableCreator} from "../controls/widget-recyclable-creator";
import {Widget, WidgetState} from "../controls/widget";
import {WidgetFactory} from "../controls/widget-factory";
import {MessageBox, TitleOptions, ButtonsOptions} from "../controls/message-box"
import {SimpleLayouter, SimpleLayouterParam} from "../layouters/simple-layouter";

/**
 * 属性对话框。
 */
export class PropertyDialog extends MessageBox {
	protected createChildren(titleOptions:TitleOptions, buttonsOptions:ButtonsOptions, content?:string) {
		super.createChildren(titleOptions, buttonsOptions, content);
	}

	public static show(pagePropsDesc:PagePropsDesc, data:any, onYes:Function, onNo?:Function, w?:number) {
		var app = Application.get();
		var vp = app.getViewPort();
		var rw = Math.min(vp.w, w || 300);
		var dataCopy = onNo ? JSON.parse(JSON.stringify(data)) : data;

		var page = PropertyPage.create({layoutParam:SimpleLayouterParam.createWithOptions({w:"100%", h:"100%"})});
		page.initWithPropsDesc(pagePropsDesc.propsDesc);
		
		var h = page.h + MessageBox.TITLE_H + MessageBox.BUTTONS_H + 20;
		var messageBox = PropertyDialog.create({app:app, styleType:MessageBox.TYPE, w:rw, h:h});

		var titleOptions = new TitleOptions(pagePropsDesc.title, "messagebox.info.icon", false);
		var buttonsOption = new ButtonsOptions();

		if(onNo) {
			buttonsOption.buttons.push({styleType: "button.cancel", text:"Cancel", onClick : function() {
					if(onNo) {
						onNo(data);
					}
			}});
		}

		buttonsOption.buttons.push({styleType: "button.ok", text:onNo ? "Yes" : "OK", onClick : function() {
			if(onYes) {
				onYes(dataCopy);
			}
		}});

		messageBox.createChildren(titleOptions, buttonsOption, null);
		
		var group = messageBox.content.set({padding:5, childrenLayouter:SimpleLayouter.createWithOptions()});
		group.addChild(page);

		var vm = ViewModel.create(dataCopy);
		page.bindData(vm);

		messageBox.open();
	}
	
	public static TYPE = "property-dialog";
	private static rb = WidgetRecyclableCreator.create(PropertyDialog);
	public static create(options?:any) : PropertyDialog {
		return <PropertyDialog>PropertyDialog.rb.create(options);
	}
}

WidgetFactory.register(PropertyDialog.TYPE, PropertyDialog.create);
