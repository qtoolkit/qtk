import Events = require("../events");
import {ToastInfo} from "./toast-info";
import {MessageBox} from "../controls/message-box";

export class ToastDialog {
	public static show(e:Events.InteractionRequestEvent) {
		var info = <ToastInfo>e.payload;

		MessageBox.showToast(info.text, info.duration || 1000, info.w);
	}
}
