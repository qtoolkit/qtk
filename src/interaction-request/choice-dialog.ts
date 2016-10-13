import Events = require("../events");
import {ChoiceInfo} from "./choice-info";
import {MessageBox} from "../controls/message-box";

export class ChoiceDialog {
	public static show(e:Events.InteractionRequestEvent) {
		var info = <ChoiceInfo>e.payload;

		MessageBox.showChoice(info.title, info.options, info.multiple, 
			function(value) {
				info.value = value;
				e.returnResult();
		}, info.w, info.h);
	}
}
