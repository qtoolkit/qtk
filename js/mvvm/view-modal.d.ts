import { IViewModal } from "./iview-modal";
import { ViewModalDefault } from "./view-modal-default";
/**
 * IViewModal的基本实现。如果不能满足要求，可以重载部分函数。
 */
export declare class ViewModal extends ViewModalDefault implements IViewModal {
    static create(data: any): IViewModal;
}
