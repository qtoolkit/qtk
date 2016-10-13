import { Emitter } from "../emitter";
import Events = require("../events");
import { IInteractionService, InteractionRequestHandler } from "./iinteraction-service";
export declare class InteractionService implements IInteractionService {
    protected _emitter: Emitter;
    onRequest(callback: InteractionRequestHandler): void;
    offRequest(callback: InteractionRequestHandler): void;
    dispatchRequest(detail: any): void;
    defaultHandler(e: Events.InteractionRequestEvent): void;
    constructor();
    protected static instance: InteractionService;
    static getInstance(): InteractionService;
    static init(): InteractionService;
    static onRequest(callback: InteractionRequestHandler): void;
    static offRequest(callback: InteractionRequestHandler): void;
}
