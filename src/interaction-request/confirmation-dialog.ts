import Events = require("../events");
import {ConfirmationInfo} from "./confirmation-info";
import {MessageBox} from "../controls/message-box";

export class ConfirmationDialog {
	public static show(e:Events.InteractionRequestEvent) {
		var info = <ConfirmationInfo>e.payload;

		MessageBox.showConfirm(info.content, function(ret) {
			info.confirmed = true;
			e.returnResult();
		}, function(ret) {
			info.confirmed = false;
			e.returnResult();
		}, info.w);
	}
}
