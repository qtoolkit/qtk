import Events = require("../base/events");
import {InputInfo} from "./input-info";
import {MessageBox} from "../controls/message-box";

export class InputDialog {
	public static show(e:Events.InteractionRequestEvent) {
		var info = <InputInfo>e.payload;

		MessageBox.showInput(info.title, info.inputTips, info.value,  info.isValueValid, 
			function(value) {
				info.value = value;
				e.returnResult();
		}, info.inputType, info.w);
	}
}
