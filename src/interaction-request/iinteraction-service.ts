
import Events = require("../base/events");
export type InteractionRequestHandler = (evt:Events.InteractionRequestEvent) => void;

export interface IInteractionService {
	dispatchRequest(detail:any);
	onRequest(callback:InteractionRequestHandler);
	offRequest(callback:InteractionRequestHandler);
}
