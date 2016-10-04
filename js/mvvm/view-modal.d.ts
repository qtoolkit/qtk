import { IViewModal } from "./iview-modal";
import { ViewModalDefault } from "./view-modal-default";
export declare class ViewModal extends ViewModalDefault implements IViewModal {
    static create(data: any): IViewModal;
}
