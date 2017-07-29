
import {Emitter} from "../base/emitter";
import Events = require("../base/events");
import {ICommand} from "./icommand";
import {IValueConverter} from "./ivalue-converter";
import {IValidationRule} from "./ivalidation-rule";
import {IViewModel, BindingMode, ICollectionViewModel} from "./iview-model";
import {ViewModelDefault} from "./view-model-default"

/**
 * IViewModel的基本实现。如果不能满足要求，可以重载部分函数。
 */
export class ViewModel extends ViewModelDefault implements IViewModel {
	public static create(data:any) : IViewModel {
		var viewModel = new ViewModel(data);

		return viewModel;
	}
};

