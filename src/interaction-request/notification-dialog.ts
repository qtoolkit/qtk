import Events = require("../base/events");
import {NotificationInfo} from "./notification-info";
import {MessageBox} from "../controls/message-box";

export class NotificationDialog {
	public static show(e:Events.InteractionRequestEvent) {
		var info = <NotificationInfo>e.payload;

		MessageBox.showMessage(info.content, function(ret) {
			e.returnResult();
		}, info.w);
	}
}
