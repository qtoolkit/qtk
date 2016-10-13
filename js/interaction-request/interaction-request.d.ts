import { ToastInfo } from "./toast-info";
import { InputInfo } from "./input-info";
import { PropsInfo } from "./props-info";
import { ChoiceInfo } from "./choice-info";
import { ConfirmationInfo } from "./confirmation-info";
import { NotificationInfo } from "./notification-info";
import { IInteractionService } from "./iinteraction-service";
export declare class InteractionRequest {
    protected service: IInteractionService;
    request(name: string, callback?: Function, payload?: any): void;
    toast(info: ToastInfo): void;
    notify(info: NotificationInfo): void;
    confirm(info: ConfirmationInfo, callback?: Function): void;
    input(info: InputInfo, callback?: Function): void;
    choice(info: ChoiceInfo, callback?: Function): void;
    props(info: PropsInfo, callback?: Function): void;
    constructor(service: IInteractionService);
    protected static instance: InteractionRequest;
    static init(service: IInteractionService): void;
    static toast(info: ToastInfo): void;
    static notify(info: NotificationInfo): void;
    static confirm(info: ConfirmationInfo, callback?: Function): void;
    static input(info: InputInfo, callback?: Function): void;
    static choice(info: ChoiceInfo, callback?: Function): void;
    static props(info: PropsInfo, callback?: Function): void;
    static request(name: string, callback?: Function, payload?: any): void;
}
