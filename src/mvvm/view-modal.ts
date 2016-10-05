
import {Emitter} from "../emitter";
import Events = require("../events");
import {ICommand} from "./icommand";
import {IValueConverter} from "./ivalue-converter";
import {IValidationRule} from "./ivalidation-rule";
import {IViewModal, BindingMode, ICollectionViewModal} from "./iview-modal";
import {ViewModalDefault} from "./view-modal-default"

/**
 * IViewModal的基本实现。如果不能满足要求，可以重载部分函数。
 */
export class ViewModal extends ViewModalDefault implements IViewModal {
	public static create(data:any) : IViewModal {
		var viewModal = new ViewModal(data);

		return viewModal;
	}
};

