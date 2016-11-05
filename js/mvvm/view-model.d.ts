import { IViewModel } from "./iview-model";
import { ViewModelDefault } from "./view-model-default";
/**
 * IViewModel的基本实现。如果不能满足要求，可以重载部分函数。
 */
export declare class ViewModel extends ViewModelDefault implements IViewModel {
    static create(data: any): IViewModel;
}
