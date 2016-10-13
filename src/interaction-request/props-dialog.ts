import Events = require("../events");
import {PropsInfo} from "./props-info";
import {PagePropsDesc} from "../controls-ext/props-desc";
import {PropertyDialog} from "../controls-ext/property-dialog";

export class PropsDialog {
	public static show(e:Events.InteractionRequestEvent) {
		var info = <PropsInfo>e.payload;
		var onCancel = info.mutable ? function(ret) {} : null;

		PropertyDialog.show(info.pagePropsDesc, info.data, function(ret) {
			info.data = ret;
			e.returnResult();
		}, onCancel, info.w);
	}
}
