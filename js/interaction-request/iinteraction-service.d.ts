import Events = require("../events");
export declare type InteractionRequestHandler = (evt: Events.InteractionRequestEvent) => void;
export interface IInteractionService {
    dispatchRequest(detail: any): any;
    onRequest(callback: InteractionRequestHandler): any;
    offRequest(callback: InteractionRequestHandler): any;
}
